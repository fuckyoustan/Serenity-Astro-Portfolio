/** @type {import('tailwindcss').Config} */
export default {
    // Class-based dark mode so the theme toggle in the navbar can switch it.
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1080px",
                xl: "1160px"
            },
            padding: {
                DEFAULT: '1.5rem',
                md: '2.5rem',
            },
        },
        extend: {
            fontFamily: {
                // Inter everywhere: the reference site's neo-grotesque identity.
                // Display type carries the personality via weight (800) and
                // tight tracking, not a second family.
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                // Mono for micro-labels and metadata: the uppercase
                // letter-spaced motif borrowed from the reference footer.
                mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            colors: {
                // Semantic tokens (RGB channels) so light and dark themes stay
                // complete and consistent by construction. Values replicated
                // from the Instafel reference (see work/instafel-analysis/tokens.json).
                paper: 'rgb(var(--c-paper) / <alpha-value>)',
                surface: 'rgb(var(--c-surface) / <alpha-value>)',
                mutes: 'rgb(var(--c-mutes) / <alpha-value>)',
                ink: 'rgb(var(--c-ink) / <alpha-value>)',
                muted: 'rgb(var(--c-muted) / <alpha-value>)',
                line: 'rgb(var(--c-line) / <alpha-value>)',
                accent: 'rgb(var(--c-accent) / <alpha-value>)',
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
