"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, MapPin } from "lucide-react";
import { JOBS, EDUCATION, formatDate } from "@/lib/portfolio";
import { Reveal } from "./reveal";

interface JobProps {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
}

/** Expandable job row with animated goal list. */
function JobCard({ job, index }: { job: JobProps; index: number }) {
  const [open, setOpen] = React.useState(index === 0);

  return (
    <Reveal delay={index * 0.08}>
      <div className="card-st card-hover overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start gap-4 p-6 text-left md:p-7"
        >
          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
            <Briefcase className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-[15px] font-semibold tracking-tight">
                {job.title}
              </h3>
              {job.currentJob && (
                <span className="flex items-center gap-1.5 rounded-full bg-[#078156]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#078156] dark:bg-[#4ade80]/15 dark:text-[#4ade80]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#078156] dark:bg-[#4ade80]" />
                  Current
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {job.company} · {formatDate(job.startDate)} —{" "}
              {job.currentJob ? "Present" : job.endDate ? formatDate(job.endDate) : ""}
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {job.description}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 text-muted-foreground"
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-2.5 border-t border-border px-6 py-5 md:px-7">
                {job.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40"
                      aria-hidden="true"
                    />
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="pb-20 md:pb-28">
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
        <Reveal>
          <p className="label-mono">03 · Experience</p>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Where the modules come from.
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col gap-5">
        {JOBS.map((job, i) => (
          <JobCard key={job.title} job={job} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.school} delay={0.1 + i * 0.08}>
            <div className="card-st card-hover flex h-full items-start gap-4 p-6 md:p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {edu.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.school} · {formatDate(edu.startDate)} —{" "}
                  {edu.currentUni ? "Present" : ""}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {edu.location}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
