"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "CLIENTS SERVED" },
  { value: 10, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 4, suffix: "", label: "AFRICAN CITIES" },
  { value: 6, suffix: "", label: "SERVICE AREAS" },
];

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="flex flex-col items-center text-center relative">
      <p className="font-sora font-bold text-[52px] leading-none text-qterra-black">
        {count}{suffix}
      </p>
      <p className="font-inter font-semibold text-[13px] tracking-[0.5px] uppercase text-qterra-black/65 mt-2">
        {label}
      </p>
    </div>
  );
}

export default function StatsBand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      className="w-full bg-spark py-16"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-qterra-black/15" />
              )}
              <StatItem value={stat.value} suffix={stat.suffix} label={stat.label} inView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
