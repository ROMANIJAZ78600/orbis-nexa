"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const inputClass =
  "lg:w-70 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

const selectClass =
  "lg:w-70 w-full  appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600 outline-none transition-all duration-200 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative mt-[100px] md:mt-[120px] min-h-[850px] w-full overflow-hidden bg-gradient-to-br from-[#0265aa] via-blue-500 to-[#0265aa]">
        <div className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 lg:px-0">
          {/* LEFT CONTENT - ORIGINAL DESIGN */}
          <div className="min-w-0">
            <p className="text-white lg:p-15 p-7">
              Home / <span className="text-blue-950">Contact Us</span>
            </p>

            <div className="relative lg:bottom-20 bottom-10 flex flex-col gap-5 lg:p-10 p-5 lg:ml-5">
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
                Talk to a Study Abroad Expert
              </p>

              <h1 className="lg:text-6xl lg:max-w-[560px] text-3xl sm:text-4xl font-semibold text-white">
                Your next move starts with one clear conversation.
              </h1>

              <p className="lg:max-w-[560px] text-gray-300 leading-7 text-sm sm:text-base">
                Tell us where you are in your study abroad journey. Our
                counselling team will review your profile, understand your goals
                and help you plan the most practical next step.
              </p>

              {/* BENEFITS */}
              <ol className="flex flex-col gap-4 bg-black/10 p-5 border border-black/50 rounded-[15px]">
                <div className="flex gap-3">
                  <Check className="shrink-0 bg-black/50 text-green-400 rounded-2xl p-2 w-7 h-7" />

                  <li className="flex flex-col">
                    <p className="font-bold text-white">Profile-led guidance</p>
                    <span className="text-gray-300 text-sm">
                      Advice based on academics, budget and goals.
                    </span>
                  </li>
                </div>

                <div className="flex gap-3">
                  <Check className="shrink-0 bg-black/50 text-green-400 rounded-2xl p-2 w-7 h-7" />

                  <li className="flex flex-col">
                    <p className="font-bold text-white">University guidance</p>
                    <span className="text-gray-300 text-sm">
                      Explore suitable courses and study destinations.
                    </span>
                  </li>
                </div>

                <div className="flex gap-3">
                  <Check className="shrink-0 bg-black/50 text-green-400 rounded-2xl p-2 w-7 h-7" />

                  <li className="flex flex-col">
                    <p className="font-bold text-white">Application support</p>
                    <span className="text-gray-300 text-sm">
                      Get guidance throughout your study abroad journey.
                    </span>
                  </li>
                </div>
              </ol>

              {/* RESPONSE TIME */}
              <p className="relative flex items-center gap-3 tracking-wide w-full bg-blue-200/20 border font-bold border-blue-400/50 px-3 py-3 rounded-full text-black/50 text-xs sm:text-sm">
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
                Our team aims to respond within one working day.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative isolate w-full lg:max-w-[650px] h-fit min-w-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-blue-100/60 lg:mt-10 lg:mr-8 mb-10"
          >
            {/* TOP ANIMATED BORDER */}
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
              className="relative flex flex-col gap-6 p-4 sm:p-6 lg:p-8 pt-8"
            >
              {/* FORM HEADER */}
              <div className="text-center">
                <span className="inline-flex absolute right-0 top-2 items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0265AA]">
                  <span className="h-2 w-2 rounded-full bg-[#0265AA]" />
                  Free Consultation
                </span>

                <h3 className="mt-5 absolute lg:top-0 text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl">
                  Share your Study Profile
                </h3>

                <p className="mt-13 text-start max-w-md text-xs leading-none text-gray-500">
                  A few details help us prepare before a counsellor contacts
                  you.
                </p>
              </div>

              {/* PERSONAL INFORMATION */}
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="fullname" className="text-xs font-bold ml-1">
                    Fullname*
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    autoComplete="name"
                    required
                    className="lg:w-full w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10"
                  />
                </div>

                <div className="min-w-0 gap-2">
                  <div className="flex gap-3">
                    <div>
                      <label htmlFor="phone" className="text-xs font-bold ml-1">
                        Phone / Whatsapp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        autoComplete="tel-national"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      {" "}
                      <label htmlFor="email" className="text-xs font-bold ml-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        autoComplete="email"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* STUDY PREFERENCES */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <label
                      htmlFor="destination"
                      className="text-xs font-bold ml-1"
                    >
                      Prefered Destination
                    </label>
                    <select
                      name="country"
                      defaultValue=""
                      required
                      className={selectClass}
                    >
                      <option value="" disabled>
                        Prefered Destination
                      </option>
                      <option value="us">United States</option>
                      <option value="gb">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="au">Australia</option>
                      <option value="de">Germany</option>
                      <option value="jp">Japan</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="Studylevel"
                      className="text-xs font-bold ml-1"
                    >
                      Study Level*
                    </label>
                    <select
                      name="qualification"
                      defaultValue=""
                      required
                      className={`${selectClass}`}
                    >
                      <option value="" disabled>
                        Choose Level
                      </option>
                      <option value="matric">Matric / O Level</option>
                      <option value="intermediate">
                        Intermediate / A Level
                      </option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ACADEMIC INFORMATION */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <div>
                      <label
                        htmlFor="Intake"
                        className="text-xs font-bold ml-1"
                      >
                        Prefered Intake*
                      </label>
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
                    </div>
                    <div>
                      {" "}
                      <label htmlFor="city" className="text-xs font-bold ml-1">
                        Your City*
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Lahore, Islamabad"
                        className={`${inputClass} sm:col-span-2`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* APPLICATION DETAILS */}
              <div className="space-y-4">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="">Tell us briefly about your Profile</label>
                  <textarea
                    name="message"
                    placeholder="Tell us briefly about your study plans..."
                    rows={4}
                    className={`lg:w-full w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#0265AA] focus:bg-white focus:ring-4 focus:ring-[#0265AA]/10 resize-none`}
                  />
                </div>
              </div>

              {/* PRIVACY */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0265AA]"
                />

                <span className="text-xs leading-6 text-gray-500">
                  I agree to OrbisNexa's Privacy Policy and Terms & Conditions.
                </span>
              </label>

              {/* SUBMIT */}
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

              {/* SECURITY NOTE */}
              <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-400">
                <Check size={15} className="shrink-0 text-green-600" />
                Your information is secure and confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
