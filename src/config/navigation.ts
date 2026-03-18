export interface NavItem {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  icon?: string;
}

export interface NavGroup {
  title: {
    en: string;
    zh: string;
  };
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: { en: 'SEEDANCE 2.0 COOKBOOK', zh: 'Seedance 2.0 用户手册' },
    items: [
      {
        id: 'seedance2.0',
        title: { en: 'Introduction', zh: '手册简介' },
        icon: 'book',
      },
      {
        id: 'seedance2.0/core-capabilities',
        title: { en: 'Core Capabilities', zh: '核心能力' },
        icon: 'zap',
      },
      {
        id: 'seedance2.0/multi-modal',
        title: { en: 'Multi-modal Evolution', zh: '多模态演进' },
        icon: 'layers',
      },
      {
        id: 'seedance2.0/camera-motion',
        title: { en: 'Camera & Motion', zh: '镜头与动作' },
        icon: 'video',
      },
      {
        id: 'seedance2.0/templates-effects',
        title: { en: 'Templates & Effects', zh: '创意模板' },
        icon: 'layout',
      },
      {
        id: 'seedance2.0/story-plot',
        title: { en: 'Creativity & Plot', zh: '剧情补全' },
        icon: 'edit-3',
      },
      {
        id: 'seedance2.0/video-extension',
        title: { en: 'Video Extension', zh: '视频续写' },
        icon: 'trending-up',
      },
      {
        id: 'seedance2.0/sound-audio',
        title: { en: 'Sound & Audio', zh: '音色与音效' },
        icon: 'music',
      },
      {
        id: 'seedance2.0/lens-continuity',
        title: { en: 'Lens Continuity', zh: '一镜到底' },
        icon: 'repeat',
      },
      {
        id: 'seedance2.0/video-editing',
        title: { en: 'Video Editing', zh: '视频编辑' },
        icon: 'scissors',
      },
      {
        id: 'seedance2.0/music-rhythms',
        title: { en: 'Music & Rhythms', zh: '音乐卡点' },
        icon: 'activity',
      },
      {
        id: 'seedance2.0/emotions',
        title: { en: 'Emotional Expression', zh: '情感表现' },
        icon: 'smile',
      },
    ],
  },
];
