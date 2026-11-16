"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
export default function IeltsAssessmentSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    ieltsRoute: "Not sure — guide me",
    targetBand: "Not decided",
    currentLevel: "Never tested",
    preferredMode: "On-campus",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (Lahore branch without '+' or spaces)
    const whatsappNumber = "923104447728";

    const message = `*New IELTS Initial Assessment Request*
    
*Full Name:* ${formData.fullName}
*Phone/WhatsApp:* ${formData.phone}
*IELTS Route:* ${formData.ieltsRoute}
*Target Band:* ${formData.targetBand}
*Current Level:* ${formData.currentLevel}
*Preferred Mode:* ${formData.preferredMode}
*Goal / Question:* ${formData.goal || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] flex items-center justify-center px-6 py-16 lg:px-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Heading & Contact Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
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
              FREE INITIAL ASESSMENT
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight">
            Let’s map your{" "}
            <span className="block font-serif italic font-normal text-blue-400 mt-1">
              IELTS starting
            </span>
            <span className="block font-serif italic font-normal text-blue-400">
              point.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300/90 text-base leading-relaxed max-w-md">
            Send your details and our team will contact you to discuss your test
            type, target band and suitable preparation route.
          </p>

          {/* Contact Info Box */}
          <div className="mt-8 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm max-w-md">
            <p className="text-blue-400 text-[11px] font-bold tracking-[0.12em] uppercase mb-3">
              EDIT CONTACT · STUDY APEX GLOBAL
            </p>
            <div className="space-y-1.5 text-sm text-slate-200">
              <p>
                <span className="text-slate-400">Lahore:</span> +92 310 1234567
              </p>
              <p>
                <span className="text-slate-400">Burewala:</span> +92 300
                1234567
              </p>
              <p className="pt-1 text-slate-300">info@orbisnexa.com</p>
            </div>
          </div>
        </div>

        {/* Right Column: White Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[28px] p-7 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Full name <span className="text-slate-900">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Phone / WhatsApp <span className="text-slate-900">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="03XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition"
                  />
                </div>
              </div>

              {/* Row 2: IELTS Route & Target Band */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    IELTS route
                  </label>
                  <div className="relative">
                    <select
                      name="ieltsRoute"
                      value={formData.ieltsRoute}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition pr-10"
                    >
                      <option value="Not sure — guide me">
                        Not sure — guide me
                      </option>
                      <option value="IELTS Academic">IELTS Academic</option>
                      <option value="IELTS General Training">
                        IELTS General Training
                      </option>
                      <option value="IELTS UKVI">IELTS UKVI</option>
                      <option value="IELTS Life Skills">
                        IELTS Life Skills
                      </option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Target band
                  </label>
                  <div className="relative">
                    <select
                      name="targetBand"
                      value={formData.targetBand}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition pr-10"
                    >
                      <option value="Not decided">Not decided</option>
                      <option value="6.0 Band">6.0 Band</option>
                      <option value="6.5 Band">6.5 Band</option>
                      <option value="7.0 Band">7.0 Band</option>
                      <option value="7.5+ Band">7.5+ Band</option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              {/* Row 3: Current Level & Preferred Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Current level / band
                  </label>
                  <div className="relative">
                    <select
                      name="currentLevel"
                      value={formData.currentLevel}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition pr-10"
                    >
                      <option value="Never tested">Never tested</option>
                      <option value="Beginner (4.0 - 4.5)">
                        Beginner (4.0 - 4.5)
                      </option>
                      <option value="Intermediate (5.0 - 5.5)">
                        Intermediate (5.0 - 5.5)
                      </option>
                      <option value="Upper Intermediate (6.0 - 6.5)">
                        Upper Intermediate (6.0 - 6.5)
                      </option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Preferred mode
                  </label>
                  <div className="relative">
                    <select
                      name="preferredMode"
                      value={formData.preferredMode}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition pr-10"
                    >
                      <option value="On-campus">On-campus</option>
                      <option value="Online Classes">Online Classes</option>
                      <option value="Weekend Batch">Weekend Batch</option>
                    </select>
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              {/* Row 4: Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Your goal or question
                </label>
                <textarea
                  name="goal"
                  rows={3}
                  placeholder="Tell us your test date, study destination or weakest skill..."
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-[#8ce635] focus:ring-2 focus:ring-[#8ce635]/30 transition resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#0265AA] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#014e85] hover:shadow-xl"
                >
                  <span>Send on WhatsApp</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {/* Footer Disclaimer */}
              <p className="text-center text-[11px] text-slate-500 pt-1">
                Submitting opens WhatsApp with your details. No payment is taken
                through this form.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="w-4 h-4 text-slate-700 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
