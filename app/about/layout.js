export const metadata = {
  // Automatically becomes "About Us | OrbisNexa Consultancy" from root layout template
  title: "About Us",

  description:
    "Discover OrbisNexa Consultancy—trusted overseas education advisors in Pakistan guiding students through university selection, scholarships, IELTS preparation, and student visa applications for the UK, USA, Canada, Australia & Europe.",

  keywords: [
    "About OrbisNexa Consultancy",
    "Study Abroad Advisors Pakistan",
    "Education Consultants Lahore",
    "Overseas Admission Guidance",
    "Student Visa Counselling Team",
    "Trusted Study Abroad Agency",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Us | OrbisNexa Consultancy",
    description:
      "Meet the counselling team behind OrbisNexa Consultancy and learn how our profile-led guidance helps students secure admissions and visas worldwide.",
    url: "https://www.orbisnexa.com/about",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Or a dedicated /og-about.jpg (1200x630px) in /public
        width: 1200,
        height: 630,
        alt: "About OrbisNexa Study Abroad Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | OrbisNexa Consultancy",
    description:
      "Learn about our mission, counselling approach, and end-to-end support for international students.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutLayout({ children }) {
  // AboutPage + BreadcrumbList Schema for Google Rich Snippets
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About OrbisNexa Consultancy",
    url: "https://www.orbisnexa.com/about",
    description:
      "Learn about OrbisNexa Consultancy and our profile-led approach to international university admissions, scholarships, and student visa guidance.",
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
          name: "About Us",
          item: "https://www.orbisnexa.com/about",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
