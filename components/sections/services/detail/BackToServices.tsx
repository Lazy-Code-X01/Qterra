"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToServices() {
  return (
    <div className="bg-white py-10 flex justify-center border-t border-[#e8e8e4]">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 font-inter font-semibold text-sm text-[#3F4E2E] hover:text-qterra-black transition-colors duration-200 group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Services
      </Link>
    </div>
  );
}
