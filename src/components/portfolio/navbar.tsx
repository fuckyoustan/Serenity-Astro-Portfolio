"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Cat, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_SECTIONS, ME } from "@/lib/portfolio";

/**
 * Floating pill navbar — glassy, fixed, never hides on scroll.
 * Includes scroll-spy active link, theme toggle, and the banana cat
 * companion toggle (desktop only).
 */
export function Navbar({
  catVisible,
  onToggleCat,
}: {
  catVisible: boolean;
  onToggleCat: () => void;
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  // Scroll state + scroll-spy over section ids
  React.useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const probe = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-nav"
      className={`fixed inset-x-0 top-3 z-40 px-3 md:top-4 md:px-6 ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <nav
        className={`nav-shell mx-auto flex w-full max-w-[1080px] items-center justify-between rounded-full py-2 pl-4 pr-2 ${
          scrolled
            ? "border border-border bg-background/70 shadow-[0_1px_2px_rgba(9,11,12,0.05),0_10px_32px_rgba(9,11,12,0.09)] backdrop-blur-2xl"
            : "border border-border bg-background/80 backdrop-blur-md"
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Stan, back to home"
        >
          <span
            className="flex h-8 w-8 items-center justify-center transition-transform duration-300 group-hover:-rotate-[10deg]"
            aria-hidden="true"
          >
            <svg className="h-7 w-7" viewBox="0 0 300 300" focusable="false">
              <path
                d="M38.294,109.388c0,0,22.771-2.883,22.771,26.215c0,29.098-1.547,141.917,168.292,84.193c0,0-45.12-3.389-63.265-23.863c0,0,42.687-1.746,61.249-60.214C245.904,77.25,270,83.462,270,83.462s-77.435-29.359-114.884,5.898c-37.449,35.256-33.567,37.984-46.541,32.558c-12.973-5.426-20.315-37.41-47.602-34.984C33.686,89.36,38.294,109.388,38.294,109.388z"
                fill="#F87EA1"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-[15px] font-bold tracking-tight">Stan</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-foreground/[0.06] text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          {/* Banana cat companion toggle — desktop only */}
          <button
            type="button"
            onClick={onToggleCat}
            aria-pressed={catVisible}
            title={
              catVisible
                ? "Banana cat: following your cursor (on)"
                : "Banana cat: hidden (off)"
            }
            aria-label="Toggle the banana cat cursor companion"
            className={`hidden h-10 w-10 items-center justify-center rounded-full transition-colors md:flex ${
              catVisible
                ? "bg-[#f5c542]/25 text-[#b8860b] dark:text-[#f5c542]"
                : "text-foreground hover:bg-foreground/5"
            }`}
          >
            <Cat className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          <a
            href={`mailto:${ME.email}`}
            aria-label={`Email ${ME.name}`}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:flex"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Switch theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 w-full max-w-[1080px] rounded-3xl border border-border bg-background/95 p-2 shadow-[0_16px_48px_rgba(9,11,12,0.14)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_SECTIONS.map((item) => {
                const id = item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                        active === id
                          ? "bg-foreground/[0.06] text-foreground"
                          : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  onClick={onToggleCat}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  <Cat className="h-4 w-4" aria-hidden="true" />
                  Banana cat companion: {catVisible ? "on" : "off"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
