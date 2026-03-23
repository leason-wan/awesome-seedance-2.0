export type GenerationAssetType = "image" | "video";

export type GenerationRecord = {
  id: string;
  prompt: string;
  mode: GenerationAssetType;
  aspectRatio: "16:9" | "9:16";
  resolution: "720p" | "1080p";
  createdAt: string;
  previewUrl: string;
  thumbnailUrl: string;
  title: string;
  engine: string;
};

const GENERATION_HISTORY_STORAGE_KEY = "lytai-generation-history";
const MAX_GENERATION_HISTORY = 24;

const SAMPLE_RESULTS: Record<GenerationAssetType, Array<{ previewUrl: string; thumbnailUrl: string; title: string }>> = {
  video: [
    {
      previewUrl: "https://cdn.weniai.com/seedance/1-3.mp4",
      thumbnailUrl: "https://cdn.weniai.com/seedance/1-3.png",
      title: "Motion-directed fashion clip",
    },
    {
      previewUrl: "https://cdn.weniai.com/seedance/2-4-2.mp4",
      thumbnailUrl: "https://cdn.weniai.com/seedance/2-4-1.png",
      title: "Commercial product montage",
    },
    {
      previewUrl: "https://cdn.weniai.com/seedance/2-3-2.mp4",
      thumbnailUrl: "https://github.com/leason-wan/awesome-seedance-2.0/releases/download/assets-2/2-3-1.gif",
      title: "One-shot continuity scene",
    },
  ],
  image: [
    {
      previewUrl: "https://cdn.weniai.com/seedance/2-5-1.png",
      thumbnailUrl: "https://cdn.weniai.com/seedance/2-5-1.png",
      title: "Product still reference",
    },
    {
      previewUrl: "https://cdn.weniai.com/seedance/2-5-2.png",
      thumbnailUrl: "https://cdn.weniai.com/seedance/2-5-2.png",
      title: "Material detail frame",
    },
    {
      previewUrl: "https://cdn.weniai.com/seedance/2-5-3.png",
      thumbnailUrl: "https://cdn.weniai.com/seedance/2-5-3.png",
      title: "Surface direction board",
    },
  ],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isGenerationRecord(value: unknown): value is GenerationRecord {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.id === "string" &&
    typeof value.prompt === "string" &&
    (value.mode === "image" || value.mode === "video") &&
    (value.aspectRatio === "16:9" || value.aspectRatio === "9:16") &&
    (value.resolution === "720p" || value.resolution === "1080p") &&
    typeof value.createdAt === "string" &&
    typeof value.previewUrl === "string" &&
    typeof value.thumbnailUrl === "string" &&
    typeof value.title === "string" &&
    typeof value.engine === "string"
  );
}

export function loadGenerationHistory() {
  if (typeof window === "undefined") {
    return [];
  }

  const rawValue = window.localStorage.getItem(GENERATION_HISTORY_STORAGE_KEY);

  if (!rawValue) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!Array.isArray(parsed)) {
      window.localStorage.removeItem(GENERATION_HISTORY_STORAGE_KEY);
      return [];
    }

    return parsed.filter(isGenerationRecord);
  } catch {
    window.localStorage.removeItem(GENERATION_HISTORY_STORAGE_KEY);
    return [];
  }
}

export function saveGenerationHistory(records: GenerationRecord[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    GENERATION_HISTORY_STORAGE_KEY,
    JSON.stringify(records.slice(0, MAX_GENERATION_HISTORY)),
  );
}

export function createGenerationRecord(input: {
  prompt: string;
  mode: GenerationAssetType;
  aspectRatio: "16:9" | "9:16";
  resolution: "720p" | "1080p";
}): GenerationRecord {
  const samples = SAMPLE_RESULTS[input.mode];
  const sample = samples[Math.floor(Math.random() * samples.length)] ?? samples[0];

  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    prompt: input.prompt,
    mode: input.mode,
    aspectRatio: input.aspectRatio,
    resolution: input.resolution,
    createdAt: new Date().toISOString(),
    previewUrl: sample.previewUrl,
    thumbnailUrl: sample.thumbnailUrl,
    title: sample.title,
    engine: "Seedance 2.0",
  };
}

export function appendGenerationRecord(record: GenerationRecord) {
  const nextRecords = [record, ...loadGenerationHistory()];
  saveGenerationHistory(nextRecords);
  return nextRecords;
}
