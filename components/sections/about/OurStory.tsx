"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-2xl overflow-hidden w-full">
              {/* Replace with real QTerra office or team photo */}
              <Image
                src="/images/story-placeholder.png"
                alt="QTerra Story"
                width={480}
                height={520}
                className="object-cover w-full h-[520px]"
              />
            </div>

            {/* Squiggly decoration — top left over image */}
            <svg
              className="absolute top-5 left-5 pointer-events-none"
              width="88"
              height="64"
              viewBox="0 0 88 64"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 54 C14 34, 22 44, 32 24 C42 4, 50 14, 60 -6" opacity="0.85" />
              <path d="M16 62 C26 42, 34 52, 44 32 C54 12, 62 22, 72 2" opacity="0.55" />
              <path d="M28 66 C38 46, 46 56, 56 36 C66 16, 74 26, 84 6" opacity="0.3" />
            </svg>

            {/* Quote card — bottom left */}
            <div className="absolute -bottom-6 -left-4 bg-[#ddeef8] rounded-xl px-5 py-4 shadow-md max-w-[265px]">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/logo.png"
                    alt="QTerra Leadership"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <p className="font-inter font-semibold text-[13px] text-[#0D0F0D] leading-snug">
                  QTerra Leadership,{" "}
                  <span className="text-[#A8D32E]">QTerra</span>
                </p>
              </div>
              <p className="font-inter italic text-[13px] text-[#333] leading-[1.6]">
                &ldquo;QTerra exists to close the gap between strategy and execution across Africa.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#6B7C4A] uppercase">
              Our Story
            </p>
            <h2 className="font-sora font-bold text-[42px] leading-[1.1] tracking-[-1px] text-[#0D0F0D]">
              We Were Built to Close the Gap Between Strategy and Execution.
            </h2>
            <p className="font-inter text-[14px] text-[#555] leading-[1.75]">
              QTerra was founded on a simple but increasingly urgent observation: organizations across industries continue to invest heavily in strategy, transformation, technology, and project delivery, yet many still struggle to achieve sustained results. In many cases, the challenge is not ambition, capability, or investment. It is fragmentation.
            </p>
            <p className="font-inter text-[14px] text-[#555] leading-[1.75]">
              Strategy is disconnected from execution. Technology is deployed without adoption. Projects are delivered without fully realizing business value. Capability gaps remain long after engagements conclude. QTerra was established to close this gap.
            </p>
            <p className="font-inter text-[14px] text-[#555] leading-[1.75]">
              As an Integrated Strategy &amp; Execution Firm, QTerra helps organizations move beyond recommendations toward measurable, sustained performance. The firm integrates strategic advisory, disciplined execution, AI-enabled decision support, digital enablement, and capability development into a unified delivery model designed to produce tangible business outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mt-2">
              <a href="/about#mission">
                <button className="inline-flex items-center gap-2 bg-[#0D0F0D] text-white font-inter font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#1e231e] transition-colors duration-200">
                  Our Mission
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full border border-[#0D0F0D]/30 flex items-center justify-center group-hover:bg-[#0D0F0D] transition-colors duration-200">
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" className="text-[#0D0F0D] group-hover:text-white transition-colors duration-200 ml-0.5">
                    <path d="M0 0L11 6.5L0 13V0Z" />
                  </svg>
                </div>
                <span className="font-inter font-semibold text-sm text-[#0D0F0D]">Intro Video</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
