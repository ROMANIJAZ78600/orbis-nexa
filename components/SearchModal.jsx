"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Clock, ArrowUpLeft } from "lucide-react";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

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

  const handleSearch = (value = query) => {
    const search = value.trim();
    if (!search) return;

    const updated = [
      search,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== search.toLowerCase(),
      ),
    ].slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
    setQuery(search);

    // Add your search navigation/API logic here
    console.log("Searching:", search);
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
                  placeholder="Search anything..."
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

            {/* Recent Searches */}
            <div className="px-5 pb-6">
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
                      className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-gray-50"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
