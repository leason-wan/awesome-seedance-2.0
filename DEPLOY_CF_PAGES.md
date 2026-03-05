# Deploy to Cloudflare Pages

## Build settings

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20` (or newer)

## Route behavior

- `/` redirects to `/en/`
- `/en/` redirects to `/en/cookbook/`
- `/zh/` redirects to `/zh/cookbook/`

These redirects are generated at build time and work on Cloudflare Pages static hosting.

## Optional: deploy with Wrangler

```bash
npm run build
npx wrangler pages deploy dist
```

This repo includes `wrangler.toml` with `pages_build_output_dir = "dist"`.
