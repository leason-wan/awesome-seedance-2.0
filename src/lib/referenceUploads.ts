"use client";

import { ApiError, type AuthSession } from "./auth";

export type UploadedReferenceAsset = {
  url: string;
  filename: string;
  content_type: string;
  media_type: "image" | "audio" | "video";
  size: number;
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

export async function uploadReferenceAsset(session: AuthSession, file: File): Promise<UploadedReferenceAsset> {
  const formData = new FormData();
  formData.append("file", file);
  const requestUrl = toApiUrl("/uploads");

  const response = await fetch(requestUrl, {
    method: "POST",
    headers: {
      Authorization: `${session.token_type} ${session.access_token}`,
      Accept: "application/json",
    },
    body: formData,
  });

  const payload = await parseResponseBody(response);

  if (!response.ok) {
    throw new ApiError(
      getErrorMessageFromPayload(payload, `Upload failed with status ${response.status}.`),
      response.status,
      payload,
    );
  }

  return payload as UploadedReferenceAsset;
}
