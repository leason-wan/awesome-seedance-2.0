// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SERVER_ADDRESS,
	integrations: [
		react(),
		mdx(),
		tailwind(),
	],
	base: '/',
	output: 'static',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: {
			prefixDefaultLocale: false
		}
	}
});
