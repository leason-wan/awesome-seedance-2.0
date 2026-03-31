"use client";

import { ApiError, type AuthSession } from "./auth";

export type GenerationInputTextItem = {
  type: "text";
  text: string;
};

export type GenerationInputImageUrlItem = {
  type: "image_url";
  image_url: {
    url: string;
  };
};

export type GenerationContentItem = GenerationInputTextItem | GenerationInputImageUrlItem;

export type GenerationParams = {
  resolution: string | null;
  ratio: string | null;
  duration: number | null;
  frames: number | null;
  seed: number | null;
  camera_fixed: boolean | null;
  watermark: boolean | null;
};

export type GenerationTask = {
  id: string;
  title: string;
  provider: string;
  model: string;
  input_items: GenerationContentItem[];
  generation_params: GenerationParams;
  status: string;
  output_url: string | null;
  error_message: string | null;
  created_at: string;
  updated_at: string;
};

export type CreateGenerationPayload = {
  title?: string | null;
  model: string;
  resolution?: string | null;
  ratio: string;
  duration: number;
  frames?: number | null;
  seed?: number | null;
  camera_fixed?: boolean | null;
  watermark?: boolean;
  content: GenerationContentItem[];
};

function getApiBaseUrl() {
  return (import.meta.env.PUBLIC_API_BASE_URL ?? "").trim().replace(/\/+$/, "");
}

function toApiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getApiBaseUrl()}/api${normalizedPath}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getRequestFailureMessage(url: string, error: unknown) {
  const rawMessage =
    error instanceof Error && error.message.trim()
      ? error.message.trim()
      : "Unable to reach the generation service.";

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

async function requestJson<T>(path: string, session: AuthSession, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  const requestUrl = toApiUrl(path);

  headers.set("Authorization", `${session.token_type} ${session.access_token}`);

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
    throw new ApiError(
      getErrorMessageFromPayload(payload, `Request failed with status ${response.status}.`),
      response.status,
      payload,
    );
  }

  return payload as T;
}

export async function createGeneration(session: AuthSession, payload: CreateGenerationPayload) {
  return requestJson<GenerationTask>("/generations", session, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function listGenerations(
  session: AuthSession,
  options: {
    page?: number;
    pageSize?: number;
  } = {},
) {
  const search = new URLSearchParams();

  if (options.page) {
    search.set("page", `${options.page}`);
  }

  if (options.pageSize) {
    search.set("page_size", `${options.pageSize}`);
  }

  const query = search.toString();
  const path = query ? `/generations?${query}` : "/generations";

  return requestJson<GenerationTask[]>(path, session, {
    method: "GET",
  });
}

export async function getGeneration(session: AuthSession, generationId: string) {
  return requestJson<GenerationTask>(`/generations/${generationId}`, session, {
    method: "GET",
  });
}
