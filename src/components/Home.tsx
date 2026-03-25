"use client";

import React, { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";

import AuthDialog from "./AuthDialog";
import GoogleOneTap from "./GoogleOneTap";
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
import { saveCreateDraft } from "../lib/createDraft";
import { disableGoogleAutoSelect } from "../lib/googleAuth";

export type GenerationConfig = {
  mode: "video" | "image";
  aspectRatio: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
  resolution: "480p" | "720p" | "1080p";
  duration: "4s" | "5s" | "6s" | "7s" | "8s" | "9s" | "10s" | "11s" | "12s";
};

export type ReferenceAsset = {
  id: string;
  name: string;
  kind: "image" | "video";
  previewUrl: string;
};

export type ReferenceDraftAsset = ReferenceAsset & {
  file: File;
};

export type HomePageKey = "home" | "create" | "cookbook" | "user";
export type SupportedLanguage = "en" | "zh";

type DiscoverItem = {
  id: number;
  src: string;
  aspect: string;
};

const discoverItems: DiscoverItem[] = [
  { id: 1, src: "https://picsum.photos/seed/1/400/300", aspect: "aspect-[4/3]" },
  { id: 2, src: "https://picsum.photos/seed/2/400/600", aspect: "aspect-[2/3]" },
  { id: 3, src: "https://picsum.photos/seed/3/400/800", aspect: "aspect-[1/2]" },
  { id: 4, src: "https://picsum.photos/seed/4/400/400", aspect: "aspect-square" },
  { id: 5, src: "https://picsum.photos/seed/5/400/500", aspect: "aspect-[4/5]" },
  { id: 6, src: "https://picsum.photos/seed/6/400/700", aspect: "aspect-[4/7]" },
  { id: 7, src: "https://picsum.photos/seed/7/400/400", aspect: "aspect-square" },
  { id: 8, src: "https://picsum.photos/seed/8/400/600", aspect: "aspect-[2/3]" },
  { id: 9, src: "https://picsum.photos/seed/9/400/300", aspect: "aspect-[4/3]" },
  { id: 10, src: "https://picsum.photos/seed/10/400/500", aspect: "aspect-[4/5]" },
  { id: 11, src: "https://picsum.photos/seed/11/400/600", aspect: "aspect-[2/3]" },
  { id: 12, src: "https://picsum.photos/seed/12/400/400", aspect: "aspect-square" },
];

type HomePageProps = {
  lang?: SupportedLanguage;
};

export const homeCopy = {
  en: {
    navHome: "Home",
    navCreate: "Create",
    navCookbook: "Cookbook",
    signIn: "Sign in",
    signingIn: "Syncing...",
    signOut: "Sign out",
    account: "Account",
    guest: "Guest",
    coins: "Coins",
    vip: "VIP",
    accountHint: "Stored locally and ready for authenticated API calls.",
    subtitle: "Describe your idea and click generate to create your first video or image.",
    discover: "Discover",
    shorts: "Shorts",
    events: "Events",
    reference: "Reference",
    placeholderWithKey:
      "Upload 1-5 reference images or videos and combine people, props, outfits, or scenes. Example: use @Image1 as the first frame, @Image2 as the last frame, and follow the motion from @Video1 for a dance clip.",
    placeholderWithoutKey: "Please connect your API key to start generating...",
    video: "Video",
    image: "Image",
    referenceUploadCta: "Add",
    referenceRemove: "Remove",
  },
  zh: {
    navHome: "首页",
    navCreate: "创作",
    navCookbook: "指南",
    signIn: "登录",
    signingIn: "同步中...",
    signOut: "退出登录",
    account: "账户",
    guest: "访客",
    coins: "灵感币",
    vip: "VIP",
    accountHint: "登录信息已保存在本地，可直接用于后续鉴权接口调用。",
    subtitle: "输入描述并点击生成，开始创建第一个视频或图片。",
    discover: "发现",
    shorts: "短片",
    events: "活动",
    reference: "参考内容",
    placeholderWithKey:
      "上传 1-5 张参考图或视频，可自由组合人物、角色、道具、服装、场景等元素，定义他们之间的精彩互动。例如：@图片1 作为首帧，@图片2 作为尾帧，模仿 @视频1 的动作跳舞。",
    placeholderWithoutKey: "请先连接你的 API Key 后再开始生成...",
    video: "视频生成",
    image: "图片生成",
    referenceUploadCta: "添加",
    referenceRemove: "移除",
  },
} as const;

type MockReferenceAsset = {
  id: string;
  file: File;
  previewUrl: string;
};

export const CREATE_DRAFT_STORAGE_KEY = "lytai:create-draft";

function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  isOpen: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen, onClose, ref]);
}

