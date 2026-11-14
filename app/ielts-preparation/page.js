import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";

import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";
import Hero from "@/components/Ielts/Hero";
import ChooseYourRoute from "@/components/Ielts/ChooseYourRoute";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChooseYourRoute />
      <Faqs />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
