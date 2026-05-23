"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Users2 } from "lucide-react";

const trust = [
  { icon: Building2, label: "40+ Organizations Served" },
  { icon: Globe2, label: "6 African Markets" },
  { icon: Users2, label: "15+ Years Combined Expertise" },
];

export default function CTABanner() {
  return (
    <section className="w-full bg-qterra-black relative overflow-hidden py-24">

      {/* Spark diagonal accent */}
      <div className="absolute top-0 right-0 w-[480px] h-full bg-spark/[0.04] skew-x-[-16deg] translate-x-32 pointer-events-none" />

      {/* Faint Africa map outline — right */}
      <svg
        className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none"
        width="320"
        height="380"
        viewBox="0 0 320 380"
        fill="white"
      >
        <path d="M160 10 C100 15, 50 40, 30 80 C10 120, 15 160, 20 190 C25 220, 10 250, 20 280 C30 310, 60 340, 100 360 C130 375, 155 370, 160 370 C165 370, 190 375, 220 360 C260 340, 290 310, 300 280 C310 250, 295 220, 300 190 C305 160, 310 120, 290 80 C270 40, 220 15, 160 10Z" />
      </svg>

      {/* Faint Africa map outline — left */}
      <svg
        className="absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none"
        width="320"
        height="380"
        viewBox="0 0 320 380"
        fill="white"
      >
        <path d="M160 10 C100 15, 50 40, 30 80 C10 120, 15 160, 20 190 C25 220, 10 250, 20 280 C30 310, 60 340, 100 360 C130 375, 155 370, 160 370 C165 370, 190 375, 220 360 C260 340, 290 310, 300 280 C310 250, 295 220, 300 190 C305 160, 310 120, 290 80 C270 40, 220 15, 160 10Z" />
      </svg>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Eyebrow */}
          <motion.p
            className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Work With Us
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="font-sora font-bold text-[30px] sm:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-1px] sm:tracking-[-1.5px] text-white max-w-[680px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            The Gap Between Strategy and Results{" "}
            <span className="text-spark">Closes Here.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-inter text-lg text-white/55 mt-5 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            Tell us your goals. We will build a plan that delivers real, measurable outcomes and stay accountable to every one of them.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-spark shrink-0" />
                  <span className="font-inter text-[13px] text-white/50">{t.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-white/10 mt-8" />

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <a href="/contact">
              <button className="inline-flex items-center gap-2 bg-spark text-qterra-black font-inter font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#bce03e] transition-colors duration-200">
                Schedule a Consultation
              </button>
            </a>
            <a href="/services">
              <button className="inline-flex items-center gap-2 bg-transparent text-white font-inter font-semibold text-[15px] px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-200">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
