"use client";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  subtext: string;
  services: Service[];
}

export default function WhatIsIncluded({ eyebrow, headline, subtext, services }: Props) {
  return (
    <section className="bg-[#F8F8F4] py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }} className="text-center mb-12">
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase mb-2">{eyebrow}</p>
          <h2 className="font-sora font-bold text-[40px] leading-[1.1] tracking-[-1px] text-qterra-black mt-2">{headline}</h2>
          <p className="font-inter text-[16px] text-[#555] leading-[1.7] mt-3 max-w-[560px] mx-auto">{subtext}</p>
        </motion.div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-white border border-[#e8e8e4] rounded-[14px] p-7 hover:border-spark hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(168,211,46,0.08)] transition-all duration-300">
                <div className="h-11 w-11 bg-[#f0f5ef] rounded-[10px] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-forest" />
                </div>
                <h4 className="font-inter font-semibold text-[15px] text-qterra-black mt-4 leading-snug">{service.title}</h4>
                <p className="font-inter text-[14px] text-[#666] leading-[1.6] mt-2">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
