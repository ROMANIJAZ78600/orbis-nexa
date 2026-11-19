import "./globals.css";

export const metadata = {
  // Base URL for resolving relative OpenGraph images and canonical URLs
  metadataBase: new URL("https://www.orbisnexa.com"),

  // Title template: Subpages automatically become "Page Name | OrbisNexa Consultancy"
  title: {
    default: "OrbisNexa Consultancy | Study Abroad & Student Visa Experts",
    template: "%s | OrbisNexa Consultancy",
  },

  description:
    "Expert study abroad consultancy in Pakistan. Get personalized university admissions, scholarship guidance, IELTS preparation, and student visa support for the UK, USA, Canada, Australia, Germany & Europe.",

  keywords: [
    "Study Abroad Consultancy Pakistan",
    "OrbisNexa Consultancy",
    "Student Visa Consultants Lahore",
    "Study in UK from Pakistan",
    "Study in USA",
    "Study in Canada",
    "Study in Australia",
    "Study in Germany",
    "IELTS Test Preparation",
    "Overseas Education Advisors",
    "University Admission Guidance",
    "Scholarships for Pakistani Students",
  ],

  authors: [
    { name: "OrbisNexa Consultancy", url: "https://www.orbisnexa.com" },
  ],
  creator: "OrbisNexa Consultancy",
  publisher: "OrbisNexa Consultancy",

  // Canonical URL & Alternates
  alternates: {
    canonical: "/",
  },

  // Search Engine Crawling & Indexing Rules
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp link previews)
  openGraph: {
    title: "OrbisNexa Consultancy | Your Global Study Abroad Partner",
    description:
      "Plan your international education journey with profile-led university shortlisting, IELTS prep, and complete student visa guidance.",
    url: "https://www.orbisnexa.com",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Place a 1200x630px image inside /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "OrbisNexa Study Abroad Consultancy",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "OrbisNexa Consultancy | Study Abroad & Student Visa Experts",
    description:
      "Get expert guidance on university admissions, scholarships, IELTS preparation, and student visas across top global destinations.",
    images: ["/og-image.jpg"],
  },

  // Favicons & App Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Logo/OrbisLogo.webp", type: "image/webp" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Search Console Verification (Optional: replace with your actual verification codes)
  verification: {
    google: "your-google-site-verification-code",
  },

  category: "Education & Study Abroad Consultancy",
};

// Note: Removing maximumScale: 1 improves accessibility and Lighthouse SEO/Accessibility scores
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0265AA",
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data (Helps Google show Rich Snippets for Educational Organizations)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "OrbisNexa Consultancy",
    url: "https://www.orbisnexa.com",
    logo: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
    description:
      "Study abroad consultancy offering university admissions, IELTS test preparation, scholarship assistance, and student visa guidance.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: ["PK", "GB", "US", "CA", "AU", "DE", "IT", "FR", "FI", "SE"],
    sameAs: [
      "https://www.facebook.com/orbisnexa",
      "https://www.instagram.com/orbisnexa",
      "https://www.linkedin.com/company/orbisnexa",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
