"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, BrainCircuit } from "lucide-react";
import ChatWidget from "./ChatWidget";

const WHATSAPP_NUMBER = "2349000000000"; // Replace with real number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20QTerra%27s%20services.`;

const ease = [0.25, 0.1, 0.25, 1] as const;

const dialItems = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    color: "bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L0 24l6.336-1.498A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.213-3.727.881.938-3.618-.234-.372A9.818 9.818 0 0112 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.424-4.395 9.818-9.818 9.818z"/>
      </svg>
    ),
    href: WHATSAPP_URL,
    external: true,
  },
  {
    id: "chat",
    label: "Live Chat",
    color: "bg-forest",
    icon: <BrainCircuit className="h-5 w-5 text-white" />,
    href: null,
    external: false,
  },
];

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleDial = (item: typeof dialItems[0]) => {
    if (item.id === "chat") {
      setOpen(false);
      setChatOpen(true);
    }
  };

  return (
    <>
      {/* Speed dial */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Dial items */}
        <AnimatePresence>
          {open && dialItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.85 }}
              transition={{ duration: 0.2, delay: i * 0.06, ease }}
              className="flex items-center gap-3"
            >
              {/* Label */}
              <span className="font-inter font-semibold text-[12px] bg-qterra-black text-white px-3 py-1.5 rounded-full shadow-lg border border-white/[0.08] whitespace-nowrap">
                {item.label}
              </span>
              {/* Button */}
              {item.external ? (
                <a
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </a>
              ) : (
                <button
                  onClick={() => handleDial(item)}
                  className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          className="h-14 w-14 rounded-full bg-spark flex items-center justify-center shadow-[0_4px_24px_rgba(168,211,46,0.35)] hover:bg-[#96bc28] transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open contact menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6 text-qterra-black" />
              </motion.span>
            ) : (
              <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="h-6 w-6 text-qterra-black" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat widget */}
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
