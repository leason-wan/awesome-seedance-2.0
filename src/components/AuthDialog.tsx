"use client";

import React, { useEffect, useMemo, useState } from "react";

import {
  createGoogleOauthState,
  getApiErrorMessage,
  loginWithEmail,
  loginWithGoogle,
  saveGoogleOauthRedirectContext,
  savePostAuthRedirectTarget,
  sendLoginCode,
  type AuthSession,
  type LoginCodeResponse,
} from "../lib/auth";
import {
  ensureGoogleIdentityScript,
  resolveGoogleRedirectUri,
} from "../lib/googleAuth";

type SupportedLanguage = "en" | "zh";

type AuthDialogProps = {
  lang: SupportedLanguage;
  open: boolean;
  onClose: () => void;
  onAuthenticated: (session: AuthSession) => void;
};

const dialogCopy = {
  en: {
    title: "Join Lytai",
    subtitle: "Continue with Google or sign in with your email.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    codeLabel: "Verification code",
    codePlaceholder: "Enter the 4-10 digit code",
    emailContinue: "Continue",
    editEmail: "Use a different email",
    sendCode: "Send code",
    sendingCode: "Sending...",
    resendAfter: "Retry in {seconds}s",
    codeSent: "Code sent to {destination}. Expires in {minutes} min.",
    submit: "Verify and sign in",
    submitting: "Signing in...",
    divider: "or",
    google: "Continue with Google",
    googleLoading: "Opening Google...",
    googleRedirecting: "Redirecting to Google...",
    missingGoogleClientId: "Set PUBLIC_GOOGLE_CLIENT_ID to enable Google login.",
    invalidEmail: "Enter a valid email address.",
    invalidCode: "Enter the verification code.",
    requestCodeFailed: "Unable to send the verification code right now.",
    emailLoginFailed: "Email sign-in failed. Please try again.",
    googleLoginFailed: "Google sign-in failed. Please try again.",
    googleUnavailable: "Google login is not configured on this deployment.",
    googleCancelled: "Google login was cancelled. Please try again.",
    googlePopupFailed: "Google popup could not be opened. Allow popups and try again.",
    googleScriptFailed: "Google login SDK failed to load.",
    close: "Close sign-in dialog",
  },
  zh: {
    title: "加入 Lytai",
    subtitle: "使用 Google 或邮箱继续登录。",
    emailLabel: "邮箱地址",
    emailPlaceholder: "you@example.com",
    codeLabel: "验证码",
    codePlaceholder: "输入 4-10 位验证码",
    emailContinue: "继续",
    editEmail: "更换邮箱",
    sendCode: "发送验证码",
    sendingCode: "发送中...",
    resendAfter: "{seconds}s 后重试",
    codeSent: "验证码已发送到 {destination}，{minutes} 分钟内有效。",
    submit: "验证并登录",
    submitting: "登录中...",
    divider: "或",
    google: "使用 Google 登录",
    googleLoading: "正在打开 Google...",
    googleRedirecting: "正在跳转到 Google...",
    missingGoogleClientId: "请配置 PUBLIC_GOOGLE_CLIENT_ID 后再启用 Google 登录。",
    invalidEmail: "请输入有效的邮箱地址。",
    invalidCode: "请输入验证码。",
    requestCodeFailed: "暂时无法发送验证码，请稍后重试。",
    emailLoginFailed: "邮箱登录失败，请稍后重试。",
    googleLoginFailed: "Google 登录失败，请稍后重试。",
    googleUnavailable: "当前环境未配置 Google 登录。",
    googleCancelled: "Google 登录已取消，请重试。",
    googlePopupFailed: "无法打开 Google 登录弹窗，请检查浏览器弹窗权限。",
    googleScriptFailed: "Google 登录脚本加载失败。",
    close: "关闭登录弹窗",
  },
} as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatCopy(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, String(value)),
    template,
  );
}

