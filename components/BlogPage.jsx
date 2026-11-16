"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ArrowRight,
  Clock,
  BookOpen,
  Sparkles,
  CheckCircle2,
  X,
  TrendingUp,
  Send,
} from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/services/data/BlogData";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Guides");
  const [activePost, setActivePost] = useState(null);
  const [subscriberContact, setSubscriberContact] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = useMemo(
    () => BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0],
    [],
  );

  const popularPosts = useMemo(
    () => BLOG_POSTS.filter((post) => post.popular).slice(0, 4),
    [],
  );

  // Filtered Grid Posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Guides" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscriberContact.trim()) return;
    setSubscribed(true);
    setSubscriberContact("");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#07152b] mt-15">
      {/* =========================================================
          SECTION 1: EDITORIAL HERO + SEARCH & CATEGORY FILTER
      ========================================================= */}
      <section className="relative bg-gradient-to-br from-[#0265aa] via-[#004d85] to-[#001f3f] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
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
              Blog Insights
            </p>
          </div>

          {/* Heading & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.08] tracking-tight">
              Clear answers for{" "}
              <span className="font-serif italic font-normal text-blue-400">
                IELTS & study abroad
              </span>{" "}
              decisions.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200/85 leading-relaxed max-w-2xl">
              Practical visa checklists, Band 7+ IELTS frameworks, realistic
              country budget breakdowns, and real student journeys—written by
              our counselors.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-10 p-3 sm:p-4 rounded-[26px] bg-white/10 backdrop-blur-md border border-white/15 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search UK visa, Band 7, gap..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-sm text-white bg-white/10 border border-white/15 rounded-2xl placeholder:text-slate-300/70 focus:outline-none focus:border-[#0265aa] focus:ring-2 focus:ring-[#0265aa]/30 transition"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {BLOG_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      isActive
                        ? "bg-blue-500/80 text-[#ffffff] shadow-sm"
                        : "text-white/85 hover:bg-white/15"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 -mt-12 relative z-10">
        {/* =========================================================
            SECTION 2: FEATURED / EDITOR'S PICK ARTICLE
        ========================================================= */}
        {selectedCategory === "All Guides" && !searchQuery && (
          <div
            onClick={() => setActivePost(featuredPost)}
            className="group bg-white rounded-[28px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-slate-300 transition-all"
          >
            {/* Image */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-[#07152b] text-[#0265aa] text-[11px] font-extrabold tracking-wider uppercase px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Guide
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                  <span className="text-[#0265aa] uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{featuredPost.date}</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#07152b] leading-snug group-hover:text-[#0265aa] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold text-[#07152b]">
                    {featuredPost.author}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {featuredPost.authorRole}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 lg:text-xs text-[8px] font-extrabold tracking-wider uppercase text-[#ffffff] bg-[#0265aa] px-4 py-2.5 rounded-full group-hover:translate-x-1 transition-transform">
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            SECTION 3: MAIN BLOG GRID (3-COLUMN CARDS)
        ========================================================= */}
        <section className="mt-14">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs font-extrabold tracking-[0.16em] text-[#07152b] uppercase shrink-0">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "ARTICLE" : "ARTICLES"} SHOWING
            </p>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-14 text-center">
              <p className="text-slate-600 font-medium">
                No guides matched &ldquo;{searchQuery}&rdquo; in{" "}
                {selectedCategory}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Guides");
                }}
                className="mt-4 px-5 py-2.5 rounded-full bg-[#07152b] text-white text-xs font-bold cursor-pointer"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="group bg-white rounded-[24px] border border-slate-200/90 hover:border-slate-300 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#07152b] text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mt-2.5 text-lg font-extrabold text-[#07152b] leading-snug line-clamp-2 group-hover:text-[#0265aa] transition-colors">
                        {post.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700">
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0265aa] group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* =========================================================
            SECTION 4: MID-PAGE CONVERSION BANNER (LEAD MAGNET)
        ========================================================= */}
        <section className="my-16 rounded-[28px] bg-gradient-to-r from-[#0e2026] via-[#07152b] to-[#0265aa] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#0265aa] mb-2">
                FREE 1-ON-1 PROFILE & IELTS EVALUATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Not sure which country or IELTS route fits your profile?
              </h2>
              <p className="mt-3 text-sm text-slate-200/85 leading-relaxed">
                Get a personalized shortlist based on your academics, study gap,
                and realistic budget—directly from our Lahore & Burewala desks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://wa.me/923070474920?text=Hi%20ORBIS%20Team,%20I%20was%20reading%20your%20blog%20and%20want%20a%20free%20profile%20assessment."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-[#ffffff] font-extrabold text-xs sm:text-sm px-6 py-4 rounded-full transition cursor-pointer"
              >
                <span>Free Assessment on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5 & 6: MOST READ QUICK GUIDES + NEWSLETTER BOX
        ========================================================= */}
        <section className="pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Most Read Quick Guides */}
          <div className="lg:col-span-7 bg-white rounded-[26px] border border-slate-200/90 p-7 sm:p-8 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-6">
              <TrendingUp className="w-5 h-5 text-[#0265aa]" />
              <h3 className="text-lg sm:text-xl font-extrabold text-[#07152b]">
                Most Read Student Guides
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              {popularPosts.map((post, idx) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0265aa] group-hover:text-white text-[#07152b] font-extrabold text-xs flex items-center justify-center shrink-0 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#0265aa]">
                      {post.category} • {post.readTime}
                    </p>
                    <h4 className="mt-1 text-sm sm:text-base font-bold text-[#07152b] group-hover:text-[#0265aa] transition-colors">
                      {post.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#07152b] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Weekly Updates Subscription Box */}
          <div className="lg:col-span-5 bg-[#07152b] text-white rounded-[26px] p-7 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="w-11 h-11 rounded-2xl bg-[#0265aa]/20 text-[#0265aa] flex items-center justify-center mb-5">
              <BookOpen className="w-5 h-5" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
              Get weekly visa rules & IELTS tips.
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              No spam. Only verified embassy updates, scholarship deadlines, and
              Band 7+ practice prompts sent once a week.
            </p>

            {subscribed ? (
              <div className="mt-6 p-4 rounded-2xl bg-[#9cf048]/15 border border-[#0265aa]/40 text-blue-400 text-xs font-bold flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  Subscribed! You will receive our next weekly student briefing.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Enter your Email or WhatsApp number"
                  value={subscriberContact}
                  onChange={(e) => setSubscriberContact(e.target.value)}
                  className="w-full px-4 py-3.5 text-sm text-white bg-white/10 border border-white/15 rounded-xl placeholder:text-slate-400 focus:outline-none focus:border-[#0265aa]"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-full bg-blue-500/80 hover:bg-blue-300 text-[#ffffff] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Join Free Updates</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      {/* =========================================================
          SINGLE ARTICLE READER MODAL (WHEN USER CLICKS ANY BLOG)
      ========================================================= */}
      {activePost && (
        <div
          onClick={() => setActivePost(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-[28px] overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col"
          >
            {/* Top Bar */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0265aa]">
                {activePost.category} • {activePost.readTime}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-60 sm:h-72 object-cover rounded-2xl"
              />

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07152b] leading-tight">
                  {activePost.title}
                </h2>
                <p className="mt-2 text-xs text-slate-500">
                  Published {activePost.date} by{" "}
                  <strong className="text-slate-800">
                    {activePost.author}
                  </strong>{" "}
                  ({activePost.authorRole})
                </p>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-[#f3f7f4] border-l-4 border-[#0265aa]">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#07152b] mb-2.5">
                  Key Takeaways
                </p>
                <ul className="space-y-2">
                  {activePost.keyTakeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-slate-700 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0265aa] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {activePost.content.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Bottom CTA inside Article */}
              <div className="p-6 rounded-2xl bg-[#07152b] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold">
                    Need help applying this to your profile?
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Chat directly with our admissions counselor on WhatsApp.
                  </p>
                </div>
                <a
                  href={`https://wa.me/923070474920?text=${encodeURIComponent(
                    `Hi ORBIS Team, I just read "${activePost.title}" and want guidance.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-blue-500 text-[#ffffff] text-xs font-extrabold whitespace-nowrap"
                >
                  Ask on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
