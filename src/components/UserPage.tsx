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
  type AuthUser,
} from "../lib/auth";
import { loadGenerationHistory, type GenerationRecord } from "../lib/generationHistory";

type UserPageProps = {
  lang?: SupportedLanguage;
};

const userCopy = {
  en: {
    eyebrow: "Account console",
    signedInLead: "Session verified. Review identity, credits, and workspace access from one surface.",
    signInTitle: "Open your account workspace",
    signInDescription:
      "Sign in on this page to unlock profile details, local session state, and your asset library.",
    syncingTitle: "Syncing account",
    syncingDescription:
      "Checking the stored session and refreshing your profile details before the workspace opens.",
    authFootnote: "Authentication stays inline here instead of opening from the sidebar.",
    signIn: "Sign in",
    signOut: "Sign out",
    shareProfile: "Invite",
    email: "Email",
    userId: "User ID",
    coins: "Coins",
    vip: "VIP",
    memberSince: "Member since",
    session: "Session",
    storage: "Storage",
    updated: "Last update",
    localSession: "Local session",
    tokenType: "Token type",
    libraryStatus: "Library status",
    currentMode: "Current mode",
    sessionReady: "Session ready",
    activeAccount: "Active account",
    guestState: "Guest mode",
    accessTier: "Access tier",
    workspaceTitle: "Asset workspace",
    workspaceHint:
      "Uploads and generated outputs will appear here once the asset workflow is connected.",
    imagePanelTitle: "Image library is empty",
    imagePanelHint:
      "Reference stills, key frames, and generated covers will collect here as soon as image upload is available.",
    videoPanelTitle: "Video library is empty",
    videoPanelHint:
      "Draft clips, source footage, and video extensions will collect here as soon as video upload is available.",
    imagePreviewOne: "Reference stills",
    imagePreviewTwo: "Key frames",
    imagePreviewThree: "Generated covers",
    videoPreviewOne: "Draft clips",
    videoPreviewTwo: "Source footage",
    videoPreviewThree: "Extensions",
    awaitingUpload: "Awaiting upload flow",
    browserReady: "Synced on this browser",
    protectedRoute: "Protected route",
    noEmail: "Not provided",
    recent: "Recently",
    identity: "Identity",
    identityHint: "Email, user ID, credits, and membership details appear here after sign-in.",
    sessionInfo: "Session flow",
    sessionHint: "The current browser stores your session locally and reuses it for authenticated API calls.",
    library: "Library",
    libraryHint: "Uploaded references and generated outputs land here once the asset workflow is connected.",
    imageHistoryTitle: "Image results",
    imageHistoryHint: "Recent image generations written from the composer will appear here.",
    videoHistoryTitle: "Video results",
    videoHistoryHint: "Recent video generations written from the composer will appear here.",
    historyCount: "Saved results",
    openAsset: "Open asset",
    noHistory: "No saved generations yet.",
  },
  zh: {
    eyebrow: "账户控制台",
    signedInLead: "当前会话已验证，可在这里统一查看身份、额度与素材工作区。",
    signInTitle: "打开你的账户工作区",
    signInDescription: "在当前页面完成登录后，即可查看资料信息、本地会话状态与素材库。",
    syncingTitle: "正在同步账户",
    syncingDescription: "正在检查本地登录态并刷新资料信息，随后会打开你的账户工作区。",
    authFootnote: "登录流程会直接在本页完成，不再从侧边栏单独弹出。",
    signIn: "登录",
    signOut: "退出登录",
    shareProfile: "邀请",
    email: "邮箱",
    userId: "用户 ID",
    coins: "灵感币",
    vip: "VIP",
    memberSince: "加入时间",
    session: "会话状态",
    storage: "存储位置",
    updated: "最近更新",
    localSession: "本地会话",
    tokenType: "令牌类型",
    libraryStatus: "素材库状态",
    currentMode: "当前模式",
    sessionReady: "会话已就绪",
    activeAccount: "账户可用",
    guestState: "访客模式",
    accessTier: "访问等级",
    workspaceTitle: "素材工作区",
    workspaceHint: "接入上传流程后，你的参考素材与生成结果都会出现在这里。",
    imagePanelTitle: "图片素材库为空",
    imagePanelHint: "图片上传接入后，参考图、关键帧和封面图会统一收纳在这里。",
    videoPanelTitle: "视频素材库为空",
    videoPanelHint: "视频上传接入后，草稿片段、源视频和扩展结果会统一收纳在这里。",
    imagePreviewOne: "参考静帧",
    imagePreviewTwo: "关键帧",
    imagePreviewThree: "生成封面",
    videoPreviewOne: "草稿片段",
    videoPreviewTwo: "源视频",
    videoPreviewThree: "视频扩展",
    awaitingUpload: "等待接入上传流程",
    browserReady: "已同步到当前浏览器",
    protectedRoute: "受保护页面",
    noEmail: "未提供",
    recent: "最近",
    identity: "身份信息",
    identityHint: "登录后会在这里展示邮箱、用户 ID、额度与会员信息。",
    sessionInfo: "会话流转",
    sessionHint: "当前浏览器会本地保存登录态，并复用到后续鉴权接口调用。",
    library: "素材库",
    libraryHint: "接入素材流程后，上传参考与生成结果都会落到这里。",
    imageHistoryTitle: "图片结果历史",
    imageHistoryHint: "来自创作区的图片生成结果会在这里按时间写入。",
    videoHistoryTitle: "视频结果历史",
    videoHistoryHint: "来自创作区的视频生成结果会在这里按时间写入。",
    historyCount: "已保存结果",
    openAsset: "打开素材",
    noHistory: "还没有保存的生成记录。",
  },
} as const;

