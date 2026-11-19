"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, MessageSquare } from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

export default function PartnershipEnquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    business: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    partnershipInterest: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your WhatsApp number (include country code without '+' or spaces)
    const phoneNumber = "923070474920";

    const text = `*New Partnership Enquiry*%0A
*Full Name:* ${formData.fullName}%0A
*Business / Institution:* ${formData.business}%0A
*Email Address:* ${formData.email}%0A
*WhatsApp / Phone:* ${formData.phone}%0A
*Country:* ${formData.country}%0A
*City:* ${formData.city}%0A
*Partnership Interest:* ${formData.partnershipInterest}%0A
*Website / Social Profile:* ${formData.website || "N/A"}%0A
*Message:* ${formData.message || "N/A"}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="#partnership"
      className="w-full bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Intro & Direct Contact Card */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <p className="relative flex items-center gap-3 tracking-[0.1em] w-65 bg-blue-200/20 border-1 font-bold border-blue-400/50 px-3 py-2 rounded-full text-blue-500 lg:text-black/50 text-sm">
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
                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm" />{" "}
                LET'S GET ACQUAINTED
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-gray-950 leading-[1.15]">
              Tell us about your next chapter.
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              A few details help us understand your organisation and the
              students you support. Share your interest and start a conversation
              with OrbisNexa.
            </p>
          </div>

          {/* Direct Contact Card */}
          <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm space-y-4">
            <div className="h-9 w-9 rounded-xl bg-black text-blue-700 flex items-center justify-center">
              <MessageSquare size={18} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-sm font-bold text-gray-900">
                Prefer to speak to the team?
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Talk through your idea on WhatsApp, or reach us by email.
              </p>
            </div>

            <div className="pt-2 space-y-2.5 text-xs font-bold">
              <a
                href="https://wa.me/923070474920"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-900 hover:text-[#0265AA] transition-colors"
              >
                Chat on WhatsApp <ArrowRight size={14} />
              </a>

              <a
                href="mailto:info@orbisnexa.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#0265AA] transition-colors font-medium"
              >
                <Mail size={14} className="text-gray-400" />
                info@orbisnexa.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Partnership Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-100/80"
        >
          {/* Form Header */}
          <div className="border-b border-gray-100 pb-5 mb-6">
            <h3 className="text-lg font-extrabold text-gray-900">
              Partnership enquiry
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Fields marked * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Full Name & Business / Institution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Full name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Business / Institution *
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your organisation name"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 2: Email Address & WhatsApp / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  WhatsApp / phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +92 300 1234567"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 3: Country & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Pakistan"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Row 4: Partnership Interest Select */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Partnership interest *
              </label>
              <div className="relative">
                <select
                  name="partnershipInterest"
                  value={formData.partnershipInterest}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none pr-10 cursor-pointer font-medium`}
                >
                  <option value="" disabled>
                    Select the route that fits you
                  </option>
                  <option value="Sub-Agent / Recruitment Partner">
                    Sub-Agent / Recruitment Partner
                  </option>
                  <option value="University / Institution Partnership">
                    University / Institution Partnership
                  </option>
                  <option value="Language / IELTS Test Centre">
                    Language / IELTS Test Centre
                  </option>
                  <option value="Student Referral Affiliate">
                    Student Referral Affiliate
                  </option>
                  <option value="Other Collaboration">
                    Other Collaboration
                  </option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            {/* Row 5: Website / Social Profile (Optional) */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Website / social profile{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your website or business social profile"
                className={inputClass}
              />
            </div>

            {/* Row 6: Message Textarea (Optional) */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1.5">
                Tell us a little more{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Who do you work with, and what would you like to build with OrbisNexa?"
                className={`${inputClass} resize-y`}
              />
            </div>

            {/* Privacy Checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#0265AA]"
              />
              <span className="text-xs text-gray-600 leading-relaxed">
                I agree that OrbisNexa may contact me about this enquiry.{" "}
                <a
                  href="/contact"
                  className="font-bold underline text-gray-900 hover:text-[#0265AA]"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[#0265aa] hover:bg-blue-400 py-3.5 px-6 text-sm font-bold text-white shadow-md shadow-lime-200/60 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Continue on WhatsApp
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-2.5">
                Your enquiry opens in WhatsApp, review it, then tap Send.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
