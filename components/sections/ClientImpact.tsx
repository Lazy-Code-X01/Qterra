"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    stat: "10–25%",
    label: "Operational Efficiency Improvement",
    description: "Through process optimization and automation across client operations.",
  },
  {
    stat: "Faster",
    label: "Value Realization",
    description: "Faster translation of strategy into measurable business outcomes.",
  },
  {
    stat: "Data-Driven",
    label: "",
    description: "Advanced analytics and AI tools that strengthen leadership decision-making.",
  },
  {
    stat: "Sustained",
    label: "Organizational Performance",
    description: "Long-term capability building that outlasts the engagement.",
  },
];

export default function ClientImpact() {
  return (
    <section className="w-full bg-bone py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col items-center text-center mb-12"
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase mb-3">
            Client Impact
          </p>
          <h2 className="font-sora font-bold text-[36px] sm:text-[40px] leading-tight tracking-[-1px] text-qterra-black">
            Measurable Outcomes We Deliver
          </h2>
          <p className="font-inter text-[16px] text-[#555] leading-[1.75] max-w-[520px] mt-4">
            QTerra&apos;s integrated delivery model produces tangible, quantifiable results across every engagement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="bg-white border border-[#e8e8e4] rounded-2xl px-6 py-8 flex flex-col hover:border-spark hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-sora font-bold text-[28px] sm:text-[32px] leading-tight text-spark break-words">
                {card.stat}
              </span>
              {card.label && (
                <h4 className="font-inter font-semibold text-[14px] text-qterra-black mt-2 leading-snug">
                  {card.label}
                </h4>
              )}
              <p className="font-inter text-[13px] text-[#666] leading-[1.6] mt-1.5">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
