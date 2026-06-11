"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Foundry & Field",
    descriptor: "Strategic Development Advisors & Delivery Specialists",
    logo: "/images/partners/foundry-field.png",
    url: "https://www.valeandfoundry.com",
    darken: true,
    logoHeight: "h-14",
    logoWidth: "max-w-[160px]",
  },
  {
    name: "IESL",
    descriptor: "Beyond Engineering",
    logo: "/images/partners/iesl.png",
    url: "https://ieslglobal.com",
    darken: false,
    logoHeight: "h-20",
    logoWidth: "max-w-[220px]",
  },
  {
    name: "Zendsolv",
    descriptor: "Digital Strategy & Technology Solutions",
    logo: "/images/partners/zendsolv.png",
    url: "https://zendsolv.com",
    darken: false,
    logoHeight: "h-16",
    logoWidth: "max-w-[180px]",
  },
];

export default function LogosStrip() {
  return (
    <section className="w-full bg-[#F8F8F4] py-16 border-t border-[#e8e8e4]">
      <motion.div
        className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center gap-12"
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col items-center gap-4 bg-white border border-[#e8e8e4] rounded-2xl px-6 py-8 sm:px-8 hover:border-[#A8D32E] hover:shadow-[0_4px_24px_rgba(168,211,46,0.1)] transition-all duration-300 cursor-pointer"
            >
              <div className={`relative ${partner.logoHeight} w-full ${partner.logoWidth} transition-all duration-300 opacity-70 group-hover:opacity-100 ${partner.darken ? "" : "grayscale group-hover:grayscale-0"}`}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className={`object-contain${partner.darken ? " brightness-0" : ""}`}
                />
              </div>
              <div className="w-6 h-[1px] bg-[#e8e8e4] group-hover:bg-spark transition-colors duration-300" />
              <p className="font-inter text-[12px] text-center text-[#888] leading-[1.6] group-hover:text-[#555] transition-colors duration-300">
                {partner.descriptor}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
