"use client";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Point {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  points: Point[];
}

export default function WhyQTerraService({ eyebrow, headline, points }: Props) {
  return (
    <section className="bg-qterra-black py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }} className="text-center mb-12">
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase mb-2">{eyebrow}</p>
          <h2 className="font-sora font-bold text-[40px] leading-[1.1] tracking-[-1px] text-white mt-2">{headline}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-spark/30 transition-all duration-300">
                <div className="h-11 w-11 bg-spark/10 rounded-[10px] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-spark" />
                </div>
                <h4 className="font-sora font-semibold text-[17px] text-white mt-4">{point.title}</h4>
                <p className="font-inter text-[14px] text-white/55 leading-[1.6] mt-2">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
