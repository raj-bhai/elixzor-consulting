"use client"; // Ensure this is a client component
import React, {useRef} from 'react';
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import ProgressSection from "@/components/ProgressSection";
import MessageSection from "@/components/MessageSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import Schedule from "@/components/Schedule";
import Gallery from '@/components/Gallery';

export default function Home() {

  const bookCallRef = useRef(null); // Create a reference for the BookYourCall component

  const scrollToBookYourCall = () => {
    // Smooth scroll to BookYourCall section
    if (bookCallRef.current) {
      bookCallRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex bg-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-4 sm:px-24 pt-[80px]">
      <Header />
      <LandingSection scrollToBookYourCall={scrollToBookYourCall} />
      <ObjectiveSection scrollToBookYourCall={scrollToBookYourCall} />
      <ProgressSection scrollToBookYourCall={scrollToBookYourCall} />
      <MessageSection />
      <ResultsSection scrollToBookYourCall={scrollToBookYourCall} />
      <Gallery scrollToBookYourCall={scrollToBookYourCall} />
      <div ref={bookCallRef} >
      <Schedule/>
      </div>
      <FAQSection />
      <Footer/>
    </main>
  );
}
