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

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChooseYourRoute />
      <FourSkills />
      <Steps />
      <GuidanceTeam />
      <Faqs />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
