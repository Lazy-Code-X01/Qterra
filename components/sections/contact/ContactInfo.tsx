"use client";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    icon: Phone,
    title: "Call us",
    label: "+234 810 688 5938",
    href: "https://wa.me/2348106885938",
  },
  {
    icon: Mail,
    title: "Email us",
    label: "info@qterragroup.com",
    href: "mailto:info@qterragroup.com",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("https") ? "_blank" : undefined}
                rel={card.href.startsWith("https") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group border border-[#e8e8e4] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#A8D32E] hover:shadow-[0_4px_24px_rgba(168,211,46,0.1)] transition-all duration-300"
              >
                <div className="h-11 w-11 rounded-full bg-qterra-black flex items-center justify-center shrink-0 group-hover:bg-[#A8D32E] transition-colors duration-300">
                  <Icon className="h-5 w-5 text-spark group-hover:text-qterra-black transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-sora font-semibold text-[16px] text-qterra-black">{card.title}</p>
                  <p className="font-inter text-[14px] text-[#666] leading-[1.6] mt-1.5 group-hover:text-[#333] transition-colors duration-300">
                    {card.label}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
