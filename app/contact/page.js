import StatsCounterBar from "@/components/contact/CountNumber";
import Hero from "@/components/contact/Hero";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Faqs from "@/components/home/Faqs";
import FinalCTA from "@/components/home/FinalCTA";
import Recognition from "@/components/home/Recognition";
import Navbar from "@/components/Navbar";

const contactFaqs = [
  {
    question: "Is the initial study abroad consultation free?",
    answer:
      "Yes, your initial profile assessment and consultation session are completely free. Our counsellors review your academic background, budget, and preferred country before suggesting practical next steps.",
  },
  {
    question: "How quickly will a counsellor respond after I submit the form?",
    answer:
      "Our team aims to respond within one working day. Once you submit your details via the form or WhatsApp, a dedicated advisor reaches out to schedule your session.",
  },
  {
    question:
      "Can I book an online consultation if I am outside Lahore or Islamabad?",
    answer:
      "Yes, we offer both in-person appointments and online consultations via WhatsApp, Zoom, or Google Meet so students from any city can receive full admission and visa guidance.",
  },
  {
    question: "What details should I share before my consultation?",
    answer:
      "Sharing your highest qualification, preferred destination, target intake, and approximate budget helps our team prepare tailored university and scholarship options before speaking with you.",
  },
  {
    question: "Can parents or guardians join the counselling session?",
    answer:
      "Of course. We encourage parents or sponsors to join the session so we can clearly explain tuition fees, living expenses, financial documentation, and visa timelines together.",
  },
  {
    question: "How can I reach your team directly for urgent queries?",
    answer:
      "You can message us directly on WhatsApp using the consultation form above, call our helpline, or send an email with your academic documents for a quicker profile review.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsCounterBar />
      <Faqs
        badge="Consultation FAQs"
        titleLines={["Before You", "Reach"]}
        highlightWord="Out."
        description="Find quick answers about our free counselling sessions, response times, online appointments, and how to prepare for your first call."
        ctaTitle="Prefer instant messaging?"
        ctaDescription="Fill out the form above to send your study profile directly to us on WhatsApp."
        ctaButtonText="Go to Consultation Form"
        ctaLink="#top"
        faqs={contactFaqs}
      />
      <Recognition />
      <FinalCTA />
      <Footer />
    </div>
  );
}
