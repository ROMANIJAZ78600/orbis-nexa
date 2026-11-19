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
        { name: "University of Alberta", location: "Edmonton, Alberta" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Canada Study Permit requirements at a glance.",
      visaSubtitle:
        "Plan your Canadian study permit application with clarity on acceptance letters, financial proof, and biometric steps.",
      visaRoute: {
        title: "A clear route from acceptance to permit",
        desc: "Receive a Letter of Acceptance from a Designated Learning Institution (DLI), obtain a Provincial Attestation Letter (PAL) where required, and submit your study permit application.",
      },
      visaRows: [
        { label: "Visa type", value: "Canadian Study Permit" },
        { label: "Permit fee", value: "$150 CAD per applicant" },
        { label: "Biometrics fee", value: "$85 CAD (where applicable)" },
        {
          label: "Financial proof",
          value:
            "Demonstrate sufficient funds for first-year tuition, living expenses, and return travel",
        },
        {
          label: "Work rights",
          value:
            "Eligible full-time students may work off-campus up to 24 hours per week during academic sessions",
        },
        {
          label: "Post-Graduation Work",
          value:
            "Eligible graduates from DLI programs may apply for a Post-Graduation Work Permit (PGWP)",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "DLI Acceptance & PAL",
          desc: "Letter of Acceptance from a Designated Learning Institution and Provincial Attestation Letter where required.",
        },
        {
          step: "02",
          title: "Valid Passport",
          desc: "Passport valid for the intended duration of your stay in Canada.",
        },
        {
          step: "03",
          title: "Proof of Funds",
          desc: "Bank statements, GIC (Guaranteed Investment Certificate), or financial support documents.",
        },
        {
          step: "04",
          title: "Medical & Biometrics",
          desc: "Biometrics enrolment and medical examination if required for your country or program.",
        },
      ],
      importantNote:
        "Study permit rules, financial thresholds, work hour limits, and PGWP eligibility can change. Always confirm current IRCC requirements before applying.",
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
      universitiesHeading: "LEADING AUSTRALIAN UNIVERSITIES",
      universities: [
        {
          name: "The University of Melbourne",
          location: "Melbourne, Victoria",
        },
        {
          name: "The University of Sydney",
          location: "Sydney, New South Wales",
        },
        {
          name: "The Australian National University",
          location: "Canberra, ACT",
        },
        { name: "UNSW Sydney", location: "Sydney, New South Wales" },
        { name: "Monash University", location: "Melbourne, Victoria" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Australia Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your Subclass 500 student visa application with clarity on CoE, health cover, and financial requirements.",
      visaRoute: {
        title: "A clear route from offer to visa",
        desc: "Accept your university offer to receive a Confirmation of Enrolment (CoE), arrange Overseas Student Health Cover (OSHC), and lodge your Subclass 500 application.",
      },
      visaRows: [
        { label: "Visa type", value: "Student Visa (Subclass 500)" },
        {
          label: "Health cover",
          value:
            "Overseas Student Health Cover (OSHC) required for visa duration",
        },
        {
          label: "Financial proof",
          value:
            "Evidence of genuine access to funds for tuition, living costs, travel, and dependents if any",
        },
        {
          label: "Work rights",
          value:
            "Up to 48 hours per fortnight during study terms; unrestricted during scheduled breaks",
        },
        {
          label: "Post-study options",
          value:
            "Temporary Graduate visa (Subclass 485) pathways for eligible degree graduates",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Confirmation of Enrolment (CoE)",
          desc: "Official CoE issued by your registered Australian education provider.",
        },
        {
          step: "02",
          title: "OSHC & Passport",
          desc: "Valid passport and Overseas Student Health Cover policy covering your stay.",
        },
        {
          step: "03",
          title: "Financial & Genuine Student",
          desc: "Proof of funds and responses addressing genuine student requirements.",
        },
        {
          step: "04",
          title: "English & Health Checks",
          desc: "Accepted English test results and medical/biometric checks where requested.",
        },
      ],
      importantNote:
        "Visa fees, genuine student criteria, work conditions, and graduate visa rules can change. Always confirm current Department of Home Affairs guidelines before applying.",
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
      universitiesHeading: "LEADING GERMAN UNIVERSITIES",
      universities: [
        { name: "Technical University of Munich", location: "Munich, Bavaria" },
        { name: "LMU Munich", location: "Munich, Bavaria" },
        {
          name: "Heidelberg University",
          location: "Heidelberg, Baden-Württemberg",
        },
        { name: "Humboldt University of Berlin", location: "Berlin" },
        {
          name: "RWTH Aachen University",
          location: "Aachen, North Rhine-Westphalia",
        },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Germany Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your national student visa application with clarity on university admission, blocked account proof, and health insurance.",
      visaRoute: {
        title: "A clear route from admission to visa",
        desc: "Secure university admission, open a blocked account (Sperrkonto) or provide equivalent funding proof, arrange health insurance, and apply for a national student visa.",
      },
      visaRows: [
        {
          label: "Visa type",
          value: "National Student Visa (Visa for Study Purposes)",
        },
        { label: "Visa fee", value: "Typically €75 for adult applicants" },
        {
          label: "Financial proof",
          value:
            "Blocked account (Sperrkonto) covering required annual living expenses, or verified scholarship/sponsorship",
        },
        {
          label: "Health insurance",
          value:
            "Statutory or qualifying private health insurance valid in Germany",
        },
        {
          label: "Work rights",
          value:
            "Permitted working days/hours apply under current German immigration rules alongside studies",
        },
        {
          label: "Post-study options",
          value:
            "Job-seeker residence permit options for eligible graduates of German universities",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "University Admission",
          desc: "Admission letter or conditional admission/language course confirmation from a German institution.",
        },
        {
          step: "02",
          title: "Blocked Account & Insurance",
          desc: "Proof of blocked account funding and health insurance coverage.",
        },
        {
          step: "03",
          title: "Academic & Language Proof",
          desc: "Prior transcripts/certificates and language proficiency evidence for the program.",
        },
        {
          step: "04",
          title: "Passport & Motivation",
          desc: "Valid passport, application forms, and clear statement of study purpose.",
        },
      ],
      importantNote:
        "Blocked account amounts, visa procedures, and student work regulations can change. Always confirm current German mission and immigration requirements before applying.",
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
      universitiesHeading: "LEADING ITALIAN UNIVERSITIES",
      universities: [
        { name: "University of Bologna", location: "Bologna, Emilia-Romagna" },
        { name: "Politecnico di Milano", location: "Milan, Lombardy" },
        { name: "Sapienza University of Rome", location: "Rome, Lazio" },
        { name: "University of Padua", location: "Padua, Veneto" },
        { name: "Politecnico di Torino", location: "Turin, Piedmont" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Italy Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your Italian Type D study visa application with clarity on Universitaly pre-enrollment, housing, and financial proof.",
      visaRoute: {
        title: "A clear route from application to visa",
        desc: "Complete your Universitaly application/pre-enrollment where required, prepare financial and accommodation proof, and apply for an Italian long-stay study visa.",
      },
      visaRows: [
        { label: "Visa type", value: "Type D National Study Visa" },
        {
          label: "Financial proof",
          value:
            "Evidence of sufficient funds to support yourself throughout the academic year",
        },
        {
          label: "Accommodation",
          value:
            "Proof of suitable housing or university accommodation in Italy",
        },
        {
          label: "Health insurance",
          value:
            "Valid medical insurance meeting Italian consular requirements",
        },
        {
          label: "Residence permit",
          value:
            "Apply for a Permesso di Soggiorno within 8 working days of arriving in Italy",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Admission & Pre-enrollment",
          desc: "University admission confirmation and Universitaly pre-enrollment summary where applicable.",
        },
        {
          step: "02",
          title: "Financial & Housing Proof",
          desc: "Bank statements/sponsorship documents and proof of accommodation in Italy.",
        },
        {
          step: "03",
          title: "Academic & Legalized Docs",
          desc: "Diplomas, transcripts, and required translations or declarations of value/CIMEA checks.",
        },
        {
          step: "04",
          title: "Passport & Insurance",
          desc: "Valid passport and qualifying health coverage.",
        },
      ],
      importantNote:
        "Consular checklists, pre-enrollment deadlines, and residence permit steps can vary by consulate. Always confirm official Italian embassy/consulate instructions before applying.",
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
      universitiesHeading: "LEADING FRENCH UNIVERSITIES",
      universities: [
        {
          name: "Université PSL (Paris Sciences & Lettres)",
          location: "Paris",
        },
        { name: "Institut Polytechnique de Paris", location: "Palaiseau" },
        { name: "Sorbonne Université", location: "Paris" },
        { name: "HEC Paris", location: "Jouy-en-Josas" },
        { name: "Université Paris-Saclay", location: "Gif-sur-Yvette" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "France Student Visa requirements at a glance.",
      visaSubtitle:
        "Plan your French student visa application with clarity on admissions, living funds, and housing documentation.",
      visaRoute: {
        title: "A clear route from admission to visa",
        desc: "Secure admission from a recognized French university or Grande École, complete any required campus/pre-consular steps, and submit your student visa application.",
      },
      visaRows: [
        { label: "Visa type", value: "Long-Stay Student Visa (VLS-TS)" },
        {
          label: "Financial proof",
          value:
            "Evidence of sufficient monthly resources to cover living costs in France",
        },
        {
          label: "Accommodation",
          value: "Proof of housing in France for your arrival period",
        },
        {
          label: "Work rights",
          value:
            "Student residence holders are permitted to work part-time up to statutory limits",
        },
        {
          label: "Post-study options",
          value:
            "Temporary residence pathways available for eligible master’s and higher graduates",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Proof of Admission",
          desc: "Official acceptance letter or enrollment confirmation from a French institution.",
        },
        {
          step: "02",
          title: "Financial & Housing Proof",
          desc: "Proof of available funds and initial accommodation in France.",
        },
        {
          step: "03",
          title: "Academic & Language Records",
          desc: "Prior degree/school certificates and language proficiency evidence where required.",
        },
        {
          step: "04",
          title: "Passport & Identity Docs",
          desc: "Valid passport, visa application forms, and compliant photos.",
        },
      ],
      importantNote:
        "Visa procedures, financial proof requirements, and student rules can change. Always confirm current France-Visas and consular requirements before applying.",
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
      universitiesHeading: "LEADING FINNISH UNIVERSITIES",
      universities: [
        { name: "University of Helsinki", location: "Helsinki" },
        { name: "Aalto University", location: "Espoo, Greater Helsinki" },
        { name: "University of Turku", location: "Turku" },
        { name: "Tampere University", location: "Tampere" },
        { name: "University of Oulu", location: "Oulu" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Finland Student Residence Permit at a glance.",
      visaSubtitle:
        "Plan your Finnish residence permit for studies with clarity on admission, income requirement, and insurance.",
      visaRoute: {
        title: "A clear route from admission to permit",
        desc: "Receive your admission confirmation from a Finnish higher education institution, prepare proof of funds and insurance, and apply for a student residence permit (typically via Enter Finland).",
      },
      visaRows: [
        { label: "Permit type", value: "Residence Permit for Studies (Migri)" },
        {
          label: "Financial proof",
          value:
            "Demonstrate sufficient funds in your own bank account to cover living costs for the required period",
        },
        {
          label: "Tuition & scholarships",
          value:
            "Non-EU/EEA students may face tuition fees depending on program, with scholarship options available",
        },
        {
          label: "Health insurance",
          value:
            "Private insurance covering medical/treatment costs meeting Migri thresholds",
        },
        {
          label: "Work rights",
          value:
            "Students with a residence permit for studies have broad working rights subject to current law",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "Admission Decision",
          desc: "Official acceptance letter from a Finnish university or university of applied sciences.",
        },
        {
          step: "02",
          title: "Proof of Funds",
          desc: "Bank statement showing required funds readily available in your account.",
        },
        {
          step: "03",
          title: "Valid Insurance",
          desc: "Medical insurance policy meeting Finnish Immigration Service (Migri) criteria.",
        },
        {
          step: "04",
          title: "Passport & Biometrics",
          desc: "Valid passport and identity verification/biometrics appointment.",
        },
      ],
      importantNote:
        "Income thresholds, tuition rules, and Migri permit requirements can change. Always confirm current Finnish Immigration Service (Migri) guidelines before applying.",
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
      universitiesHeading: "LEADING SWEDISH UNIVERSITIES",
      universities: [
        { name: "KTH Royal Institute of Technology", location: "Stockholm" },
        { name: "Lund University", location: "Lund, Skåne" },
        { name: "Uppsala University", location: "Uppsala" },
        { name: "Chalmers University of Technology", location: "Gothenburg" },
        { name: "Stockholm University", location: "Stockholm" },
      ],
      visaHeading: "VISA & ENTRY REQUIREMENTS",
      visaTitle: "Sweden Student Residence Permit at a glance.",
      visaSubtitle:
        "Plan your Swedish residence permit for higher education with clarity on admission, maintenance funds, and insurance.",
      visaRoute: {
        title: "A clear route from admission to permit",
        desc: "Receive admission to full-time studies at a Swedish higher education institution, prepare proof of funds and comprehensive insurance, and apply via the Swedish Migration Agency (Migrationsverket).",
      },
      visaRows: [
        {
          label: "Permit type",
          value: "Residence Permit for Higher Education (Migrationsverket)",
        },
        {
          label: "Financial proof",
          value:
            "Demonstrate sufficient funds in your bank account to support yourself for the required period",
        },
        {
          label: "Tuition payment",
          value:
            "Where tuition fees apply, payment or fee waiver/scholarship documentation is required",
        },
        {
          label: "Health insurance",
          value: "Comprehensive health insurance coverage valid in Sweden",
        },
        {
          label: "Work rights",
          value:
            "Students with a residence permit for higher education are generally allowed to work alongside studies",
        },
      ],
      checklist: [
        {
          step: "01",
          title: "University Admission",
          desc: "Notification of selection/admission to full-time studies in Sweden.",
        },
        {
          step: "02",
          title: "Proof of Maintenance Funds",
          desc: "Bank statement showing required funds available in your name.",
        },
        {
          step: "03",
          title: "Comprehensive Insurance",
          desc: "Proof of health/medical insurance meeting Migrationsverket requirements.",
        },
        {
          step: "04",
          title: "Passport & Application",
          desc: "Valid passport and submitted residence permit application.",
        },
      ],
      importantNote:
        "Maintenance requirements, application fees, and residence permit rules can change. Always confirm current Swedish Migration Agency (Migrationsverket) guidelines before applying.",
    },
  };

  // Return data matching the code, or null if it doesn't exist
  return database[countryCode?.toLowerCase()] || null;
};
