// "use client";

import ContactModal from "@/components/ContactModal";
import CountryOptions from "@/components/Destination/CountryOptions";
import FindBestFit from "@/components/Destination/FIndBestFit";
import Hero from "@/components/Destination/Hero";
import Quote from "@/components/Destination/Quote";
import Roadmap from "@/components/Destination/Roadmap";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

export const metadata = {
  // Automatically becomes "Study Destinations | OrbisNexa Consultancy"
  title: "Study Destinations",

  description:
    "Explore top international study destinations including the UK, USA, Canada, Australia, Germany, Italy, France, Finland, and Sweden. Compare tuition fees, intakes, scholarships, and student visa requirements.",

  keywords: [
    "Study Abroad Destinations",
    "Top Countries to Study Abroad from Pakistan",
    "Study in UK",
    "Study in USA",
    "Study in Canada",
    "Study in Australia",
    "Study in Germany",
    "Study in Europe",
    "International University Admissions",
    "Student Visa Requirements by Country",
  ],

  alternates: {
    canonical: "/destinations",
  },

  openGraph: {
    title: "Study Destinations | OrbisNexa Consultancy",
    description:
      "Compare leading study abroad countries, top universities, intakes, and visa pathways with OrbisNexa Consultancy.",
    url: "https://www.orbisnexa.com/destinations",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Study Abroad Destinations - OrbisNexa Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Study Destinations | OrbisNexa Consultancy",
    description:
      "Compare top global study destinations, universities, and visa requirements.",
    images: ["/og-image.jpg"],
  },
};

export function DestinationsLayout({ children }) {
  // CollectionPage + BreadcrumbList Schema
  const destinationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Study Abroad Destinations | OrbisNexa Consultancy",
    url: "https://www.orbisnexa.com/destinations",
    description:
      "Explore study destinations across the UK, USA, Canada, Australia, Germany, Italy, France, Finland, and Sweden.",
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
          name: "Destinations",
          item: "https://www.orbisnexa.com/destinations",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationsJsonLd) }}
      />
      {children}
    </>
  );
}

const destFaqs = [
  {
    question: "How do I choose the right study destination?",
    answer:
      "Compare destinations based on your preferred course, total tuition and living budget, English language requirements, part-time work rules, and post-study career opportunities. Our counsellors help match your academic profile with the country that fits best.",
  },
  {
    question: "Can I apply to more than one country?",
    answer:
      "Yes, applying to universities across two or more destinations is common and keeps your options open. We help you coordinate different application deadlines, document formats, and intake timelines smoothly.",
  },
  {
    question: "Which destination is best for a limited budget?",
    answer:
      "Countries like Germany and Italy offer very low or tuition-free public university options, while several UK, Canadian, and Australian institutions provide merit scholarships and instalment plans to keep overall costs manageable.",
  },
  {
    question: "Do all destinations have the same intakes?",
    answer:
      "No, intakes vary by country. Most universities offer a major Autumn/September intake and a secondary Winter/January intake, while destinations like Australia and the UK also have mid-year or summer intakes for selected courses.",
  },
  {
    question: "Can SAG help after I select a country?",
    answer:
      "Yes. Once you choose a country, we guide you through university and course shortlisting, application submission, offer acceptance, financial documentation, student visa filing, and pre-departure preparation.",
  },
];

export default function Destinations() {
  // const pathname = usePathname();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // useEffect(() => {
  //   setIsModalOpen(true);
  // }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CountryOptions />
      <FindBestFit />
      <Roadmap />
      <Quote />
      <Faqs
        badge="DESTINATION FAQs"
        titleLines={["Good questions lead to"]}
        highlightWord="better decisions."
        description="These are common starting questions. Your exact answer depends on your individual profile and chosen intake."
        ctaTitle="Need a Personal Answer?"
        ctaDescription="Talk directly with an ORBIS counsellor."
        ctaButtonText="Ask Your Question"
        ctaLink="/contact"
        faqs={destFaqs}
      />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
      {/* <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
}
