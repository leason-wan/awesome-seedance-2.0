"use client";

import React, { useEffect, useState } from "react";

import AuthDialog from "./AuthDialog";
import GoogleOneTap from "./GoogleOneTap";
import { AppShell, InputArea, homeCopy, type SupportedLanguage } from "./Home";
import {
  AUTH_REQUIRED_EVENT,
  ApiError,
  clearAuthSession,
  fetchCurrentUser,
  loadAuthSession,
  saveAuthSession,
  type AuthSession,
} from "../lib/auth";
import { disableGoogleAutoSelect } from "../lib/googleAuth";
import {
  appendGenerationRecord,
  createGenerationRecord,
  loadGenerationHistory,
  type GenerationRecord,
} from "../lib/generationHistory";

type GenerationConfig = {
  mode: "video" | "image";
  aspectRatio: "16:9" | "9:16";
  resolution: "720p" | "1080p";
};

type CreatePageProps = {
  lang?: SupportedLanguage;
};

const createCopy = {
  en: {
    eyebrow: "Composer",
    title: "Shape the brief before the generation layer takes over.",
    description:
      "This workspace keeps the prompt, references, and control settings in one place so the output stays editable.",
    panelLabel: "Session rail",
    panelTitle: "Composer summary",
    panelBody: "Prompts should feel conversational here. Each submit writes a result card back into the feed.",
    promptLabel: "Prompt",
    modeLabel: "Mode",
    ratioLabel: "Aspect ratio",
    resolutionLabel: "Resolution",
    cookbookLabel: "Cookbook next",
    cookbookBody:
      "Need stronger prompting? Open the cookbook for camera language, reference workflows, and editing patterns.",
    cookbookCta: "Open Cookbook",
    emptyPrompt: "Write a prompt to start shaping the draft.",
    feedEyebrow: "Generation feed",
    feedTitle: "Keep the chat-style generation loop in the main workspace.",
    feedDescription:
      "Prompt messages stay on the left of the workflow, while generated image and video outputs return as structured result cards.",
    promptBubble: "Prompt",
    resultBubble: "Result",
    emptyFeedTitle: "No generations yet",
    emptyFeedBody: "Submit a prompt below to create the first result card in this conversation.",
    recentLabel: "Recent outputs",
    openAsset: "Open asset",
    createdAt: "Created",
  },
  zh: {
    eyebrow: "创作区",
    title: "先把创作意图锁定，再交给生成层继续推进。",
    description: "这个工作区把提示词、参考素材和控制项放在同一处，便于后续继续编辑和迭代。",
    panelLabel: "侧边摘要",
    panelTitle: "创作摘要",
    panelBody: "这里保留聊天式生成逻辑，每次提交后都把结果卡片写回主 feed。",
    promptLabel: "提示词",
    modeLabel: "模式",
    ratioLabel: "画幅比例",
    resolutionLabel: "分辨率",
    cookbookLabel: "下一步建议",
    cookbookBody: "如果需要更强的提示词、镜头语言和编辑方式，可以继续查看 Cookbook。",
    cookbookCta: "打开 Cookbook",
    emptyPrompt: "先写下一段提示词，再开始整理这个创作草稿。",
    feedEyebrow: "生成对话流",
    feedTitle: "把聊天式生成交互保留在主工作区里。",
    feedDescription: "提示词作为消息留在 feed 中，图片和视频结果则以结构化结果卡片回写。",
    promptBubble: "提示词",
    resultBubble: "结果",
    emptyFeedTitle: "还没有生成记录",
    emptyFeedBody: "在下方提交第一条提示词后，这个会话里就会出现第一张结果卡片。",
    recentLabel: "最近输出",
    openAsset: "打开素材",
    createdAt: "生成时间",
  },
} as const;

function readInitialState() {
  if (typeof window === "undefined") {
    return {
      prompt: "",
      mode: "video" as const,
      aspectRatio: "16:9" as const,
      resolution: "720p" as const,
    };
  }

  const params = new URLSearchParams(window.location.search);
  const prompt = params.get("prompt") ?? "";
  const mode = params.get("mode") === "image" ? "image" : "video";
  const aspectRatio = params.get("aspectRatio") === "9:16" ? "9:16" : "16:9";
  const resolution = params.get("resolution") === "1080p" ? "1080p" : "720p";

  return { prompt, mode, aspectRatio, resolution };
}

