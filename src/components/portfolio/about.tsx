"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Palette, Braces, Wrench, Users, MessageSquare, Clock } from "lucide-react";
import { ME, HARD_SKILLS, SOFT_SKILLS, LANGUAGES } from "@/lib/portfolio";
import { Reveal } from "./reveal";

const HARD_ICONS: Record<string, React.ElementType> = {
  Bash: Terminal,
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
};

const SOFT_ICONS: React.ElementType[] = [Wrench, Users, MessageSquare, Clock];

export function About() {
  return (
    <section id="about" className="pb-20 md:pb-28">
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
        <Reveal>
          <p className="label-mono">02 · About</p>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Self-taught, system-obsessed.
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-6">
        <Reveal>
          <div className="card-st card-hover flex h-full flex-col gap-7 p-7 md:p-8">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {ME.aboutMe}
            </p>

            <div className="mt-auto w-full">
              <h3 className="meta-mono mb-3">Languages</h3>
              <ul className="flex flex-col">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 text-sm last:border-b-0"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.09}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {HARD_SKILLS.map((skill) => {
                const Icon = HARD_ICONS[skill.name] ?? Terminal;
                return (
                  <div
                    key={skill.name}
                    className="group flex items-start gap-4 bg-card p-5 transition-colors duration-300 hover:bg-muted"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-[15px] font-semibold tracking-tight">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="card-st card-hover flex h-full flex-col gap-4 p-7 md:p-8">
              <h3 className="meta-mono">Soft skills</h3>
              <ul className="mt-auto flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((name, i) => {
                  const Icon = SOFT_ICONS[i % SOFT_ICONS.length];
                  return (
                    <motion.li
                      key={name}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      {name}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
