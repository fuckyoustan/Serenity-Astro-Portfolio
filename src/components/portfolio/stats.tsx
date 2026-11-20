"use client";

import * as React from "react";
import { ME } from "@/lib/portfolio";
import { Reveal } from "./reveal";

/** Count-up number that starts when scrolled into view. */
function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1100;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US")}
    </span>
  );
}

export function Stats() {
  return (
    <section className="pb-20 md:pb-28" aria-label="Stats">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
        {ME.stats.map((stat, i) => (
          <Reveal key={stat.description} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center gap-1 bg-card p-6 text-center">
              <p className="text-4xl font-extrabold tracking-tight md:text-5xl">
                <CountUp value={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
