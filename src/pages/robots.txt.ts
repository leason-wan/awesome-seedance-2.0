import type { APIRoute } from 'astro';

const baseUrl = import.meta.env.SITE.replace(/\/+$/, '');

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
