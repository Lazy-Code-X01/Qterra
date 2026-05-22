"use client";

import { motion } from "framer-motion";

export default function LogosStrip() {
  return (
    <section className="w-full bg-[#F8F8F4] py-10">
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#6B7C4A] uppercase">
          Trusted By Leading Organizations
        </p>
        {/* Replace placeholder slots with actual QTerra client logos when provided */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-[120px] h-[40px] rounded-md bg-[#e8e8e4] opacity-50"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