const HomePage: React.FC<HomePageProps> = ({ lang = "en" }) => {
  const copy = homeCopy[lang];
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSyncingSession, setIsSyncingSession] = useState(true);

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

  const handleRedirectToCreate = async (prompt: string, config: GenerationConfig, references: ReferenceDraftAsset[]) => {
    if (typeof window === "undefined") return;
    const draftId = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    await saveCreateDraft(draftId, {
      prompt,
      config,
      references: references.map((reference) => ({
        id: reference.id,
        name: reference.name,
        kind: reference.kind,
        file: reference.file,
      })),
    });
    const query = new URLSearchParams({
      prompt,
      mode: config.mode,
      aspectRatio: config.aspectRatio,
      resolution: config.resolution,
      duration: config.duration,
      draftId,
    });
    const target = lang === "zh" ? "/zh/create" : "/create";
    window.location.href = `${target}?${query.toString()}`;
  };

  const handleAuthenticated = (session: AuthSession) => {
    saveAuthSession(session);
    setAuthSession(session);
    setIsAuthDialogOpen(false);
  };

  const handleSignOut = () => {
    disableGoogleAutoSelect();
    clearAuthSession();
    setAuthSession(null);
  };

  return (
    <>
      {!authSession && !isSyncingSession ? (
        <GoogleOneTap
          lang={lang}
          disabled={isAuthDialogOpen}
          onAuthenticated={handleAuthenticated}
        />
      ) : null}
      <AppShell
        lang={lang}
        currentPage="home"
        session={authSession}
        isSyncingSession={isSyncingSession}
        onOpenAuth={() => setIsAuthDialogOpen(true)}
        onSignOut={handleSignOut}
      >
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#050505] text-white">
          <div className="flex-1 overflow-y-auto p-6 pb-40 scroll-smooth">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
              <div className="flex min-h-56 items-center justify-center rounded-2xl">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold tracking-wide text-white">Lytai Studio</h1>
                  <p className="mt-6 text-xs text-white/40">{copy.subtitle}</p>
                </div>
              </div>
              <div className="pt-2">
                <InputArea
                  lang={lang}
                  hasKey={true}
                  isGenerating={false}
                  onConnectKey={() => {}}
                  onGenerate={handleRedirectToCreate}
                />
              </div>
              <DiscoverFeed lang={lang} />
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

function AccountControl({
  lang,
  session,
  isSyncing,
  onOpenAuth,
  onOpenUserPage,
  onSignOut,
  compact = false,
}: {
  lang: SupportedLanguage;
  session: AuthSession | null;
  isSyncing: boolean;
  onOpenAuth: () => void;
  onOpenUserPage: () => void;
  onSignOut: () => void;
  compact?: boolean;
}) {
  const copy = homeCopy[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, isMenuOpen, () => setIsMenuOpen(false));

  if (compact) {
    return (
      <button
        type="button"
        onClick={onOpenUserPage}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl p-0 text-left transition-all hover:bg-[#181818]"
        aria-label={session ? copy.account : isSyncing ? copy.signingIn : copy.signIn}
      >
        {session ? <UserAvatar user={session.user} /> : <UserIcon />}
      </button>
    );
  }

  if (!session) {
    return (
      <button
        type="button"
        onClick={onOpenAuth}
        disabled={isSyncing}
        className={`inline-flex items-center rounded-2xl border text-sm font-medium transition-all ${
          compact ? "h-12 w-12 justify-center p-0" : "gap-3 px-4 py-3"
        } ${
          isSyncing
            ? "cursor-not-allowed border-transparent bg-white/5 text-white/30"
            : "border-transparent bg-[#121212] text-white hover:bg-[#181818]"
        }`}
      >
        <UserIcon />
        {!compact ? <span>{isSyncing ? copy.signingIn : copy.signIn}</span> : null}
      </button>
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsMenuOpen((current) => !current)}
        className={`inline-flex items-center rounded-2xl text-left transition-all hover:bg-[#181818] ${
          compact ? "h-12 w-12 justify-center p-0" : "gap-3 px-4 py-3"
        }`}
      >
        <UserAvatar user={session.user} />
        {!compact ? (
          <>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{session.user.username || copy.account}</p>
              <p className="truncate text-xs text-white/40">{session.user.email ?? copy.guest}</p>
            </div>
            <ChevronDownIcon expanded={isMenuOpen} />
          </>
        ) : null}
      </button>

      {isMenuOpen ? (
        <div className="absolute bottom-full left-0 z-30 mb-3 w-[280px] rounded-3xl border border-white/10 bg-[#121212] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-3">
            <UserAvatar user={session.user} className="h-12 w-12 text-sm" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{session.user.username || copy.account}</p>
              <p className="truncate text-xs text-white/45">{session.user.email ?? copy.guest}</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">{copy.coins}</p>
              <p className="mt-2 text-lg font-semibold text-white">{session.user.coins}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">{copy.vip}</p>
              <p className="mt-2 text-lg font-semibold text-white">{session.user.vip_level}</p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-white/40">{copy.accountHint}</p>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              onSignOut();
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <LogoutIcon />
            <span>{copy.signOut}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function UserAvatar({
  user,
  className = "h-9 w-9 text-xs",
}: {
  user: AuthUser;
  className?: string;
}) {
  if (user.avatar_url) {
    return (
      <img
        src={user.avatar_url}
        alt={user.username || "User avatar"}
        className={`${className} rounded-full object-cover`}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div
      className={`${className} flex items-center justify-center rounded-full font-semibold text-black`}
    >
      {getUserInitials(user)}
    </div>
  );
}

function getUserInitials(user: AuthUser) {
  const source = (user.username || user.email || "U").trim();
  return source.slice(0, 2).toUpperCase();
}

export function AppShell({
  children,
  lang,
  currentPage,
  session,
  isSyncingSession,
  onOpenAuth,
  onSignOut,
}: {
  children: React.ReactNode;
  lang: SupportedLanguage;
  currentPage: HomePageKey;
  session: AuthSession | null;
  isSyncingSession: boolean;
  onOpenAuth: () => void;
  onSignOut: () => void;
}) {
  const handleSidebarNavigate = (page: HomePageKey) => {
    if (typeof window === "undefined") return;
    const target =
      page === "home"
        ? lang === "zh"
          ? "/zh/"
          : "/"
        : page === "create" && lang === "zh"
          ? "/zh/create"
          : page === "create"
            ? "/create"
        : page === "cookbook" && lang === "zh"
          ? "/zh/seedance2.0"
          : page === "cookbook"
            ? "/seedance2.0"
            : page === "user" && lang === "zh"
              ? "/zh/user"
              : page === "user"
                ? "/user"
            : `/${page}`;
    window.location.href = target;
  };

  const handleLanguageSwitch = () => {
    if (typeof window === "undefined") return;
    const target =
      currentPage === "home"
        ? lang === "en"
          ? "/zh/"
          : "/"
        : currentPage === "create"
          ? lang === "en"
            ? "/zh/create"
            : "/create"
        : currentPage === "cookbook"
          ? lang === "en"
            ? "/zh/seedance2.0"
            : "/seedance2.0"
          : currentPage === "user"
            ? lang === "en"
              ? "/zh/user"
              : "/user"
            : `/${currentPage}`;
    window.location.href = target;
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black font-sans text-white">
      <Sidebar
        currentPage={currentPage}
        currentLang={lang}
        onNavigate={handleSidebarNavigate}
        onLanguageSwitch={handleLanguageSwitch}
        session={session}
        isSyncing={isSyncingSession}
        onOpenAuth={onOpenAuth}
        onSignOut={onSignOut}
      />
      <div className="flex min-w-0 flex-1">{children}</div>
    </div>
  );
}

function Sidebar({
  currentPage,
  currentLang,
  onNavigate,
  onLanguageSwitch,
  session,
  isSyncing,
  onOpenAuth,
  onSignOut,
}: {
  currentPage: HomePageKey;
  currentLang: SupportedLanguage;
  onNavigate: (page: HomePageKey) => void;
  onLanguageSwitch: () => void;
  session: AuthSession | null;
  isSyncing: boolean;
  onOpenAuth: () => void;
  onSignOut: () => void;
}) {
  const copy = homeCopy[currentLang];
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(languageMenuRef, isLanguageMenuOpen, () => setIsLanguageMenuOpen(false));

  return (
    <div className="z-20 flex h-full w-16 shrink-0 flex-col border-r border-white/10 bg-[#0a0a0a] py-6">
      <div className="mb-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="h-12 w-12">
          <defs>
            <linearGradient id="monolithFront" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#0a0a0c" />
              <stop offset="100%" stopColor="#030304" />
            </linearGradient>
            <linearGradient id="monolithSide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1c1d21" />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>
            <linearGradient id="monolithTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2b2d33" />
              <stop offset="100%" stopColor="#14151a" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d1b2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00d1b2" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g>
            <ellipse cx="400" cy="560" rx="350" ry="100" fill="url(#halo)" filter="url(#glow)" />
            <path
              d="M -100 620 Q 400 520 900 620"
              fill="transparent"
              stroke="#00d1b2"
              strokeWidth="8"
              opacity="0.6"
              filter="url(#glow)"
            />
            <path
              d="M -100 620 Q 400 520 900 620"
              fill="transparent"
              stroke="#8ac2ff"
              strokeWidth="4"
              opacity="0.8"
              filter="url(#intenseGlow)"
            />
            <path
              d="M 150 581 Q 400 520 650 581"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="1"
              filter="url(#intenseGlow)"
            />
          </g>

          <g transform="translate(60, 100)">
            <polygon
              points="400,550 244.1,460 244.1,55 400,145"
              fill="url(#monolithFront)"
              stroke="#1a1a1c"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
            <polygon
              points="400,550 439,527.5 439,122.5 400,145"
              fill="url(#monolithSide)"
              stroke="#2b2d33"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
            <polygon
              points="400,145 244.1,55 283.1,32.5 439,122.5"
              fill="url(#monolithTop)"
              stroke="#3f414a"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <line x1="400" y1="145" x2="400" y2="550" stroke="#121214" strokeWidth="1" />
            <line
              x1="400"
              y1="145"
              x2="244.1"
              y2="55"
              stroke="#4a4d57"
              strokeWidth="1.5"
              filter="url(#intenseGlow)"
            />
            <line x1="400" y1="145" x2="439" y2="122.5" stroke="#3b3d45" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="flex w-full flex-col gap-4 px-2">
        <NavItem
          icon={<HomeIcon />}
          label={copy.navHome}
          expanded={false}
          active={currentPage === "home"}
          onClick={() => onNavigate("home")}
        />
        <NavItem
          icon={<SparklesIcon />}
          label={copy.navCreate}
          expanded={false}
          active={currentPage === "create"}
          onClick={() => onNavigate("create")}
        />
        <NavItem
          icon={<BookOpenIcon />}
          label={copy.navCookbook}
          expanded={false}
          active={currentPage === "cookbook"}
          onClick={() => onNavigate("cookbook")}
        />
      </div>

      <div className="mt-auto flex w-full flex-col items-center gap-4 px-2">
        <div ref={languageMenuRef} className="relative flex w-full flex-col items-center">
          {isLanguageMenuOpen ? (
            <div className="absolute bottom-full mb-2 flex min-w-[88px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-2xl">
              <LanguageMenuItem
                label="English"
                active={currentLang === "en"}
                onClick={() => {
                  setIsLanguageMenuOpen(false);
                  if (currentLang !== "en") onLanguageSwitch();
                }}
              />
              <LanguageMenuItem
                label="中文"
                active={currentLang === "zh"}
                onClick={() => {
                  setIsLanguageMenuOpen(false);
                  if (currentLang !== "zh") onLanguageSwitch();
                }}
              />
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
            className="group flex w-full items-center justify-center p-2 text-white/40 transition-colors hover:text-white/80"
            aria-label="Open language switcher"
          >
            <div className="rounded-xl p-2 transition-all group-hover:bg-white/5">
              <Languages className="h-5 w-5" strokeWidth={1.75} />
            </div>
          </button>
        </div>
        <div className="flex w-full justify-center">
          <AccountControl
            lang={currentLang}
            session={session}
            isSyncing={isSyncing}
            onOpenAuth={onOpenAuth}
            onOpenUserPage={() => onNavigate("user")}
            onSignOut={onSignOut}
            compact={true}
          />
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  expanded,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full rounded-lg py-1.5 transition-colors ${
        expanded ? "items-center gap-2.5 pl-3 pr-2" : "justify-center px-1.5"
      } ${
        active ? "bg-white/10 text-[#00d1b2]" : "text-white/40 hover:bg-white/5 hover:text-white/80"
      }`}
    >
      <div className="shrink-0 rounded-lg p-1.5 transition-all">
        {icon}
      </div>
      {expanded ? <span className="text-[11px] font-medium tracking-wide md:text-xs">{label}</span> : null}
      {!expanded ? (
        <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md border border-white/10 bg-[#141414] px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
          {label}
        </span>
      ) : null}
    </button>
  );
}

function LanguageMenuItem({
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
      className={`px-3 py-2 text-center text-xs transition-colors ${
        active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function DiscoverFeed({ lang }: { lang: SupportedLanguage }) {
  const copy = homeCopy[lang];

  return (
    <div className="mx-auto w-full max-w-[1600px] animate-fadeIn">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex w-fit items-center gap-1 rounded-lg border border-white/5 bg-white/5 p-1">
          <button
            type="button"
            className="rounded-md bg-white/10 px-5 py-1.5 text-sm font-medium text-white shadow-sm"
          >
            {copy.discover}
          </button>
          <button
            type="button"
            className="rounded-md px-5 py-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
          >
            {copy.shorts}
          </button>
          <button
            type="button"
            className="rounded-md px-5 py-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
          >
            {copy.events}
          </button>
        </div>
      </div>

      <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4 xl:columns-5">
        {discoverItems.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 break-inside-avoid"
          >
            <img
              src={item.src}
              alt="Gallery item"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.aspect}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full border border-white/30 bg-white/20" />
                <span className="text-xs font-medium text-white/90">Creator {item.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InputArea({
  lang,
  onGenerate,
  isGenerating,
  hasKey,
  onConnectKey,
}: {
  lang: SupportedLanguage;
  onGenerate: (prompt: string, config: GenerationConfig, references: ReferenceDraftAsset[]) => void;
  isGenerating: boolean;
  hasKey: boolean;
  onConnectKey: () => void;
}) {
  const copy = homeCopy[lang];
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"video" | "image">("video");
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [showAspectRatioMenu, setShowAspectRatioMenu] = useState(false);
  const [showResolutionMenu, setShowResolutionMenu] = useState(false);
  const [showDurationMenu, setShowDurationMenu] = useState(false);
  const [menuPlacement, setMenuPlacement] = useState<"top" | "bottom">("bottom");
  const [aspectRatio, setAspectRatio] = useState<GenerationConfig["aspectRatio"]>("16:9");
  const [resolution, setResolution] = useState<GenerationConfig["resolution"]>("720p");
  const [duration, setDuration] = useState<GenerationConfig["duration"]>("4s");
  const modeMenuRef = useRef<HTMLDivElement>(null);
  const modeMenuListRef = useRef<HTMLDivElement>(null);
  const aspectRatioMenuRef = useRef<HTMLDivElement>(null);
  const aspectRatioMenuListRef = useRef<HTMLDivElement>(null);
  const resolutionMenuRef = useRef<HTMLDivElement>(null);
  const resolutionMenuListRef = useRef<HTMLDivElement>(null);
  const durationMenuRef = useRef<HTMLDivElement>(null);
  const durationMenuListRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const referenceAssetsRef = useRef<MockReferenceAsset[]>([]);
  const [referenceAssets, setReferenceAssets] = useState<MockReferenceAsset[]>([]);

  useClickOutside(modeMenuRef, showModeMenu, () => setShowModeMenu(false));
  useClickOutside(aspectRatioMenuRef, showAspectRatioMenu, () => setShowAspectRatioMenu(false));
  useClickOutside(resolutionMenuRef, showResolutionMenu, () => setShowResolutionMenu(false));
  useClickOutside(durationMenuRef, showDurationMenu, () => setShowDurationMenu(false));

  useEffect(() => {
    referenceAssetsRef.current = referenceAssets;
  }, [referenceAssets]);

  useEffect(() => {
    return () => {
      referenceAssetsRef.current.forEach((asset) => URL.revokeObjectURL(asset.previewUrl));
    };
  }, []);

  useEffect(() => {
    if (!showModeMenu && !showAspectRatioMenu && !showResolutionMenu && !showDurationMenu) {
      return;
    }

    const updateMenuPlacement = () => {
      const entries = [
        [showModeMenu, modeMenuRef.current, modeMenuListRef.current],
        [showAspectRatioMenu, aspectRatioMenuRef.current, aspectRatioMenuListRef.current],
        [showResolutionMenu, resolutionMenuRef.current, resolutionMenuListRef.current],
        [showDurationMenu, durationMenuRef.current, durationMenuListRef.current],
      ] as const;
      const activeEntry = entries.find(([isOpen]) => isOpen);

      if (!activeEntry) {
        return;
      }

      const [, trigger, menu] = activeEntry;

      if (!trigger) {
        return;
      }

      const triggerRect = trigger.getBoundingClientRect();
      const menuHeight = menu?.offsetHeight ?? 96;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;

      setMenuPlacement(
        spaceBelow < menuHeight + 12 && spaceAbove > spaceBelow ? "top" : "bottom",
      );
    };

    updateMenuPlacement();
    window.addEventListener("resize", updateMenuPlacement);
    window.addEventListener("scroll", updateMenuPlacement, true);

    return () => {
      window.removeEventListener("resize", updateMenuPlacement);
      window.removeEventListener("scroll", updateMenuPlacement, true);
    };
  }, [showAspectRatioMenu, showDurationMenu, showModeMenu, showResolutionMenu]);

  const aspectRatioIcon = {
    "16:9": "M4 7h16v10H4V7zm2 2v6h12V9H6z",
    "4:3": "M5 7h14v10H5V7zm2 2v6h10V9H7z",
    "1:1": "M6 6h12v12H6V6zm2 2v8h8V8H8z",
    "3:4": "M7 5h10v14H7V5zm2 2v10h6V7H9z",
    "9:16": "M7 4h10v16H7V4zm2 2v12h6V6H9z",
    "21:9": "M3 8h18v8H3V8zm2 2v4h14v-4H5z",
  } as const;
  const aspectRatioOptions: GenerationConfig["aspectRatio"][] = ["16:9", "4:3", "1:1", "3:4", "9:16", "21:9"];
  const resolutionOptions: GenerationConfig["resolution"][] = ["480p", "720p", "1080p"];
  const durationOptions: GenerationConfig["duration"][] = ["4s", "5s", "6s", "7s", "8s", "9s", "10s", "11s", "12s"];

  const handleSubmit = () => {
    if (!prompt.trim() || isGenerating) return;
    if (!hasKey) {
      onConnectKey();
      return;
    }

    onGenerate(
      prompt,
      {
        mode,
        aspectRatio,
        resolution,
        duration,
      },
      referenceAssets.map((asset) => ({
        id: asset.id,
        name: asset.file.name,
        kind: asset.file.type.startsWith("video/") ? "video" : "image",
        previewUrl: asset.previewUrl,
        file: asset.file,
      })),
    );
    setPrompt("");
    setShowModeMenu(false);
    setShowAspectRatioMenu(false);
    setShowResolutionMenu(false);
    setShowDurationMenu(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleReferenceButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleReferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    if (selectedFiles.length === 0) {
      return;
    }

    setReferenceAssets((current) => {
      const nextFiles = selectedFiles.slice(0, Math.max(0, 5 - current.length));

      if (nextFiles.length === 0) {
        return current;
      }

      return [
        ...current,
        ...nextFiles.map((file, index) => ({
          id: `${file.name}-${file.lastModified}-${current.length + index}`,
          file,
          previewUrl: URL.createObjectURL(file),
        })),
      ];
    });

    event.target.value = "";
  };

  const handleRemoveReference = (assetId: string) => {
    setReferenceAssets((current) => {
      const assetToRemove = current.find((asset) => asset.id === assetId);

      if (assetToRemove) {
        URL.revokeObjectURL(assetToRemove.previewUrl);
      }

      return current.filter((asset) => asset.id !== assetId);
    });
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#141414] p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/20">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleReferenceChange}
        />

        <div className="flex gap-3 rounded-xl bg-black/20 p-3">
          <div className="h-24 w-[68px] shrink-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-h-full flex-col gap-2">
              {referenceAssets.map((asset) => {
                const isVideo = asset.file.type.startsWith("video/");

                return (
                  <div
                    key={asset.id}
                    title={asset.file.name}
                    className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white/5"
                  >
                    {isVideo ? (
                      <video
                        src={asset.previewUrl}
                        className="h-full w-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={asset.previewUrl}
                        alt={asset.file.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveReference(asset.id)}
                      className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black/75 text-[10px] text-white/70 opacity-0 transition group-hover:opacity-100"
                      aria-label={`${copy.referenceRemove} ${asset.file.name}`}
                    >
                      ×
                    </button>
                  </div>
                );
              })}

              {referenceAssets.length < 5 ? (
                <button
                  type="button"
                  onClick={handleReferenceButtonClick}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/5 text-lg text-white/45 transition hover:bg-white/10 hover:text-white/80"
                  aria-label={copy.referenceUploadCta}
                >
                  +
                </button>
              ) : null}
            </div>
          </div>

          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              hasKey
                ? copy.placeholderWithKey
                : copy.placeholderWithoutKey
            }
            className="h-24 flex-1 resize-none border-none bg-transparent pt-1 text-sm leading-relaxed text-white/90 outline-none placeholder:text-white/30"
            disabled={isGenerating}
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <div ref={modeMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setShowModeMenu((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#00d1b2] transition-colors hover:bg-white/10"
              >
                {mode === "video" ? (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-12 6h12a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
                <span>{mode === "video" ? copy.video : copy.image}</span>
                <svg className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showModeMenu ? (
                <div
                  ref={modeMenuListRef}
                  className={`absolute left-0 z-50 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-lg ${
                    menuPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setMode("video");
                      setShowModeMenu(false);
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                      mode === "video" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{copy.video}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("image");
                      setShowModeMenu(false);
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                      mode === "image" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{copy.image}</span>
                  </button>
                </div>
              ) : null}
            </div>

            <div ref={resolutionMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setShowResolutionMenu((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span>{resolution}</span>
                <svg className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showResolutionMenu ? (
                <div
                  ref={resolutionMenuListRef}
                  className={`absolute left-0 z-50 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-lg ${
                    menuPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  {resolutionOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setResolution(option);
                        setShowResolutionMenu(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                        resolution === option ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div ref={aspectRatioMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setShowAspectRatioMenu((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={aspectRatioIcon[aspectRatio]} />
                </svg>
                <span>{aspectRatio}</span>
                <svg className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showAspectRatioMenu ? (
                <div
                  ref={aspectRatioMenuListRef}
                  className={`absolute left-0 z-50 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-lg ${
                    menuPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  {aspectRatioOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setAspectRatio(option);
                        setShowAspectRatioMenu(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                        aspectRatio === option ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d={aspectRatioIcon[option]} />
                      </svg>
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div ref={durationMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setShowDurationMenu((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{duration}</span>
                <svg className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDurationMenu ? (
                <div
                  ref={durationMenuListRef}
                  className={`absolute left-0 z-50 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-lg ${
                    menuPlacement === "top" ? "bottom-full mb-2" : "top-full mt-2"
                  }`}
                >
                  {durationOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setDuration(option);
                        setShowDurationMenu(false);
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs transition-colors ${
                        duration === option ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                      }`}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-white/40">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              <span>40</span>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isGenerating || (!prompt.trim() && hasKey)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                isGenerating || (!prompt.trim() && hasKey)
                  ? "cursor-not-allowed bg-white/10 text-white/30"
                  : "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 hover:bg-gray-200 active:scale-95"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);

const FolderIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5A4.5 4.5 0 003 9.5v9.75A.75.75 0 003.75 20h6.75c.519 0 1.024.134 1.5.39m0-14.137C13.168 5.477 14.754 5 16.5 5A4.5 4.5 0 0121 9.5v9.75a.75.75 0 01-.75.75H13.5a2.99 2.99 0 00-1.5.39"
    />
  </svg>
);

const UserIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0"
    />
  </svg>
);

const ChevronDownIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${expanded ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H9.75m0 0 2.25-2.25M9.75 12l2.25 2.25" />
  </svg>
);

export default HomePage;
