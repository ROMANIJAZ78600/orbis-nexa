"use client";

import Hero from "@/components/about/Hero";
import Support from "@/components/about/Support";
import Team from "@/components/about/Team";
import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";

const aboutFaqs = [
  {
    question: "When should I start my study abroad application?",
    answer:
      "Ideally, you should start 6 to 9 months before your intended intake. Starting early gives you enough time to shortlist universities, prepare documents, take English language tests if required, and complete visa formalities smoothly.",
  },
  {
    question: "How do you recommend a university or course?",
    answer:
      "We assess your academic grades, budget, preferred destination, English proficiency, and long-term career goals to recommend courses and institutions where you have strong admission prospects and genuine value.",
  },
  {
    question: "Can you support me after I receive an offer?",
    answer:
      "Yes. Once you receive an offer letter, we assist you with meeting conditional requirements, fee deposit guidance, CAS/I-20/CoE documentation, student visa file preparation, and pre-departure briefing.",
  },
  {
    question: "Do you help with scholarships?",
    answer:
      "Yes, we identify merit-based scholarships, tuition fee waivers, and early-bird bursaries offered by partner universities and guide you through the scholarship application process.",
  },
  {
    question: "What should I bring to my first counselling session?",
    answer:
      "Bring copies or digital scans of your academic transcripts and certificates (Matric/O-Levels onwards), your passport (if available), any English test scores (like IELTS/PTE), and a clear idea of your preferred country and budget.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatDrivesUs />
      <Support />
      <Team />
      <Faqs
        badge="Good Question Matter"
        titleLines={["Before you begin,"]}
        highlightWord="know what to expect."
        description="Every profile is different, but these answers explain how our guidance usually begins."
        ctaTitle="Need a Personal Answer?"
        ctaDescription="Talk directly with our counselling team."
        ctaButtonText="Talk to team"
        ctaLink="/contact"
        faqs={aboutFaqs}
      />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
