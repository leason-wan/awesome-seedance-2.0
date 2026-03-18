"use client";

import React, { useEffect, useState } from "react";

import AuthDialog from "./AuthDialog";
import { AppShell, UserAvatar, homeCopy, type SupportedLanguage } from "./Home";
import {
  AUTH_REQUIRED_EVENT,
  ApiError,
  clearAuthSession,
  fetchCurrentUser,
  loadAuthSession,
  saveAuthSession,
  type AuthSession,
} from "../lib/auth";

type UserPageProps = {
  lang?: SupportedLanguage;
};

const userCopy = {
  en: {
    signInTitle: "Sign in to view your account",
    signInDescription: "Open the sign-in flow on this page instead of using a sidebar popup.",
    signIn: "Sign in",
    signOut: "Sign out",
    assets: "Assets",
    images: "Image",
    videos: "Video",
    emptyAssets: "No assets yet",
    emptyAssetsHint: "Your files will appear here after the asset workflow is connected.",
    shareProfile: "Invite",
    email: "Email",
    userId: "User ID",
    coins: "Coins",
    vip: "VIP",
  },
  zh: {
    signInTitle: "登录后查看用户详情",
    signInDescription: "登录入口放在当前页面内，不再通过侧边栏直接弹窗。",
    signIn: "登录",
    signOut: "退出登录",
    assets: "素材",
    images: "Image",
    videos: "Video",
    emptyAssets: "暂无素材",
    emptyAssetsHint: "接入素材上传流程后，文件会展示在这里。",
    shareProfile: "邀请",
    email: "邮箱",
    userId: "用户 ID",
    coins: "灵感币",
    vip: "VIP",
  },
} as const;

const UserPage: React.FC<UserPageProps> = ({ lang = "en" }) => {
  const copy = homeCopy[lang];
  const detailCopy = userCopy[lang];
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSyncingSession, setIsSyncingSession] = useState(true);
  const [activeAssetType, setActiveAssetType] = useState<"image" | "video">("image");

  useEffect(() => {
    const storedSession = loadAuthSession();

    if (!storedSession) {
      setIsSyncingSession(false);
      return;
    }

    setAuthSession(storedSession);

    let isCancelled = false;

    void (async () => {
      try {
        const user = await fetchCurrentUser(storedSession);

        if (isCancelled) {
          return;
        }

        const refreshedSession = {
          ...storedSession,
          user,
        };

        saveAuthSession(refreshedSession);
        setAuthSession(refreshedSession);
      } catch (error) {
        if (isCancelled) {
          return;
        }

        if (error instanceof ApiError && (error.status === 401 || error.status === 403)) {
          clearAuthSession();
          setAuthSession(null);
        }
      } finally {
        if (!isCancelled) {
          setIsSyncingSession(false);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleAuthRequired = () => {
      setAuthSession(null);
      setIsAuthDialogOpen(true);
    };

    window.addEventListener(AUTH_REQUIRED_EVENT, handleAuthRequired);
    return () => window.removeEventListener(AUTH_REQUIRED_EVENT, handleAuthRequired);
  }, []);

  const handleAuthenticated = (session: AuthSession) => {
    saveAuthSession(session);
    setAuthSession(session);
    setIsAuthDialogOpen(false);
  };

  const handleSignOut = () => {
    clearAuthSession();
    setAuthSession(null);
  };

  return (
    <>
      <AppShell
        lang={lang}
        currentPage="user"
        session={authSession}
        isSyncingSession={isSyncingSession}
        onOpenAuth={() => setIsAuthDialogOpen(true)}
        onSignOut={handleSignOut}
      >
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#050505] text-white">
          <div className="flex-1 overflow-y-auto p-4 pb-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
              {authSession ? (
                <section className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
                  <div className="pt-2">
                    <div className="flex items-center gap-4">
                      <UserAvatar user={authSession.user} className="h-16 w-16 text-lg" />
                      <div className="min-w-0">
                        <h2 className="truncate text-xl font-semibold text-white">
                          {authSession.user.username || copy.account}
                        </h2>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-6 inline-flex h-10 min-w-[180px] items-center justify-center rounded-xl bg-[#1b1b25] px-4 text-sm font-medium text-white transition-colors hover:bg-[#232330]"
                    >
                      <ShareIcon />
                      {detailCopy.shareProfile}
                    </button>

                    <div className="mt-6 grid gap-3">
                      <ProfileEmailCard label={detailCopy.email} value={authSession.user.email ?? "—"} />
                      <ProfileIdCard label={detailCopy.userId} value={authSession.user.id} />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <ProfileCoinCard label={detailCopy.coins} value={String(authSession.user.coins)} />
                        <ProfileVipCard label={detailCopy.vip} value={String(authSession.user.vip_level)} />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="mt-6 flex w-full items-center justify-center rounded-xl bg-white/[0.06] px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.1] hover:text-white"
                    >
                      {detailCopy.signOut}
                    </button>
                  </div>

                  <section className="min-h-[520px] pt-0.5">
                    <div className="flex items-center justify-center gap-5">
                      <AssetTab
                        label={detailCopy.images}
                        active={activeAssetType === "image"}
                        onClick={() => setActiveAssetType("image")}
                      />
                      <AssetTab
                        label={detailCopy.videos}
                        active={activeAssetType === "video"}
                        onClick={() => setActiveAssetType("video")}
                      />
                    </div>

                    <AssetPanel
                      tone={activeAssetType}
                      emptyTitle={detailCopy.emptyAssets}
                      emptyHint={detailCopy.emptyAssetsHint}
                    />
                  </section>
                </section>
              ) : (
                <section className="rounded-3xl border border-white/10 bg-[#101010] p-5">
                  <h2 className="text-2xl font-semibold text-white">{detailCopy.signInTitle}</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                    {detailCopy.signInDescription}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsAuthDialogOpen(true)}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
                  >
                    {detailCopy.signIn}
                  </button>
                </section>
              )}
            </div>
          </div>
        </main>
      </AppShell>

      <AuthDialog
        lang={lang}
        open={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        onAuthenticated={handleAuthenticated}
      />
    </>
  );
};

function ProfileEmailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full min-w-0 items-center gap-3 px-1 py-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/6 text-white/65">
        <MailIcon />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mt-1 break-all text-sm leading-6 text-white/88">{value}</p>
      </div>
    </div>
  );
}

function ProfileIdCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full min-w-0 items-center gap-3 px-1 py-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/6 text-white/65">
        <IdIcon />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mt-1 truncate font-mono text-sm leading-6 text-white/82">{value}</p>
      </div>
    </div>
  );
}

function ProfileCoinCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#f7d66b]/20 bg-[radial-gradient(circle_at_top_left,rgba(247,214,107,0.22),transparent_55%),#13110c] px-4 py-3">
      <div className="absolute -right-6 top-1 h-16 w-16 rounded-full bg-[#f7d66b]/10 blur-2xl" />
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#f7d66b]/70">{label}</p>
          <p className="mt-2 text-2xl font-semibold leading-none text-[#ffe7a3]">{value}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f7d66b]/20 bg-[#f7d66b]/10 text-[#f7d66b]">
          <CoinIcon />
        </div>
      </div>
    </div>
  );
}

function ProfileVipCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#8ab4ff]/16 bg-[linear-gradient(120deg,rgba(88,112,255,0.18),rgba(15,19,30,0.94)_55%,rgba(255,255,255,0.04))] px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/38">{label}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[#a8c2ff]">
          <VipIcon />
        </div>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 6.75 7.01 5.259a.833.833 0 0 0 .98 0L19.5 6.75" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path strokeLinecap="round" d="M8 10.5h4" />
      <path strokeLinecap="round" d="M8 14h3" />
      <circle cx="16.5" cy="12" r="2" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.5v7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10h-3a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-3" />
    </svg>
  );
}

function VipIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 9 3 3 4-5 4 5 3-3-2 8H7L5 9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 19h8" />
    </svg>
  );
}

function AssetTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2 py-1 text-sm font-medium transition-colors ${
        active ? "text-white" : "text-white/45 hover:text-white/75"
      }`}
    >
      {label}
    </button>
  );
}

function AssetPanel({
  tone,
  emptyTitle,
  emptyHint,
}: {
  tone: "image" | "video";
  emptyTitle: string;
  emptyHint: string;
}) {
  const glowClassName =
    tone === "image"
      ? "from-[#6ff2d0] via-[#59c7ff] to-transparent"
      : "from-[#4b87ff] via-[#8e7dff] to-transparent";

  return (
    <div className="relative mt-5 min-h-[420px] overflow-hidden rounded-[28px] bg-[#0b0b10]">
      <div className={`absolute bottom-8 right-6 h-36 w-36 rounded-full bg-gradient-to-br ${glowClassName} opacity-40 blur-3xl`} />
      <div className="relative flex h-full min-h-[420px] items-center justify-center p-5">
        <div className="flex max-w-[260px] flex-col items-center justify-center text-center">
          <p className="text-xs font-medium tracking-[0.02em] text-white/34">{emptyTitle}</p>
          <p className="mt-2 text-xs leading-5 text-white/18">{emptyHint}</p>
        </div>
      </div>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907 15 6.75m-7.783 6.343L15 17.25m-7.783-4.157a2.25 2.25 0 1 1-2.467-3.734 2.25 2.25 0 0 1 2.467 3.734Zm10.033-5.109a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 15a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    </svg>
  );
}

export default UserPage;
