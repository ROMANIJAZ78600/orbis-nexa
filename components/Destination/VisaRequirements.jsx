"use client";

import React from "react";
import { countryDatabase, getCountryData } from "@/services/data/Countrydata";
import { motion } from "framer-motion";
export default function VisaRequirements({ countryCode }) {
  const country = getCountryData(countryCode);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white text-gray-900">
      {/* Top Header Section */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-2">
          <p className="relative flex items-center gap-3 tracking-[0.1em] w-fit max-w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-2 rounded-full text-black/50 text-xs sm:text-sm">
            <motion.span
              animate={{
                scale: [1, 2.4],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute w-3 h-3 rounded-full bg-blue-400"
            />
            <span className="relative z-10 w-2.5 h-2.5 shrink-0 rounded-full bg-blue-600 shadow-sm" />
            {country.visaHeading || "VISA & ENTRY REQUIREMENTS"}
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-gray-900">
          {country.visaTitle}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {country.visaSubtitle}
        </p>
      </div>

      {/* Main Grid: Left Table (7 cols), Right Checklist & CTA (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Table & Route Box */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Info Banner Card */}
          <div className="bg-blue-200 border border-[#0265aa] rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {country.visaRoute?.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {country.visaRoute?.desc}
            </p>
          </div>

          {/* Data Table */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100/60 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {country.visaRows?.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 p-5 gap-2 sm:gap-4 items-center hover:bg-gray-50/50 transition-colors"
                >
                  <div className="sm:col-span-4 text-xs sm:text-sm font-bold text-gray-900">
                    {row.label}
                  </div>
                  <div className="sm:col-span-8 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Document Checklist & Action Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Checklist Container */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-100/60 space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
              DOCUMENT CHECKLIST
            </h3>

            {country.checklist?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-none last:pb-0"
              >
                <div className="w-10 h-10 rounded-2xl bg-black flex-shrink-0 flex items-center justify-center font-bold text-blue-400 text-sm shadow-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Card */}
          <div className="bg-[#0265aa] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">
              APPLICATION READY?
            </span>
            <h3 className="text-xl font-bold tracking-tight">
              Get Your Documents Ready
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Let our counsellors review your checklist before submission and
              help you spot avoidable gaps.
            </p>
            <button className="w-full py-3.5 px-6 bg-blue-400 hover:bg-blue-300 text-gray-950 font-bold text-sm rounded-2xl transition-all shadow-lg shadow-blue-400/20">
              Request a Document Review →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Important Note Banner */}
      <div className="mt-8 bg-black text-gray-300 p-5 rounded-2xl text-xs flex items-center gap-3">
        <span className="text-blue-400 font-bold uppercase tracking-wider flex-shrink-0">
          Important
        </span>
        <p className="leading-relaxed">{country.importantNote}</p>
      </div>
    </section>
  );
}
