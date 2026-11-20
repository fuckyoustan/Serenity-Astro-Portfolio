"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Send, Twitter, Instagram } from "lucide-react";
import { ME, SOCIALS } from "@/lib/portfolio";
import { Reveal } from "./reveal";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  GitHub: Github,
  Telegram: Send,
  "X (Twitter)": Twitter,
  Instagram: Instagram,
};

function SocialRow() {
  return (
    <div className="flex items-center gap-1.5">
      {SOCIALS.map((s) => {
        const Icon = SOCIAL_ICONS[s.name] ?? ArrowUpRight;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ME.name} on ${s.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/5 hover:text-foreground"
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

/** Profile card with pointer-driven 3D tilt + floating parallax chips. */
function TiltCard() {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const innerRef = React.useRef<HTMLDivElement | null>(null);
  const chipA = React.useRef<HTMLDivElement | null>(null);
  const chipB = React.useRef<HTMLDivElement | null>(null);
  const chipC = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let active = false;

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (!active) {
        active = true;
        wrap.classList.add("is-tilting");
      }
      raf = requestAnimationFrame(() => {
        inner.style.transform = `rotateX(${(-ny * 8).toFixed(2)}deg) rotateY(${(nx * 8).toFixed(2)}deg)`;
        inner.style.transition = "transform 0.08s linear";
        if (chipA.current)
          chipA.current.style.transform = `translate3d(${nx * -14}px, ${ny * -10}px, 0)`;
        if (chipB.current)
          chipB.current.style.transform = `translate3d(${nx * 16}px, ${ny * 12}px, 0)`;
        if (chipC.current)
          chipC.current.style.transform = `translate3d(${nx * -8}px, ${ny * 8}px, 0)`;
      });
    };
    const onLeave = () => {
      active = false;
      wrap.classList.remove("is-tilting");
      cancelAnimationFrame(raf);
      inner.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
      for (const c of [chipA, chipB, chipC]) {
        if (c.current) c.current.style.transform = "translate3d(0, 0, 0)";
      }
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ perspective: "900px" }}
      data-tilt="8"
    >
      {/* Floating chips */}
      <div
        ref={chipA}
        className="absolute -left-3 top-6 z-10 hidden transition-transform duration-300 sm:flex"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold shadow-[0_8px_24px_rgba(9,11,12,0.08)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#078156] dark:bg-[#4ade80]" />
          Open source
        </span>
      </div>
      <div
        ref={chipB}
        className="absolute -right-4 top-16 z-10 hidden transition-transform duration-300 sm:flex"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold shadow-[0_8px_24px_rgba(9,11,12,0.08)]">
          Magisk · KernelSU
        </span>
      </div>
      <div
        ref={chipC}
        className="absolute -bottom-3 left-6 z-10 hidden transition-transform duration-300 md:flex"
        aria-hidden="true"
      >
        <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold shadow-[0_8px_24px_rgba(9,11,12,0.08)]">
          2,683 happy users
        </span>
      </div>

      {/* The card */}
      <div
        ref={innerRef}
        className="card-st relative p-3 shadow-[0_1px_2px_rgba(9,11,12,0.05),0_24px_64px_rgba(9,11,12,0.12)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src={ME.profileImage}
            alt="Portrait of Stan"
            className="aspect-[4/5] w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-2.5 pb-1.5 pt-4">
          <div>
            <p className="text-base font-bold tracking-tight">{ME.name}</p>
            <p className="text-sm text-muted-foreground">{ME.handle}</p>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#078156] dark:bg-[#4ade80]" />
            </span>
            Available
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <p className="label-mono">{ME.profession}</p>
        </Reveal>

        <Reveal delay={0.07}>
          <h1 className="text-gradient text-gradient-shimmer mt-5 text-balance text-[44px] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-6xl md:text-[72px]">
            {ME.heroTitle}
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {ME.heroText}
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a href="#projects" className="btn-primary">
              View projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={`mailto:${ME.email}`} className="btn-ghost">
              Email me
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-9">
            <SocialRow />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mx-auto mt-16 w-full max-w-[340px] px-6 md:mt-20">
        <TiltCard />
      </Reveal>

      {/* Scroll hint */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="label-mono">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-lg leading-none"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
