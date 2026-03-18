const AUTH_SESSION_STORAGE_KEY = "auth-session";
const AUTH_REDIRECT_TARGET_STORAGE_KEY = "auth-redirect-target";
const GOOGLE_OAUTH_STATE_STORAGE_KEY = "google-oauth-state";
const GOOGLE_OAUTH_LANG_STORAGE_KEY = "google-oauth-lang";
export const AUTH_REQUIRED_EVENT = "auth-required";

export type AuthUser = {
  id: string;
  email: string | null;
  username: string;
  avatar_url: string | null;
  coins: number;
  vip_level: number;
  created_at: string;
  is_active?: boolean;
  updated_at?: string;
};

export type AuthSession = {
  access_token: string;
  token_type: string;
  user: AuthUser;
};

export type LoginCodeResponse = {
  message: string;
  expires_in: number;
  cooldown_seconds: number;
  destination: string;
};

type TokenResponse = {
  access_token: string;
  token_type: string;
  user: AuthUser;
};

type UserMeResponse = AuthUser & {
  is_active: boolean;
  updated_at: string;
};

type ValidationIssue = {
  msg?: string;
};

export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status = 0, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAuthUser(value: unknown): value is AuthUser {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    (typeof value.email === "string" || value.email === null) &&
    typeof value.username === "string" &&
    (typeof value.avatar_url === "string" || value.avatar_url === null) &&
    typeof value.coins === "number" &&
    typeof value.vip_level === "number" &&
    typeof value.created_at === "string"
  );
}

function isAuthSession(value: unknown): value is AuthSession {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.access_token === "string" &&
    typeof value.token_type === "string" &&
    isAuthUser(value.user)
  );
}

function getApiBaseUrl() {
  return (import.meta.env.PUBLIC_API_BASE_URL ?? "").trim().replace(/\/+$/, "");
}

function toApiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}/api${normalizedPath}`;
}

function getRequestFailureMessage(url: string, error: unknown) {
  const rawMessage =
    error instanceof Error && error.message.trim()
      ? error.message.trim()
      : "Unable to reach the authentication service.";

  let hint =
    "Check that the API is reachable from the browser and that the deployment is using the correct API origin.";

  if (typeof window !== "undefined") {
    try {
      const requestUrl = new URL(url, window.location.origin);
      const isCrossOrigin = requestUrl.origin !== window.location.origin;

      if (isCrossOrigin) {
        hint =
          `Cross-origin request to ${requestUrl.origin} failed. Verify CORS allows ${window.location.origin}.`;
      }
    } catch {
      // Ignore URL parsing failures and keep the generic hint.
    }
  }

  return `${rawMessage} Request URL: ${url}. ${hint}`;
}

function getErrorMessageFromPayload(payload: unknown, fallbackMessage: string) {
  if (typeof payload === "string" && payload.trim()) {
    return payload;
  }

  if (!isRecord(payload)) {
    return fallbackMessage;
  }

  if (typeof payload.message === "string" && payload.message.trim()) {
    return payload.message;
  }

  if (typeof payload.detail === "string" && payload.detail.trim()) {
    return payload.detail;
  }

  if (Array.isArray(payload.detail) && payload.detail.length > 0) {
    const messages = payload.detail
      .map((issue) => (isRecord(issue) ? (issue as ValidationIssue).msg : undefined))
      .filter((message): message is string => typeof message === "string" && message.trim().length > 0);

    if (messages.length > 0) {
      return messages.join(" ");
    }
  }

  return fallbackMessage;
}

async function parseResponseBody(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return text ? { message: text } : null;
}

async function requestJson<T>(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  const requestUrl = toApiUrl(path);

  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (typeof init.body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;

  try {
    response = await fetch(requestUrl, {
      ...init,
      headers,
    });
  } catch (error) {
    throw new ApiError(getRequestFailureMessage(requestUrl, error));
  }

  const payload = await parseResponseBody(response);

  if (!response.ok) {
    if (response.status === 403) {
      clearAuthSession();

      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent(AUTH_REQUIRED_EVENT));
      }
    }

    throw new ApiError(
      getErrorMessageFromPayload(payload, `Request failed with status ${response.status}.`),
      response.status,
      payload,
    );
  }

  return payload as T;
}

export function getApiErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof ApiError && error.message.trim()) {
    return error.message;
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallbackMessage;
}

export function loadAuthSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawSession = window.localStorage.getItem(AUTH_SESSION_STORAGE_KEY);

  if (!rawSession) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawSession);

    if (!isAuthSession(parsed)) {
      window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    return null;
  }
}

export function saveAuthSession(session: AuthSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
}

export function savePostAuthRedirectTarget(target: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(AUTH_REDIRECT_TARGET_STORAGE_KEY, target);
}

export function consumePostAuthRedirectTarget(fallbackTarget: string) {
  if (typeof window === "undefined") {
    return fallbackTarget;
  }

  const target = window.sessionStorage.getItem(AUTH_REDIRECT_TARGET_STORAGE_KEY);

  if (target) {
    window.sessionStorage.removeItem(AUTH_REDIRECT_TARGET_STORAGE_KEY);
    return target;
  }

  return fallbackTarget;
}

function createRandomString() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createGoogleOauthState() {
  return createRandomString();
}

export function saveGoogleOauthRedirectContext(state: string, lang: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(GOOGLE_OAUTH_STATE_STORAGE_KEY, state);
  window.sessionStorage.setItem(GOOGLE_OAUTH_LANG_STORAGE_KEY, lang);
}

export function consumeGoogleOauthRedirectContext() {
  if (typeof window === "undefined") {
    return null;
  }

  const state = window.sessionStorage.getItem(GOOGLE_OAUTH_STATE_STORAGE_KEY);
  const lang = window.sessionStorage.getItem(GOOGLE_OAUTH_LANG_STORAGE_KEY);

  window.sessionStorage.removeItem(GOOGLE_OAUTH_STATE_STORAGE_KEY);
  window.sessionStorage.removeItem(GOOGLE_OAUTH_LANG_STORAGE_KEY);

  if (!state) {
    return null;
  }

  return {
    state,
    lang,
  };
}

export async function sendLoginCode(email: string) {
  return requestJson<LoginCodeResponse>("/auth/login/code", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function loginWithEmail(email: string, code: string) {
  return requestJson<TokenResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, code }),
  });
}

export async function loginWithGoogle({
  code,
  redirectUri,
  nonce,
}: {
  code: string;
  redirectUri?: string;
  nonce?: string | null;
}) {
  const body: Record<string, string> = { code };

  if (redirectUri) {
    body.redirect_uri = redirectUri;
  }

  if (nonce) {
    body.nonce = nonce;
  }

  return requestJson<TokenResponse>("/auth/google/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function fetchCurrentUser(session: Pick<AuthSession, "access_token" | "token_type">) {
  const user = await requestJson<UserMeResponse>("/users/me", {
    method: "GET",
    headers: {
      Authorization: `${session.token_type} ${session.access_token}`,
    },
  });

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    avatar_url: user.avatar_url,
    coins: user.coins,
    vip_level: user.vip_level,
    created_at: user.created_at,
    is_active: user.is_active,
    updated_at: user.updated_at,
  } satisfies AuthUser;
}
