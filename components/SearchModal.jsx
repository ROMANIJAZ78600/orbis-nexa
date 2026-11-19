"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  Clock,
  ArrowUpLeft,
  ArrowUpRight,
  Globe,
  FileText,
  GraduationCap,
  Handshake,
  PhoneCall,
  Info,
  Home,
} from "lucide-react";

const searchIndex = [
  // Main Pages
  {
    title: "Home",
    subtitle: "OrbisNexa Study Abroad Consultancy",
    href: "/",
    keywords: ["home", "orbisnexa", "consultancy", "study abroad", "pakistan"],
    icon: Home,
  },
  {
    title: "About Us",
    subtitle: "Our story, counsellors & admission process",
    href: "/about",
    keywords: [
      "about",
      "team",
      "mission",
      "counselling",
      "advisors",
      "process",
    ],
    icon: Info,
  },
  {
    title: "Study Destinations",
    subtitle: "Compare all countries, intakes & budgets",
    href: "/destinations",
    keywords: ["destinations", "countries", "compare", "intakes", "abroad"],
    icon: Globe,
  },
  {
    title: "IELTS Test Preparation",
    subtitle: "Academic & General Training coaching and mock tests",
    href: "/ielts-preparation",
    keywords: [
      "ielts",
      "english",
      "band score",
      "academic",
      "general training",
      "mock test",
      "speaking",
      "writing",
      "pte",
    ],
    icon: GraduationCap,
  },
  {
    title: "Blogs & Visa Guides",
    subtitle: "Latest visa updates, scholarships & admission articles",
    href: "/blogs",
    keywords: ["blogs", "articles", "news", "guides", "updates", "tips"],
    icon: FileText,
  },
  {
    title: "Become a Partner",
    subtitle: "B2B sub-agents, institutions & referral affiliates",
    href: "/become-a-partner",
    keywords: [
      "partner",
      "b2b",
      "sub-agent",
      "agent",
      "affiliate",
      "commission",
      "collaboration",
    ],
    icon: Handshake,
  },
  {
    title: "Contact Us",
    subtitle: "Book a free consultation via WhatsApp or call",
    href: "/contact",
    keywords: [
      "contact",
      "book consultation",
      "whatsapp",
      "appointment",
      "call",
      "help",
      "eligibility",
    ],
    icon: PhoneCall,
  },

  // Country Destinations
  {
    title: "Study in United States (USA)",
    subtitle: "F-1 Visa, SEVIS, I-20, OPT & top US universities",
    href: "/destinations/us",
    keywords: [
      "usa",
      "united states",
      "america",
      "f1",
      "f-1",
      "sevis",
      "i-20",
      "opt",
      "harvard",
      "mit",
      "stanford",
    ],
    code: "us",
  },
  {
    title: "Study in United Kingdom (UK)",
    subtitle: "UK Student Visa, CAS, IHS & Graduate Route",
    href: "/destinations/gb",
    keywords: [
      "uk",
      "united kingdom",
      "england",
      "london",
      "cas",
      "ihs",
      "graduate route",
      "oxford",
      "cambridge",
    ],
    code: "gb",
  },
  {
    title: "Study in Canada",
    subtitle: "Study Permit, DLI, PAL, GIC & PGWP pathways",
    href: "/destinations/ca",
    keywords: [
      "canada",
      "study permit",
      "dli",
      "pal",
      "pgwp",
      "gic",
      "toronto",
      "ubc",
      "mcgill",
      "waterloo",
    ],
    code: "ca",
  },
  {
    title: "Study in Australia",
    subtitle: "Subclass 500 Visa, CoE, OSHC & Subclass 485",
    href: "/destinations/au",
    keywords: [
      "australia",
      "subclass 500",
      "coe",
      "oshc",
      "subclass 485",
      "melbourne",
      "sydney",
      "monash",
    ],
    code: "au",
  },
  {
    title: "Study in Germany",
    subtitle: "Low-tuition universities, Sperrkonto & German visa",
    href: "/destinations/de",
    keywords: [
      "germany",
      "free education",
      "low tuition",
      "sperrkonto",
      "blocked account",
      "munich",
      "berlin",
      "engineering",
    ],
    code: "de",
  },
  {
    title: "Study in Italy",
    subtitle: "Universitaly pre-enrollment, Type D visa & scholarships",
    href: "/destinations/it",
    keywords: [
      "italy",
      "universitaly",
      "type d",
      "permesso di soggiorno",
      "bologna",
      "milan",
      "rome",
    ],
    code: "it",
  },
  {
    title: "Study in France",
    subtitle: "Grandes Écoles, VLS-TS visa & English-taught degrees",
    href: "/destinations/fr",
    keywords: [
      "france",
      "paris",
      "vls-ts",
      "grandes ecoles",
      "sorbonne",
      "hec paris",
    ],
    code: "fr",
  },
  {
    title: "Study in Finland",
    subtitle: "Migri residence permit, Enter Finland & top universities",
    href: "/destinations/fi",
    keywords: ["finland", "helsinki", "migri", "enter finland", "aalto"],
    code: "fi",
  },
  {
    title: "Study in Sweden",
    subtitle: "Migrationsverket permit, KTH, Lund & Uppsala",
    href: "/destinations/se",
    keywords: [
      "sweden",
      "swedan",
      "stockholm",
      "migrationsverket",
      "kth",
      "lund",
      "uppsala",
    ],
    code: "se",
  },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Filter matching pages/destinations based on query
  const filteredResults = query.trim()
    ? searchIndex.filter((item) => {
        const q = query.toLowerCase().trim();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.keywords.some((kw) => kw.toLowerCase().includes(q))
        );
      })
    : [];

  const saveRecentSearch = (term) => {
    const updated = [
      term,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== term.toLowerCase(),
      ),
    ].slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const navigateToResult = (item, searchTerm = item.title) => {
    saveRecentSearch(searchTerm);
    setQuery("");
    onClose();
    router.push(item.href);
  };

  const handleSearch = (value = query) => {
    const search = value.trim();
    if (!search) return;

    const q = search.toLowerCase();
    const bestMatch = searchIndex.find(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q)),
    );

    if (bestMatch) {
      navigateToResult(bestMatch, search);
    } else {
      saveRecentSearch(search);
      setQuery(search);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-lg font-semibold text-gray-900">Search</h2>

              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="p-5"
            >
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-4 transition focus-within:border-[#0265AA] focus-within:ring-2 focus-within:ring-[#0265AA]/10">
                <Search className="shrink-0 text-gray-400" size={21} />

                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search countries (UK, USA, Germany...), IELTS, visas..."
                  className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-gray-400 hover:text-black"
                  >
                    <X size={17} />
                  </button>
                )}

                <kbd className="hidden rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500 sm:block">
                  Enter
                </kbd>
              </div>
            </form>

            {/* Body: Live Search Results OR Recent Searches */}
            <div className="max-h-[55vh] overflow-y-auto px-5 pb-6">
              {query.trim() ? (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Matching Pages ({filteredResults.length})
                    </h3>
                  </div>

                  {filteredResults.length > 0 ? (
                    <div className="space-y-1.5">
                      {filteredResults.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.href}
                            type="button"
                            onClick={() => navigateToResult(item, query.trim())}
                            className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-transparent px-3.5 py-3 text-left transition hover:border-blue-100 hover:bg-blue-50/70"
                          >
                            {item.code ? (
                              <img
                                src={`https://flagcdn.com/w40/${item.code}.png`}
                                alt={item.title}
                                className="h-5 w-7 shrink-0 rounded-sm object-cover shadow-sm"
                              />
                            ) : (
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition group-hover:bg-[#0265AA] group-hover:text-white">
                                <Icon size={16} />
                              </div>
                            )}

                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0265AA]">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {item.subtitle}
                              </p>
                            </div>

                            <ArrowUpRight
                              size={17}
                              className="shrink-0 text-gray-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0265AA]"
                            />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-xl bg-gray-50 px-4 py-6 text-center">
                      <p className="text-sm font-medium text-gray-600">
                        No exact page found for “{query}”
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          saveRecentSearch(query.trim());
                          setQuery("");
                          onClose();
                          router.push("/contact");
                        }}
                        className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0265AA] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0265AA]/90"
                      >
                        Ask a Counsellor <ArrowUpRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Recent Searches
                    </h3>

                    {recentSearches.length > 0 && (
                      <button
                        onClick={() => {
                          setRecentSearches([]);
                          localStorage.removeItem("recentSearches");
                        }}
                        className="text-xs font-medium text-[#0265AA] hover:underline"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  {recentSearches.length > 0 ? (
                    <div className="space-y-1">
                      {recentSearches.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(item)}
                          className="group flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-gray-50"
                        >
                          <Clock size={17} className="text-gray-400" />

                          <span className="flex-1 text-sm text-gray-600 group-hover:text-gray-900">
                            {item}
                          </span>

                          <ArrowUpLeft
                            size={17}
                            className="text-gray-400 opacity-0 transition group-hover:opacity-100"
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="rounded-lg bg-gray-50 px-4 py-5 text-center text-sm text-gray-400">
                      No recent searches yet.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
