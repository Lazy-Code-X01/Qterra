"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["Lagos · Johannesburg", "Accra · Benin"],
  },
  {
    icon: Phone,
    title: "Call us",
    // Replace with real QTerra phone numbers
    lines: ["To be updated"],
  },
  {
    icon: Mail,
    title: "Email us",
    lines: ["info@qterragroup.com"],
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="border border-[#e8e8e4] rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="h-11 w-11 rounded-full bg-qterra-black flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-spark" />
                </div>
                <div>
                  <p className="font-sora font-semibold text-[16px] text-qterra-black">{card.title}</p>
                  <div className="mt-1.5 flex flex-col gap-0.5">
                    {card.lines.map((line, j) => (
                      <p key={j} className="font-inter text-[14px] text-[#666] leading-[1.6]">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
