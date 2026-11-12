import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StudentStories from "@/components/home/StudentStories";
import GlobalPartners from "@/components/home/GlobalPartners";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Faqs from "@/components/home/Faqs";
import ContactSection from "@/components/home/ContactSection";
import Testimonials from "@/components/home/Testimonials";
import Recognition from "@/components/home/Recognition";
import FinalCTA from "@/components/home/FinalCTA";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StudentStories />
      <GlobalPartners />
      <WhatWeOffer />
      <Faqs />
      <ContactSection />
      <Testimonials />
      <Recognition />
      <FinalCTA />
      <Footer />
    </main>
  );
}