const USER_PAGE_STYLES = `
  @keyframes userFadeUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 28px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes userDrift {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -18px, 0) scale(1.04);
    }
  }

  @keyframes userPulse {
    0%, 100% {
      opacity: 0.7;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.03);
    }
  }

  @keyframes userSweep {
    0% {
      transform: skewX(-18deg) translateX(-140%);
      opacity: 0;
    }
    20%, 80% {
      opacity: 0.32;
    }
    100% {
      transform: skewX(-18deg) translateX(180%);
      opacity: 0;
    }
  }

  .user-fade-up {
    opacity: 0;
    transform: translate3d(0, 28px, 0);
    animation: userFadeUp 760ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .user-drift-slow {
    animation: userDrift 16s ease-in-out infinite;
  }

  .user-drift-slower {
    animation: userDrift 22s ease-in-out infinite reverse;
  }

  .user-ring {
    animation: userPulse 7s ease-in-out infinite;
  }

  .user-sheen::after {
    content: "";
    position: absolute;
    inset: -35% auto -35% -18%;
    width: 34%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    animation: userSweep 9s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .user-fade-up,
    .user-drift-slow,
    .user-drift-slower,
    .user-ring,
    .user-sheen::after {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

const heroSurfaceClassName =
  "relative isolate overflow-hidden border-b border-white/10 px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-12";

const heroAtmosphere = (
  <>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(127,248,214,0.18),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(124,182,255,0.16),transparent_24%),linear-gradient(180deg,rgba(6,8,12,0.96),rgba(3,4,6,0.98))]" />
    <div className="user-drift-slow pointer-events-none absolute -left-12 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(127,248,214,0.18),transparent_68%)] blur-3xl" />
    <div className="user-drift-slower pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,182,255,0.18),transparent_68%)] blur-3xl" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
  </>
);

function formatUserDate(dateString: string | undefined, lang: SupportedLanguage, fallback: string) {
  if (!dateString) {
    return fallback;
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

const UserPage: React.FC<UserPageProps> = ({ lang = "en" }) => {
  const copy = homeCopy[lang];
  const detailCopy = userCopy[lang];
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSyncingSession, setIsSyncingSession] = useState(true);
  const [activeAssetType, setActiveAssetType] = useState<"image" | "video">("image");
  const [generationHistory, setGenerationHistory] = useState<GenerationRecord[]>([]);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncHistory = () => {
      setGenerationHistory(loadGenerationHistory());
    };

    syncHistory();
    window.addEventListener("storage", syncHistory);
    window.addEventListener("focus", syncHistory);

    return () => {
      window.removeEventListener("storage", syncHistory);
      window.removeEventListener("focus", syncHistory);
    };
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
        <main
          className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[#040507] text-white"
          style={{ fontFamily: "var(--user-font-sans)" }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_42%),linear-gradient(180deg,#040507_0%,#040608_48%,#020304_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.06]" />
          </div>

          <div className="relative flex-1 overflow-y-auto">
            {isSyncingSession && !authSession ? (
              <SyncingView detailCopy={detailCopy} />
            ) : authSession ? (
              <AuthenticatedView
                lang={lang}
                session={authSession}
                copy={copy}
                detailCopy={detailCopy}
                activeAssetType={activeAssetType}
                onSelectAssetType={setActiveAssetType}
                generationHistory={generationHistory}
                onSignOut={handleSignOut}
              />
            ) : (
              <GuestView detailCopy={detailCopy} onOpenAuth={() => setIsAuthDialogOpen(true)} />
            )}
          </div>
        </main>
      </AppShell>

      <AuthDialog
        lang={lang}
        open={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        onAuthenticated={handleAuthenticated}
      />

      <style>{USER_PAGE_STYLES}</style>
    </>
  );
};

function AuthenticatedView({
  lang,
  session,
  copy,
  detailCopy,
  activeAssetType,
  onSelectAssetType,
  generationHistory,
  onSignOut,
}: {
  lang: SupportedLanguage;
  session: AuthSession;
  copy: (typeof homeCopy)[SupportedLanguage];
  detailCopy: (typeof userCopy)[SupportedLanguage];
  activeAssetType: "image" | "video";
  onSelectAssetType: (value: "image" | "video") => void;
  generationHistory: GenerationRecord[];
  onSignOut: () => void;
}) {
  const emailValue = session.user.email ?? detailCopy.noEmail;
  const createdAtLabel = formatUserDate(session.user.created_at, lang, detailCopy.recent);
  const updatedAtLabel = formatUserDate(
    session.user.updated_at ?? session.user.created_at,
    lang,
    detailCopy.recent,
  );
  const sessionStateValue = session.user.is_active === false ? detailCopy.protectedRoute : detailCopy.activeAccount;

  return (
    <>
      <section className={heroSurfaceClassName}>
        {heroAtmosphere}

        <div className="relative mx-auto grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1.08fr)_360px]">
          <div className="max-w-2xl py-4">
            <div className="user-fade-up">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/34">{detailCopy.eyebrow}</p>
              <h1
                className="mt-5 max-w-[12ch] text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--user-font-display)" }}
              >
                {session.user.username || copy.account}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">{detailCopy.signedInLead}</p>
            </div>

            <div className="user-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "120ms" }}>
              <StatusPill label={detailCopy.sessionReady} accent={true} />
              <StatusPill label={sessionStateValue} />
              <StatusPill label={`${detailCopy.accessTier} VIP ${session.user.vip_level}`} />
            </div>

            <div className="user-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "220ms" }}>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.1]"
              >
                <ShareIcon />
                {detailCopy.shareProfile}
              </button>
              <button
                type="button"
                onClick={onSignOut}
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-2.5 text-sm font-medium text-white/72 transition-colors hover:border-white/20 hover:text-white"
              >
                {detailCopy.signOut}
              </button>
            </div>

            <p className="user-fade-up mt-8 max-w-xl text-sm leading-6 text-white/36" style={{ animationDelay: "320ms" }}>
              {copy.accountHint}
            </p>
          </div>

          <div className="user-fade-up relative min-h-[320px]" style={{ animationDelay: "180ms" }}>
            <AccountHalo user={session.user} detailCopy={detailCopy} />
          </div>
        </div>
      </section>

      <section className="px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 pt-6 sm:grid-cols-2 xl:grid-cols-5">
          <MetricItem label={detailCopy.email} value={emailValue} icon={<MailIcon />} />
          <MetricItem label={detailCopy.userId} value={session.user.id} icon={<IdIcon />} mono={true} />
          <MetricItem label={detailCopy.coins} value={String(session.user.coins)} icon={<CoinIcon />} accent={true} />
          <MetricItem label={detailCopy.vip} value={`VIP ${session.user.vip_level}`} icon={<VipIcon />} />
          <MetricItem label={detailCopy.memberSince} value={createdAtLabel} icon={<ClockIcon />} />
        </div>
      </section>

      <section className="px-4 pb-10 pt-3 sm:px-6 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/30">{detailCopy.workspaceTitle}</p>
                <h2
                  className="mt-3 text-3xl leading-tight text-white sm:text-4xl"
                  style={{ fontFamily: "var(--user-font-display)" }}
                >
                  {detailCopy.workspaceTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">{detailCopy.workspaceHint}</p>
              </div>

              <AssetToggle
                activeAssetType={activeAssetType}
                imageLabel={copy.image}
                videoLabel={copy.video}
                onSelectAssetType={onSelectAssetType}
              />
            </div>

            <AssetPanel tone={activeAssetType} detailCopy={detailCopy} records={generationHistory} />
          </div>

          <aside className="border-t border-white/10 pt-6 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
            <div className="flex flex-col gap-0">
              <RailItem
                label={detailCopy.localSession}
                value={detailCopy.browserReady}
                hint={detailCopy.sessionHint}
              />
              <RailItem label={detailCopy.session} value={sessionStateValue} hint={detailCopy.authFootnote} />
              <RailItem label={detailCopy.tokenType} value={session.token_type.toUpperCase()} hint={copy.accountHint} />
              <RailItem label={detailCopy.updated} value={updatedAtLabel} hint={detailCopy.protectedRoute} />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function GuestView({
  detailCopy,
  onOpenAuth,
}: {
  detailCopy: (typeof userCopy)[SupportedLanguage];
  onOpenAuth: () => void;
}) {
  return (
    <>
      <section className={heroSurfaceClassName}>
        {heroAtmosphere}

        <div className="relative mx-auto grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1.02fr)_360px]">
          <div className="max-w-2xl py-4">
            <div className="user-fade-up">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/34">{detailCopy.eyebrow}</p>
              <h1
                className="mt-5 max-w-[12ch] text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--user-font-display)" }}
              >
                {detailCopy.signInTitle}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                {detailCopy.signInDescription}
              </p>
            </div>

            <div className="user-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "120ms" }}>
              <button
                type="button"
                onClick={onOpenAuth}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/92"
              >
                {detailCopy.signIn}
                <ArrowRightIcon />
              </button>
              <p className="max-w-sm self-center text-sm leading-6 text-white/36">{detailCopy.authFootnote}</p>
            </div>
          </div>

          <div className="user-fade-up relative min-h-[320px]" style={{ animationDelay: "180ms" }}>
            <GuestHalo detailCopy={detailCopy} />
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 border-t border-white/10 pt-6 md:grid-cols-3">
          <PreviewItem label={detailCopy.identity} description={detailCopy.identityHint} />
          <PreviewItem label={detailCopy.sessionInfo} description={detailCopy.sessionHint} />
          <PreviewItem label={detailCopy.library} description={detailCopy.libraryHint} />
        </div>
      </section>
    </>
  );
}

function SyncingView({
  detailCopy,
}: {
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <section className={heroSurfaceClassName}>
      {heroAtmosphere}

      <div className="relative mx-auto grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-2xl py-4">
          <div className="user-fade-up">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/34">{detailCopy.eyebrow}</p>
            <h1
              className="mt-5 max-w-[12ch] text-5xl leading-none text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--user-font-display)" }}
            >
              {detailCopy.syncingTitle}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              {detailCopy.syncingDescription}
            </p>
          </div>

          <div className="user-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "120ms" }}>
            <StatusPill label={detailCopy.localSession} accent={true} />
            <StatusPill label={detailCopy.sessionReady} />
          </div>
        </div>

        <div className="user-fade-up relative min-h-[320px]" style={{ animationDelay: "180ms" }}>
          <SyncingHalo detailCopy={detailCopy} />
        </div>
      </div>
    </section>
  );
}

function AccountHalo({
  user,
  detailCopy,
}: {
  user: AuthUser;
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <div className="relative isolate flex min-h-[320px] items-center justify-center">
      <div className="user-drift-slow absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(127,248,214,0.22),rgba(124,182,255,0.08)_48%,transparent_72%)] blur-3xl" />
      <div className="user-drift-slower absolute h-[278px] w-[278px] rounded-full border border-white/10 bg-white/[0.03]" />

      <div className="relative flex h-[232px] w-[232px] items-center justify-center rounded-full border border-white/10 bg-[#091019]/88 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="user-ring absolute inset-4 rounded-full border border-white/10" />
        <UserAvatar
          user={user}
          className="h-24 w-24 border border-white/18 bg-[linear-gradient(135deg,#dffef3_0%,#8fcfff_100%)] text-2xl shadow-[0_18px_42px_rgba(143,207,255,0.22)]"
        />

        <div className="absolute left-[-18px] top-8 rounded-full border border-[#9deed9]/20 bg-[#0d1817]/92 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#acf3de] backdrop-blur">
          {detailCopy.sessionReady}
        </div>

        <div className="absolute right-[-10px] top-[38%] rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/78 backdrop-blur">
          VIP {user.vip_level}
        </div>

        <div className="absolute bottom-[-18px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0a0d11]/92 px-4 py-2 text-sm text-white/76 backdrop-blur">
          <CoinIcon />
          <span>{user.coins}</span>
        </div>
      </div>
    </div>
  );
}

function GuestHalo({
  detailCopy,
}: {
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <div className="relative isolate flex min-h-[320px] items-center justify-center">
      <div className="user-drift-slow absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(127,248,214,0.16),rgba(124,182,255,0.06)_48%,transparent_72%)] blur-3xl" />
      <div className="relative flex h-[244px] w-[244px] items-center justify-center rounded-full border border-white/10 bg-[#090c11]/84 backdrop-blur-xl">
        <div className="user-ring absolute inset-4 rounded-full border border-dashed border-white/12" />
        <div className="h-24 w-24 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(255,255,255,0.03)_65%)]" />

        <FloatingTag className="left-[-12px] top-9" label={detailCopy.identity} />
        <FloatingTag className="right-[-14px] top-[42%]" label={detailCopy.sessionInfo} />
        <FloatingTag className="bottom-5 left-1/2 -translate-x-1/2" label={detailCopy.library} />
      </div>
    </div>
  );
}

function SyncingHalo({
  detailCopy,
}: {
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <div className="relative isolate flex min-h-[320px] items-center justify-center">
      <div className="user-drift-slower absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(127,248,214,0.18),rgba(124,182,255,0.08)_48%,transparent_72%)] blur-3xl" />
      <div className="relative flex h-[232px] w-[232px] items-center justify-center rounded-full border border-white/10 bg-[#091019]/88 backdrop-blur-xl">
        <div className="user-ring absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute inset-10 rounded-full border border-white/8" />
        <div className="h-20 w-20 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),rgba(255,255,255,0.03)_68%)]" />
        <FloatingTag className="left-[-16px] top-10" label={detailCopy.localSession} />
        <FloatingTag className="right-[-8px] bottom-12" label={detailCopy.session} />
      </div>
    </div>
  );
}

function FloatingTag({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`rounded-full border border-white/10 bg-[#0b1014]/90 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/68 backdrop-blur ${className}`}
    >
      {label}
    </div>
  );
}

