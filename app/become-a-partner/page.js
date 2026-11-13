import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";

import Navbar from "@/components/Navbar";
import Collaboration from "@/components/Partner/Collaboration";
import CTA from "@/components/Partner/CTA";
import FindYourPlace from "@/components/Partner/FindYourPlace";
import Hero from "@/components/Partner/Partner";
import WorkWithOrbis from "@/components/Partner/WorkWithOrbis";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FindYourPlace />
      <WorkWithOrbis />
      <Collaboration />
      <Faqs />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
