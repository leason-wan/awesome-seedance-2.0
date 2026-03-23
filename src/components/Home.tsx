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
import { disableGoogleAutoSelect } from "../lib/googleAuth";

type GenerationConfig = {
  mode: "video" | "image";
  aspectRatio: "16:9" | "9:16";
  resolution: "720p" | "1080p";
};

export type HomePageKey = "home" | "create" | "cookbook" | "user";
export type SupportedLanguage = "en" | "zh";

type DiscoverItem = {
  id: number;
  title: {
    en: string;
    zh: string;
  };
  summary: {
    en: string;
    zh: string;
  };
  video: string;
  poster: string;
  tag: {
    en: string;
    zh: string;
  };
};

const discoverItems: DiscoverItem[] = [
  {
    id: 1,
    title: {
      en: "Motion-directed fashion clip",
      zh: "镜头驱动时尚短片",
    },
    summary: {
      en: "Use one reference still and a prompt to shape camera motion, wardrobe detail, and ambient sound in a single pass.",
      zh: "通过一张参考图和一段提示词，把镜头运动、服装细节和环境音整合进同一条创作链路。",
    },
    video: "https://cdn.weniai.com/seedance/1-3.mp4",
    poster: "https://cdn.weniai.com/seedance/1-3.png",
    tag: {
      en: "Camera + atmosphere",
      zh: "镜头 + 氛围",
    },
  },
  {
    id: 2,
    title: {
      en: "Commercial product montage",
      zh: "商业产品蒙太奇",
    },
    summary: {
      en: "Blend product stills, brand styling, and voiceover timing into a controllable ad sequence built for fast iteration.",
      zh: "把商品静帧、品牌风格和口播节奏融合成一条可控的广告片序列，适合快速迭代。",
    },
    video: "https://cdn.weniai.com/seedance/2-4-2.mp4",
    poster: "https://cdn.weniai.com/seedance/2-4-1.png",
    tag: {
      en: "Brand storytelling",
      zh: "品牌叙事",
    },
  },
  {
    id: 3,
    title: {
      en: "One-shot continuity scene",
      zh: "一镜到底连续场景",
    },
    summary: {
      en: "Reference video movement and scene transitions to keep motion coherent while the setting evolves from shot to shot.",
      zh: "参考视频的运动与转场逻辑，在场景变化中依然保持动作和镜头的连续性。",
    },
    video: "https://cdn.weniai.com/seedance/2-3-2.mp4",
    poster: "https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif",
    tag: {
      en: "Continuity control",
      zh: "连续性控制",
    },
  },
];

const capabilityItems = [
  {
    id: "multimodal",
    accent: "from-[#8ec5ff]/20 via-[#0b1018] to-[#050505]",
    title: {
      en: "Multi-modal reference",
      zh: "多模态参考",
    },
    body: {
      en: "Bring in stills, footage, and sound cues to anchor style, action, and pacing before generation starts.",
      zh: "在生成前引入图片、视频和音频线索，用于锚定画风、动作和节奏。",
    },
  },
  {
    id: "motion",
    accent: "from-[#84f4d8]/20 via-[#07110f] to-[#050505]",
    title: {
      en: "Motion and camera control",
      zh: "镜头与动作控制",
    },
    body: {
      en: "Shape tracking shots, reframing, transitions, and character rhythm with prompts that read like direction notes.",
      zh: "用接近导演分镜的提示词组织跟拍、构图变化、转场和角色节奏。",
    },
  },
  {
    id: "editing",
    accent: "from-[#ffd49a]/16 via-[#120d06] to-[#050505]",
    title: {
      en: "Editing and extension",
      zh: "编辑与续写",
    },
    body: {
      en: "Continue an existing clip, replace subjects, or restructure a sequence without restarting the whole workflow.",
      zh: "在不重做整条流程的情况下完成续写、替换主体或重组片段。",
    },
  },
] as const;

