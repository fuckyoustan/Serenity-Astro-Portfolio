"use client";

import * as React from "react";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Stats } from "@/components/portfolio/stats";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Blog } from "@/components/portfolio/blog";
import { Contact, Footer, BackToTop } from "@/components/portfolio/contact-footer";
import { BananaCatFollower } from "@/components/portfolio/banana-cat-follower";

/**
 * Serenity Portfolio — interactive single-page edition.
 * Rebuilt from the Serenity Astro Portfolio with a banana cat companion
 * that follows the cursor on desktop.
 */
export default function Home() {
  const [catVisible, setCatVisible] = React.useState(true);

  // Persist the banana cat toggle
  React.useEffect(() => {
    const saved = window.localStorage.getItem("banana-cat-visible");
    if (saved !== null) setCatVisible(saved === "1");
  }, []);

  const toggleCat = React.useCallback(() => {
    setCatVisible((v) => {
      const next = !v;
      window.localStorage.setItem("banana-cat-visible", next ? "1" : "0");
      return next;
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar catVisible={catVisible} onToggleCat={toggleCat} />

      <main className="mx-auto max-w-[1080px] px-6 md:px-10">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Blog />
      </main>

      <Contact />
      <Footer />
      <BackToTop />
      <BananaCatFollower visible={catVisible} />
    </div>
  );
}
