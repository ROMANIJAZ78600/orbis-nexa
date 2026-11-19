import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";

import Navbar from "@/components/Navbar";
import Collaboration from "@/components/Partner/Collaboration";
import CTA from "@/components/Partner/CTA";
import FindYourPlace from "@/components/Partner/FindYourPlace";
import Hero from "@/components/Partner/Partner";
import PartnershipEnquiry from "@/components/Partner/PartnershipInquiry";
import WorkWithOrbis from "@/components/Partner/WorkWithOrbis";

export const metadata = {
  // Automatically becomes "Become a Partner | OrbisNexa Consultancy"
  title: "Become a Partner",

  description:
    "Partner with OrbisNexa Consultancy as a student recruitment sub-agent, educational institution, IELTS test centre, or referral affiliate. Access global university networks, application support, and transparent commission structures.",

  keywords: [
    "Become a Study Abroad Partner",
    "Education Recruitment Sub-Agent Pakistan",
    "University Partnership OrbisNexa",
    "International Student Recruitment Network",
    "B2B Study Abroad Consultancy",
    "Student Referral Affiliate Program",
    "IELTS Test Centre Partnership",
  ],

  alternates: {
    canonical: "/become-a-partner",
  },

  openGraph: {
    title: "Become a Partner | OrbisNexa Consultancy",
    description:
      "Collaborate with OrbisNexa Consultancy to expand global university access for students across the UK, USA, Canada, Australia, and Europe.",
    url: "https://www.orbisnexa.com/become-a-partner",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Become a Partner - OrbisNexa Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | OrbisNexa Consultancy",
    description:
      "Join OrbisNexa's B2B recruitment and institutional partner network with dedicated application support and transparent commissions.",
    images: ["/og-image.jpg"],
  },
};

export function BecomeAPartnerLayout({ children }) {
  // WebPage + BreadcrumbList Schema for Google Rich Snippets
  const partnerJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Become a Partner | OrbisNexa Consultancy",
    url: "https://www.orbisnexa.com/become-a-partner",
    description:
      "B2B partnership opportunities with OrbisNexa Consultancy for student recruitment sub-agents, universities, language centres, and referral affiliates.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "OrbisNexa Consultancy",
      url: "https://www.orbisnexa.com",
      logo: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
      areaServed: ["PK", "GB", "US", "CA", "AU", "DE", "IT", "FR", "FI", "SE"],
    },
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
          name: "Become a Partner",
          item: "https://www.orbisnexa.com/become-a-partner",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerJsonLd) }}
      />
      {children}
    </>
  );
}

const partnerFaqs = [
  {
    question: "Who can apply to become a partner?",
    answer:
      "We welcome collaboration with education sub-agents, independent recruitment consultants, schools and colleges, language/IELTS test centres, and international universities looking to expand their student reach.",
  },
  {
    question: "What kind of support do recruitment partners receive?",
    answer:
      "Partners get access to our multi-country university portfolio, dedicated application processing support, real-time status updates, training on entry and visa requirements, and co-branded marketing assistance.",
  },
  {
    question: "How does the commission and fee-sharing structure work?",
    answer:
      "We offer transparent, competitive commission structures with clear milestone payouts once student enrolments are verified. Exact terms depend on your partnership tier and student volume.",
  },
  {
    question: "How long does the partner onboarding process take?",
    answer:
      "Once you submit your partnership enquiry, our B2B team reviews your business profile and schedules an introductory call within 1 to 2 working days. After agreement signing, onboarding is typically completed within a week.",
  },
  {
    question:
      "Can individual counsellors or referral affiliates partner with you?",
    answer:
      "Yes. If you do not run a registered agency yet, you can join through our Student Referral Affiliate route and refer prospective students for end-to-end admission and visa handling.",
  },
  {
    question: "Which study destinations are covered under the partnership?",
    answer:
      "Partners can place students across our full destination network, including the UK, USA, Canada, Australia, Germany, Italy, France, Finland, and Sweden.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FindYourPlace />
      <WorkWithOrbis />
      <Collaboration />
      <PartnershipEnquiry />
      <Faqs
        badge="Partnership FAQs"
        titleLines={["Questions About Partnering"]}
        highlightWord="With Us?"
        description="Learn how our B2B network, onboarding process, application support, and commission structure work for recruitment partners and institutions."
        ctaTitle="Ready to collaborate?"
        ctaDescription="Submit your partnership enquiry or speak directly with our B2B team."
        ctaButtonText="Apply for Partnership"
        ctaLink="#partnership"
        faqs={partnerFaqs}
      />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
