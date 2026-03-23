"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Download, PencilLine, RefreshCcw, Trash2, X } from "lucide-react";

import AuthDialog from "./AuthDialog";
import GoogleOneTap from "./GoogleOneTap";
import {
  AppShell,
  InputArea,
  homeCopy,
  type GenerationConfig,
  type ReferenceAsset,
  type SupportedLanguage,
} from "./Home";
import {
  AUTH_REQUIRED_EVENT,
  ApiError,
  clearAuthSession,
  fetchCurrentUser,
  loadAuthSession,
  saveAuthSession,
  type AuthSession,
} from "../lib/auth";
import { deleteCreateDraft, loadCreateDraft } from "../lib/createDraft";
import { disableGoogleAutoSelect } from "../lib/googleAuth";

type CreatePageProps = {
  lang?: SupportedLanguage;
};

type GeneratedVideo = {
  id: string;
  prompt: string;
  mode: GenerationConfig["mode"];
  aspectRatio: GenerationConfig["aspectRatio"];
  resolution: GenerationConfig["resolution"];
  status: "generating" | "completed";
  createdAt: number;
  preview: string;
  references: ReferenceAsset[];
};

type DownloadState = "idle" | "downloading";

type VideoGroup = {
  key: string;
  label: string;
  videos: GeneratedVideo[];
};

const createCopy = {
  en: {
    heroTitle: "Lytai Studio",
    emptyHint: "Describe your shot and click generate to create the first placeholder output.",
    rendering: "Rendering",
    ready: "Ready",
    statusGenerating: "Generating preview",
    statusCompleted: "Placeholder result ready",
    details: "Details",
    retry: "Retry",
    edit: "Edit",
    delete: "Delete",
    ratio: "Ratio",
    download: "Download",
    close: "Close",
    promptLabel: "Video Prompt",
    detailLabel: "i",
    fps: "Frame Rate",
    resolutionLabel: "Resolution",
    createdAtLabel: "Created",
    generationPrompt: "Generation Prompt",
    retrievalHint: "Reference Sources",
    referenceEmpty: "No reference assets",
  },
  zh: {
    heroTitle: "Lytai Studio",
    emptyHint: "输入描述并点击生成，开始创建第一个占位结果。",
    rendering: "生成中",
    ready: "已完成",
    statusGenerating: "正在生成预览",
    statusCompleted: "占位结果已就绪",
    details: "详细信息",
    retry: "再次生成",
    edit: "重新编辑",
    delete: "删除",
    ratio: "比例",
    download: "下载",
    close: "关闭",
    promptLabel: "视频提示词",
    detailLabel: "i",
    fps: "帧率",
    resolutionLabel: "分辨率",
    createdAtLabel: "生成时间",
    generationPrompt: "生成提示",
    retrievalHint: "参考原图/视频",
    referenceEmpty: "未使用参考素材",
  },
} as const;

