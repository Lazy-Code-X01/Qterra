"use client";

import { motion } from "framer-motion";
import { Compass, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* MISSION — dark left */}
        <motion.div
          className="bg-qterra-black px-10 sm:px-16 py-20 flex flex-col justify-start"
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
                <h3 className="font-sora font-bold text-[32px] leading-[1.2] tracking-[-0.5px] text-white">
                  To deliver integrated professional services that strengthen organizations and drive sustainable growth across Africa.
                </h3>
                <div className="w-12 h-[2px] bg-spark" />
                <p className="font-inter text-[15px] text-white/55 leading-[1.75]">
                  We combine strategy, financial advisory, project delivery, digital capability, and human capital development to give our clients a single, accountable partner for their most complex challenges.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VISION — spark right */}
        <motion.div
          className="bg-spark px-10 sm:px-16 py-20 flex flex-col justify-start"
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
                <h3 className="font-sora font-bold text-[32px] leading-[1.2] tracking-[-0.5px] text-qterra-black">
                  To be Africa&apos;s most trusted integrated professional services firm, known for excellence and results that endure.
                </h3>
                <div className="w-12 h-[2px] bg-qterra-black/30" />
                <p className="font-inter text-[15px] text-qterra-black/65 leading-[1.75]">
                  We envision a continent where public and private organizations consistently achieve their strategic goals, with QTerra as their long-term partner in that journey.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
