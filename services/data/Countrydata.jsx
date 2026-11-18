export const getCountryData = (code) => {
  // 2. If it's undefined or not a string, fallback to an empty string
  const countryCode = Array.isArray(code) ? code[0] : code;

  if (!countryCode || typeof countryCode !== "string") {
    return null;
  }
  // Example in your data file (e.g., services/data/Countrydata.jsx)
  const database = {
    us: {
      name: "United States",
      code: "us",
      capital: "Washington, D.C.",
      h1: "Study in United States",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Access cutting-edge facilities, flexible academic curricula, and countless opportunities at globally top-ranked universities across all 50 states.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY US",
      benefits: [
        {
          step: "01",
          title: "World-Ranked Universities",
          desc: "Choose from globally recognized institutions with cutting-edge research facilities across all states.",
        },
        {
          step: "02",
          title: "Flexible Curricula",
          desc: "Design your own academic path with multidisciplinary majors, minors, and elective combinations.",
        },
        {
          step: "03",
          title: "Global Networking",
          desc: "Connect with multinational professionals, industry pioneers, and a diverse international student body.",
        },
        {
          step: "04",
          title: "Career Opportunities",
          desc: "Gain practical experience through Optional Practical Training (OPT) and internships with top firms.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
      universitiesHeading: "LEADING US UNIVERSITIES",
      universities: [
        { name: "Harvard University", location: "Cambridge, Massachusetts" },
        { name: "Stanford University", location: "Stanford, California" },
        {
          name: "Massachusetts Institute of Technology",
          location: "Cambridge, Massachusetts",
        },
        { name: "Columbia University", location: "New York, New York" },
        {
          name: "University of California, Berkeley",
          location: "Berkeley, California",
        },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "US Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your F-1 student visa journey with clarity on SEVIS fees, financial proof, and interview preparation.",
      visaRoute: {
        title: "A clear route from acceptance to visa",
        desc: "Receive your Form I-20 from your SEVP-certified school, pay the SEVIS fee, and schedule your US embassy interview.",
      },
      visaRows: [
        { label: "Visa type", value: "F-1 Student Visa" },
        { label: "SEVIS fee", value: "$350 USD" },
        { label: "Visa application fee", value: "$185 USD (MRV fee)" },
        {
          label: "Financial proof",
          value:
            "Show funds covering 1 full year of tuition and living expenses as listed on Form I-20",
        },
        {
          label: "Work rights",
          value:
            "On-campus up to 20 hours/week; CPT/OPT available for off-campus training",
        },
        {
          label: "Application timing",
          value:
            "Apply up to 365 days before program start date; interview required",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Form I-20 & SEVIS",
          desc: "Signed Form I-20 issued by your university and paid SEVIS fee receipt.",
        },
        {
          step: "02",
          title: "Valid Passport",
          desc: "Passport valid for at least 6 months beyond your planned period of stay.",
        },
        {
          step: "03",
          title: "Financial Documentation",
          desc: "Bank statements, sponsor letters or scholarship awards proving funds.",
        },
        {
          step: "04",
          title: "DS-160 Confirmation",
          desc: "Online nonimmigrant visa application confirmation page with barcode.",
        },
      ],
      importantNote:
        "Visa regulations, interview wait times, and SEVIS fees are subject to change. Always check official US Department of State guidelines.",
    },
    gb: {
      name: "United Kingdom",
      code: "gb",
      capital: "London",
      h1: "Study in UK",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Explore a wide choice of universities, career-focused courses and internationally recognised qualifications across England, Scotland, Wales and Northern Ireland.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY UK",
      benefits: [
        {
          step: "01",
          title: "Wide course choice",
          desc: "Compare programmes across a broad range of universities, specialist schools and locations.",
        },
        {
          step: "02",
          title: "Focused study routes",
          desc: "Many programmes are designed around clear academic and professional outcomes.",
        },
        {
          step: "03",
          title: "Research and industry",
          desc: "Discover courses shaped by research, professional practice and employer engagement.",
        },
        {
          step: "04",
          title: "International student life",
          desc: "Study in diverse cities with active university communities and support services.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
      universitiesHeading: "LEADING UK UNIVERSITIES",
      universities: [
        { name: "University of Oxford", location: "Oxford, England" },
        { name: "University of Cambridge", location: "Cambridge, England" },
        { name: "Imperial College London", location: "London, England" },
        { name: "University College London", location: "London, England" },
        { name: "University of Edinburgh", location: "Edinburgh, Scotland" },
        { name: "King's College London", location: "London, England" },
      ],

      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "UK Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your application with the latest core requirements in one place. Real eligibility, costs and evidence always depend on your individual circumstances and the conditions shown on your CAS.",
      visaRoute: {
        title: "A clear route from offer to visa",
        desc: "Secure an unconditional offer, receive your CAS, prepare complete evidence and submit your Student Visa application within the permitted window.",
      },
      visaRows: [
        { label: "Visa type", value: "UK Student Visa (Student Route)" },
        { label: "Visa fee", value: "£490 per applicant" },
        { label: "IHS surcharge", value: "£776 per year for students" },
        {
          label: "English evidence",
          value:
            "Level and accepted evidence depend on the course, sponsor and rules",
        },
        {
          label: "Funds — London",
          value:
            "£1,334 per month, up to 9 months (£12,006), normally held for 28 days",
        },
        {
          label: "Funds — outside London",
          value:
            "£1,023 per month, up to 9 months (£9,207), normally held for 28 days",
        },
        {
          label: "Tuition fees",
          value:
            "First academic year shown on the CAS, less eligible fees already paid",
        },
        {
          label: "Work rights",
          value:
            "Usually up to 20 hours per week in term-time for eligible degree-level study",
        },
        {
          label: "Graduate Route",
          value:
            "2 years for most eligible applicants from 1 July 2021; 3 years for PhD graduates",
        },
        {
          label: "TB test",
          value:
            "Required where applicable; Pakistan applicants normally use a Home Office-approved clinic",
        },
        {
          label: "Application timing",
          value:
            "Apply up to 6 months before the course starts; decisions in the UK usually within 3 weeks",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Passport & CAS",
          desc: "Valid passport and Confirmation of Acceptance for Studies (CAS) from your licensed sponsor.",
        },
        {
          step: "02",
          title: "Academic documents",
          desc: "Certificates or transcripts and any qualification or prior studies cited in your CAS.",
        },
        {
          step: "03",
          title: "English or language evidence",
          desc: "The accepted test, exemption or score depends on the institution and programme.",
        },
        {
          step: "04",
          title: "Personal statement or study plan",
          desc: "Present your academic direction, course fit and future goals clearly.",
        },
        {
          step: "05",
          title: "Financial & supporting evidence",
          desc: "Prepare compliant bank evidence, TB certificate and ATAS or other document where required.",
        },
      ],
      importantNote:
        "Visa fees, maintenance figures, work conditions and immigration rules can change. Always confirm the current GOV.UK requirements before submitting an application.",
    },
    ca: {
      name: "Canada",
      code: "ca",
      capital: "Ottawa",
      h1: "Study in Canada",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Build your future in a welcoming, multicultural, and innovative study destination with high academic standards and robust post-graduation work opportunities.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY CANADA",
      benefits: [
        {
          step: "01",
          title: "Welcoming & Inclusive",
          desc: "Experience a multicultural society known for safety, diversity, and high quality of life.",
        },
        {
          step: "02",
          title: "Post-Grad Work Permit",
          desc: "Gain valuable Canadian work experience through post-graduation work permit pathways.",
        },
        {
          step: "03",
          title: "Research Excellence",
          desc: "Study in institutions renowned for technological innovation, sciences, and liberal arts.",
        },
        {
          step: "04",
          title: "Natural Landscapes",
          desc: "Live and study surrounded by breathtaking national parks, mountains, and modern urban centers.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
      universitiesHeading: "LEADING CANADIAN UNIVERSITIES",
      universities: [
        { name: "University of Toronto", location: "Toronto, Ontario" },
        {
          name: "University of British Columbia",
          location: "Vancouver, British Columbia",
        },
        { name: "McGill University", location: "Montreal, Quebec" },
        { name: "University of Waterloo", location: "Waterloo, Ontario" },
      ],
    },
    au: {
      name: "Australia",
      code: "au",
      capital: "Canberra",
      h1: "Study in Australia",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Combine world-class education with an unmatched lifestyle, globally recognized degrees, and vibrant student communities set against incredible landscapes.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY AUSTRALIA",
      benefits: [
        {
          step: "01",
          title: "Global recognition",
          desc: "Earn qualifications that are respected by employers and institutions worldwide.",
        },
        {
          step: "02",
          title: "Innovative campuses",
          desc: "Access modern learning facilities, advanced laboratories, and student support networks.",
        },
        {
          step: "03",
          title: "Vibrant lifestyle",
          desc: "Balance rigorous studies with coastal living, multicultural cities, and outdoor adventures.",
        },
        {
          step: "04",
          title: "Post-study work options",
          desc: "Take advantage of temporary graduate visas to gain international professional experience.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
    de: {
      name: "Germany",
      code: "de",
      capital: "Berlin",
      h1: "Study in Germany",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Immerse yourself in a powerhouse of science, technology, and industry with low tuition fees and strong ties to the European job market.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY GERMANY",
      benefits: [
        {
          step: "01",
          title: "Tuition-friendly options",
          desc: "Access high-quality public higher education with minimal or no tuition fees in many regions.",
        },
        {
          step: "02",
          title: "Engineering powerhouse",
          desc: "Study at the forefront of manufacturing, automotive technology, and applied sciences.",
        },
        {
          step: "03",
          title: "Strong economy",
          desc: "Build career prospects in Europe’s largest economy with robust post-study visa frameworks.",
        },
        {
          step: "04",
          title: "Central European hub",
          desc: "Travel easily and network across borders with a central location in the heart of Europe.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
    it: {
      name: "Italy",
      code: "it",
      capital: "Rome",
      h1: "Study in Italy",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Study at some of the world's oldest and most prestigious universities while experiencing rich cultural heritage, design excellence, and Mediterranean life.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY ITALY",
      benefits: [
        {
          step: "01",
          title: "Historic heritage",
          desc: "Learn within historic academic institutions that have shaped European history and scholarship.",
        },
        {
          step: "02",
          title: "Design & Arts capital",
          desc: "Immerse yourself in world-renowned programs spanning architecture, fashion, fine arts, and engineering.",
        },
        {
          step: "03",
          title: "English-taught degrees",
          desc: "Choose from a growing selection of modern degree programs fully taught in English.",
        },
        {
          step: "04",
          title: "Mediterranean lifestyle",
          desc: "Enjoy rich culinary traditions, art, music, and an inspiring cultural backdrop daily.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
    fr: {
      name: "France",
      code: "fr",
      capital: "Paris",
      h1: "Study in France",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Gain globally respected qualifications from world-leading Grandes Écoles and universities renowned for arts, business, engineering, and sciences.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY FRANCE",
      benefits: [
        {
          step: "01",
          title: "Academic prestige",
          desc: "Earn degrees from globally elite institutions with long-standing traditions of excellence.",
        },
        {
          step: "02",
          title: "Innovation & Business",
          desc: "Study at top-tier business schools and research centers driving European commerce.",
        },
        {
          step: "03",
          title: "Cultural immersion",
          desc: "Live in a global center for fashion, philosophy, gastronomy, and the arts.",
        },
        {
          step: "04",
          title: "Strategic location",
          desc: "Benefit from affordable European travel links and strong international corporate networks.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
    fi: {
      name: "Finland",
      code: "fi",
      capital: "Helsinki",
      h1: "Study in Finland",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Experience progressive teaching methods, high-tech campuses, and a secure, sustainable environment designed to foster critical thinking.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY FINLAND",
      benefits: [
        {
          step: "01",
          title: "World-class education",
          desc: "Thrive in an education model consistently ranked among the best and happiest globally.",
        },
        {
          step: "02",
          title: "Tech & Innovation",
          desc: "Engage with cutting-edge digital ecosystems, gaming startups, and green technologies.",
        },
        {
          step: "03",
          title: "Safe & Sustainable",
          desc: "Enjoy one of the safest, cleanest, and most sustainable living environments in the world.",
        },
        {
          step: "04",
          title: "English-friendly environment",
          desc: "Communicate seamlessly with high English proficiency across campuses and society.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
    se: {
      name: "Sweden",
      code: "se",
      capital: "Stockholm",
      h1: "Study in Sweden",
      p: "Start with the academic experience, then test the destination against your personal profile, budget and long-term direction.",
      description:
        "Study in an environment that encourages independent thinking, collaboration, and practical problem-solving alongside global industry leaders.",
      btn1: "Check My Eligibility",
      btn2: "Explore the Guide",
      whyHeading: "WHY SWEDEN",
      benefits: [
        {
          step: "01",
          title: "Independent thinking",
          desc: "Focus on open inquiry, teamwork, and practical problem-solving over rote learning.",
        },
        {
          step: "02",
          title: "Global corporations",
          desc: "Build connections with pioneering multinational companies in design, tech, and sustainability.",
        },
        {
          step: "03",
          title: "Innovation culture",
          desc: "Be part of a society driven by creativity, research funding, and startup incubators.",
        },
        {
          step: "04",
          title: "High quality of life",
          desc: "Experience a progressive, equality-driven society surrounded by nature and modern design.",
        },
      ],
      studyAreasHeading: "POPULAR STUDY AREAS",
      studyAreas: [
        { title: "Business & Management", active: false },
        { title: "Computing & Data", active: true },
        { title: "Engineering", active: false },
        { title: "Health & Life Sciences", active: false },
        { title: "Law & Social Sciences", active: true },
        { title: "Creative Arts & Media", active: false },
      ],
      // Add to your country object (e.g., inside 'gb', 'us', 'ca', etc.)
      studyPathwaysHeading: "STUDY PATHWAYS",
      studyPathways: [
        {
          level: "Foundation or pathway",
          desc: "Build subject knowledge, academic skills or language readiness before progressing.",
        },
        {
          level: "Undergraduate study",
          desc: "Choose a bachelor-level route aligned with your previous education and career direction.",
        },
        {
          level: "Postgraduate study",
          desc: "Develop specialist knowledge through taught, professional or research-led programmes.",
        },
        {
          level: "Doctoral research",
          desc: "Explore supervisor, proposal and research-fit requirements for advanced study.",
        },
      ],
    },
  };

  // Return data matching the code, or null if it doesn't exist
  return database[countryCode?.toLowerCase()] || null;
};
