"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, ArrowUpRight, Github, Send, Twitter, Instagram } from "lucide-react";
import { ME, SOCIALS, NAV_SECTIONS, SITE } from "@/lib/portfolio";
import { Reveal } from "./reveal";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  GitHub: Github,
  Telegram: Send,
  "X (Twitter)": Twitter,
  Instagram: Instagram,
};

export function Contact() {
  return (
    <section id="contact" className="px-3 pb-6 md:px-6 md:pb-6">
      <Reveal>
        <div className="section-shell mx-auto max-w-[1080px] px-6 py-14 text-center md:px-10 md:py-20">
          <p className="label-mono">06 · Contact</p>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Have a device that deserves better?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Feedback, bug reports, feature ideas, or a chipset you want
            supported — everything ships faster when you tell me. Every module
            is open source, so pull requests are welcome too.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a href={`mailto:${ME.email}`} className="btn-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
            <a
              href={SOCIALS[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-3 pb-6 pt-10 md:px-6 md:pb-6">
      <Reveal>
        <div className="section-shell mx-auto max-w-[1080px] px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div className="flex flex-col items-start gap-4">
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
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Android modules for rendering, thermal, network, and battery
                performance. Magisk · KernelSU · Open source.
              </p>
            </div>

            <nav aria-label="Site pages">
              <h3 className="meta-mono mb-4">Pages</h3>
              <ul className="flex flex-col gap-2.5">
                {NAV_SECTIONS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="link-line text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="External links">
              <h3 className="meta-mono mb-4">Elsewhere</h3>
              <ul className="flex flex-col gap-2.5">
                {SOCIALS.map((s) => {
                  const Icon = SOCIAL_ICONS[s.name] ?? ArrowUpRight;
                  return (
                    <li key={s.name}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-border pt-7 md:flex-row">
            <p className="text-[13px] text-muted-foreground">
              © {year} {SITE.author} · Built with Next.js · Serenity interactive edition
            </p>
            <div className="flex items-center gap-1">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.name] ?? ArrowUpRight;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.author} on ${s.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/5 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/85 text-foreground shadow-[0_8px_24px_rgba(9,11,12,0.16)] backdrop-blur-md transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-[18px] w-[18px]" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
