import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";

export const metadata = {
  // Automatically becomes "Study Abroad Blogs & Guides | OrbisNexa Consultancy"
  title: "Study Abroad Blogs & Guides",

  description:
    "Read expert study abroad guides, student visa updates, IELTS preparation tips, scholarship alerts, and university admission advice for Pakistani students planning to study in the UK, USA, Canada, Australia & Europe.",

  keywords: [
    "Study Abroad Blogs Pakistan",
    "Student Visa Updates 2026",
    "IELTS Preparation Tips & Guides",
    "International Scholarships Blog",
    "University Admission Guides",
    "Study in UK USA Canada Australia Blog",
    "OrbisNexa Consultancy Insights",
  ],

  alternates: {
    canonical: "/blogs",
  },

  openGraph: {
    title: "Study Abroad Blogs & Guides | OrbisNexa Consultancy",
    description:
      "Latest insights on international university admissions, visa rules, IELTS strategies, and scholarships from OrbisNexa Consultancy.",
    url: "https://www.orbisnexa.com/blogs",
    siteName: "OrbisNexa Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrbisNexa Study Abroad Blogs & Guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Blogs & Guides | OrbisNexa Consultancy",
    description:
      "Explore practical guides on study visas, scholarships, IELTS prep, and global universities.",
    images: ["/og-image.jpg"],
  },
};

export function BlogsLayout({ children }) {
  // Blog + BreadcrumbList Schema for Google Rich Snippets
  const blogsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "OrbisNexa Study Abroad Blogs & Guides",
    url: "https://www.orbisnexa.com/blogs",
    description:
      "Expert articles, visa checklists, scholarship updates, and IELTS preparation guides for international students.",
    publisher: {
      "@type": "EducationalOrganization",
      name: "OrbisNexa Consultancy",
      url: "https://www.orbisnexa.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
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
          name: "Blogs",
          item: "https://www.orbisnexa.com/blogs",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsJsonLd) }}
      />
      {children}
    </>
  );
}

export default function Blogs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogPage />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
