function isLoopbackHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]"
  );
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
