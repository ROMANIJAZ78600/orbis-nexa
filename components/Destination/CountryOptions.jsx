"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function CountryOptions() {
  const [selected, setSelected] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const DESTINATIONS = [
    {
      id: "uk",
      number: "01",
      region: "Europe",
      country: "United Kingdom",
      flagUrl: "https://flagcdn.com/w80/gb.png",
      description:
        "World-recognised education, diverse courses and a truly international student experience.",
      tags: ["Undergraduate", "Masters", "Research"],
      featured: true,
    },
    {
      id: "usa",
      number: "02",
      region: "Americas",
      country: "United States",
      flagUrl: "https://flagcdn.com/w80/us.png",
      description:
        "Flexible academic pathways across globally recognised universities and specialist institutions.",
      tags: ["Flexible Study", "Innovation"],
    },
    {
      id: "australia",
      number: "03",
      region: "Oceania",
      country: "Australia",
      flagUrl: "https://flagcdn.com/w80/au.png",
      description:
        "A strong mix of quality education, innovation and vibrant multicultural student cities.",
      tags: ["Quality Education", "Student Life"],
    },
    {
      id: "canada",
      number: "04",
      region: "Americas",
      country: "Canada",
      flagUrl: "https://flagcdn.com/w80/ca.png",
      description:
        "Welcoming multicultural campuses with strong post-study work opportunities and co-op programs.",
      tags: ["Post-Study Work", "Research"],
    },
    {
      id: "germany",
      number: "05",
      region: "Europe",
      country: "Germany",
      flagUrl: "https://flagcdn.com/w80/de.png",
      description:
        "Tuition-free public universities renowned globally for engineering, technology and research.",
      tags: ["Engineering", "Low Tuition"],
    },
    {
      id: "uae",
      number: "06",
      region: "Asia & Middle East",
      country: "United Arab Emirates",
      flagUrl: "https://flagcdn.com/w80/ae.png",
      description:
        "Fast-growing international branch campuses offering global degrees close to home.",
      tags: ["Global Campuses", "Business"],
    },
  ];

  const regions = [
    "All",
    "Europe",
    "Oceania",
    "Americas",
    "Asia & Middle East",
  ];

  // Live search aur region filter logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesRegion = selected === "All" || item.region === selected;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.country.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selected]);
  return (
    <section className="relative mt-[60px] md:mt-[80px] min-h-[700px]  w-full overflow-hidden bg-white">
      <div className="flex lg:flex-row flex-col lg:justify-between  lg:items-center p-5">
        <div className="pl-20 lg:w-[50%] relative lg:right-0 right-20">
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
            Explore Your Options
          </p>
          <h1 className="lg:text-5xl text-2xl font-bold mt-2">
            Where could your <br />{" "}
            <span className="font-light text-[#0265aa] italic">
              next chapter begin?
            </span>
          </h1>
        </div>
        <div className="lg:pr-5 lg:w-[40%] mt-2">
          <p className="text-slate-500">
            Search by country or browse by region. Every card is designed to
            give you a quick feel for the destination before a counsellor builds
            your personalised plan.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-[89%] max-w-full flex-col gap-4 overflow-hidden rounded-[20px] bg-gray-50 p-3 lg:w-[80%] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:overflow-visible lg:px-5">
        {/* Search Input */}
        <div className="flex h-12 w-full min-w-0 shrink-0 items-center gap-3 rounded-xl border border-black/30 bg-white px-4 transition-colors duration-200 hover:border-blue-400 focus-within:border-blue-400 lg:w-[280px]">
          <Search size={20} className="shrink-0 text-gray-500" />

          <input
            type="search"
            className="h-full w-full min-w-0 border-none bg-transparent text-sm outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
        </div>

        {/* Region Filters */}
        <div className="w-full min-w-0 flex-1 overflow-hidden">
          <div className="flex w-full items-center gap-2 overflow-x-auto overscroll-x-contain whitespace-nowrap pb-1 scrollbar-hide lg:justify-end">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelected(region)}
                className={`shrink-0 rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  selected === region
                    ? "bg-blue-400 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Count Header */}
      <div className="flex items-center gap-4 my-7 lg:pl-35 lg:w-[89%] w-[90%] pl-10">
        <p className="text-xs font-extrabold tracking-[0.14em] text-slate-900 uppercase shrink-0">
          <span className="text-sm mr-1">{filteredDestinations.length}</span>{" "}
          DESTINATIONS SHOWING
        </p>
        <div className="h-[1px] w-full bg-slate-200" />
      </div>

      {/* Cards Grid */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
          <p className="text-slate-600 font-medium">
            No destinations found for &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveRegion("All");
            }}
            className="mt-3 text-xs font-bold text-slate-900 underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  lg:pl-20 lg:pr-20 mx-auto mb-5">
          {filteredDestinations.map((item) => {
            const isDark = item.featured;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[26px] p-7 flex flex-col justify-between min-h-[360px] lg:w-90 w-80 mx-auto transition-all duration-300 hover:-translate-y-1.5 active:-translate-y-1.5 ${
                  isDark
                    ? "bg-blue-500 text-white shadow-xl"
                    : "bg-white text-slate-900 border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl"
                }`}
              >
                {/* Top-Right Subtle Corner Circle Glow */}
                <div
                  className={`absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110 ${
                    isDark ? "bg-blue-700/15" : "bg-[#0265aa]/20"
                  }`}
                />

                <div>
                  {/* Top Row: Number & Flag */}
                  <div className="flex items-start justify-between relative z-10">
                    <span className="text-xs font-bold tracking-wider text-slate-400">
                      {item.number}
                    </span>

                    <div className="bg-white p-1.5 rounded-xl shadow-md border border-slate-100">
                      <img
                        src={item.flagUrl}
                        alt={`${item.country} flag`}
                        className="w-10 h-7 object-cover rounded-md"
                      />
                    </div>
                  </div>

                  {/* Region Label */}
                  <p
                    className={`mt-7 text-[11px] font-extrabold tracking-[0.16em] uppercase ${
                      isDark ? "text-blue-900" : "text-blue-500"
                    }`}
                  >
                    {item.region}
                  </p>

                  {/* Country Title */}
                  <h3
                    className={`mt-1.5 text-2xl font-extrabold tracking-tight ${
                      isDark ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {item.country}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-bold px-3 py-1.5 rounded-full ${
                          isDark
                            ? "bg-blue-200 text-[#0265aa]"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 relative z-10">
                  <div
                    className={`h-[1px] w-full mb-4 ${
                      isDark ? "bg-white/10" : "bg-slate-200"
                    }`}
                  />
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between text-xs font-extrabold tracking-[0.14em] uppercase cursor-pointer ${
                      isDark ? "text-white" : "text-slate-950"
                    }`}
                  >
                    <span>EXPLORE WITH ORBIS</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </button>
                </div>

                {/* Bottom Accent Bar */}
                <div
                  className={`absolute bottom-0 left-7 h-1 rounded-t-full transition-all duration-300 ${
                    isDark
                      ? "w-4/5 bg-blue-200"
                      : "w-12 bg-blue-400 group-hover:w-full active:group-hover:w-full"
                  }`}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
