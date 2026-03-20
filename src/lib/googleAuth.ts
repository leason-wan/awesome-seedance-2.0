function isLoopbackHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]"
  );
}

export const GOOGLE_IDENTITY_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

export type GoogleCodeResponse = {
  code?: string;
  error?: string;
  error_description?: string;
};

export type GoogleCodeClientConfig = {
  client_id: string;
  scope: string;
  ux_mode?: "popup" | "redirect";
  redirect_uri?: string;
  state?: string;
  callback?: (response: GoogleCodeResponse) => void;
  error_callback?: (error: { type: string }) => void;
};

export type GoogleCodeClient = {
  requestCode: () => void;
};

export type GoogleCredentialResponse = {
  credential?: string;
  select_by?: string;
  clientId?: string;
};

export type GooglePromptMomentNotification = {
  isDisplayMoment: () => boolean;
  isDisplayed: () => boolean;
  isNotDisplayed: () => boolean;
  getNotDisplayedReason: () => string;
  isSkippedMoment: () => boolean;
  getSkippedReason: () => string;
  isDismissedMoment: () => boolean;
  getDismissedReason: () => string;
};

export type GoogleIdConfiguration = {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
  context?: "signin" | "signup" | "use";
  prompt_parent_id?: string;
  nonce?: string;
  use_fedcm_for_prompt?: boolean;
};

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initCodeClient: (config: GoogleCodeClientConfig) => GoogleCodeClient;
        };
        id?: {
          initialize: (config: GoogleIdConfiguration) => void;
          prompt: (listener?: (notification: GooglePromptMomentNotification) => void) => void;
          cancel: () => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

let googleIdentityScriptPromise: Promise<void> | null = null;

function resetGoogleScriptPromise() {
  googleIdentityScriptPromise = null;
}

export function ensureGoogleIdentityScript() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google login is only available in the browser."));
  }

  if (window.google?.accounts?.oauth2 || window.google?.accounts?.id) {
    return Promise.resolve();
  }

  if (googleIdentityScriptPromise) {
    return googleIdentityScriptPromise;
  }

  googleIdentityScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${GOOGLE_IDENTITY_SCRIPT_SRC}"]`,
    );

    const cleanup = (script: HTMLScriptElement | null) => {
      if (!script) {
        return;
      }

      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };

    const handleLoad = () => {
      cleanup(existingScript);
      resolve();
    };

    const handleError = () => {
      cleanup(existingScript);
      resetGoogleScriptPromise();
      reject(new Error("Failed to load Google Identity Services."));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad);
      existingScript.addEventListener("error", handleError);

      if (window.google?.accounts?.oauth2 || window.google?.accounts?.id) {
        cleanup(existingScript);
        resolve();
      }

      return;
    }

    const script = document.createElement("script");
    script.src = GOOGLE_IDENTITY_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    document.head.appendChild(script);
  });

  return googleIdentityScriptPromise;
}

export function isGoogleOneTapEnabled(configuredValue: string | undefined) {
  const normalizedValue = configuredValue?.trim().toLowerCase();

  if (!normalizedValue) {
    return true;
  }

  return !["0", "false", "off", "no"].includes(normalizedValue);
}

export function disableGoogleAutoSelect() {
  if (typeof window === "undefined") {
    return;
  }

  window.google?.accounts?.id?.disableAutoSelect();
}

export function resolveGoogleRedirectUri(configuredRedirectUri: string) {
  const trimmedRedirectUri = configuredRedirectUri.trim();

  if (!trimmedRedirectUri) {
    return "";
  }

  if (typeof window === "undefined") {
    return trimmedRedirectUri;
  }

  try {
    const resolvedRedirectUri = new URL(trimmedRedirectUri, window.location.origin);

    // Ignore localhost callbacks on non-local deployments and fall back to popup flow.
    if (isLoopbackHost(resolvedRedirectUri.hostname) && !isLoopbackHost(window.location.hostname)) {
      return "";
    }

    return resolvedRedirectUri.toString();
  } catch {
    return trimmedRedirectUri;
  }
}
