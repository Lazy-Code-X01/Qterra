"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BrainCircuit } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

interface Step {
  botMessages: string[];
  quickReplies?: string[];
  inputPlaceholder?: string;
  next?: (reply: string) => string;
}

const flow: Record<string, Step> = {
  greeting: {
    botMessages: [
      "Hi there 👋 Welcome to QTerra!",
      "We're an integrated professional services firm helping organizations across Africa grow, transform, and lead. How can I help you today?",
    ],
    quickReplies: ["Explore services", "Get in touch", "Our locations", "About QTerra"],
    next: (r) => {
      if (r === "Explore services") return "services";
      if (r === "Get in touch") return "contact";
      if (r === "Our locations") return "locations";
      if (r === "About QTerra") return "about";
      return "fallback";
    },
  },
  services: {
    botMessages: [
      "Great! QTerra offers five integrated service areas:",
      "1. Strategy & Transformation\n2. Project Delivery & Implementation\n3. Digital Solutions & Analytics\n4. Human Capital & Talent Management\n5. Training & Capability Building",
      "Which area interests you most?",
    ],
    quickReplies: [
      "Strategy & Transformation",
      "Project Delivery",
      "Digital Solutions",
      "Human Capital",
      "Something else",
    ],
    next: (r) => {
      if (r === "Something else") return "contact";
      return "find_service";
    },
  },
  find_service: {
    botMessages: [
      "Excellent choice. Our team brings deep expertise and on-the-ground experience across Africa.",
      "Would you like to speak with a specialist, or explore our case studies first?",
    ],
    quickReplies: ["Talk to a specialist", "See case studies", "Go back"],
    next: (r) => {
      if (r === "See case studies") return "case_studies";
      if (r === "Go back") return "services";
      return "contact";
    },
  },
  case_studies: {
    botMessages: [
      "We've helped restructure federal procurement frameworks, mobilize $40M in blended finance, and build real-time performance dashboards — among others.",
      "You can explore all our work at qterragroup.com/case-studies. Anything else I can help with?",
    ],
    quickReplies: ["Get in touch", "Explore services", "Done, thanks!"],
    next: (r) => {
      if (r === "Explore services") return "services";
      if (r === "Done, thanks!") return "bye";
      return "contact";
    },
  },
  contact: {
    botMessages: [
      "Sure! The best way to reach us is via email at info@qterragroup.com.",
      "You can also fill out our contact form at qterragroup.com/contact and a team member will respond within 24–48 hours.",
      "Is there anything else you'd like to know?",
    ],
    quickReplies: ["Explore services", "Our locations", "No, I'm good!"],
    next: (r) => {
      if (r === "Explore services") return "services";
      if (r === "Our locations") return "locations";
      return "bye";
    },
  },
  locations: {
    botMessages: [
      "QTerra operates across Africa with presence in:",
      "🇳🇬 Lagos, Nigeria\n🇿🇦 Johannesburg, South Africa\n🇬🇭 Accra, Ghana\n🇧🇯 Cotonou, Benin",
      "Is there anything else I can help you with?",
    ],
    quickReplies: ["Get in touch", "Explore services", "Done, thanks!"],
    next: (r) => {
      if (r === "Explore services") return "services";
      if (r === "Done, thanks!") return "bye";
      return "contact";
    },
  },
  about: {
    botMessages: [
      "QTerra is an Integrated Strategy & Execution Firm founded in 2025.",
      "We help organizations translate strategy into measurable and sustained results through integrated advisory, disciplined execution, AI-enabled decision support, and capability development. We operate across Lagos, Johannesburg, Accra, and Benin.",
      "What would you like to know more about?",
    ],
    quickReplies: ["Our services", "Get in touch", "Our locations"],
    next: (r) => {
      if (r === "Our services") return "services";
      if (r === "Our locations") return "locations";
      return "contact";
    },
  },
  bye: {
    botMessages: [
      "Thanks for stopping by! 🌿 Feel free to reach out anytime at info@qterragroup.com.",
      "Have a great day!",
    ],
    quickReplies: ["Start over"],
    next: () => "greeting",
  },
  fallback: {
    botMessages: [
      "I'm not sure I caught that — let me point you in the right direction.",
    ],
    quickReplies: ["Explore services", "Get in touch", "Our locations"],
    next: (r) => {
      if (r === "Explore services") return "services";
      if (r === "Our locations") return "locations";
      return "contact";
    },
  },
};

let msgId = 0;
const mkMsg = (from: "bot" | "user", text: string): Message => ({ id: ++msgId, from, text });

export default function ChatWidget({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState("greeting");
  const [typing, setTyping] = useState(false);
  const [replies, setReplies] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Start conversation when widget first opens
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      runStep("greeting");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const runStep = async (stepKey: string, delay = 0) => {
    const s = flow[stepKey];
    if (!s) return;
    setReplies([]);
    setTyping(true);
    const msgs = s.botMessages;
    for (let i = 0; i < msgs.length; i++) {
      await sleep(i === 0 ? 600 + delay : 900);
      setMessages((prev) => [...prev, mkMsg("bot", msgs[i])]);
    }
    await sleep(300);
    setTyping(false);
    if (s.quickReplies) setReplies(s.quickReplies);
    setStep(stepKey);
  };

  const handleReply = (reply: string) => {
    setMessages((prev) => [...prev, mkMsg("user", reply)]);
    setReplies([]);
    const s = flow[step];
    const nextKey = s?.next ? s.next(reply) : "fallback";
    runStep(nextKey, 200);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="chat"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease }}
        className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-[360px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ maxHeight: "min(520px, calc(100dvh - 8rem))" }}
      >
        {/* Header */}
        <div className="bg-qterra-black px-5 py-4 flex items-center justify-between border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-spark flex items-center justify-center">
              <BrainCircuit className="h-4 w-4 text-qterra-black" />
            </div>
            <div>
              <p className="font-sora font-semibold text-[14px] text-white leading-none">QTerra AI</p>
              <p className="font-inter text-[11px] text-white/40 mt-0.5">Typically replies instantly</p>
            </div>
          </div>
          <button onClick={onClose} className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/[0.08] transition-colors">
            <X className="h-4 w-4 text-white/60" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-[#F8F8F4] px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              {msg.from === "bot" && (
                <div className="h-6 w-6 rounded-full bg-spark flex items-center justify-center mr-2 mt-1 shrink-0">
                  <BrainCircuit className="h-3 w-3 text-qterra-black" />
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 font-inter text-[13px] leading-[1.6] whitespace-pre-line ${
                  msg.from === "bot"
                    ? "bg-white text-qterra-black rounded-tl-sm shadow-sm"
                    : "bg-spark text-qterra-black rounded-tr-sm font-medium"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="h-6 w-6 rounded-full bg-spark flex items-center justify-center shrink-0">
                <BrainCircuit className="h-3 w-3 text-qterra-black" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-[#bbb] block"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick replies */}
          {!typing && replies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {replies.map((r) => (
                <button
                  key={r}
                  onClick={() => handleReply(r)}
                  className="font-inter font-medium text-[13px] px-4 py-2.5 rounded-full border border-qterra-black/20 bg-white text-qterra-black hover:bg-spark hover:border-spark hover:text-qterra-black transition-all duration-150"
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-[#e8e8e4] px-4 py-3 shrink-0">
          <p className="font-inter text-[11px] text-[#999] text-center">
            Powered by QTerra · <a href="/contact" className="text-forest hover:underline">Full contact form</a>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
