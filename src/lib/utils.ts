import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes an internal path with the configured Astro base,
 * so links keep working when the site is served from a subpath.
 */
export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}${path}`;
};

/**
 * Normalizes a pathname for nav active-state comparison:
 * strips index.html, the base path and trailing slashes.
 */
export const normalizePath = (pathname: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  let stripped = pathname;
  if (base && stripped.startsWith(base)) {
    stripped = stripped.slice(base.length);
  }
  stripped = stripped.replace(/index\.html$/, '').replace(/\/+$/, '');
  return stripped === '' ? '/' : stripped;
};

/**
 * Formats the given datetime value into a localized date string ('en-US',
 * short month + year) used for experience and project date ranges.
 */
export const formatDatetime = (datetime: any) => {
  const d = new Date(datetime);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};
