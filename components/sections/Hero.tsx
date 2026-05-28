"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGE_PATH = "/images/qterra_hero_person.png";
const words = ["Results.", "Growth.", "Impact.", "Value."];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full bg-qterra-black overflow-hidden"
      style={{ minHeight: "calc(100vh - 98px)" }}
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-forest/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full" style={{ minHeight: "calc(100vh - 98px)" }}>

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-center space-y-8 py-20 lg:py-0 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-sora font-bold text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-[-2.5px] text-white"
          >
            We Deliver<br />
            Strategy That<br />
            <span style={{ whiteSpace: "nowrap" }}>
              <span className="text-white">Drives </span>
              <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentIndex]}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ color: "#A8D32E", display: "inline-block" }}
                  >
                    {words[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-inter text-sm sm:text-base leading-relaxed text-white/50 max-w-sm font-light"
          >
            Helping organizations translate strategy into measurable, sustained results through integrated advisory, execution, and capability development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap gap-3"
          >
            <a href="/contact">
              <button className="inline-flex items-center gap-2 bg-spark text-qterra-black font-inter font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#bce03e] transition-colors duration-200">
                Get Consulting
                <CalendarDays className="h-4 w-4" />
              </button>
            </a>
            <a href="/services">
              <button className="inline-flex items-center gap-2 bg-transparent text-white font-inter font-medium text-sm px-6 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200">
                Our Services
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          className="relative self-stretch flex items-end justify-center min-h-[420px] lg:min-h-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Blob behind person */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-80 bg-forest/25 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] blur-[2px] pointer-events-none" />

          {/* Asterisk decoration */}
          <svg className="absolute top-[12%] right-[10%] text-white/70 pointer-events-none" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v8.27l7.16-4.14 1 1.73L14 12l7.16 4.14-1 1.73L13 13.73V22h-2v-8.27l-7.16 4.14-1-1.73L10 12 2.84 7.86l1-1.73L11 10.27V2z"/>
          </svg>

          {/* Parentheses decoration */}
          <svg className="absolute left-[8%] top-[38%] text-white/25 pointer-events-none" width="22" height="48" viewBox="0 0 22 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M14 4 C4 14, 4 34, 14 44" />
            <path d="M7 4 C-3 14, -3 34, 7 44" />
          </svg>

          {/* Squiggly decoration */}
          <svg className="absolute right-[4%] top-[52%] text-white/20 pointer-events-none" width="48" height="36" viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 28 C8 16, 16 20, 20 12 C24 4, 32 8, 36 4" />
            <path d="M4 36 C8 24, 16 28, 20 20 C24 12, 32 16, 40 12" />
          </svg>

          {/* Person image */}
          <div className="relative w-full h-full absolute inset-0">
            <Image
              src={HERO_IMAGE_PATH}
              alt="QTerra Professional Consultant"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