function getDateGroupKey(timestamp: number) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDateGroupLabel(timestamp: number, lang: SupportedLanguage) {
  const date = new Date(timestamp);

  if (lang === "zh") {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

const CreatePage: React.FC<CreatePageProps> = ({ lang = "en" }) => {
  const copy = homeCopy[lang];
  const detailCopy = createCopy[lang];
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSyncingSession, setIsSyncingSession] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videos, setVideos] = useState<GeneratedVideo[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const hasHandledInitialQuery = useRef(false);

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

  const handleGenerate = (prompt: string, config: GenerationConfig, references: ReferenceAsset[] = []) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const createdAt = Date.now();
    const previewSeed = encodeURIComponent(`${prompt}-${id}`);

    setIsGenerating(true);
    setVideos((current) => [
      ...current,
      {
        id,
        prompt,
        mode: config.mode,
        aspectRatio: config.aspectRatio,
        resolution: config.resolution,
        status: "generating",
        createdAt,
        preview: `https://picsum.photos/seed/${previewSeed}/1200/800`,
        references,
      },
    ]);

    window.setTimeout(() => {
      setVideos((current) =>
        current.map((video) =>
          video.id === id
            ? {
                ...video,
                status: "completed",
              }
            : video,
        ),
      );
      setIsGenerating(false);
    }, 1800);
  };

  useEffect(() => {
    if (typeof window === "undefined" || hasHandledInitialQuery.current) {
      return;
    }

    let isCancelled = false;

    void (async () => {
      const params = new URLSearchParams(window.location.search);
      const prompt = params.get("prompt")?.trim();
      const draftId = params.get("draftId");

      if (draftId) {
        try {
          const draft = await loadCreateDraft(draftId);

          if (!isCancelled && draft?.prompt.trim() && draft.config) {
            handleGenerate(
              draft.prompt,
              draft.config,
              draft.references.map((reference) => ({
                id: reference.id,
                name: reference.name,
                kind: reference.kind,
                previewUrl: URL.createObjectURL(reference.file),
              })),
            );
            hasHandledInitialQuery.current = true;
            await deleteCreateDraft(draftId);

            const cleanPath = lang === "zh" ? "/zh/create" : "/create";
            window.history.replaceState({}, "", cleanPath);
            return;
          }
        } catch (error) {
          console.error(error);
        }
      }

      if (!prompt || isCancelled) {
        hasHandledInitialQuery.current = true;
        return;
      }

      const mode = params.get("mode");
      const aspectRatio = params.get("aspectRatio");
      const resolution = params.get("resolution");

      handleGenerate(
        prompt,
        {
          mode: mode === "image" ? "image" : "video",
          aspectRatio: aspectRatio === "9:16" ? "9:16" : "16:9",
          resolution: resolution === "1080p" ? "1080p" : "720p",
        },
        [],
      );

      hasHandledInitialQuery.current = true;

      const cleanPath = lang === "zh" ? "/zh/create" : "/create";
      window.history.replaceState({}, "", cleanPath);
    })();

    return () => {
      isCancelled = true;
    };
  }, [lang]);

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

  const sortedVideos = useMemo(
    () => [...videos].sort((left, right) => left.createdAt - right.createdAt),
    [videos],
  );

  const groupedVideos = useMemo<VideoGroup[]>(() => {
    const groups = new Map<string, VideoGroup>();

    sortedVideos.forEach((video) => {
      const key = getDateGroupKey(video.createdAt);
      const existingGroup = groups.get(key);

      if (existingGroup) {
        existingGroup.videos.push(video);
        return;
      }

      groups.set(key, {
        key,
        label: formatDateGroupLabel(video.createdAt, lang),
        videos: [video],
      });
    });

    return Array.from(groups.values());
  }, [lang, sortedVideos]);

  const selectedVideo = useMemo(
    () => sortedVideos.find((video) => video.id === selectedVideoId) ?? null,
    [selectedVideoId, sortedVideos],
  );

  useEffect(() => {
    if (!selectedVideo) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideoId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

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
        <main className="relative flex h-full min-h-0 flex-1 flex-col bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,209,178,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_40%)]" />

          <section className="relative flex min-h-0 flex-1 flex-col px-4 pt-6 sm:px-6">
            <div
              className="flex-1 overflow-y-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {sortedVideos.length === 0 ? (
                <div className="flex h-full min-h-56 items-center justify-center rounded-2xl">
                  <div className="text-center">
                    <h1 className="text-4xl font-semibold tracking-wide text-white">{detailCopy.heroTitle}</h1>
                    <p className="mt-6 text-xs text-white/40">{detailCopy.emptyHint}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-8 px-4">
                  {groupedVideos.map((group) => (
                    <section key={group.key} className="flex flex-col gap-4">
                      <h2 className="text-4xl font-semibold tracking-tight text-white">{group.label}</h2>
                      <div className="flex flex-col gap-4">
                        {group.videos.map((video) => (
                          <VideoCard
                            key={video.id}
                            video={video}
                            lang={lang}
                            renderingLabel={detailCopy.rendering}
                            readyLabel={detailCopy.ready}
                            statusGeneratingLabel={detailCopy.statusGenerating}
                            statusCompletedLabel={detailCopy.statusCompleted}
                            detailsLabel={detailCopy.details}
                            retryLabel={detailCopy.retry}
                            editLabel={detailCopy.edit}
                            deleteLabel={detailCopy.delete}
                            ratioLabel={detailCopy.ratio}
                            onOpenDetails={() => setSelectedVideoId(video.id)}
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </section>

          <div className="shrink-0 border-t border-white/10 bg-black/80 py-4 backdrop-blur-md">
            <InputArea
              lang={lang}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              hasKey={true}
              onConnectKey={() => setIsAuthDialogOpen(true)}
            />
          </div>
        </main>
      </AppShell>
      <AuthDialog
        lang={lang}
        open={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        onAuthenticated={handleAuthenticated}
      />
      <ResultDetailModal
        lang={lang}
        video={selectedVideo}
        copy={detailCopy}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
};

function VideoCard({
  video,
  lang,
  renderingLabel,
  readyLabel,
  statusGeneratingLabel,
  statusCompletedLabel,
  detailsLabel,
  retryLabel,
  editLabel,
  deleteLabel,
  ratioLabel,
  onOpenDetails,
}: {
  video: GeneratedVideo;
  lang: SupportedLanguage;
  renderingLabel: string;
  readyLabel: string;
  statusGeneratingLabel: string;
  statusCompletedLabel: string;
  detailsLabel: string;
  retryLabel: string;
  editLabel: string;
  deleteLabel: string;
  ratioLabel: string;
  onOpenDetails: () => void;
}) {
  const statusText = video.status === "completed" ? readyLabel : renderingLabel;
  const createdAtText = new Date(video.createdAt).toLocaleTimeString(lang === "zh" ? "zh-CN" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const modeText = video.mode === "image" ? homeCopy[lang].image : homeCopy[lang].video;

  return (
    <article className="max-w-[760px] text-white">
      <div className="mb-4 flex items-start gap-4">
        <div className="mt-1 flex h-14 w-14 shrink-0 rotate-[-8deg] items-center justify-center overflow-hidden rounded-md bg-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
          <img
            src={video.preview}
            alt={video.prompt}
            className={`h-full w-full object-cover ${
              video.status === "generating" ? "animate-pulse opacity-70" : ""
            }`}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="min-w-0 text-[17px] leading-7 text-white/92">{video.prompt}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/45">
            <span>{modeText}</span>
            <span>3.0</span>
            <span>|</span>
            <span>5s</span>
            <span>|</span>
            <button
              type="button"
              onClick={onOpenDetails}
              className="inline-flex items-center gap-1"
            >
              <span>{detailsLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded bg-[#15181b] shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <button
          type="button"
          onClick={onOpenDetails}
          className="block w-full text-left transition hover:shadow-[0_28px_72px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(63,91,111,0.38),transparent_55%),linear-gradient(180deg,#1b1f23_0%,#121416_100%)]">
            <div className="relative aspect-video w-full max-w-[420px] overflow-hidden bg-[#0d0f11] shadow-[0_16px_40px_rgba(0,0,0,0.34)]">
              <img
                src={video.preview}
                alt={video.prompt}
                className={`h-full w-full object-cover ${
                  video.status === "generating" ? "animate-pulse opacity-75" : ""
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </button>

        <div className="flex flex-wrap items-center gap-1.5 bg-black/18 px-3 py-2">
          <ActionButton label={editLabel} icon={<PencilLine className="h-3.5 w-3.5" />} />
          <ActionButton label={retryLabel} icon={<RefreshCcw className="h-3.5 w-3.5" />} />
          <ActionButton label={deleteLabel} icon={<Trash2 className="h-3.5 w-3.5" />} wide />
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-[11px] text-white/22">
        <span>{statusText}</span>
        <span>·</span>
        <span>{createdAtText}</span>
        <span>·</span>
        <span>{ratioLabel} {video.aspectRatio}</span>
      </div>
    </article>
  );
}

function ResultDetailModal({
  lang,
  video,
  copy,
  onClose,
}: {
  lang: SupportedLanguage;
  video: GeneratedVideo | null;
  copy: typeof createCopy.en;
  onClose: () => void;
}) {
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");

  useEffect(() => {
    if (!video) {
      setDownloadState("idle");
    }
  }, [video]);

  if (!video) {
    return null;
  }

  const createdAtText = new Date(video.createdAt).toLocaleString(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const referenceAssets = video.references;

  const handleDownload = async () => {
    if (downloadState === "downloading") {
      return;
    }

    try {
      setDownloadState("downloading");
      const response = await fetch(video.preview);

      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      const extension = video.mode === "image" ? "jpg" : "jpg";

      anchor.href = objectUrl;
      anchor.download = `lytai-${video.mode}-${video.id}.${extension}`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error(error);
      window.open(video.preview, "_blank", "noopener,noreferrer");
    } finally {
      setDownloadState("idle");
    }
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/80 backdrop-blur-sm">
      <button type="button" aria-label={copy.close} className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] items-stretch p-3 sm:p-5 lg:p-8">
        <div className="grid w-full overflow-hidden rounded-[28px] bg-[#050505] text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[minmax(0,1fr)_clamp(340px,30vw,510px)]">
          <div className="flex min-h-[38vh] items-center justify-center bg-[radial-gradient(circle_at_20%_15%,rgba(0,209,178,0.12),transparent_35%),linear-gradient(180deg,#0b0b0b_0%,#050505_100%)] px-4 py-6 sm:min-h-[44vh] sm:px-8 sm:py-8 lg:min-h-[min(72vh,860px)] lg:px-10">
            <div className="relative aspect-video w-full max-w-[min(1120px,100%)] overflow-hidden rounded-[22px] bg-[#0d0f11] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img src={video.preview} alt={video.prompt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <aside className="flex min-h-0 w-full flex-col border-t border-white/10 bg-[#0a0a0a] px-5 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6 lg:border-l lg:border-t-0 lg:px-8 lg:pb-10 lg:pt-8">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onClose}
                aria-label={copy.close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex h-12 items-center gap-2 rounded-2xl bg-white/8 px-6 text-[26px] font-semibold text-white transition hover:bg-white/12 disabled:cursor-wait disabled:opacity-70"
                disabled={downloadState === "downloading"}
              >
                <Download className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h2 className="text-[15px] text-white/45">{copy.promptLabel}</h2>
              <p className="mt-4 text-[22px] font-medium leading-[1.45] text-white sm:text-[26px] lg:text-[28px]">{video.prompt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-white/45">
                <span>{homeCopy[lang].video}</span>
                <span>|</span>
                <span>3.0</span>
                <span>|</span>
                <span>5s</span>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[#111315] p-5">
              <dl className="space-y-5 text-[15px]">
                <DetailRow label={ratioLabelFor(lang)} value={video.aspectRatio} />
                <DetailRow label={copy.fps} value="24" />
                <DetailRow label={copy.resolutionLabel} value={video.resolution === "1080p" ? (lang === "zh" ? "高清" : "HD") : (lang === "zh" ? "标准" : "Standard")} />
                <DetailRow label={copy.createdAtLabel} value={createdAtText} />
              </dl>
            </div>

            <div className="mt-6">
              <h3 className="text-sm text-white/45">{copy.retrievalHint}</h3>
              {referenceAssets.length > 0 ? (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [scrollbar-color:rgba(255,255,255,0.28)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-track]:bg-transparent">
                  {referenceAssets.map((asset) => (
                    <a
                      key={asset.id}
                      href={asset.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group w-[112px] shrink-0 overflow-hidden rounded-2xl transition"
                    >
                      <div className="relative aspect-square">
                        {asset.kind === "video" ? (
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
                            alt={asset.name}
                            className="h-full w-full object-cover"
                          />
                        )}
                        <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75">
                          {asset.kind}
                        </span>
                      </div>
                      <div className="truncate px-2.5 py-2 text-[11px] text-white/72 group-hover:text-white">
                        {asset.name}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-white/45">{copy.referenceEmpty}</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6">
      <dt className="text-white/45">{label}</dt>
      <dd className="text-right text-[15px] font-medium text-white">{value}</dd>
    </div>
  );
}

function ratioLabelFor(lang: SupportedLanguage) {
  return createCopy[lang].ratio;
}

function ActionButton({
  label,
  icon,
  wide = false,
}: {
  label: string;
  icon: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      className={`inline-flex h-8 items-center justify-center rounded-lg bg-white/6 px-2.5 text-xs text-white/46 transition hover:bg-white/10 hover:text-white/72 ${
        wide ? "min-w-[76px]" : ""
      }`}
    >
      <span className="mr-1.5 inline-flex items-center text-white/38">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default CreatePage;
