"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Props {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default function ServiceDetailHero({ breadcrumb, title }: Props) {
  return (
    <section className="bg-qterra-black py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }} className="flex items-center gap-2 font-inter text-[13px] text-white/40 mb-6">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span className="text-white/25">›</span>
          <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
          <span className="text-white/25">›</span>
          <span className="text-white/80">{breadcrumb}</span>
        </motion.div>
        {/* H1 */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15, ease }} className="font-sora font-bold text-[56px] leading-[1.1] tracking-[-1.5px] text-white max-w-[760px]">
          {title}
        </motion.h1>
        {/* Divider */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45, ease }} className="border-t border-white/[0.06] max-w-[120px] w-full mx-auto mt-8" />
      </div>
    </section>
  );
}