function StatusPill({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.24em] backdrop-blur ${
        accent
          ? "border border-[#9deed9]/20 bg-[#0d1817]/90 text-[#acf3de]"
          : "border border-white/10 bg-white/[0.06] text-white/68"
      }`}
    >
      {label}
    </div>
  );
}

function MetricItem({
  label,
  value,
  icon,
  mono = false,
  accent = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  mono?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="border-b border-white/10 pb-5">
      <div className="flex items-center gap-3 text-white/38">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
            accent ? "bg-[rgba(127,248,214,0.12)] text-[#aef4df]" : "bg-white/[0.05]"
          }`}
        >
          {icon}
        </div>
        <p className="text-[11px] uppercase tracking-[0.28em]">{label}</p>
      </div>
      <p className={`mt-4 break-all text-lg text-white/86 ${mono ? "font-mono text-sm sm:text-base" : ""}`}>{value}</p>
    </div>
  );
}

function AssetToggle({
  activeAssetType,
  imageLabel,
  videoLabel,
  onSelectAssetType,
}: {
  activeAssetType: "image" | "video";
  imageLabel: string;
  videoLabel: string;
  onSelectAssetType: (value: "image" | "video") => void;
}) {
  return (
    <div className="relative inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
      <div
        className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white/[0.08] transition-transform duration-300 ease-out"
        style={{ transform: activeAssetType === "image" ? "translateX(0%)" : "translateX(100%)" }}
      />
      <button
        type="button"
        onClick={() => onSelectAssetType("image")}
        className={`relative z-10 min-w-[112px] rounded-full px-5 py-2.5 text-sm transition-colors ${
          activeAssetType === "image" ? "text-white" : "text-white/45 hover:text-white/78"
        }`}
      >
        {imageLabel}
      </button>
      <button
        type="button"
        onClick={() => onSelectAssetType("video")}
        className={`relative z-10 min-w-[112px] rounded-full px-5 py-2.5 text-sm transition-colors ${
          activeAssetType === "video" ? "text-white" : "text-white/45 hover:text-white/78"
        }`}
      >
        {videoLabel}
      </button>
    </div>
  );
}