const CreatePage: React.FC<CreatePageProps> = ({ lang = "en" }) => {
  const copy = homeCopy[lang];
  const detailCopy = createCopy[lang];
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSyncingSession, setIsSyncingSession] = useState(true);
  const [draft, setDraft] = useState(readInitialState);
  const [history, setHistory] = useState<GenerationRecord[]>([]);

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
    setHistory(loadGenerationHistory());
  }, []);

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

  const handleGenerate = (prompt: string, config: GenerationConfig) => {
    const nextDraft = { prompt, ...config };
    setDraft(nextDraft);
    const nextRecord = createGenerationRecord(nextDraft);
    const nextHistory = appendGenerationRecord(nextRecord);
    setHistory(nextHistory);

    if (typeof window !== "undefined") {
      const query = new URLSearchParams(nextDraft);
      window.history.replaceState({}, "", `/create?${query.toString()}`);
    }
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
        currentPage="create"
        session={authSession}
        isSyncingSession={isSyncingSession}
        onOpenAuth={() => setIsAuthDialogOpen(true)}
        onSignOut={handleSignOut}
      >
        <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#050505] text-white">
          <div className="flex-1 overflow-y-auto px-4 pb-20 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[1500px] flex-col gap-10">
              <section className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(132,244,216,0.12),transparent_24%),linear-gradient(180deg,#090c10,#050505)] p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#84f4d8]">
                  {detailCopy.eyebrow}
                </p>
                <div className="mt-4 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
                  <div className="flex flex-col gap-6">
                    <div className="max-w-3xl">
                      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                        {detailCopy.title}
                      </h1>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58">
                        {detailCopy.description}
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-black/20 p-5 sm:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#84f4d8]">
                        {detailCopy.feedEyebrow}
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-white">{detailCopy.feedTitle}</h2>
                      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/56">
                        {detailCopy.feedDescription}
                      </p>

                      <div className="mt-6 flex flex-col gap-5">
                        {history.length > 0 ? (
                          history.map((record) => (
                            <GenerationFeedItem
                              key={record.id}
                              record={record}
                              detailCopy={detailCopy}
                              lang={lang}
                            />
                          ))
                        ) : (
                          <div className="rounded-[24px] border border-dashed border-white/10 bg-white/[0.02] px-5 py-10">
                            <p className="text-lg font-medium text-white">{detailCopy.emptyFeedTitle}</p>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-white/56">
                              {detailCopy.emptyFeedBody}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="sticky bottom-0 z-10 rounded-[28px] border border-white/10 bg-[#0a0d11]/92 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                      <InputArea
                        lang={lang}
                        hasKey={true}
                        isGenerating={false}
                        onConnectKey={() => setIsAuthDialogOpen(true)}
                        onGenerate={handleGenerate}
                        initialPrompt={draft.prompt}
                        initialMode={draft.mode}
                        initialAspectRatio={draft.aspectRatio === "16:9" || draft.aspectRatio === "9:16" ? draft.aspectRatio : "4:3"}
                        initialResolution={draft.resolution}
                        resetKey={history[0]?.id ?? "initial"}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#84f4d8]">
                        {detailCopy.panelLabel}
                      </p>
                      <h2 className="mt-3 text-2xl font-medium text-white">{detailCopy.panelTitle}</h2>
                      <p className="mt-3 text-sm leading-6 text-white/58">{detailCopy.panelBody}</p>

                      <div className="mt-6 space-y-4">
                        <DetailRow
                          label={detailCopy.promptLabel}
                          value={draft.prompt || detailCopy.emptyPrompt}
                          multiline
                        />
                        <DetailRow label={detailCopy.modeLabel} value={draft.mode === "video" ? copy.video : copy.image} />
                        <DetailRow label={detailCopy.ratioLabel} value={draft.aspectRatio} />
                        <DetailRow label={detailCopy.resolutionLabel} value={draft.resolution} />
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#84f4d8]">
                        {detailCopy.recentLabel}
                      </p>
                      <div className="mt-4 grid gap-3">
                        {history.slice(0, 3).map((record) => (
                          <button
                            key={record.id}
                            type="button"
                            onClick={() => window.open(record.previewUrl, "_blank", "noopener,noreferrer")}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-left transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                          >
                            <img
                              src={record.thumbnailUrl}
                              alt={record.title}
                              className="h-16 w-16 rounded-xl object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-white">{record.title}</p>
                              <p className="mt-1 truncate text-xs text-white/46">{record.prompt}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleOpenCookbook}
                      className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 text-left transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#84f4d8]">
                        {detailCopy.cookbookLabel}
                      </p>
                      <p className="mt-3 text-lg font-medium text-white">{detailCopy.cookbookCta}</p>
                      <p className="mt-2 text-sm leading-6 text-white/58">{detailCopy.cookbookBody}</p>
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

function formatRecordDate(value: string, lang: SupportedLanguage) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function GenerationFeedItem({
  record,
  detailCopy,
  lang,
}: {
  record: GenerationRecord;
  detailCopy: (typeof createCopy)[SupportedLanguage];
  lang: SupportedLanguage;
}) {
  const isVideo = record.mode === "video";

  return (
    <div className="grid gap-4">
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-[24px] rounded-br-md border border-white/10 bg-white/[0.06] px-5 py-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/34">{detailCopy.promptBubble}</p>
          <p className="mt-2 text-sm leading-6 text-white/82">{record.prompt}</p>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="w-full max-w-3xl overflow-hidden rounded-[24px] rounded-bl-md border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#84f4d8]">{detailCopy.resultBubble}</p>
              <p className="mt-1 text-sm font-medium text-white">{record.title}</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white/48">
              {record.engine}
            </span>
          </div>

          <div className="grid gap-4 p-4 md:grid-cols-[minmax(0,1fr)_220px]">
            <button
              type="button"
              onClick={() => window.open(record.previewUrl, "_blank", "noopener,noreferrer")}
              className="group overflow-hidden rounded-[20px] border border-white/10 bg-black text-left"
            >
              {isVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={record.thumbnailUrl}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                >
                  <source src={record.previewUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={record.previewUrl}
                  alt={record.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              )}
            </button>

            <div className="grid gap-3">
              <DetailRow label={detailCopy.modeLabel} value={isVideo ? "Video" : "Image"} />
              <DetailRow label={detailCopy.ratioLabel} value={record.aspectRatio} />
              <DetailRow label={detailCopy.resolutionLabel} value={record.resolution} />
              <DetailRow label={detailCopy.createdAt} value={formatRecordDate(record.createdAt, lang)} />
              <button
                type="button"
                onClick={() => window.open(record.previewUrl, "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/84 transition-colors hover:border-white/20 hover:bg-white/10"
              >
                {detailCopy.openAsset}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-[11px] uppercase tracking-[0.22em] text-white/34">{label}</p>
      <p className={`mt-2 text-sm text-white/78 ${multiline ? "leading-6" : ""}`}>{value}</p>
    </div>
  );
}

export default CreatePage;
