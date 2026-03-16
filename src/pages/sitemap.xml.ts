import type { APIRoute } from 'astro';
import { SERVER_ADDRESS } from '../config';

const routes = [
  '/',
  '/cookbook/',
  '/cookbook/camera-motion/',
  '/cookbook/core-capabilities/',
  '/cookbook/emotions/',
  '/cookbook/lens-continuity/',
  '/cookbook/multi-modal/',
  '/cookbook/music-rhythms/',
  '/cookbook/sound-audio/',
  '/cookbook/story-plot/',
  '/cookbook/templates-effects/',
  '/cookbook/video-editing/',
  '/cookbook/video-extension/',
  '/zh/',
  '/zh/cookbook/',
  '/zh/cookbook/camera-motion/',
  '/zh/cookbook/core-capabilities/',
  '/zh/cookbook/emotions/',
  '/zh/cookbook/lens-continuity/',
  '/zh/cookbook/multi-modal/',
  '/zh/cookbook/music-rhythms/',
  '/zh/cookbook/sound-audio/',
  '/zh/cookbook/story-plot/',
  '/zh/cookbook/templates-effects/',
  '/zh/cookbook/video-editing/',
  '/zh/cookbook/video-extension/',
];

const baseUrl = SERVER_ADDRESS.replace(/\/+$/, '');

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`)
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
