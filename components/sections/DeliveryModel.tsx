"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const steps = [
  {
    number: "01",
    title: "Define",
    description: "Clarify strategy, priorities, and success metrics",
  },
  {
    number: "02",
    title: "Deliver",
    description: "Execute with disciplined project and program management",
  },
  {
    number: "03",
    title: "Enable",
    description: "Deploy digital tools and AI-driven decision support",
  },
  {
    number: "04",
    title: "Embed",
    description: "Build internal capability to sustain outcomes",
  },
];

export default function DeliveryModel() {
  return (
    <section className="w-full bg-white/[0.04] border-y border-white/[0.05] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease }}
          className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase text-center mb-10"
        >
          The QTerra Integrated Delivery Model™
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease }}
              className="relative flex flex-col items-center text-center px-6 py-8 group"
            >
              {/* Connector arrow — hidden on last item and on mobile */}
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-4 w-4 text-spark z-10" />
              )}

              {/* Step number */}
              <span className="font-sora font-bold text-[13px] text-spark mb-3">
                {step.number}
              </span>

              {/* Title */}
              <h4 className="font-sora font-semibold text-[18px] text-white mb-2 leading-snug">
                {step.title}
              </h4>

              {/* Description */}
              <p className="font-inter text-[13px] text-white/55 leading-[1.6]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
