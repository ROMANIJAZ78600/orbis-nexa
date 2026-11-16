"use client";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation request submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white text-slate-900 w-full max-w-xl max-h-[90vh] overflow-y-auto p-5 md:p-8 rounded-3xl relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors font-bold text-lg cursor-pointer"
        >
          ×
        </button>

        {/* Top Badge */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wide border border-blue-200">
            FREE CONSULTATION
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-6">
          <h2 className="lg:text-xl md:text-2xl text-sm font-extrabold text-slate-900 leading-snug">
            Book Your <span className="text-blue-500">FREE</span> Consultation
            Call with Our Certified Experts
          </h2>
          <p className="lg:text-xs md:text-sm text-[10px] text-slate-500 mt-1">
            Take the first step towards your professional project or digital
            future.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Full Name & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                required
                placeholder="Full Name *"
                className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
            <div className="flex gap-2">
              <select className="bg-slate-50 border border-blue-200 rounded-xl px-3 py-3 text-sm text-slate-600 focus:outline-none focus:border-blue-500">
                <option value="+92">+92</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
              </select>
              <input
                type="tel"
                required
                placeholder="Mobile Number *"
                className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Service / Study Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              required
              placeholder="Email ID *"
              className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
            <select className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-blue-500">
              <option value="">What service do you need? *</option>
              <option value="mobile">Mobile App Development</option>
              <option value="web">Web Development / Next.js</option>
              <option value="ui">UI/UX Design</option>
              <option value="other">Other Technical Services</option>
            </select>
          </div>

          {/* Row 3: Current City & Preferred Branch/Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Current City *"
              className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
            <select className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-blue-500">
              <option value="">Preferred Mode / Branch *</option>
              <option value="online">Online / Remote Consultation</option>
              <option value="office">In-Person Meeting</option>
            </select>
          </div>

          {/* Row 4: Qualification & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-blue-500">
              <option value="">Project Scale / Budget *</option>
              <option value="starter">Starter / MVP ($500 - $1000)</option>
              <option value="standard">
                Standard Business ($1000 - $3000)
              </option>
              <option value="enterprise">Enterprise ($3000+)</option>
            </select>
            <input
              type="text"
              placeholder="Expected Timeline (e.g. 2 Weeks)"
              className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Row 5: Experience / Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Current Stack / Background"
              className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
            <select className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:border-blue-500">
              <option value="">Target Urgency *</option>
              <option value="immediate">Immediate Start</option>
              <option value="month">Within a Month</option>
              <option value="planning">Just Planning</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <textarea
              rows="3"
              placeholder="Tell us briefly about your project goals and requirements..."
              className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              required
              id="privacy"
              className="mt-1 w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="privacy"
              className="text-xs text-slate-500 cursor-pointer select-none"
            >
              I agree to Privacy Policy and Terms and Conditions{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0265aa] hover:bg-blue-400 text-white font-bold py-3 px-5 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm md:text-base group"
          >
            <span>Start My FREE Consultation</span>
            <span className="bg-blue-200/60 rounded-full w-7 h-7 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

          {/* Secure Note */}
          <p className="text-center text-[11px] text-slate-400 pt-1">
            Your Information is safe & secure
          </p>
        </form>
      </div>
    </div>
  );
}
