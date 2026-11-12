import Hero from "@/components/contact/Hero";
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
      <Faqs />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
