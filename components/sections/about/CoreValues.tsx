"use client";

import { motion } from "framer-motion";
import { Target, Layers, Cpu, Handshake, GraduationCap, RefreshCw } from "lucide-react";

const values = [
  {
    icon: Target,
    name: "Outcome Orientation",
    description: "We measure success by results — not activity. We focus on delivering tangible, measurable, and sustainable outcomes that create real organizational value.",
    number: "01",
  },
  {
    icon: Layers,
    name: "Integrated Thinking",
    description: "We connect strategy, execution, technology, and people. Transformational results occur when organizations align decision-making, delivery, capability, and operational realities into one coherent system.",
    number: "02",
  },
  {
    icon: Cpu,
    name: "Intelligent Execution",
    description: "We combine disciplined delivery with modern decision intelligence — leveraging data, AI-enabled insights, structured methodologies, and execution rigor to improve predictability and organizational agility.",
    number: "03",
  },
  {
    icon: Handshake,
    name: "Partnership & Trust",
    description: "We work with clients — not around them. We build long-term relationships grounded in credibility, transparency, professionalism, and shared accountability for outcomes.",
    number: "04",
  },
  {
    icon: GraduationCap,
    name: "Capability Building",
    description: "We strengthen organizations while delivering solutions. Sustainable transformation occurs when organizations develop the internal capability and systems required to sustain success independently.",
    number: "05",
  },
  {
    icon: RefreshCw,
    name: "Continuous Improvement",
    description: "We evolve, adapt, and improve relentlessly. We embrace learning, innovation, and refinement to remain effective in a rapidly changing world.",
    number: "06",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#0D0F0D] py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
            Core Values
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-tight tracking-[-1px] text-white mt-2">
            The Principles We Work By
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col overflow-hidden hover:bg-white/[0.06] hover:border-spark/30 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* Faded number background */}
                <span className="absolute top-3 right-4 font-sora font-bold text-[64px] leading-none text-white/[0.04] select-none group-hover:text-spark/[0.08] transition-colors duration-300">
                  {val.number}
                </span>

                {/* Icon */}
                <div className="h-11 w-11 rounded-xl bg-spark/10 flex items-center justify-center text-spark group-hover:bg-spark group-hover:text-qterra-black transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Spark line — grows on hover */}
                <div className="w-8 h-[2px] bg-spark/40 group-hover:w-12 group-hover:bg-spark mt-5 transition-all duration-300" />

                <h4 className="font-sora font-semibold text-lg text-white mt-4">
                  {val.name}
                </h4>
                <p className="font-inter text-sm text-white/45 leading-[1.7] mt-2 flex-1">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
