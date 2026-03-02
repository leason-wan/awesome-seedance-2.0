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
        id: 'cookbook',
        title: { en: 'Introduction', zh: '手册简介' },
        icon: 'book',
      },
      {
        id: 'cookbook/core-capabilities',
        title: { en: 'Core Capabilities', zh: '核心能力' },
        icon: 'zap',
      },
      {
        id: 'cookbook/multi-modal',
        title: { en: 'Multi-modal Evolution', zh: '多模态演进' },
        icon: 'layers',
      },
      {
        id: 'cookbook/camera-motion',
        title: { en: 'Camera & Motion', zh: '镜头与动作' },
        icon: 'video',
      },
      {
        id: 'cookbook/templates-effects',
        title: { en: 'Templates & Effects', zh: '创意模板' },
        icon: 'layout',
      },
      {
        id: 'cookbook/story-plot',
        title: { en: 'Creativity & Plot', zh: '剧情补全' },
        icon: 'edit-3',
      },
      {
        id: 'cookbook/video-extension',
        title: { en: 'Video Extension', zh: '视频续写' },
        icon: 'trending-up',
      },
      {
        id: 'cookbook/sound-audio',
        title: { en: 'Sound & Audio', zh: '音色与音效' },
        icon: 'music',
      },
      {
        id: 'cookbook/lens-continuity',
        title: { en: 'Lens Continuity', zh: '一镜到底' },
        icon: 'repeat',
      },
      {
        id: 'cookbook/video-editing',
        title: { en: 'Video Editing', zh: '视频编辑' },
        icon: 'scissors',
      },
      {
        id: 'cookbook/music-rhythms',
        title: { en: 'Music & Rhythms', zh: '音乐卡点' },
        icon: 'activity',
      },
      {
        id: 'cookbook/emotions',
        title: { en: 'Emotional Expression', zh: '情感表现' },
        icon: 'smile',
      },
    ],
  },
];
