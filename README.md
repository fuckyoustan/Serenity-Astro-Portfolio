# Serenity Astro Portfolio

A free and open-source portfolio and blog template built with Astro 5, Tailwind CSS, and MDX

**Live demo:** <https://fuckyoustan.vercel.app>

<a href="https://astro.build"><img src="https://astro.badg.es/v2/built-with-astro/tiny.svg" alt="Built with Astro" width="120" height="20"></a>

## Features

- Built on Astro v5, with view transitions between pages
- Light and dark mode, and the theme you pick survives navigation
- MDX blog with tags, cover images, and per-post Open Graph metadata
- Projects as a content collection, each with its own detail page
- Tailwind CSS plus shadcn-style React components
- TypeScript across the whole codebase
- Sitemap generated at build time
- Responsive from phone to desktop

## Getting started

Prerequisites: Node.js 18 or higher, and npm.

```sh
git clone https://github.com/fuckyoustan/Serenity-Astro-Portfolio.git
cd Serenity-Astro-Portofolio
npm install
npm run dev
```

Then open <http://localhost:4321>. `npm run build` runs `astro check` and produces the static site in `dist/`; `npm run preview` serves that build locally.

## Project structure

| Path | What it holds |
| --- | --- |
| `src/config.ts` | All personal configuration: SITE, ME, SOCIALS |
| `src/content/posts/` | Blog posts as `.mdx`, covers in `posts/images/` |
| `src/content/projects/` | Projects as `.mdx`, covers in `projects/images/` |
| `src/content/config.ts` | The schemas for both content collections |
| `src/data/` | Menu, jobs, education, skills, and languages |
| `src/components/` | Astro components, plus the React UI pieces |
| `src/layouts/` | The base layout, head, and theme script |
| `src/pages/` | Routes: home, projects, blog, and 404 |
| `src/lib/` | Utilities, including `withBase()` for base-path-safe links |
| `src/styles/` | Global styles |
| `src/assets/`, `src/icons/` | Images and SVG icons |
| `public/` | Static files served as-is |
| `tailwind.config.mjs` | Tailwind setup and the color tokens |

## Configuration

Edit `src/config.ts`. It has three sections.

### SITE

Site-level metadata used in the head and by search engines.

| Property | Type | Description |
| --- | --- | --- |
| `website` | string | Your deployed URL |
| `title` | string | Site title used in the header and meta tags |
| `description` | string | Site description for search engines |
| `tags` | string[] | Keywords |
| `ogImage` | string | Image for social shares |
| `logo`, `logoText` | string | The brand mark in the header |
| `lang` | string | Page language |
| `favicon` | string | Favicon path |
| `repository` | string | URL of this repository |
| `author` | string | Your name |
| `profile` | string | URL of your online profile |

### ME

Your name, handle, profession, profile picture, the profile facts shown on the home page, contact info, and the about text.

### SOCIALS

A list of `{ name, url, icon, show }` entries. Icons live in `src/icons/`. Set `show: false` for platforms you do not use.

## Writing a blog post

Create a `.mdx` file in `src/content/posts/`:

```mdx
---
title: "My post title"
description: "One or two sentences, shown on the blog list and in search results."
publishDate: 2026-11-10T11:30:00
tags: ["Android", "Module Development"]
cover:
  src: ./images/my-post.png
  alt: "What the cover shows"
---
```

Optional fields: `updateDate`, `author`, `relatedPosts`.

Put the cover in `src/content/posts/images/`. The blog lists posts newest first, sorted by `publishDate`; give same-day posts different times to control their order.

For internal links, use the `withBase()` helper so links keep working when the site is served from a subpath:

```mdx
import {withBase} from "@/lib/utils";

Read my <a href={withBase('/projects')}>projects page</a> or
<a href={withBase('/blog/magisk-module-anatomy/')}>Anatomy of a Magisk module</a>.
```

## Adding a project

Create a `.mdx` file in `src/content/projects/` with `title`, `summary`, `tags`, `startDate`, `endDate`, `url`, and `cover`, plus an optional `ogImage`. Covers go in `src/content/projects/images/`.

## Deployment

The demo deploys to Vercel automatically on every push to `main`. The build can also target other hosts (see `astro.config.mjs`):

```sh
# Vercel or any root-domain host (default)
npm run build

# GitHub Pages under a subpath
SITE_URL=https://<user>.github.io ASTRO_BASE=<repo-name> npm run build
```

`withBase()` in `src/lib/utils.ts` prefixes internal links with `ASTRO_BASE`, so the same build works from any path. Any static host can serve the `dist/` folder.

## Contributing

Issues and pull requests are welcome at [github.com/fuckyoustan/Stan-Ganteng](https://github.com/fuckyoustan/Stan-Ganteng).

## License

MIT. See [LICENSE](LICENSE).
