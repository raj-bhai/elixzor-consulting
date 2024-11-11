"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function LandingSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxProximity, setMaxProximity] = useState(20);

  useEffect(() => {
    // This code only runs on the client side
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Adjust maxProximity for mobile screens
    const updateMaxProximity = () => {
      const proximity = window.innerWidth < 640 ? 10 : 20;
      setMaxProximity(proximity);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMaxProximity);

    // Initialize maxProximity on mount
    updateMaxProximity();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxProximity);
    };
  }, []);

  const movement = Math.min(scrollPosition * 0.1, maxProximity);

  return (
    <section className="relative w-screen sm:-mt-0 -mt-[40px] h-auto flex flex-col items-center text-white p-4 bg-purple overflow-y-hidden overflow-x-hidden ">
      {/* Background Circle Image on the Left */}
      <div
        className="absolute top-1/4 sm:top-1/3 transform -translate-y-1/2 overflow-hidden z-0 transition-transform duration-300"
        // style={{ left: `calc(-55% + ${movement}%)` }}
        style={{ left: `calc(-45%)` }}
      >
        <img
          src="/images/bg-circle.png" // Ensure this is the correct path to your image
          alt="Background Circle Left"
          className="sm:h-[150%] object-cover opacity-100"
        />
      </div>

      {/* Background Circle Image on the Right */}
      <div
        className="absolute sm:top-1/3 top-2/3 transform -translate-y-1/2 overflow-hidden z-0 transition-transform duration-300"
        // style={{ right: `calc(-55% + ${movement}%)` }}
        style={{ right: `calc(-45%)` }}
      >
        <img
          src="/images/bg-circle.png" // Ensure this is the correct path to your image
          alt="Background Circle Right"
          className="h-[150%] object-cover sm:opacity-100 opacity-70 "
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* Heading Section */}
      <div className="relative z-10 text-center pt-6 sm:w-[80%] md:w-[70%] lg:w-[60%] w-[90%] font-sans">
        <h3 className="text-light-purple text-2xl sm:text-3xl font-semibold tracking-wide">
          FINALLY...
        </h3>
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider mt-4 leading-tight">
          You Can Learn One-On-One From The Most Successful Team in YouTube
          Automation
        </h1>
      </div>

      {/* Video Placeholder */}
      <div className="relative z-10 flex justify-center items-center mt-8 sm:mt-12 w-full">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl h-[200px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-[#000] rounded-lg shadow-xl overflow-hidden">
        <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/8SPJ839PCB4?controls=0&rel=0&modestbranding=1"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="relative z-10 mt-8 sm:mt-6">
        <CTAButton
          text="YES! I WANT TO START"
          subtext="Limited seats available, so book your slot before they run out."
        />
      </div>

      {/* Footer Info Section */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full justify-around items-center mt-12 sm:mt-16 py-6 font-sans">
        <div className="absolute left-0 top-0 w-full h-[20px] sm:h-[30px] md:h-[30px] lg:h-[20px] flex items-end">
          <Image
            src="/images/line.png"
            alt="Decorative Pink Line"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute left-0 -bottom-8 w-full h-[20px] sm:h-[30px] md:h-[30px] lg:h-[20px] flex items-end">
          <Image
            src="/images/line.png"
            alt="Decorative Pink Line"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center flex items-center mb-4 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* First tick (shifted slightly to the left) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l4 4L15 6"
            />

            {/* Second tick (slightly to the right, creating the gap) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l4 4 8-8"
            />
          </svg>
          <p className="ml-3 text-lg sm:text-2xl font-semibold">
            1:1 PERSONAL COACHING
          </p>
        </div>
        <div className="text-center flex items-center mb-4 sm:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* First tick (shifted slightly to the left) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l4 4L15 6"
            />

            {/* Second tick (slightly to the right, creating the gap) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l4 4 8-8"
            />
          </svg>
          <p className="ml-3 text-lg sm:text-2xl font-semibold">
            GUARANTEED RESULTS
          </p>
        </div>
        <div className="text-center flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* First tick (shifted slightly to the left) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l4 4L15 6"
            />

            {/* Second tick (slightly to the right, creating the gap) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l4 4 8-8"
            />
          </svg>

          <p className="ml-3 text-lg sm:text-2xl font-semibold">
            NO EXPERIENCE NEEDED
          </p>
        </div>
      </div>
    </section>
  );
}
