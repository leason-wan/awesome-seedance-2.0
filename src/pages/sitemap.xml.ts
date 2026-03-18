import type { APIRoute } from 'astro';

const routes = [
  '/',
  '/seedance2.0/',
  '/seedance2.0/camera-motion/',
  '/seedance2.0/core-capabilities/',
  '/seedance2.0/emotions/',
  '/seedance2.0/lens-continuity/',
  '/seedance2.0/multi-modal/',
  '/seedance2.0/music-rhythms/',
  '/seedance2.0/sound-audio/',
  '/seedance2.0/story-plot/',
  '/seedance2.0/templates-effects/',
  '/seedance2.0/video-editing/',
  '/seedance2.0/video-extension/',
  '/zh/',
  '/zh/seedance2.0/',
  '/zh/seedance2.0/camera-motion/',
  '/zh/seedance2.0/core-capabilities/',
  '/zh/seedance2.0/emotions/',
  '/zh/seedance2.0/lens-continuity/',
  '/zh/seedance2.0/multi-modal/',
  '/zh/seedance2.0/music-rhythms/',
  '/zh/seedance2.0/sound-audio/',
  '/zh/seedance2.0/story-plot/',
  '/zh/seedance2.0/templates-effects/',
  '/zh/seedance2.0/video-editing/',
  '/zh/seedance2.0/video-extension/',
];

const baseUrl = import.meta.env.SITE.replace(/\/+$/, '');

export const GET: APIRoute = () => {
  const urlEntries = routes
    .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
