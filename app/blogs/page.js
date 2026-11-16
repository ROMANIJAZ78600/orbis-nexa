import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";
import CTA from "@/components/Partner/CTA";

export default function Blogs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogPage />
      <CTA />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
