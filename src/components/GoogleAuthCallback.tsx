"use client";

import React, { useEffect, useMemo, useState } from "react";

import {
  consumeGoogleOauthRedirectContext,
  consumePostAuthRedirectTarget,
  getApiErrorMessage,
  loginWithGoogle,
  saveAuthSession,
} from "../lib/auth";
import { resolveGoogleRedirectUri } from "../lib/googleAuth";

const callbackCopy = {
  en: {
    title: "Completing Google sign-in",
    pending: "Exchanging the Google authorization code...",
    success: "Sign-in completed. Redirecting back...",
    invalidState: "This Google sign-in link is invalid or has expired. Please try again.",
    missingCode: "No Google authorization code was found in the callback URL.",
    fallbackError: "Google sign-in could not be completed.",
    goHome: "Return home",
  },
  zh: {
    title: "正在完成 Google 登录",
    pending: "正在交换 Google 授权码...",
    success: "登录完成，正在返回首页...",
    invalidState: "这个 Google 登录链接无效或已过期，请重新发起登录。",
    missingCode: "回调地址中没有拿到 Google 授权码。",
    fallbackError: "无法完成 Google 登录。",
    goHome: "返回首页",
  },
} as const;

type SupportedLanguage = keyof typeof callbackCopy;

function getLanguageFromState(state: string | null): SupportedLanguage {
  return state === "zh" ? "zh" : "en";
}

function getFallbackTarget(lang: SupportedLanguage) {
  return lang === "zh" ? "/zh/" : "/";
}

const GoogleAuthCallback: React.FC = () => {
  const [lang, setLang] = useState<SupportedLanguage>("en");
  const copy = callbackCopy[lang];
  const [message, setMessage] = useState(copy.pending);
  const [isError, setIsError] = useState(false);
  const googleRedirectUri = resolveGoogleRedirectUri(
    import.meta.env.PUBLIC_GOOGLE_REDIRECT_URI?.trim() ?? "",
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectContext = consumeGoogleOauthRedirectContext();
    const nextLang = getLanguageFromState(redirectContext?.lang ?? params.get("state"));
    setLang(nextLang);

    const localizedCopy = callbackCopy[nextLang];
    const code = params.get("code");
    const error = params.get("error");
    const errorDescription = params.get("error_description");
    const returnedState = params.get("state");
    const fallbackTarget = getFallbackTarget(nextLang);

    if (error) {
      setIsError(true);
      setMessage(errorDescription || error || localizedCopy.fallbackError);
      return;
    }

    if (!redirectContext || !returnedState || redirectContext.state !== returnedState) {
      setIsError(true);
      setMessage(localizedCopy.invalidState);
      return;
    }

    if (!code) {
      setIsError(true);
      setMessage(localizedCopy.missingCode);
      return;
    }

    setIsError(false);
    setMessage(localizedCopy.pending);

    void (async () => {
      try {
        const session = await loginWithGoogle({
          code,
          redirectUri: googleRedirectUri || undefined,
        });

        saveAuthSession(session);
        setMessage(localizedCopy.success);

        const target = consumePostAuthRedirectTarget(fallbackTarget);
        window.setTimeout(() => {
          window.location.replace(target);
        }, 300);
      } catch (loginError) {
        setIsError(true);
        setMessage(getApiErrorMessage(loginError, localizedCopy.fallbackError));
      }
    })();
  }, [googleRedirectUri]);

  const homeHref = useMemo(() => getFallbackTarget(lang), [lang]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#14222b_0%,#060606_45%,#000000_100%)] px-6 text-white">
      <div className="w-full max-w-lg rounded-[32px] border border-white/10 bg-black/35 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
          {isError ? <ErrorIcon /> : <SpinnerIcon />}
        </div>
        <h1 className="mt-6 text-center text-2xl font-semibold tracking-wide">{copy.title}</h1>
        <p
          className={`mt-4 text-center text-sm leading-7 ${
            isError ? "text-red-200" : "text-white/60"
          }`}
        >
          {message}
        </p>
        {isError ? (
          <a
            href={homeHref}
            className="mt-8 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            {copy.goHome}
          </a>
        ) : null}
      </div>
    </div>
  );
};

const SpinnerIcon = () => (
  <svg className="h-6 w-6 animate-spin text-[#00d1b2]" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6 6m0-6-6 6" />
  </svg>
);

export default GoogleAuthCallback;