function AssetPanel({
  tone,
  detailCopy,
  records,
}: {
  tone: "image" | "video";
  detailCopy: (typeof userCopy)[SupportedLanguage];
  records: GenerationRecord[];
}) {
  const isImage = tone === "image";
  const panelTitle = isImage ? detailCopy.imageHistoryTitle : detailCopy.videoHistoryTitle;
  const panelHint = isImage ? detailCopy.imageHistoryHint : detailCopy.videoHistoryHint;
  const toneGlowClassName = isImage
    ? "bg-[radial-gradient(circle,rgba(127,248,214,0.22),rgba(124,182,255,0.08)_46%,transparent_72%)]"
    : "bg-[radial-gradient(circle,rgba(124,182,255,0.22),rgba(127,248,214,0.06)_46%,transparent_72%)]";
  const toneTextClassName = isImage ? "text-[#aef4df]" : "text-[#b7d0ff]";
  const filteredRecords = records.filter((record) => record.mode === tone);

  return (
    <div className="user-sheen relative isolate overflow-hidden rounded-[36px] border border-white/10 bg-[#070a0e] shadow-[0_32px_120px_rgba(0,0,0,0.42)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_38%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      <div className={`absolute -right-12 top-0 h-72 w-72 rounded-full blur-3xl ${toneGlowClassName}`} />

      <div className="relative grid min-h-[430px] gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:px-8 lg:py-8">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className={`text-[11px] uppercase tracking-[0.32em] ${toneTextClassName}`}>{detailCopy.currentMode}</p>
            <h3
              className="mt-3 max-w-[16ch] text-3xl leading-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--user-font-display)" }}
            >
              {panelTitle}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">{panelHint}</p>
          </div>

          {filteredRecords.length > 0 ? (
            isImage ? (
              <ImageHistoryPreview records={filteredRecords} toneTextClassName={toneTextClassName} detailCopy={detailCopy} />
            ) : (
              <VideoHistoryPreview records={filteredRecords} toneTextClassName={toneTextClassName} detailCopy={detailCopy} />
            )
          ) : (
            <EmptyHistoryState detailCopy={detailCopy} />
          )}
        </div>

        <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="flex h-full flex-col justify-between gap-8">
            <PanelStat label={detailCopy.historyCount} value={String(filteredRecords.length)} />
            <PanelStat label={detailCopy.currentMode} value={isImage ? "Image" : "Video"} />
            <PanelStat label={detailCopy.storage} value={detailCopy.browserReady} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageHistoryPreview({
  records,
  toneTextClassName,
  detailCopy,
}: {
  records: GenerationRecord[];
  toneTextClassName: string;
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  const visibleRecords = records.slice(0, 3);

  return (
    <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
      {visibleRecords.map((record, index) => (
        <ImageHistoryTile
          key={record.id}
          record={record}
          detailCopy={detailCopy}
          accent={toneTextClassName}
          className={index === 0 ? "min-h-[280px] sm:row-span-2" : "min-h-[132px]"}
        />
      ))}
    </div>
  );
}

function VideoHistoryPreview({
  records,
  toneTextClassName,
  detailCopy,
}: {
  records: GenerationRecord[];
  toneTextClassName: string;
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <div className="grid gap-4">
      {records.slice(0, 3).map((record) => (
        <VideoHistoryTile
          key={record.id}
          record={record}
          accent={toneTextClassName}
          detailCopy={detailCopy}
        />
      ))}
    </div>
  );
}

function ImageHistoryTile({
  record,
  className,
  accent,
  detailCopy,
}: {
  record: GenerationRecord;
  className: string;
  accent: string;
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <button
      type="button"
      onClick={() => window.open(record.previewUrl, "_blank", "noopener,noreferrer")}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-left ${className}`}
    >
      <img
        src={record.previewUrl}
        alt={record.title}
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),transparent_30%,rgba(0,0,0,0.66)_100%)]" />
      <div className="absolute inset-x-6 bottom-6">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-[11px] uppercase tracking-[0.28em] text-white/72">{record.title}</p>
          <div className={`text-[11px] uppercase tracking-[0.28em] ${accent}`}>image</div>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">{record.prompt}</p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/48">{detailCopy.openAsset}</p>
      </div>
    </button>
  );
}

function VideoHistoryTile({
  record,
  accent,
  detailCopy,
}: {
  record: GenerationRecord;
  accent: string;
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <button
      type="button"
      onClick={() => window.open(record.previewUrl, "_blank", "noopener,noreferrer")}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 text-left"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_40%,rgba(255,255,255,0.02)_100%)]" />
      <div className="relative flex items-center gap-4">
        <div className="overflow-hidden rounded-[20px] border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={record.thumbnailUrl}
            className="h-16 w-28 object-cover"
          >
            <source src={record.previewUrl} type="video/mp4" />
          </video>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="truncate text-[11px] uppercase tracking-[0.28em] text-white/52">{record.title}</p>
            <span className={`text-[11px] uppercase tracking-[0.28em] ${accent}`}>{record.resolution}</span>
          </div>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/74">{record.prompt}</p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/42">{detailCopy.openAsset}</p>
        </div>
      </div>
    </button>
  );
}

function EmptyHistoryState({
  detailCopy,
}: {
  detailCopy: (typeof userCopy)[SupportedLanguage];
}) {
  return (
    <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.02] px-5 py-10">
      <p className="text-base font-medium text-white">{detailCopy.noHistory}</p>
      <p className="mt-3 max-w-xl text-sm leading-6 text-white/54">{detailCopy.libraryHint}</p>
    </div>
  );
}

function PanelStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 pb-6">
      <p className="text-[11px] uppercase tracking-[0.28em] text-white/34">{label}</p>
      <p className="mt-3 text-lg text-white/82">{value}</p>
    </div>
  );
}

function RailItem({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="border-b border-white/10 py-5">
      <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">{label}</p>
      <p className="mt-3 text-lg text-white/84">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/34">{hint}</p>
    </div>
  );
}

function PreviewItem({ label, description }: { label: string; description: string }) {
  return (
    <div className="border-b border-white/10 pb-5">
      <p className="text-[11px] uppercase tracking-[0.32em] text-white/30">{label}</p>
      <p className="mt-4 max-w-sm text-sm leading-7 text-white/54">{description}</p>
    </div>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3.75" y="5.25" width="16.5" height="13.5" rx="2.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 6.75 7.01 5.259a.833.833 0 0 0 .98 0L19.5 6.75"
      />
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

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.75v4.5l2.75 1.75" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907 15 6.75m-7.783 6.343L15 17.25m-7.783-4.157a2.25 2.25 0 1 1-2.467-3.734 2.25 2.25 0 0 1 2.467 3.734Zm10.033-5.109a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 15a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default UserPage;
