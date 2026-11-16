"use client";
import StatsCounterBar from "@/components/contact/CountNumber";
import Hero from "@/components/contact/Hero";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Contact() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
  }, [pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsCounterBar />
      <Faqs />
      <Recognition />
      <FinalCTA />
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
