// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    // Deploy target can be overridden at build time:
    //   Vercel (default):      npm run build
    //   GitHub Pages:          SITE_URL=https://fuckyoustan.github.io ASTRO_BASE=/Stan-Ganteng npm run build
    site: process.env.SITE_URL || 'https://fuckyoustan.vercel.app',
    base: process.env.ASTRO_BASE || '/',
    integrations: [
        mdx(),
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        icon(),
        sitemap(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }
});
