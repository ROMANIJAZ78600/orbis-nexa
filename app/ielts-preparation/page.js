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
      <Faqs />
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
