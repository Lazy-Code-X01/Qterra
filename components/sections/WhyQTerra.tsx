"use client";

import { motion } from "framer-motion";
import { Globe2, Layers, UserCheck, Target } from "lucide-react";

const cards = [
  {
    icon: Globe2,
    title: "Pan-African Reach",
    description: "Offices in Lagos, Johannesburg, Accra, and Benin, delivering on-the-ground expertise across the continent.",
  },
  {
    icon: Layers,
    title: "Integrated Services",
    description: "Six service areas under one roof: no handoffs, no gaps, just seamless end-to-end delivery.",
  },
  {
    icon: UserCheck,
    title: "Senior-Led Delivery",
    description: "Every engagement is led by experienced practitioners, not delegated to junior staff.",
  },
  {
    icon: Target,
    title: "Proven Methodology",
    description: "Structured frameworks refined across hundreds of engagements in both public and private sectors.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function WhyQTerra() {
  return (
    <section className="w-full bg-qterra-black py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
            Why QTerra
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-tight tracking-[-1px] text-white mt-2">
            What Sets Us Apart
          </h2>
          <p className="font-inter text-base text-white/55 mt-3 max-w-[520px] leading-relaxed">
            We don&apos;t just advise. We partner, deliver, and stay accountable to results.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="group flex flex-col gap-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:bg-spark/[0.04] hover:border-spark/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-spark/10 flex items-center justify-center text-spark">
                  <Icon className="h-[22px] w-[22px]" />
                </div>
                <h4 className="font-sora font-semibold text-lg text-white mt-4">
                  {card.title}
                </h4>
                <p className="font-inter text-sm text-white/55 leading-[1.7] mt-2">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