const AuthDialog: React.FC<AuthDialogProps> = ({ lang, open, onClose, onAuthenticated }) => {
  const copy = dialogCopy[lang];
  const googleClientId = import.meta.env.PUBLIC_GOOGLE_CLIENT_ID?.trim() ?? "";
  const googleRedirectUri = resolveGoogleRedirectUri(
    import.meta.env.PUBLIC_GOOGLE_REDIRECT_URI?.trim() ?? "",
  );
  const useGoogleRedirectFlow = Boolean(googleRedirectUri);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isStatusError, setIsStatusError] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
  const [codeInfo, setCodeInfo] = useState<LoginCodeResponse | null>(null);
  const [cooldownEndsAt, setCooldownEndsAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!open || !cooldownEndsAt) {
      return;
    }

    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [cooldownEndsAt, open]);

  useEffect(() => {
    if (!open) {
      setStatusMessage("");
      setIsStatusError(false);
      return;
    }

    setNow(Date.now());
  }, [open]);

  const cooldownSecondsLeft = useMemo(() => {
    if (!cooldownEndsAt) {
      return 0;
    }

    return Math.max(0, Math.ceil((cooldownEndsAt - now) / 1000));
  }, [cooldownEndsAt, now]);
  const hasRequestedCode = codeInfo !== null;

  const setErrorMessage = (message: string) => {
    setStatusMessage(message);
    setIsStatusError(true);
  };

  const setSuccessMessage = (message: string) => {
    setStatusMessage(message);
    setIsStatusError(false);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!hasRequestedCode) {
      return;
    }

    setCode("");
    setCodeInfo(null);
    setCooldownEndsAt(null);
    setStatusMessage("");
    setIsStatusError(false);
  };

  const handleRequestCode = async () => {
    const trimmedEmail = email.trim();

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage(copy.invalidEmail);
      return;
    }

    setIsSendingCode(true);
    setStatusMessage("");

    try {
      const response = await sendLoginCode(trimmedEmail);
      setCodeInfo(response);
      setCooldownEndsAt(Date.now() + response.cooldown_seconds * 1000);
      setSuccessMessage(response.message);
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error, copy.requestCodeFailed));
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!hasRequestedCode) {
      await handleRequestCode();
      return;
    }

    const trimmedEmail = email.trim();
    const trimmedCode = code.trim();

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage(copy.invalidEmail);
      return;
    }

    if (!trimmedCode) {
      setErrorMessage(copy.invalidCode);
      return;
    }

    setIsSubmittingEmail(true);
    setStatusMessage("");

    try {
      const session = await loginWithEmail(trimmedEmail, trimmedCode);
      onAuthenticated(session);
    } catch (error) {
      setErrorMessage(getApiErrorMessage(error, copy.emailLoginFailed));
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const handleGoogleSubmit = async () => {
    if (!googleClientId) {
      setErrorMessage(copy.googleUnavailable);
      return;
    }

    setIsSubmittingGoogle(true);
    setStatusMessage("");

    try {
      await ensureGoogleIdentityScript();
    } catch (error) {
      setIsSubmittingGoogle(false);
      setErrorMessage(getApiErrorMessage(error, copy.googleScriptFailed));
      return;
    }

    const googleOauth = window.google?.accounts?.oauth2;

    if (!googleOauth) {
      setIsSubmittingGoogle(false);
      setErrorMessage(copy.googleScriptFailed);
      return;
    }

    const googleOauthState = useGoogleRedirectFlow ? createGoogleOauthState() : "";

    const codeClient = useGoogleRedirectFlow
      ? googleOauth.initCodeClient({
          client_id: googleClientId,
          scope: "openid email profile",
          ux_mode: "redirect",
          redirect_uri: googleRedirectUri,
          state: googleOauthState,
        })
      : googleOauth.initCodeClient({
          client_id: googleClientId,
          scope: "openid email profile",
          ux_mode: "popup",
          callback: async (response) => {
            if (response.error) {
              setIsSubmittingGoogle(false);
              setErrorMessage(response.error_description || copy.googleCancelled);
              return;
            }

            if (!response.code) {
              setIsSubmittingGoogle(false);
              setErrorMessage(copy.googleCancelled);
              return;
            }

            try {
              const session = await loginWithGoogle({
                code: response.code,
                redirectUri: googleRedirectUri || undefined,
              });
              onAuthenticated(session);
            } catch (error) {
              setErrorMessage(getApiErrorMessage(error, copy.googleLoginFailed));
            } finally {
              setIsSubmittingGoogle(false);
            }
          },
          error_callback: (error) => {
            setIsSubmittingGoogle(false);
            setErrorMessage(
              error.type === "popup_failed_to_open" ? copy.googlePopupFailed : copy.googleCancelled,
            );
          },
        });

    if (useGoogleRedirectFlow) {
      saveGoogleOauthRedirectContext(googleOauthState, lang);
      savePostAuthRedirectTarget(window.location.href);
    }

    codeClient.requestCode();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-[680px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,#1d1d1d_0%,#111111_42%,#090909_100%)] px-5 py-6 text-white shadow-[0_36px_120px_rgba(0,0,0,0.6)] sm:px-8 sm:py-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="text-xl font-semibold tracking-[-0.04em]">Lytai Studio</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/50 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label={copy.close}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[404px] pb-3 sm:mt-14">
          <div className="text-center">
            <h2 className="text-[34px] font-semibold tracking-[-0.06em] text-white sm:text-[44px]">
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/45">{copy.subtitle}</p>
          </div>

          <div className="mt-9 space-y-4">
            <button
              type="button"
              onClick={handleGoogleSubmit}
              disabled={isSubmittingGoogle || !googleClientId}
              className={`flex h-14 w-full items-center justify-center gap-3 rounded-[18px] border px-5 text-[15px] font-medium transition-all ${
                isSubmittingGoogle || !googleClientId
                  ? "cursor-not-allowed border-white/8 bg-white/5 text-white/30"
                  : "border-white/12 bg-white text-[#202124] hover:bg-[#f3f3f3]"
              }`}
            >
              <GoogleIcon />
              <span>
                {isSubmittingGoogle
                  ? useGoogleRedirectFlow
                    ? copy.googleRedirecting
                    : copy.googleLoading
                  : copy.google}
              </span>
            </button>
          </div>

          <div className="mb-5 mt-6 flex items-center gap-4 text-sm text-white/24">
            <div className="h-px flex-1 bg-white/10" />
            <span>{copy.divider}</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="auth-email" className="sr-only">
                {copy.emailLabel}
              </label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => handleEmailChange(event.target.value)}
                placeholder={copy.emailPlaceholder}
                className="h-14 w-full rounded-[18px] border border-white/12 bg-white/[0.05] px-5 text-[15px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.08]"
              />
            </div>

            {hasRequestedCode ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3 px-1">
                  <label htmlFor="auth-code" className="text-xs font-medium uppercase tracking-[0.22em] text-white/35">
                    {copy.codeLabel}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setCode("");
                      setCodeInfo(null);
                      setCooldownEndsAt(null);
                    }}
                    className="text-xs font-medium text-white/45 transition-colors hover:text-white"
                  >
                    {copy.editEmail}
                  </button>
                </div>
                <input
                  id="auth-code"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder={copy.codePlaceholder}
                  className="h-14 w-full rounded-[18px] border border-white/12 bg-white/[0.05] px-5 text-[15px] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.08]"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleRequestCode}
                    disabled={isSendingCode || cooldownSecondsLeft > 0}
                    className={`text-xs font-medium transition-colors ${
                      isSendingCode || cooldownSecondsLeft > 0
                        ? "cursor-not-allowed text-white/25"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {isSendingCode
                      ? copy.sendingCode
                      : cooldownSecondsLeft > 0
                        ? formatCopy(copy.resendAfter, { seconds: cooldownSecondsLeft })
                        : copy.sendCode}
                  </button>
                </div>
              </div>
            ) : null}

            {codeInfo ? (
              <p className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/65">
                {formatCopy(copy.codeSent, {
                  destination: codeInfo.destination,
                  minutes: Math.max(1, Math.ceil(codeInfo.expires_in / 60)),
                })}
              </p>
            ) : null}

            {statusMessage ? (
              <p
                className={`rounded-[18px] border px-4 py-3 text-sm ${
                  isStatusError
                    ? "border-red-500/30 bg-red-500/12 text-red-200"
                    : "border-white/10 bg-white/[0.05] text-white/65"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmittingEmail || isSendingCode}
              className={`flex h-14 w-full items-center justify-center rounded-[18px] px-4 text-[15px] font-semibold transition-all ${
                isSubmittingEmail || isSendingCode
                  ? "cursor-not-allowed bg-white/15 text-white/45"
                  : "bg-white text-black hover:bg-[#ececec]"
              }`}
            >
              {isSubmittingEmail
                ? copy.submitting
                : hasRequestedCode
                  ? copy.submit
                  : copy.emailContinue}
            </button>
          </form>

          {!googleClientId ? (
            <p className="mt-4 text-center text-xs leading-5 text-white/35">
              {copy.missingGoogleClientId}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const BrandMark = () => (
  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#0d0d0d]">
    <img src="/logo.svg" alt="Lytai Studio" className="h-7 w-7 object-contain" />
  </div>
);

const CloseIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12.24 10.285V14.4h5.88c-.258 1.32-1.547 3.87-5.88 3.87-3.54 0-6.426-2.94-6.426-6.57s2.886-6.57 6.426-6.57c2.016 0 3.366.86 4.14 1.602l2.82-2.73C17.397 2.325 15.06 1.2 12.24 1.2 6.972 1.2 2.7 5.472 2.7 10.74s4.272 9.54 9.54 9.54c5.505 0 9.156-3.87 9.156-9.324 0-.63-.066-1.11-.156-1.59H12.24Z"
    />
    <path
      fill="#34A853"
      d="M2.7 6.78 6.084 9.27c.918-2.73 3.504-4.68 6.156-4.68 2.016 0 3.366.86 4.14 1.602l2.82-2.73C17.397 2.325 15.06 1.2 12.24 1.2 8.58 1.2 5.394 3.3 3.804 6.36L2.7 6.78Z"
    />
    <path
      fill="#FBBC05"
      d="M2.7 10.74c0 1.53.366 2.97 1.104 4.23l3.78-2.916a6.402 6.402 0 0 1-.36-2.054c0-.71.126-1.398.36-2.054L3.804 6.36A9.432 9.432 0 0 0 2.7 10.74Z"
    />
    <path
      fill="#4285F4"
      d="M12.24 20.28c2.82 0 5.19-.93 6.918-2.52l-3.366-2.76c-.906.63-2.124 1.08-3.552 1.08-4.332 0-5.622-2.55-5.88-3.87l-3.66 2.82c1.572 3.12 4.8 5.25 9.54 5.25Z"
    />
  </svg>
);

export default AuthDialog;
