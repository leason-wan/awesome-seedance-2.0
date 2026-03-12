"use client";

import React, { useEffect, useRef, useState } from "react";

type GenerationConfig = {
  mode: "video" | "image";
  aspectRatio: "16:9" | "9:16";
  resolution: "720p" | "1080p";
};

type HomePageKey = "home" | "create" | "cookbook" | "assets";
type SupportedLanguage = "en" | "zh";

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

const homeCopy = {
  en: {
    navHome: "Home",
    navCreate: "Create",
    navCookbook: "Cookbook",
    navAssets: "Assets",
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
  },
  zh: {
    navHome: "首页",
    navCreate: "创作",
    navCookbook: "指南",
    navAssets: "素材",
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
  },
} as const;

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

  const handleRedirectToCreate = (prompt: string, config: GenerationConfig) => {
    if (typeof window === "undefined") return;
    const query = new URLSearchParams({
      prompt,
      mode: config.mode,
      aspectRatio: config.aspectRatio,
      resolution: config.resolution,
    });
    window.location.href = `/create?${query.toString()}`;
  };

  return (
    <AppShell lang={lang}>
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
  );
};

function AppShell({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: SupportedLanguage;
}) {
  const handleSidebarNavigate = (page: HomePageKey) => {
    if (typeof window === "undefined") return;
    const target =
      page === "home"
        ? lang === "zh"
          ? "/zh/"
          : "/"
        : page === "cookbook" && lang === "zh"
          ? "/zh/cookbook"
          : `/${page}`;
    window.location.href = target;
  };

  const handleLanguageSwitch = () => {
    if (typeof window === "undefined") return;
    window.location.href = lang === "en" ? "/zh/" : "/";
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black font-sans text-white">
      <Sidebar
        currentPage="home"
        currentLang={lang}
        onNavigate={handleSidebarNavigate}
        onLanguageSwitch={handleLanguageSwitch}
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
}: {
  currentPage: HomePageKey;
  currentLang: SupportedLanguage;
  onNavigate: (page: HomePageKey) => void;
  onLanguageSwitch: () => void;
}) {
  const copy = homeCopy[currentLang];

  const [isExpanded, setIsExpanded] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(languageMenuRef, isLanguageMenuOpen, () => setIsLanguageMenuOpen(false));

  return (
    <div
      className={`z-20 flex h-full shrink-0 flex-col border-r border-white/10 bg-[#0a0a0a] py-6 transition-[width] duration-200 ${
        isExpanded ? "w-40" : "w-16"
      }`}
    >
      <div className={`mb-10 flex items-center ${isExpanded ? "justify-between px-3" : "justify-center"}`}>
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

        {isExpanded ? (
          <button
            type="button"
            onClick={() => {
              setIsExpanded(false);
              setIsLanguageMenuOpen(false);
            }}
            className="rounded-lg p-2 text-white/40 transition-colors hover:bg-white/5 hover:text-white/80"
            aria-label="Collapse sidebar"
          >
            <PanelIcon collapsed={false} />
          </button>
        ) : null}
      </div>

      {!isExpanded ? (
        <div className="mb-6 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="rounded-lg p-2 text-white/40 transition-colors hover:bg-white/5 hover:text-white/80"
            aria-label="Expand sidebar"
          >
            <PanelIcon collapsed={true} />
          </button>
        </div>
      ) : null}

      <div className="flex w-full flex-col gap-4 px-2">
        <NavItem
          icon={<HomeIcon />}
          label={copy.navHome}
          expanded={isExpanded}
          active={currentPage === "home"}
          onClick={() => onNavigate("home")}
        />
        <NavItem
          icon={<SparklesIcon />}
          label={copy.navCreate}
          expanded={isExpanded}
          active={currentPage === "create"}
          onClick={() => onNavigate("create")}
        />
        <NavItem
          icon={<BookOpenIcon />}
          label={copy.navCookbook}
          expanded={isExpanded}
          active={currentPage === "cookbook"}
          onClick={() => onNavigate("cookbook")}
        />
        <NavItem
          icon={<FolderIcon />}
          label={copy.navAssets}
          expanded={isExpanded}
          active={currentPage === "assets"}
          onClick={() => onNavigate("assets")}
        />
      </div>

      <div className="mt-auto flex w-full flex-col items-center gap-4">
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
            className={`group flex w-full items-center p-2 text-white/40 transition-colors hover:text-white/80 ${
              isExpanded ? "gap-3 pl-3 pr-2 md:pl-4 md:pr-2" : "justify-center"
            }`}
            aria-label="Open language switcher"
          >
            <div className="rounded-xl p-2 transition-all group-hover:bg-white/5">
              <GlobeIcon />
            </div>
            {isExpanded ? (
              <span className="text-[11px] font-medium tracking-wide md:text-xs">
                {currentLang === "en" ? "English" : "中文"}
              </span>
            ) : null}
          </button>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-sm">
          <div className="h-2 w-2 rounded-full bg-white/40" />
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

function InputArea({
  lang,
  onGenerate,
  isGenerating,
  hasKey,
  onConnectKey,
}: {
  lang: SupportedLanguage;
  onGenerate: (prompt: string, config: GenerationConfig) => void;
  isGenerating: boolean;
  hasKey: boolean;
  onConnectKey: () => void;
}) {
  const copy = homeCopy[lang];
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"video" | "image">("video");
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"16:9" | "9:16" | "4:3">("4:3");
  const [resolution] = useState<"720p" | "1080p">("720p");
  const modeMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(modeMenuRef, showModeMenu, () => setShowModeMenu(false));

  const aspectRatioIcon = {
    "16:9": "M4 7h16v10H4V7zm2 2v6h12V9H6z",
    "4:3": "M5 7h14v10H5V7zm2 2v6h10V9H7z",
    "9:16": "M7 4h10v16H7V4zm2 2v12h6V6H9z",
  } as const;

  const handleSubmit = () => {
    if (!prompt.trim() || isGenerating) return;
    if (!hasKey) {
      onConnectKey();
      return;
    }

    onGenerate(prompt, {
      mode,
      aspectRatio: aspectRatio === "4:3" ? "16:9" : aspectRatio,
      resolution,
    });
    setPrompt("");
    setShowModeMenu(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#141414] p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/20">
        <div className="flex gap-4">
          <button
            type="button"
            className="-rotate-2 flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-white/40 transition-all hover:rotate-0 hover:border-white/40 hover:bg-white/10 hover:text-white/80"
          >
            <span className="mb-1 text-xl font-light leading-none">+</span>
            <span className="text-[10px] tracking-wider">{copy.reference}</span>
          </button>

          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              hasKey
                ? copy.placeholderWithKey
                : copy.placeholderWithoutKey
            }
            className="h-20 flex-1 resize-none border-none bg-transparent text-sm leading-relaxed text-white/90 outline-none placeholder:text-white/30"
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
                <div className="absolute left-0 top-full z-20 mt-2 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-lg">
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

            <button
              type="button"
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
              <span>Veo 3.0</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setAspectRatio((current) =>
                  current === "4:3" ? "16:9" : current === "16:9" ? "9:16" : "4:3"
                )
              }
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d={aspectRatioIcon[aspectRatio]} />
              </svg>
              <span>{aspectRatio}</span>
            </button>

            <button
              type="button"
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
              <span>5s</span>
            </button>
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

const GlobeIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3a15.3 15.3 0 010 18m0-18a15.3 15.3 0 000 18"
    />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const PanelIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
    {collapsed ? <path d="m13 12 3-3v6l-3-3Z" fill="currentColor" stroke="none" /> : <path d="m11 12 3 3V9l-3 3Z" fill="currentColor" stroke="none" />}
  </svg>
);

export default HomePage;
