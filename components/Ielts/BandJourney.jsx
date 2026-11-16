"use client";

import { motion } from "framer-motion";

import { Search, RefreshCw, Check, MessageCircle } from "lucide-react";

const milestones = [
  { score: "5.0", completed: true },
  { score: "5.5", completed: true },
  { score: "6.0", completed: true },
  { score: "6.5", completed: false },
  { score: "7.0+", current: true },
];

const skills = [
  {
    name: "Listening",
    progress: 84,
    description: "Building accuracy",
  },
  {
    name: "Reading",
    progress: 72,
    description: "Improving timing",
  },
  {
    name: "Writing",
    progress: 60,
    description: "Needs feedback",
  },
  {
    name: "Speaking",
    progress: 78,
    description: "Growing fluency",
  },
];

const features = [
  {
    icon: Search,
    title: "Diagnostic assessment",
    description: "Begin with evidence instead of guessing your level.",
  },
  {
    icon: RefreshCw,
    title: "Weekly review",
    description: "Use feedback to update the next practice cycle.",
  },
  {
    icon: Check,
    title: "Writing correction",
    description: "Understand why an answer loses marks and how to rebuild it.",
  },
  {
    icon: MessageCircle,
    title: "Speaking simulation",
    description: "Practise structured answers without sounding memorised.",
  },
];

export default function BandJourney() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 text-[#081735]">
      <div className="mx-auto max-w-[1062px]">
        {/* Heading */}
        <header className="mb-8 text-center">
          <div className="mb-1 flex items-center justify-center gap-2">
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
              Visible Progress
            </p>
          </div>

          <h1 className="text-[38px] leading-[1.08] tracking-[-1.8px] sm:text-[52px]">
            <span className="block font-semibold">Your band journey,</span>
            <span className="block font-serif italic font-normal text-[#0265aa]">
              made measurable.
            </span>
          </h1>

          <p className="mt-2 text-[12px] tracking-wide text-[#65718b]">
            Track improvement by skill, not just by one overall mock score.
          </p>
        </header>

        {/* Progress Panel */}
        <section className="rounded-[25px] border border-[#d4dadd] bg-gradient-to-br from-[#f7faf8] to-[#eef4f0] px-5 py-9 shadow-[0_15px_50px_rgba(10,30,40,0.05)] sm:px-[30px]">
          {/* Timeline */}
          <div className="relative px-0 sm:px-0">
            <div className="absolute left-6 right-6 top-1/2 h-[3px] -translate-y-1/2 bg-blue-400" />

            <div className="absolute left-6 top-1/2 h-[3px] w-[46%] -translate-y-1/2 bg-[#0265aa]" />

            <div className="relative flex items-center justify-between">
              {milestones.map((item, index) => (
                <div
                  key={item.score}
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border text-[11px] font-extrabold
                    ${
                      item.current
                        ? "h-16 w-16 border-[8px] border-blue-200 bg-[#0335bd] text-white"
                        : item.completed
                          ? "border-[#0265aa] bg-blue-400 text-white"
                          : "border-[#dce1e5] bg-white text-[#536078]"
                    }`}
                >
                  {item.score}
                </div>
              ))}
            </div>
          </div>

          <div className="my-8 h-px bg-[#d5dddd]" />

          {/* Skills */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4 md:gap-x-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <h3 className="mb-3 text-[9px] lg:text-sm font-extrabold">
                  {skill.name}
                </h3>

                <div className="h-[6px] overflow-hidden rounded-full bg-[#dce1e2]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-200"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>

                <p className="mt-3 text-[9px] lg:text-xs text-[#52617d]">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex min-h-[135px] flex-col rounded-[17px] border border-blue-300 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_12px_30px_rgba(20,50,40,0.07)]"
              >
                <div className="mb-1 flex h-[34px] w-[34px] items-center justify-center rounded-[11px] bg-blue-200 text-[#102e29] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={15} strokeWidth={2.5} />
                </div>

                <h3 className="text-[13px] font-bold tracking-[-0.2px]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[9px] leading-[1.7] text-[#52617d]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
