"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface FormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  email?: string;
  service?: string;
  message?: string;
}

const initialForm: FormData = { fullName: "", organization: "", email: "", phone: "", service: "", message: "" };

const inputClass = "w-full border border-white/[0.1] rounded-lg px-4 py-3 font-inter text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-spark focus:shadow-[0_0_0_3px_rgba(168,211,46,0.12)] transition-all duration-200 bg-white/[0.06]";
const errorClass = "font-inter text-[12px] text-red-400 mt-1";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "This field is required";
    if (!form.organization.trim()) newErrors.organization = "This field is required";
    if (!form.email.trim()) newErrors.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Please enter a valid email address";
    if (!form.service) newErrors.service = "This field is required";
    if (!form.message.trim()) newErrors.message = "This field is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setIsSuccess(true);
      else setIsError(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="bg-[#F8F8F4] py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease }}
            className="max-w-xl mx-auto bg-qterra-black rounded-[24px] p-14 flex flex-col items-center text-center border border-white/[0.08]">
            <CheckCircle2 className="h-12 w-12 text-spark mb-5" />
            <h3 className="font-sora font-semibold text-[24px] text-white">Message Sent!</h3>
            <p className="font-inter text-[15px] text-white/55 mt-3 max-w-sm leading-[1.7]">
              Thank you for reaching out. A member of the QTerra team will be in touch within 24-48 hours.
            </p>
            <button onClick={() => { setIsSuccess(false); setForm(initialForm); }}
              className="mt-6 font-inter font-semibold text-[14px] text-spark hover:text-white underline transition-colors">
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F8F4] py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="relative max-w-2xl mx-auto bg-qterra-black rounded-[24px] px-10 py-12 overflow-hidden border border-white/[0.08]"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          {/* Decorative squiggly — bottom right */}
          <svg className="absolute bottom-4 right-4 opacity-10 pointer-events-none" width="80" height="60" viewBox="0 0 80 60" fill="none">
            <path d="M0,20 C10,5 20,35 30,20 C40,5 50,35 60,20 C70,5 75,25 80,20" stroke="#A8D32E" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M0,38 C10,23 20,53 30,38 C40,23 50,53 60,38 C70,23 75,43 80,38" stroke="#A8D32E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
          </svg>
          {/* Decorative squiggly — top left */}
          <svg className="absolute top-4 left-4 opacity-10 pointer-events-none" width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M0,15 C8,4 16,26 24,15 C32,4 40,26 50,15" stroke="#A8D32E" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>

          {/* Heading */}
          <div className="text-center mb-8 relative z-10">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase mb-3">Send Us a Message</p>
            <h2 className="font-sora font-bold text-[28px] leading-[1.25] tracking-[-0.5px] text-white">
              Leave us a message<br />for any information.
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input type="text" className={inputClass} placeholder="Full Name*" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
              </div>
              <div>
                <input type="text" className={inputClass} placeholder="Organization*" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
                {errors.organization && <p className={errorClass}>{errors.organization}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input type="email" className={inputClass} placeholder="Email*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div>
                <input type="tel" className={inputClass} placeholder="Phone (Optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>

            <div>
              <select className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Service of Interest*</option>
                <option>Management Consulting & Business Advisory</option>
                <option>Financial & Investment Advisory</option>
                <option>Project Management & Implementation</option>
                <option>Digital Solutions & Business Tools</option>
                <option>HR & Talent Management</option>
                <option>Training & Capability Development</option>
                <option>General Enquiry</option>
              </select>
              {errors.service && <p className={errorClass}>{errors.service}</p>}
            </div>

            <div>
              <textarea className={`${inputClass} resize-none h-[130px]`}
                placeholder="Your Message*"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className={errorClass}>{errors.message}</p>}
            </div>

            {isError && (
              <p className="font-inter text-[13px] text-red-600">
                Something went wrong. Please try again or email us at{" "}
                <a href="mailto:info@qterragroup.com" className="underline">info@qterragroup.com</a>
              </p>
            )}

            <button type="submit" disabled={isLoading}
              className="w-full bg-spark text-qterra-black font-inter font-semibold text-[15px] py-3.5 rounded-full hover:bg-[#96bc28] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {isLoading ? (
                <><Loader2 className="h-4 w-4 animate-spin" />Sending...</>
              ) : "Send Message →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
