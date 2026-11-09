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
                // Editorial serif for display type: the "elegant" half of the identity.
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                // Warm geometric sans for body: readable, and not an AI-default pick.
                sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
                // Mono for micro-labels and metadata: the editorial gallery motif.
                mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            colors: {
                // Semantic tokens (RGB channels) so light and dark themes stay
                // complete and consistent by construction.
                paper: 'rgb(var(--c-paper) / <alpha-value>)',
                surface: 'rgb(var(--c-surface) / <alpha-value>)',
                ink: 'rgb(var(--c-ink) / <alpha-value>)',
                muted: 'rgb(var(--c-muted) / <alpha-value>)',
                line: 'rgb(var(--c-line) / <alpha-value>)',
                gold: 'rgb(var(--c-gold) / <alpha-value>)',
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
