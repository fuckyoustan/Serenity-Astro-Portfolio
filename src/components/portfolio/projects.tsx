"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, CalendarDays } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROJECTS, formatDate, type Project } from "@/lib/portfolio";
import { Reveal } from "./reveal";

/** Chip row of tag filters derived from the project data. */
function TagFilter({
  tags,
  active,
  onSelect,
}: {
  tags: string[];
  active: string | null;
  onSelect: (tag: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
          active === null
            ? "border-foreground/25 bg-foreground/[0.06] text-foreground"
            : "border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
            active === tag
              ? "border-foreground/25 bg-foreground/[0.06] text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function ProjectDialogBody({ p }: { p: Project }) {
  return (
    <div className="nice-scroll max-h-[62vh] overflow-y-auto pr-2">
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {p.overview}
      </p>

      <h3 className="meta-mono mt-7 mb-3">What it does</h3>
      <ul className="flex flex-col gap-2.5">
        {p.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#078156] dark:bg-[#4ade80]"
              aria-hidden="true"
            />
            {f}
          </li>
        ))}
      </ul>

      {p.sections.map((s) => (
        <div key={s.heading} className="mt-7">
          <h3 className="meta-mono mb-3">{s.heading}</h3>
          {s.paragraphs?.map((par) => (
            <p
              key={par.slice(0, 40)}
              className="mb-3 text-sm leading-relaxed text-muted-foreground"
            >
              {par}
            </p>
          ))}
          {s.quote && (
            <blockquote className="card-st my-4 border-l-2 border-l-[#b45309] p-4 text-sm italic leading-relaxed text-muted-foreground dark:border-l-[#fbbf24]">
              {s.quote}
            </blockquote>
          )}
          {s.bullets && (
            <ul className="flex flex-col gap-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {s.numbered && (
            <ol className="flex flex-col gap-2">
              {s.numbered.map((n, idx) => (
                <li
                  key={n}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border font-mono text-[10px] font-semibold">
                    {idx + 1}
                  </span>
                  {n}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = React.useState<string | null>(null);
  const [openId, setOpenId] = React.useState<string | null>(null);

  const allCategories = Array.from(new Set(PROJECTS.map((p) => p.category)));
  const shown = filter
    ? PROJECTS.filter((p) => p.category === filter)
    : PROJECTS;
  const open = PROJECTS.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="pb-20 md:pb-28">
      <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center md:mb-14">
        <Reveal>
          <p className="label-mono">04 · Selected Work</p>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Six modules, one obsession.
          </h2>
        </Reveal>
        <Reveal delay={0.14} className="mt-8">
          <TagFilter tags={allCategories} active={filter} onSelect={setFilter} />
        </Reveal>
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpenId(p.id)}
                className="card-st card-hover group flex h-full w-full flex-col overflow-hidden text-left"
                aria-label={`Open details for ${p.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={p.cover}
                    alt={`${p.title} cover`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-foreground/30 group-hover:bg-foreground/[0.06] group-hover:text-foreground">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {p.summary}
                  </p>
                  <div className="mt-auto pt-4">
                    <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <CalendarDays className="h-3 w-3" aria-hidden="true" />
                      {formatDate(p.startDate)} — {formatDate(p.endDate)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span
                        key={p.category}
                        className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                      >
                        {p.category}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail dialog */}
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="max-w-2xl overflow-hidden p-0 gap-0 max-h-[88vh]">
          {open && (
            <>
              <div className="relative h-44 w-full overflow-hidden sm:h-52">
                <Image
                  src={open.cover}
                  alt={`${open.title} cover`}
                  fill
                  sizes="672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="nice-scroll overflow-y-auto px-6 pb-6">
                <DialogHeader className="px-0 pt-0 text-left">
                  <DialogTitle className="text-2xl font-extrabold tracking-tight">
                    {open.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDate(open.startDate)} — {formatDate(open.endDate)}
                    </span>
                    <span className="flex flex-wrap gap-1.5">
                      {open.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-5">
                  <ProjectDialogBody p={open} />
                </div>
                <a
                  href={open.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
