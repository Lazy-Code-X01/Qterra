"use client";

import { motion } from "framer-motion";
import { Compass, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* MISSION — dark left */}
        <motion.div
          className="bg-qterra-black px-6 sm:px-10 lg:px-16 py-16 sm:py-20 flex flex-col justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="max-w-[480px] ml-auto flex flex-col gap-6">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
              Our Mission
            </p>

            <div className="relative">
              <span className="absolute -top-8 -left-2 font-sora font-bold text-[96px] leading-none text-white/[0.04] select-none pointer-events-none">
                01
              </span>
              <div className="relative flex flex-col gap-5">
                <div className="h-12 w-12 rounded-xl bg-spark/10 flex items-center justify-center">
                  <Compass className="h-6 w-6 text-spark" />
                </div>
                <h3 className="font-sora font-bold text-[24px] sm:text-[32px] leading-[1.2] tracking-[-0.5px] text-white">
                  To help organizations translate strategy into measurable, sustained results through integrated advisory, disciplined execution, and capability development.
                </h3>
                <div className="w-12 h-[2px] bg-spark" />
                <p className="font-inter text-[15px] text-white/55 leading-[1.75]">
                  At QTerra, our objective is not simply to help organizations plan better. It is to help them execute smarter, adapt faster, and realize measurable value with greater confidence and discipline.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VISION — spark right */}
        <motion.div
          className="bg-spark px-6 sm:px-10 lg:px-16 py-16 sm:py-20 flex flex-col justify-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="max-w-[480px] mr-auto flex flex-col gap-6">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-qterra-black/60 uppercase">
              Our Vision
            </p>

            <div className="relative">
              <span className="absolute -top-8 -left-2 font-sora font-bold text-[96px] leading-none text-qterra-black/[0.06] select-none pointer-events-none">
                02
              </span>
              <div className="relative flex flex-col gap-5">
                <div className="h-12 w-12 rounded-xl bg-qterra-black/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-qterra-black" />
                </div>
                <h3 className="font-sora font-bold text-[24px] sm:text-[32px] leading-[1.2] tracking-[-0.5px] text-qterra-black">
                  To become a trusted partner enabling organizations to achieve measurable, sustained performance through intelligent execution, technology, and capability.
                </h3>
                <div className="w-12 h-[2px] bg-qterra-black/30" />
                <p className="font-inter text-[15px] text-qterra-black/65 leading-[1.75]">
                  We envision a world where organizations consistently close the gap between strategic intent and operational reality, with QTerra as their long-term execution partner.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
