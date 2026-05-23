"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-qterra-black py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 text-[13px] font-inter mb-4"
        >
          <Link href="/" className="text-white/40 hover:text-white/70 transition-colors">Home</Link>
          <span className="text-white/30">›</span>
          <span className="text-white/80">About</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-sora font-bold text-[38px] sm:text-[48px] lg:text-[56px] leading-tight tracking-[-1.5px] text-white"
        >
          About QTerra
        </motion.h1>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[120px] h-px bg-white/[0.06] mt-8"
        />
      </div>
    </section>
  );
}
