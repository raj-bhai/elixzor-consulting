import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResultsSection from '../components/ResultsSection';

export default function ThankYouPage() {
  return (
    <main className="flex font-sans bg-gradient-to-br from-black via-purple-900 to-black overflow-x-hidden min-h-screen flex-col items-center justify-between px-4 sm:px-24 pt-[80px] sm:pt-[100px] ">
      <Header />
      
      {/* Header Section */}
      <div className="text-center text-white space-y-4 mb-10">
        <h1 className="text-xl sm:text-2xl tracking-widest text-[#DA54FF] font-bold animate-pulse">
          CONGRATULATIONS...
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold uppercase text-white">
          YOU HAVE DONE IT!
        </h2>
        <p className="text-lg sm:text-2xl uppercase text-gray-300">
          YOU TOOK YOUR FIRST STEP AND YOUR APPOINTMENT HAS BEEN BOOKED AND CONFIRMED...
        </p>
      </div>

      {/* Message Section */}
      <div className="max-w-3xl text-white text-center text-base sm:text-lg space-y-4 mb-10 px-6 sm:px-0">
        <p className="text-gray-400">
          Look out for a message from our team in the WhatsApp or Instagram handle
          you added. If we can&apos;t confirm your appointment, we will cancel your slot.
        </p>
        <p className="text-gray-400">
          You can also send <span className="font-bold text-white">@elixzor_consulting</span> a message
          on Instagram to confirm the call.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full sm:w-[800px] sm:h-[370px] h-[250px] mb-8 bg-black rounded-md overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/KLbsSrxsu_E?controls=0&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <ResultsSection
      hideCTA
      />

      <Footer />
    </main>
  );
}
