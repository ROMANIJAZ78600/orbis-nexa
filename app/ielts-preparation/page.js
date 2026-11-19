// "use client";

import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";

import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";
import Hero from "@/components/Ielts/Hero";
import ChooseYourRoute from "@/components/Ielts/ChooseYourRoute";
import FourSkills from "@/components/Ielts/FourSkills";
import Steps from "@/components/Ielts/Steps";
import GuidanceTeam from "@/components/Ielts/GuidanceTeam";
import Preparation from "@/components/Ielts/Preparation";
import StepsSection from "@/components/Ielts/StepsSection";
import BandJourney from "@/components/Ielts/BandJourney";
import WHYORBIS from "@/components/Ielts/WHYORBIS";
import IeltsAssessmentSection from "@/components/Ielts/AsessmentSection";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import ContactModal from "@/components/ContactModal";

export const metadata = {
  // Automatically becomes "IELTS Test Preparation | OrbisNexa Consultancy"
  title: "IELTS Test Preparation",

  description:
    "Prepare for IELTS Academic and General Training with OrbisNexa Consultancy in Pakistan. Get expert coaching across Listening, Reading, Writing, and Speaking, full-length mock tests, and personalized band-score feedback.",

  keywords: [
    "IELTS Test Preparation Pakistan",
    "IELTS Coaching in Lahore",
    "IELTS Academic Preparation",
    "IELTS General Training Classes",
    "IELTS Mock Tests & Speaking Practice",
    "IELTS Band Score Improvement",
    "Study Abroad English Test Prep",
    "OrbisNexa IELTS Classes",
  ],

  alternates: {
    canonical: "/ielts-preparation",
  },

  openGraph: {
    title: "IELTS Test Preparation | OrbisNexa Consultancy",
    description:
      "Achieve your target IELTS band score with structured coaching, weekly mock tests, and 1-on-1 speaking and writing evaluations.",
    url: "https://www.orbisnexa.com/ielts-preparation",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IELTS Test Preparation - OrbisNexa Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IELTS Test Preparation | OrbisNexa Consultancy",
    description:
      "Structured IELTS Academic & General Training preparation with mock tests and expert feedback.",
    images: ["/og-image.jpg"],
  },
};

export function IeltsPreparationLayout({ children }) {
  // Course + BreadcrumbList Schema for Google Rich Snippets
  const ieltsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "IELTS Test Preparation (Academic & General Training)",
    description:
      "Comprehensive IELTS preparation covering Listening, Reading, Writing, and Speaking modules with timed mock tests and individualized band-score feedback.",
    provider: {
      "@type": "EducationalOrganization",
      name: "OrbisNexa Consultancy",
      url: "https://www.orbisnexa.com",
      logo: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["Onsite", "Online"],
        courseWorkload: "PT4W",
        instructor: {
          "@type": "Organization",
          name: "OrbisNexa IELTS Training Team",
        },
      },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.orbisnexa.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "IELTS Test Preparation",
          item: "https://www.orbisnexa.com/ielts-preparation",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ieltsJsonLd) }}
      />
      {children}
    </>
  );
}

const ieltsFaqs = [
  {
    question: "Should I take IELTS Academic or IELTS General Training?",
    answer:
      "If you are applying for undergraduate, postgraduate, or foundation degrees abroad, you need IELTS Academic. IELTS General Training is mainly for immigration, work visas, or below-degree vocational programmes.",
  },
  {
    question: "What IELTS band score do I need for university admission?",
    answer:
      "Most undergraduate programmes require an overall band score of 6.0 to 6.5, while postgraduate courses typically require 6.5 to 7.0 (with minimum module bands). Exact scores depend on your chosen university, course, and country.",
  },
  {
    question: "How long does it take to prepare for IELTS?",
    answer:
      "Most students need 4 to 8 weeks of structured preparation depending on their current English level and target band score. We assess your baseline first so you can follow a realistic study timeline.",
  },
  {
    question: "Are mock tests and speaking practice included?",
    answer:
      "Yes. Our preparation includes full-length timed mock tests across Listening, Reading, Writing, and Speaking, along with one-on-one speaking evaluations and detailed writing feedback.",
  },
  {
    question: "Should I choose IELTS on Computer or IELTS on Paper?",
    answer:
      "Both formats have the exact same test content, timing, and scoring criteria. IELTS on Computer usually offers more frequent test dates and faster results (typically within 1 to 5 days), while IELTS on Paper suits those who prefer handwriting.",
  },
  {
    question: "Can I apply to universities before getting my IELTS result?",
    answer:
      "Yes, many universities allow you to apply with your academic documents first and issue a Conditional Offer. You can then submit your IELTS score later to meet the English condition.",
  },
];

export default function IELTS() {
  // const pathname = usePathname();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // useEffect(() => {
  //   setIsModalOpen(true);
  // }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChooseYourRoute />
      <FourSkills />
      <Steps />
      <BandJourney />
      <GuidanceTeam />
      <WHYORBIS />
      <Preparation />
      <StepsSection />
      <Faqs
        badge="IELTS FAQs"
        titleLines={["Good questions Before You"]}
        highlightWord="Begin"
        description="Start with the right test type and a realistic preparation plan."
        ctaButtonText="Ask the Ielts team"
        ctaLink="/contact"
        faqs={ieltsFaqs}
      />
      <IeltsAssessmentSection />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
      {/* 
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
}
