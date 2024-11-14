import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import ProgressSection from "@/components/ProgressSection";
import MessageSection from "@/components/MessageSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <main className="flex bg-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-24 pt-[80px]">
      <Header />
      <LandingSection />
      <ObjectiveSection/>
      <ProgressSection/>
      <MessageSection/>
      <FAQSection/>
      <ResultsSection/>
      <Schedule/>
      <Footer/>
    </main>
  );
}
