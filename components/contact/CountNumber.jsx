"use client";

import React, { useEffect, useRef, useState } from "react";

const STATS = [
  {
    target: 5000,
    suffix: "+",
    label: "Students Guided",
    numberColor: "text-[#05122b]",
    hasGlow: false,
  },
  {
    target: 10,
    suffix: "+",
    label: "Years of Experience",
    numberColor: "text-[#0f2928]",
    hasGlow: true, // Screenshot jaisa soft warm circle glow
  },
  {
    target: 17,
    suffix: "",
    label: "Study Destinations",
    numberColor: "text-[#05122b]",
    hasGlow: false,
  },
  {
    target: 2,
    suffix: "",
    label: "Office Locations",
    numberColor: "text-[#0f2928]",
    hasGlow: false,
  },
];

function CountNumber({ target, suffix, isVisible, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve (shuru mein tez, aakhir mein smooth slow)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * target);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounterBar() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ek dafa count hone ke baad dobara reset nahi hoga
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-white rounded-[26px] border border-slate-200/80 shadow-[0_12px_40px_rgba(7,21,43,0.06)]">
        {/* Top Gradient Accent Bar (Lime -> Amber -> Lime) */}
        <div
          aria-hidden="true"
          className="h-[5px] w-full bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/80">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative py-8 sm:py-10 px-4 flex flex-col items-center justify-center text-center overflow-hidden ${
                index % 2 === 1
                  ? "border-l border-slate-200/80 lg:border-l-0"
                  : ""
              }`}
            >
              {/* Soft Warm Semi-Circle Glow behind 2nd Stat (Matches screenshot) */}
              {stat.hasGlow && (
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 w-36 h-36 rounded-full bg-blue-200/80 pointer-events-none"
                />
              )}

              {/* Animated Number */}
              <div
                className={`relative z-10 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-none ${stat.numberColor}`}
              >
                <CountNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Label */}
              <p className="relative z-10 mt-2.5 text-xs sm:text-[13px] font-bold text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
