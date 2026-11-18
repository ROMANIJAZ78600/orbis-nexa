// "use client";

import ContactModal from "@/components/ContactModal";
import CountryOptions from "@/components/Destination/CountryOptions";
import FindBestFit from "@/components/Destination/FIndBestFit";
import Hero from "@/components/Destination/Hero";
import Quote from "@/components/Destination/Quote";
import Roadmap from "@/components/Destination/Roadmap";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

export default function Destinations() {
  // const pathname = usePathname();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // useEffect(() => {
  //   setIsModalOpen(true);
  // }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CountryOptions />
      <FindBestFit />
      <Roadmap />
      <Quote />
      <Faqs />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
      {/* <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
}
