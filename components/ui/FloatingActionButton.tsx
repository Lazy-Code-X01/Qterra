"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BrainCircuit } from "lucide-react";
import ChatWidget from "./ChatWidget";

export default function FloatingActionButton() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setChatOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          className="h-14 w-14 rounded-full bg-spark flex items-center justify-center shadow-[0_4px_24px_rgba(168,211,46,0.35)] hover:bg-[#96bc28] transition-colors duration-200"
          aria-label={chatOpen ? "Close chat" : "Open chat"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {chatOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6 text-qterra-black" />
              </motion.span>
            ) : (
              <motion.span key="brain" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <BrainCircuit className="h-6 w-6 text-qterra-black" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
