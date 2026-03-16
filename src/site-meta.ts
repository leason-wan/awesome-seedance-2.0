export const SITE_NAME = 'Lytai Studio';
export const SITE_TITLE_SUFFIX = 'Lytai Studio';
export const DEFAULT_OG_IMAGE = '/logo.svg';

export type SupportedLanguage = 'en' | 'zh';

type LocalizedText = Record<SupportedLanguage, string>;

const HOME_DESCRIPTION: LocalizedText = {
  en: 'Lytai Studio is a multimodal creative workspace for generating videos and images with prompts, reference assets, and the Seedance 2.0 cookbook.',
  zh: 'Lytai Studio 是一个多模态创作工作台，可结合提示词与参考素材生成视频和图片，并提供 Seedance 2.0 使用指南。',
};

const HOME_KEYWORDS: LocalizedText = {
  en: 'Lytai Studio, Seedance 2.0, AI video generator, AI image generator, multimodal creation, cookbook',
  zh: 'Lytai Studio, Seedance 2.0, AI 视频生成, AI 图片生成, 多模态创作, 使用指南',
};

export function getBaseUrl() {
  return import.meta.env.SITE.replace(/\/+$/, '');
}

export function toAbsoluteUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getBaseUrl()}${normalizedPath}`;
}

export function getHomeDescription(lang: SupportedLanguage) {
  return HOME_DESCRIPTION[lang];
}

export function getHomeKeywords(lang: SupportedLanguage) {
  return HOME_KEYWORDS[lang];
}

export function getLocale(lang: SupportedLanguage) {
  return lang === 'zh' ? 'zh_CN' : 'en_US';
}
