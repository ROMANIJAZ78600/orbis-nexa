export const metadata = {
  // Automatically becomes "Contact Us | OrbisNexa Consultancy"
  title: "Contact Us",

  description:
    "Get in touch with OrbisNexa Consultancy in Pakistan for a free study abroad consultation. Book an in-person or online appointment via WhatsApp, phone, or email for UK, USA, Canada, Australia, and European university admissions.",

  keywords: [
    "Contact OrbisNexa Consultancy",
    "Book Free Study Abroad Consultation",
    "Student Visa Consultants Lahore Contact",
    "Overseas Education Advisors WhatsApp",
    "University Admission Counselling Appointment",
    "Study Abroad Helpline Pakistan",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | OrbisNexa Consultancy",
    description:
      "Speak with an OrbisNexa study abroad counsellor today. Book your free profile assessment via WhatsApp, phone, or online session.",
    url: "https://www.orbisnexa.com/contact",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact OrbisNexa Study Abroad Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OrbisNexa Consultancy",
    description:
      "Book a free consultation with our overseas education and student visa experts.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactLayout({ children }) {
  // ContactPage + BreadcrumbList Schema for Google Rich Snippets
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact OrbisNexa Consultancy",
    url: "https://www.orbisnexa.com/contact",
    description:
      "Contact OrbisNexa Consultancy to book a free study abroad consultation, check university eligibility, or get student visa guidance.",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "OrbisNexa Consultancy",
      url: "https://www.orbisnexa.com",
      logo: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-300-1234567", // Replace with your actual WhatsApp/helpline number
        contactType: "customer service",
        email: "info@orbisnexa.com",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
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
          name: "Contact Us",
          item: "https://www.orbisnexa.com/contact",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
