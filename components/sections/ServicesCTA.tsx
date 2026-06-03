"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <div className="bg-[#0D0F0D] py-14">
      <motion.div
        className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="flex flex-col gap-3">
          <h3 className="font-sora font-semibold text-[28px] text-white leading-snug">
            Not sure which service fits your need?
          </h3>
          <p className="font-inter text-base text-white/55">
            Let&apos;s talk through your goals and find the right solution together.
          </p>
        </div>
        <a href="/contact" className="shrink-0">
          <button className="inline-flex items-center gap-2 bg-[#A8D32E] text-[#0D0F0D] font-inter font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#bce03e] transition-colors duration-200 whitespace-nowrap">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </a>
      </motion.div>
    </div>
  );
}
