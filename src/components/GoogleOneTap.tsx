"use client";

import React, { useEffect, useRef, useState } from "react";

import { getApiErrorMessage, loginWithGoogle, type AuthSession } from "../lib/auth";
import {
  ensureGoogleIdentityScript,
  isGoogleOneTapEnabled,
} from "../lib/googleAuth";

type SupportedLanguage = "en" | "zh";

type GoogleOneTapProps = {
  lang: SupportedLanguage;
  disabled?: boolean;
  onAuthenticated: (session: AuthSession) => void;
};

const oneTapCopy = {
  en: {
    unavailable: "Google One Tap is not configured on this deployment.",
    scriptFailed: "Google One Tap SDK failed to load.",
    loginFailed: "Google One Tap sign-in failed. Please try again.",
    missingCredential: "Google One Tap did not return a credential.",
  },
  zh: {
    unavailable: "当前环境未配置 Google One Tap。",
    scriptFailed: "Google One Tap SDK 加载失败。",
    loginFailed: "Google One Tap 登录失败，请稍后重试。",
    missingCredential: "Google One Tap 没有返回有效凭证。",
  },
} as const;

const GoogleOneTap: React.FC<GoogleOneTapProps> = ({ lang, disabled = false, onAuthenticated }) => {
  const copy = oneTapCopy[lang];
  const googleClientId = import.meta.env.PUBLIC_GOOGLE_CLIENT_ID?.trim() ?? "";
  const oneTapEnabled = isGoogleOneTapEnabled(import.meta.env.PUBLIC_GOOGLE_ONE_TAP_ENABLED);
  const [errorMessage, setErrorMessage] = useState("");
  const hasPromptedRef = useRef(false);
  const isHandlingCredentialRef = useRef(false);

  useEffect(() => {
    if (!oneTapEnabled || !googleClientId || disabled) {
      if (disabled) {
        window.google?.accounts?.id?.cancel();
      }
      return;
    }

    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    if (!window.isSecureContext) {
      return;
    }

    let isCancelled = false;

    void (async () => {
      try {
        await ensureGoogleIdentityScript();
      } catch (error) {
        if (!isCancelled) {
          setErrorMessage(getApiErrorMessage(error, copy.scriptFailed));
        }
        return;
      }

      const googleId = window.google?.accounts?.id;

      if (!googleId) {
        if (!isCancelled) {
          setErrorMessage(copy.unavailable);
        }
        return;
      }

      if (hasPromptedRef.current) {
        googleId.prompt();
        return;
      }

      googleId.initialize({
        client_id: googleClientId,
        cancel_on_tap_outside: false,
        context: "signin",
        use_fedcm_for_prompt: true,
        callback: async (response) => {
          if (isCancelled || isHandlingCredentialRef.current) {
            return;
          }

          if (!response.credential) {
            setErrorMessage(copy.missingCredential);
            return;
          }

          isHandlingCredentialRef.current = true;
          setErrorMessage("");

          try {
            const session = await loginWithGoogle({
              credential: response.credential,
              clientId: response.clientId || googleClientId,
            });
            onAuthenticated(session);
          } catch (error) {
            setErrorMessage(getApiErrorMessage(error, copy.loginFailed));
          } finally {
            isHandlingCredentialRef.current = false;
          }
        },
      });

      hasPromptedRef.current = true;
      googleId.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isDismissedMoment()) {
          setErrorMessage("");
        }
      });
    })();

    return () => {
      isCancelled = true;
      window.google?.accounts?.id?.cancel();
    };
  }, [copy.loginFailed, copy.missingCredential, copy.scriptFailed, copy.unavailable, disabled, googleClientId, onAuthenticated, oneTapEnabled]);

  if (!errorMessage) {
    return null;
  }

  return (
    <p className="sr-only" aria-live="polite">
      {errorMessage}
    </p>
  );
};

export default GoogleOneTap;
