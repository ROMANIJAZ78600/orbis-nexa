"use client";

import DynamicHero from "@/components/Destination/DynamicHero";
import UniversityCarousel from "@/components/Destination/UniversityCarousel";
import VisaRequirements from "@/components/Destination/VisaRequirements";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";
import { useParams } from "next/navigation";

export default function CountryPage() {
  const params = useParams();
  const code = params?.code; // Grabs 'us', 'ca', 'jp', etc. from the URL
  return (
    <div className="min-h-screen">
      <Navbar />
      <DynamicHero countryCode={code} />
      <UniversityCarousel countryCode={code} />
      <Faqs />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
