"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Foundry & Field",
    descriptor: "Strategic Development Advisors & Delivery Specialists",
    logo: "/images/partners/iesl.png",
    url: "https://www.valeandfoundry.com",
    darken: false,
    logoHeight: "h-14",
    logoWidth: "w-[140px]",
  },
  {
    name: "IESL",
    descriptor: "Beyond Engineering",
    logo: "/images/partners/foundry-field.png",
    url: "https://ieslglobal.com",
    darken: true,
    logoHeight: "h-20",
    logoWidth: "w-[200px]",
  },
  {
    name: "Zendsolv",
    descriptor: "Digital Strategy & Technology Solutions",
    logo: "/images/partners/zendsolv.png",
    url: "https://zendsolv.com",
    darken: false,
    logoHeight: "h-16",
    logoWidth: "w-[160px]",
  },
  {
    name: "Hasking & Grant",
    descriptor: "Solicitors",
    logo: "/images/partners/solicitors.png",
    url: "#",
    darken: false,
    logoHeight: "h-16",
    logoWidth: "w-[160px]",
    enhance: true,
  },
];

export default function LogosStrip() {
  return (
    <section className="w-full bg-[#F8F8F4] py-14 border-t border-[#e8e8e4] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <motion.div
        className="flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="font-inter font-semibold text-[13px] tracking-[2px] text-[#6B7C4A] uppercase">
            Trusted Partners & Collaborators
          </p>
          <div className="w-8 h-[2px] bg-spark rounded-full" />
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#F8F8F4] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#F8F8F4] to-transparent z-10 pointer-events-none" />

          <div className="marquee-track gap-16">
            {/* Render twice for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <a
                key={i}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 shrink-0 px-6"
              >
                <div className={`relative ${partner.logoHeight} ${partner.logoWidth} opacity-60 group-hover:opacity-100 transition-all duration-300 ${partner.darken ? "" : "grayscale group-hover:grayscale-0"}`}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={`object-contain${partner.darken ? " brightness-0" : ""}${"enhance" in partner && partner.enhance ? " contrast-[1.4] saturate-[1.2]" : ""}`}
                  />
                </div>
                <p className="font-inter text-[11px] text-center text-[#999] leading-[1.5] max-w-[140px] group-hover:text-[#555] transition-colors duration-300">
                  {partner.descriptor}
                </p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
