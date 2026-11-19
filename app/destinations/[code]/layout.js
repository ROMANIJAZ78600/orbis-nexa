const countriesSeo = {
  us: {
    name: "United States",
    description:
      "Study in United States with OrbisNexa Consultancy. Explore top universities, flexible academic pathways, F-1 student visa details, SEVIS and MRV fees, OPT options, and application checklists.",
    keywords: [
      "Study in United States",
      "US Student Visa F1",
      "SEVIS Fee USA",
      "Leading US Universities",
      "OrbisNexa Consultancy USA",
    ],
  },
  gb: {
    name: "United Kingdom",
    description:
      "Study in United Kingdom with OrbisNexa Consultancy. Review UK Student Visa requirements, CAS and IHS details, maintenance funds, Graduate Route options, and leading UK universities.",
    keywords: [
      "Study in United Kingdom",
      "UK Student Visa Requirements",
      "CAS and IHS UK",
      "Leading UK Universities",
      "OrbisNexa Consultancy UK",
    ],
  },
  ca: {
    name: "Canada",
    description:
      "Study in Canada with OrbisNexa Consultancy. Get guidance on study pathways, leading Canadian universities, study permit steps, financial proof, and post-graduation work pathways.",
    keywords: [
      "Study in Canada",
      "Canada Study Permit",
      "Leading Canadian Universities",
      "PGWP Canada",
      "OrbisNexa Consultancy Canada",
    ],
  },
  au: {
    name: "Australia",
    description:
      "Study in Australia with OrbisNexa Consultancy. Explore study pathways, leading Australian universities, Subclass 500 student visa essentials, CoE and OSHC steps, and work options.",
    keywords: [
      "Study in Australia",
      "Australia Student Visa Subclass 500",
      "CoE and OSHC Australia",
      "Leading Australian Universities",
      "OrbisNexa Consultancy Australia",
    ],
  },
  de: {
    name: "Germany",
    description:
      "Study in Germany with OrbisNexa Consultancy. Discover study pathways, leading German universities, tuition-friendly options, blocked account proof, and national student visa details.",
    keywords: [
      "Study in Germany",
      "Germany Student Visa",
      "Sperrkonto Germany",
      "Leading German Universities",
      "OrbisNexa Consultancy Germany",
    ],
  },
  it: {
    name: "Italy",
    description:
      "Study in Italy with OrbisNexa Consultancy. Explore study pathways, leading Italian universities, Type D student visa steps, Universitaly pre-enrollment, and accommodation requirements.",
    keywords: [
      "Study in Italy",
      "Italy Student Visa Type D",
      "Universitaly Italy",
      "Leading Italian Universities",
      "OrbisNexa Consultancy Italy",
    ],
  },
  fr: {
    name: "France",
    description:
      "Study in France with OrbisNexa Consultancy. Review study pathways, leading French universities and Grandes Écoles, VLS-TS long-stay visa requirements, and application checklists.",
    keywords: [
      "Study in France",
      "France Student Visa VLS-TS",
      "Leading French Universities",
      "OrbisNexa Consultancy France",
    ],
  },
  fi: {
    name: "Fin Land",
    description:
      "Study in Fin Land with OrbisNexa Consultancy. Explore study pathways, leading Finnish universities, residence permit for studies (Migri) steps, proof of funds, and insurance rules.",
    keywords: [
      "Study in Fin Land",
      "Finland Residence Permit Migri",
      "Leading Finnish Universities",
      "OrbisNexa Consultancy Fin Land",
    ],
  },
  se: {
    name: "Swedan",
    description:
      "Study in Swedan with OrbisNexa Consultancy. Get details on study pathways, leading Swedish universities, residence permit for higher education, maintenance funds, and insurance.",
    keywords: [
      "Study in Swedan",
      "Sweden Residence Permit Migrationsverket",
      "Leading Swedish Universities",
      "OrbisNexa Consultancy Swedan",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { code } = await params;
  const slug = code?.toLowerCase() || "";
  const country = countriesSeo[slug];

  if (!country) {
    return {
      title: "Study Destination",
      description:
        "Explore study destinations, academic pathways, universities, and visa requirements with OrbisNexa Consultancy.",
      alternates: {
        canonical: `/destinations/${slug}`,
      },
    };
  }

  return {
    title: `Study in ${country.name}`,
    description: country.description,
    keywords: country.keywords,
    alternates: {
      canonical: `/destinations/${slug}`,
    },
    openGraph: {
      title: `Study in ${country.name} | OrbisNexa Consultancy`,
      description: country.description,
      url: `https://www.orbisnexa.com/destinations/${slug}`,
      siteName: "OrbisNexa Consultancy",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Study in ${country.name} | OrbisNexa Consultancy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Study in ${country.name} | OrbisNexa Consultancy`,
      description: country.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function DestinationLayout({ children, params }) {
  const { code } = await params;
  const slug = code?.toLowerCase() || "";
  const country = countriesSeo[slug];
  const countryName = country ? country.name : "Study Destination";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Study in ${countryName} | OrbisNexa Consultancy`,
    url: `https://www.orbisnexa.com/destinations/${slug}`,
    description:
      country?.description ||
      "Study destination overview, pathways, universities, and visa requirements.",
    about: {
      "@type": "Country",
      name: countryName,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "OrbisNexa Consultancy",
      url: "https://www.orbisnexa.com",
      logo: "https://www.orbisnexa.com/Logo/OrbisLogo.webp",
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
          name: "Destinations",
          item: "https://www.orbisnexa.com/destinations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Study in ${countryName}`,
          item: `https://www.orbisnexa.com/destinations/${slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
