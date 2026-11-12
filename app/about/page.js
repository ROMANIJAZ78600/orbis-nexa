import Hero from "@/components/about/Hero";
import Support from "@/components/about/Support";
import Team from "@/components/about/Team";
import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatDrivesUs />
      <Support />
      <Team />
      <Faqs />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