const workflowSteps = [
  {
    id: "prompt",
    number: "01",
    title: {
      en: "Write the scene",
      zh: "写下场景",
    },
    body: {
      en: "Describe intent, camera movement, and pacing in plain language.",
      zh: "用自然语言描述意图、镜头运动和节奏。",
    },
  },
  {
    id: "reference",
    number: "02",
    title: {
      en: "Attach references",
      zh: "加入参考",
    },
    body: {
      en: "Add stills, clips, or sound that should influence the output.",
      zh: "加入会影响结果的图像、片段或声音参考。",
    },
  },
  {
    id: "refine",
    number: "03",
    title: {
      en: "Generate and refine",
      zh: "生成并微调",
    },
    body: {
      en: "Review the result, adjust constraints, and iterate into a production-ready cut.",
      zh: "查看结果，调整约束条件，逐步迭代成可用成片。",
    },
  },
] as const;

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
    heroEyebrow: "Lytai Studio",
    heroTitle: "Direct your next scene with prompts, references, and motion.",
    heroDescription:
      "A multimodal workspace for controllable video and image creation, with Seedance 2.0 integrated as one of the core generation engines.",
    heroPrimary: "Start in Composer",
    heroSecondary: "Explore Cookbook",
    heroBadgeOne: "Text, image, video, and audio inputs",
    heroBadgeTwo: "Motion-aware prompt workflows",
    heroBadgeThree: "Seedance 2.0 inside the stack",
    heroPanelLabel: "Featured output",
    heroPanelTitle: "Built for controllable visual direction",
    heroPanelBody:
      "Move from prompt to reference-driven generation without leaving the main workspace.",
    capabilityEyebrow: "Capabilities",
    capabilityTitle: "Three control layers that make the system usable",
    capabilityDescription:
      "The homepage should prove what the studio does before it asks users to learn the docs.",
    workflowEyebrow: "Workflow",
    workflowTitle: "A short path from idea to first cut",
    workflowDescription:
      "The product should read like a creative tool, not a model announcement.",
    showcaseEyebrow: "Output proof",
    showcaseTitle: "Real cases instead of placeholder inspiration",
    showcaseDescription:
      "Each case demonstrates what changes when the workflow is guided by references and structured prompts.",
    cookbookEyebrow: "Cookbook",
    cookbookTitle: "Use the docs to deepen control, not to explain the brand",
    cookbookDescription:
      "Cookbook pages should help people prompt, edit, and iterate faster once they already understand the product.",
    cookbookPrimary: "Open Cookbook",
    cookbookSecondary: "View capabilities",
    finalTitle: "Start with the workspace. Learn the system as you go.",
    finalDescription:
      "Lytai Studio is the product surface. Seedance 2.0 is one of the engines powering it.",
    finalPrimary: "Open Composer",
    finalSecondary: "Read the Cookbook",
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
    heroEyebrow: "Lytai Studio",
    heroTitle: "用提示词、参考素材和镜头控制，直接开始下一条作品。",
    heroDescription: "面向视频与图像创作的多模态工作台，Seedance 2.0 作为核心生成能力之一接入其中。",
    heroPrimary: "进入创作区",
    heroSecondary: "查看 Cookbook",
    heroBadgeOne: "支持文本、图片、视频、音频输入",
    heroBadgeTwo: "面向镜头语言的提示词工作流",
    heroBadgeThree: "Seedance 2.0 已集成到能力栈",
    heroPanelLabel: "精选案例",
    heroPanelTitle: "为可控创作而构建",
    heroPanelBody: "从提示词到参考素材再到生成结果，完整创作链路都保留在同一个工作台里。",
    capabilityEyebrow: "能力结构",
    capabilityTitle: "真正决定可用性的三层控制力",
    capabilityDescription: "首页应该先证明产品能做什么，再引导用户深入文档。",
    workflowEyebrow: "工作流",
    workflowTitle: "从想法到第一版成片，只保留最短路径",
    workflowDescription: "产品首页应该像创作工具，而不是模型发布说明。",
    showcaseEyebrow: "结果证明",
    showcaseTitle: "用真实案例替代占位式灵感流",
    showcaseDescription: "每个案例都展示了参考素材和结构化提示词对结果质量的实际影响。",
    cookbookEyebrow: "Cookbook",
    cookbookTitle: "文档负责加深控制，而不是解释品牌是谁",
    cookbookDescription: "Cookbook 应帮助用户更快掌握提示词、编辑方式和迭代方法，而不是承担首页叙事。",
    cookbookPrimary: "打开 Cookbook",
    cookbookSecondary: "查看能力模块",
    finalTitle: "先进入工作台，再在使用中理解系统。",
    finalDescription: "Lytai Studio 是产品表面，Seedance 2.0 是其中一个核心引擎能力。",
    finalPrimary: "进入创作区",
    finalSecondary: "阅读 Cookbook",
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

  const handleScrollToComposer = () => {
    if (typeof window === "undefined") return;
    document.getElementById("home-composer")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpenCookbook = () => {
    if (typeof window === "undefined") return;
    window.location.href = lang === "zh" ? "/zh/seedance2.0" : "/seedance2.0";
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
          <div className="flex-1 overflow-y-auto px-4 pb-28 pt-4 scroll-smooth sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-24">
              <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(27,76,72,0.45),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(94,117,255,0.22),transparent_22%),linear-gradient(135deg,#0a0d11_0%,#050505_55%,#070707_100%)] px-5 py-6 shadow-[0_32px_120px_rgba(0,0,0,0.45)] sm:px-8 sm:py-8 xl:px-10 xl:py-10">
                <div className="pointer-events-none absolute inset-y-0 right-[18%] hidden w-px bg-gradient-to-b from-transparent via-white/12 to-transparent xl:block" />
                <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.98fr)] xl:items-end">
                  <div className="relative z-10 flex flex-col gap-8">
                    <div className="max-w-3xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#84f4d8]">
                        {copy.heroEyebrow}
                      </p>
                      <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl xl:text-[4.5rem] xl:leading-[0.94]">
                        {copy.heroTitle}
                      </h1>
                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                        {copy.heroDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleScrollToComposer}
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-[#e9ecef]"
                      >
                        {copy.heroPrimary}
                      </button>
                      <button
                        type="button"
                        onClick={handleOpenCookbook}
                        className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/88 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        {copy.heroSecondary}
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {[copy.heroBadgeOne, copy.heroBadgeTwo, copy.heroBadgeThree].map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-[0.02em] text-white/72"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <div id="home-composer" className="pt-2">
                      <InputArea
                        lang={lang}
                        hasKey={true}
                        isGenerating={false}
                        onConnectKey={() => {}}
                        onGenerate={handleRedirectToCreate}
                      />
                    </div>
                  </div>

                  <div className="relative min-w-0">
                    <div className="absolute -inset-6 rounded-[36px] bg-[radial-gradient(circle,rgba(132,244,216,0.16),transparent_56%)] blur-3xl" />
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
                      <div className="mb-3 flex items-center justify-between gap-3 px-1 pt-1">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.28em] text-[#84f4d8]">
                            {copy.heroPanelLabel}
                          </p>
                          <p className="mt-2 text-lg font-medium text-white">{copy.heroPanelTitle}</p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white/52">
                          Seedance 2.0
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          poster={discoverItems[0].poster}
                          className="aspect-[4/3] w-full object-cover"
                        >
                          <source src={discoverItems[0].video} type="video/mp4" />
                        </video>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/58">{copy.heroPanelBody}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#84f4d8]">
                    {copy.capabilityEyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {copy.capabilityTitle}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/58">{copy.capabilityDescription}</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                  {capabilityItems.map((item) => (
                    <div
                      key={item.id}
                      className={`rounded-[26px] border border-white/10 bg-gradient-to-br ${item.accent} p-5`}
                    >
                      <div className="flex h-full flex-col justify-between gap-8">
                        <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white/52">
                          {item.id}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-white">{item.title[lang]}</h3>
                          <p className="mt-3 text-sm leading-6 text-white/60">{item.body[lang]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-8 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
                <div className="max-w-lg">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#84f4d8]">
                    {copy.workflowEyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {copy.workflowTitle}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/58">{copy.workflowDescription}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {workflowSteps.map((step) => (
                    <div key={step.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#84f4d8]">
                        {step.number}
                      </p>
                      <h3 className="mt-4 text-lg font-medium text-white">{step.title[lang]}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/58">{step.body[lang]}</p>
                    </div>
                  ))}
                </div>
              </section>

              <DiscoverFeed lang={lang} />

              <section className="grid gap-6 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#84f4d8]">
                    {copy.cookbookEyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {copy.cookbookTitle}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/60">{copy.cookbookDescription}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleOpenCookbook}
                    className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-5 text-left transition-colors hover:border-white/20 hover:bg-white/5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#84f4d8]">Guides</p>
                    <p className="mt-3 text-lg font-medium text-white">{copy.cookbookPrimary}</p>
                    <p className="mt-2 text-sm leading-6 text-white/56">{copy.subtitle}</p>
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenCookbook}
                    className="rounded-[24px] border border-white/10 bg-black/30 px-5 py-5 text-left transition-colors hover:border-white/20 hover:bg-white/5"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#84f4d8]">Engine</p>
                    <p className="mt-3 text-lg font-medium text-white">{copy.cookbookSecondary}</p>
                    <p className="mt-2 text-sm leading-6 text-white/56">{copy.heroDescription}</p>
                  </button>
                </div>
              </section>

              <section className="pb-6">
                <div className="flex flex-col gap-5 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      {copy.finalTitle}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/58">{copy.finalDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleScrollToComposer}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-[#e9ecef]"
                    >
                      {copy.finalPrimary}
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenCookbook}
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/88 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      {copy.finalSecondary}
                    </button>
                  </div>
                </div>
              </section>
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
    <section className="mx-auto w-full max-w-[1600px] animate-fadeIn">
      <div className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-end">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#84f4d8]">
            {copy.showcaseEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            {copy.showcaseTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/58">{copy.showcaseDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/64">
            {copy.discover}
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/64">
            {copy.shorts}
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/64">
            Seedance 2.0
          </span>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {discoverItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
          >
            <div className="overflow-hidden border-b border-white/10 bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={item.poster}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white/52">
                  {item.tag[lang]}
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/34">
                  0{item.id}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-medium tracking-[-0.03em] text-white">{item.title[lang]}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{item.summary[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InputArea({
  lang,
  onGenerate,
  isGenerating,
  hasKey,
  onConnectKey,
  initialPrompt = "",
  initialMode = "video",
  initialAspectRatio = "4:3",
  initialResolution = "720p",
  resetKey,
}: {
  lang: SupportedLanguage;
  onGenerate: (prompt: string, config: GenerationConfig) => void;
  isGenerating: boolean;
  hasKey: boolean;
  onConnectKey: () => void;
  initialPrompt?: string;
  initialMode?: "video" | "image";
  initialAspectRatio?: "16:9" | "9:16" | "4:3";
  initialResolution?: "720p" | "1080p";
  resetKey?: string;
}) {
  const copy = homeCopy[lang];
  const [prompt, setPrompt] = useState(initialPrompt);
  const [mode, setMode] = useState<"video" | "image">(initialMode);
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"16:9" | "9:16" | "4:3">(initialAspectRatio);
  const [resolution] = useState<"720p" | "1080p">(initialResolution);
  const modeMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(modeMenuRef, showModeMenu, () => setShowModeMenu(false));

  useEffect(() => {
    setPrompt(initialPrompt);
    setMode(initialMode);
    setAspectRatio(initialAspectRatio);
    setShowModeMenu(false);
  }, [initialPrompt, initialMode, initialAspectRatio, initialResolution, resetKey]);

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
