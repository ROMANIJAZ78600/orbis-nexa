"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { MdFormatQuote } from "react-icons/md";

export default function Quote() {
  return (
    <section className="relative   lg:min-h-[400px] min-h-[320px] w-full overflow-hidden bg-[#001f3f]">
      <div className="flex flex-col justify-center items-center gap-5 lg:p-10 p-5">
        <MdFormatQuote size={35} className="text-white/50 rotate-185" />
        <h6 className="lg:text-5xl text-2xl font-serif text-center text-white lg:w-200">
          The best destination is not the one everyone chooses. It is the one
          that fits your profile, your budget and your future.
        </h6>
        <div className="flex items-center gap-3">
          <div className="border-1 border-white/40 w-10 h-0" />
          <span className="text-sm font-bold text-white">
            The ORBIS Approach
          </span>
          <div className="border-1 border-white/40 w-10 h-0" />
        </div>
      </div>
    </section>
  );
}
