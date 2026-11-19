// "use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StudentStories from "@/components/home/StudentStories";
import GlobalPartners from "@/components/home/GlobalPartners";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Faqs from "@/components/home/Faqs";
import ContactSection from "@/components/home/ContactSection";
import Testimonials from "@/components/home/Testimonials";
import Recognition from "@/components/home/Recognition";
import FinalCTA from "@/components/home/FinalCTA";

const homeFaqs = [
  {
    question: "How do I start my study abroad journey from Pakistan?",
    answer:
      "Start by shortlisting your preferred country, academic level, and intake. Our counsellors review your academic background, budget, and career goals to map out university selection, application timelines, documentation, and visa preparation step by step.",
  },
  {
    question: "Which countries can I apply to through Study Apex Global?",
    answer:
      "We guide applicants across major study destinations including the United Kingdom (UK), United States (US), Canada, Australia, Germany, Italy, France, Finland, and Sweden, depending on your course fit and eligibility.",
  },
  {
    question: "Can you help me choose the right course and university?",
    answer:
      "Yes. We help you compare programmes, entry criteria, tuition costs, and career or post-study pathways so you pick institutions that align with your previous qualifications and long-term plans.",
  },
  {
    question: "Do I need IELTS to study abroad?",
    answer:
      "English language requirements depend on the country, institution, and programme. Many universities accept IELTS, while some offer alternative English tests, waivers based on prior English-medium study, or pathway/pre-sessional English options.",
  },
  {
    question: "Are scholarships available for Pakistani students?",
    answer:
      "Many universities and external bodies offer merit-based scholarships, tuition fee discounts, or bursaries for international students. Eligibility, deadlines, and coverage vary by institution and programme.",
  },
  {
    question: "What documents are usually required for an application?",
    answer:
      "Common requirements include academic transcripts and certificates, a valid passport, CV/resume, statement of purpose or study plan, letters of recommendation, English proficiency proof, and financial documents when required for admission or visa stages.",
  },
  {
    question: "Does Study Apex Global provide student visa guidance?",
    answer:
      "Yes. We help you understand core student visa rules, financial evidence expectations, document checklists, and application timelines, while advising you to verify current official immigration requirements before submitting.",
  },
  {
    question: "When should I begin my university application?",
    answer:
      "It is best to start 4 to 9 months before your target intake. Starting early gives you enough time to prepare documents, take English tests if needed, secure offers, and complete visa steps without last-minute rush.",
  },
];
export default function Home({ children }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StudentStories />
      <GlobalPartners />
      <WhatWeOffer />
      <Faqs
        badge="Frequently Asked Questions"
        titleLines={["Questions Before You"]}
        highlightWord="Start?"
        description="Find clear answers about studying abroad from Pakistan, university applications, scholarships, English tests and student visas."
        ctaTitle="Still need Guidance?"
        ctaDescription="Discuss your study plans with a counsellor."
        ctaButtonText="Book Free Consultation"
        ctaLink="/contact"
        faqs={homeFaqs}
      />
      <ContactSection />
      <Testimonials />
      <Recognition />
      <FinalCTA />
      <Footer />

      {/* <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </main>
  );
}

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import ContactModal from "@/components/ContactModal";
//
//   const pathname = usePathname();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   useEffect(() => {
//     setIsModalOpen(true);
//   }, [pathname]);
