"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Globe2, Landmark } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const clients = [
  {
    Icon: Building2,
    title: "Government Agencies",
    description:
      "Federal, state, and local government bodies seeking to strengthen governance, improve service delivery, and implement effective transformation programs.",
  },
  {
    Icon: Briefcase,
    title: "Corporations",
    description:
      "Mid-size and large private sector organizations looking to optimize operations, manage change, and drive sustainable business growth.",
  },
  {
    Icon: Globe2,
    title: "Development Organizations",
    description:
      "Multilateral agencies, NGOs, and development finance institutions implementing programs across the African continent.",
  },
  {
    Icon: Landmark,
    title: "Large Institutions",
    description:
      "Universities, hospitals, regulatory bodies, and other large institutions requiring specialized advisory and capability development support.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-bone py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="text-center"
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase">
            WHO WE SERVE
          </p>
          <h2 className="font-sora font-bold text-[40px] text-qterra-black tracking-[-1px] mt-2">
            Our Clients
          </h2>
          <p className="font-inter text-[16px] text-[#555] max-w-[480px] mx-auto leading-[1.7] mt-3">
            QTerra works with a diverse range of organizations across Africa and beyond.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {clients.map((client, index) => {
            const Icon = client.Icon;
            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
                className="bg-white border border-[#e8e8e4] rounded-2xl p-8 hover:border-spark hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon box */}
                <div className="h-[52px] w-[52px] bg-[#f0f5ef] rounded-[14px] flex items-center justify-center">
                  <Icon className="h-6 w-6 text-forest" />
                </div>

                {/* Title */}
                <h3 className="font-sora font-semibold text-[18px] text-qterra-black mt-4">
                  {client.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-[14px] text-[#666] leading-[1.6] mt-2">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
