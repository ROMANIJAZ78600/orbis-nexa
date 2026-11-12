"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Check,
  GraduationCap,
  MessageSquare,
  Star,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Programme",
    description: "Select the course that inspires you and shapes your future.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Find Your University",
    description:
      "Discover and shortlist top universities with expert guidance.",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Prepare for Tests & Applications",
    description:
      "Get support to ace your English language test and craft a strong Statement of Purpose.",
    icon: MessageSquare,
  },
  {
    id: 4,
    title: "Secure Funding",
    description:
      "Apply for scholarships and manage your finances for a smooth visa process.",
    icon: Star,
  },
  {
    id: 5,
    title: "Visa Approval",
    description:
      "Prepare confidently for your visa interview and take the first step towards your international future.",
    icon: Briefcase,
  },
];

const inputClass =
  "w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

const selectClass =
  "w-full min-w-0 appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 outline-none transition-all duration-200 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-blue via-blue-50 to-blue px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-7 lg:sticky lg:top-28">
          {/* Badge */}
          <div className="flex w-fit items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0265AA] sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0265AA]" />
            </span>
            Start Your Journey Here
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Your Next Step to{" "}
              <span className="text-[#0265AA]">Studying Abroad</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Unlock a world of global opportunities, personal growth, and
              career success with a study experience beyond borders. The
              investment you make today can open doors to tomorrow's
              opportunities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-3">
            {/* Timeline Line */}
            <div className="absolute bottom-8 left-[23px] top-8 w-[2px] bg-gradient-to-b from-blue-100 via-blue-200 to-[#0265AA]" />

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative flex items-start gap-5"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-[#0265AA] shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#0265AA] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-base font-bold tracking-tight text-gray-900 sm:text-lg">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-7 text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0265AA]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Expert Guidance at Every Step
              </h4>
              <p className="mt-1 text-xs text-gray-500">
                Your international education journey starts here.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative isolate w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-blue-100/60"
        >
          {/* Top Animated Border */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gray-100">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-[#0265AA] to-blue-300"
            />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col gap-6 p-5 sm:p-8 lg:p-9"
          >
            {/* Form Header */}
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0265AA]">
                <span className="h-2 w-2 rounded-full bg-[#0265AA]" />
                Free Consultation
              </span>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Book Your FREE Consultation
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Speak with our certified counsellors and take the first step
                towards your international future.
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                Personal Information
              </h4>

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className={inputClass}
              />

              <div className="flex gap-2">
                <div className="flex shrink-0 items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-semibold text-gray-700">
                  🇵🇰 +92
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className={inputClass}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className={inputClass}
              />
            </div>

            {/* Study Preferences */}
            <div className="space-y-4">
              <h4 className="border-t border-gray-100 pt-5 text-sm font-bold uppercase tracking-wider text-gray-800">
                Study Preferences
              </h4>

              <select
                name="country"
                defaultValue=""
                required
                className={selectClass}
              >
                <option value="" disabled>
                  Where Do You Want to Study? *
                </option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
                <option value="jp">Japan</option>
              </select>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="city"
                  placeholder="Current City *"
                  required
                  className={inputClass}
                />

                <select
                  name="branch"
                  defaultValue=""
                  required
                  className={selectClass}
                >
                  <option value="" disabled>
                    Preferred Branch *
                  </option>
                  <option value="Lahore">Lahore</option>
                </select>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h4 className="border-t border-gray-100 pt-5 text-sm font-bold uppercase tracking-wider text-gray-800">
                Academic Information
              </h4>

              <select
                name="qualification"
                defaultValue=""
                required
                className={selectClass}
              >
                <option value="" disabled>
                  Last Qualification *
                </option>
                <option value="matric">Matric / O Level</option>
                <option value="intermediate">Intermediate / A Level</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="other">Other</option>
              </select>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="number"
                  name="completionYear"
                  placeholder="Completion Year *"
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="cgpa"
                  placeholder="CGPA / Percentage"
                  className={inputClass}
                />

                <input
                  type="text"
                  name="englishScore"
                  placeholder="IELTS / PTE Score"
                  className={`${inputClass} sm:col-span-2`}
                />
              </div>
            </div>

            {/* Application Details */}
            <div className="space-y-4">
              <h4 className="border-t border-gray-100 pt-5 text-sm font-bold uppercase tracking-wider text-gray-800">
                Application Details
              </h4>

              <select
                name="intake"
                defaultValue=""
                required
                className={selectClass}
              >
                <option value="" disabled>
                  Target Intake *
                </option>
                <option value="jan-2027">January 2027</option>
                <option value="may-2027">May 2027</option>
                <option value="sep-2027">September 2027</option>
                <option value="jan-2028">January 2028</option>
                <option value="undecided">Not Decided</option>
              </select>

              <select
                name="support"
                defaultValue=""
                required
                className={selectClass}
              >
                <option value="" disabled>
                  What Support Do You Need? *
                </option>
                <option value="complete-counseling">Complete Counseling</option>
                <option value="visa-guidance">Visa Guidance</option>
                <option value="course-selection">
                  Course & University Selection
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us briefly about your study plans..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Privacy */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-[#0265AA]"
              />

              <span className="text-xs leading-6 text-gray-500">
                I agree to OrbisNexa's Privacy Policy and Terms & Conditions.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#0265AA] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#014e85] hover:shadow-xl"
            >
              Start Free Consultation
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Security Note */}
            <p className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Check size={15} className="text-green-600" />
              Your information is secure and confidential.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
