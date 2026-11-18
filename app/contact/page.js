import StatsCounterBar from "@/components/contact/CountNumber";
import Hero from "@/components/contact/Hero";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsCounterBar />
      <Faqs />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
