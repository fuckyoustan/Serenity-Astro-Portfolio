"use client";

import * as React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Clock, Tag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { POSTS, formatDate, type Post } from "@/lib/portfolio";
import { Reveal } from "./reveal";

/** Map markdown to styled nodes (no typography plugin needed). */
const mdComponents = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mt-8 mb-3 text-lg font-bold tracking-tight first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mt-6 mb-2 text-[15px] font-bold tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 flex flex-col gap-2">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 flex list-decimal flex-col gap-2 pl-5">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-sm leading-relaxed text-muted-foreground">
      {children}
    </li>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target={href?.startsWith("#") ? undefined : "_blank"}
      rel={href?.startsWith("#") ? undefined : "noopener noreferrer"}
      className="link-line font-medium text-foreground"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-4 border-l-2 border-border pl-4 text-sm italic leading-relaxed text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px]">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="nice-scroll my-4 overflow-x-auto rounded-xl border border-border bg-muted p-4 font-mono text-[12px] leading-relaxed">
      {children}
    </pre>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export function Blog() {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const open = POSTS.find((p) => p.id === openId) ?? null;

  return (
    <section id="blog" className="pb-20 md:pb-28">
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center md:mb-16">
        <Reveal>
          <p className="label-mono">05 · Writing</p>
        </Reveal>
        <Reveal delay={0.07}>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Notes from the system level.
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {POSTS.map((post, i) => (
          <Reveal key={post.id} delay={(i % 2) * 0.08}>
            <button
              type="button"
              onClick={() => setOpenId(post.id)}
              className="card-st card-hover group flex h-full w-full items-start gap-5 p-5 text-left md:p-6"
              aria-label={`Read ${post.title}`}
            >
              <div className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border sm:block">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-balance text-[15px] font-semibold leading-snug tracking-tight group-hover:text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readingMinutes} min read
                  </span>
                  <span>{formatDate(post.publishDate)}</span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {post.tags[0]}
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Full-post reader dialog */}
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0 max-h-[88vh]">
          {open && <PostDialogBody post={open} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function PostDialogBody({ post }: { post: Post }) {
  return (
    <div className="nice-scroll max-h-[80vh] overflow-y-auto">
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes="672px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <div className="px-6 pb-6">
        <DialogHeader className="px-0 pt-0 text-left">
          <DialogTitle className="text-balance text-xl font-extrabold leading-snug tracking-tight">
            {post.title}
          </DialogTitle>
          <DialogDescription className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
            <span>{formatDate(post.publishDate)}</span>
            <span className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
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
        <div className="mt-5 text-sm">
          <ReactMarkdown components={mdComponents}>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
