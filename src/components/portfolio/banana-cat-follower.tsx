"use client";

/**
 * BananaCatFollower — the banana cat meme companion.
 *
 * Desktop-only (fine pointer + no reduced-motion). A fixed-position cat
 * sprite chases the cursor with spring physics: it lags a little behind,
 * leans into its direction of travel, squashes at speed, bobs when idle,
 * leaves a trail of sparkles while sprinting, and says "meow" when you
 * stop moving. Decorative only — `pointer-events: none` everywhere.
 */

import * as React from "react";

const BUBBLES = ["meow~", "meow!", "nyam~", "purrr", "meoooow", ":3"];
const DOT_COUNT = 10;
const DOT_COLOR = "#f5c542"; // banana yellow

interface CatState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  lean: number;
  squash: number;
}

export function BananaCatFollower({ visible }: { visible: boolean }) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const bubbleRef = React.useRef<HTMLDivElement | null>(null);
  const shadowRef = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [enabled, setEnabled] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(true);

  // Detect a desktop-class pointer (fine pointer = real cursor) and motion pref
  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setEnabled(mq.matches && !rm.matches);
      setReducedMotion(rm.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      rm.removeEventListener("change", sync);
    };
  }, []);

  React.useEffect(() => {
    if (!enabled || reducedMotion) return;
    const root = rootRef.current;
    if (!root) return;

    const cat: CatState = { x: -200, y: -200, vx: 0, vy: 0, lean: 0, squash: 0 };

    let targetX = -200;
    let targetY = -200;
    let started = false;
    let lastSpawn = 0;
    let idleSince = performance.now();
    let bubbleUntil = 0;
    let settleUntil = 0;
    let wasFast = false;

    // Sparkle pool
    const dots: HTMLDivElement[] = [];
    const dotLife: number[] = Array.from({ length: DOT_COUNT }, () => 0);
    const dotBorn: number[] = Array.from({ length: DOT_COUNT }, () => 0);
    const dotX: number[] = Array.from({ length: DOT_COUNT }, () => 0);
    const dotY: number[] = Array.from({ length: DOT_COUNT }, () => 0);
    for (let i = 0; i < DOT_COUNT; i++) {
      const d = document.createElement("div");
      d.className = "banana-dot";
      d.style.background = `radial-gradient(circle, #fff6cc 0%, ${DOT_COLOR} 55%, transparent 75%)`;
      document.body.appendChild(d);
      dots.push(d);
    }

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!started) {
        started = true;
        cat.x = targetX + 64;
        cat.y = targetY + 44;
      }
    };
    const onLeave = () => root.classList.remove("is-visible");
    const onEnter = () => {
      if (started) root.classList.add("is-visible");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    let prev = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000) || 0.016;
      prev = now;

      // The cat parks below-right of the cursor, like a companion
      const tx = targetX + 64;
      const ty = targetY + 44;

      // Spring chase (frame-rate independent exponential smoothing)
      const follow = 1 - Math.pow(1 - 0.14, dt * 60);
      const nx = cat.x + (tx - cat.x) * follow;
      const ny = cat.y + (ty - cat.y) * follow;
      cat.vx = (nx - cat.x) / dt;
      cat.vy = (ny - cat.y) / dt;
      cat.x = nx;
      cat.y = ny;

      const speed = Math.hypot(cat.vx, cat.vy);
      const idle = speed < 60;

      // Lean into travel direction; ease back to upright when idle
      const targetLean = Math.max(-24, Math.min(24, cat.vx * 0.028));
      cat.lean += (targetLean - cat.lean) * Math.min(1, dt * 10);

      // Squash & stretch proportional to speed
      const targetSquash = Math.min(0.14, speed / 9000);
      cat.squash += (targetSquash - cat.squash) * Math.min(1, dt * 8);

      // Idle: gentle breathing bob + occasional meow
      let bobY = 0;
      let bobRot = 0;
      if (idle && started) {
        bobY = Math.sin(now / 460) * 2.6;
        bobRot = Math.sin(now / 460) * 2.4;
        if (now - idleSince > 7200 && now > bubbleUntil) {
          const bubble = bubbleRef.current;
          if (bubble) {
            bubble.textContent =
              BUBBLES[Math.floor(Math.random() * BUBBLES.length)];
            bubble.classList.add("is-visible");
            bubbleUntil = now + 2400;
            window.setTimeout(() => {
              bubble.classList.remove("is-visible");
            }, 2400);
          }
          idleSince = now;
        }
      } else {
        idleSince = now;
      }

      // Landing wiggle after a fast dash
      if (speed > 900) wasFast = true;
      else if (wasFast && idle) {
        wasFast = false;
        settleUntil = now + 420;
        const img = imgRef.current;
        if (img) {
          img.style.animation = "none";
          void img.offsetWidth; // restart the keyframe
          img.style.animation = "cat-settle 0.42s cubic-bezier(0.22,1,0.36,1)";
        }
      }

      const settleActive = now < settleUntil;

      root.style.transform = `translate3d(${cat.x.toFixed(1)}px, ${(cat.y + bobY).toFixed(1)}px, 0)`;

      const img = imgRef.current;
      if (img && !settleActive) {
        const sx = (1 + cat.squash).toFixed(3);
        const sy = (1 - cat.squash).toFixed(3);
        img.style.transform = `rotate(${(cat.lean + bobRot).toFixed(2)}deg) scale(${sx}, ${sy})`;
      }

      // Shadow breathes with the bob
      const shadow = shadowRef.current;
      if (shadow) {
        const lift = 1 - Math.max(0, bobY) / 6;
        shadow.style.transform = `translateX(-50%) scale(${(0.9 * lift).toFixed(3)})`;
        shadow.style.opacity = String(0.7 * lift);
      }

      // Sparkle trail while sprinting
      if (speed > 700 && now - lastSpawn > 70) {
        lastSpawn = now;
        for (let i = 0; i < DOT_COUNT; i++) {
          if (dotLife[i] <= 0) {
            dotLife[i] = 0.75;
            dotBorn[i] = now;
            dotX[i] = cat.x + 20 + (Math.random() * 26 - 13);
            dotY[i] = cat.y + 30 + (Math.random() * 26 - 13);
            break;
          }
        }
      }
      for (let i = 0; i < DOT_COUNT; i++) {
        if (dotLife[i] > 0) {
          dotLife[i] -= dt;
          const age = (now - dotBorn[i]) / 750;
          const scale = 1 - Math.min(1, Math.max(0, age));
          const d = dots[i];
          d.style.opacity = String(Math.max(0, scale) * 0.9);
          d.style.transform = `translate3d(${dotX[i].toFixed(1)}px, ${dotY[i].toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
          if (dotLife[i] <= 0) d.style.opacity = "0";
        }
      }

      if (started) root.classList.add("is-visible");
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      dots.forEach((d) => d.remove());
    };
  }, [enabled, reducedMotion]);

  // Hard off-switch (navbar toggle) — hide the DOM node entirely
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.style.display = enabled && visible ? "" : "none";
  }, [enabled, visible]);

  return (
    <div id="banana-cat" ref={rootRef} aria-hidden="true">
      <div className="cat-bubble" ref={bubbleRef} />
      <div className="banana-cat-shadow" ref={shadowRef} />
      <img
        ref={imgRef}
        src="/assets/banana-cat.png"
        alt=""
        draggable={false}
        loading="eager"
      />
    </div>
  );
}
