"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import CTAButton from "./CTAButton";
import Image from "next/image";

export default function ResultsSection(props) {
  const slides = [
    {
      id: 1,
      image: "/images/vid-tesimonial1.mp4",
    },
    {
      id: 2,
      image: "/images/vid-testimonial2.mp4",
    },
    {
      id: 3,
      image: "/images/vid-testimonial3.mp4",
    },
    {
      id: 4,
      image: "/images/vid-testimonial4.mp4",
    },
    {
      id: 5,
      image: "/images/vid-testimonial5.mp4",
    },
    {
      id: 6,
      image: "/images/vid-testimonial6.mp4",
    },
    {
      id: 7,
      image: "/images/vid-testimonial7.mp4",
    },
    {
      id: 8,
      image: "/images/vid-testimonial8.mp4",
    },
    {
      id: 9,
      image: "/images/vid-testimonial9.mp4",
    },
    {
      id: 10,
      image: "/images/vid-testimonial10.mp4",
    },
    {
      id: 11,
      image: "/images/vid-testimonial11.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  const minScale = 1;
  const maxScale = 1.5;
  const scale = useTransform(scrollY, [0, 500], [minScale, maxScale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-sans text-white py-16 px-4 sm:px-8 lg:px-32  sm:w-full w-screen overflow-hidden"
    >
      {/* Left Background Half-Circle */}
      <motion.div
        className="fixed top-1/2 left-[-150px] transform -translate-y-1/2 transition-transform duration-1000 ease-in-out"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          scale,
          clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
        }}
      >
        <Image
          src="/images/bg-circle.png"
          alt="Background Half Circle Left"
          width={300}
          height={300}
        />
      </motion.div>

      {/* Right Background Half-Circle */}
      <motion.div
        className="fixed top-1/2 right-[-150px] transform -translate-y-1/2 transition-transform duration-1000 ease-in-out"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          scale,
          clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/images/bg-circle.png"
          alt="Background Half Circle Right"
          width={300}
          height={300}
          style={{ transform: "scaleX(-1)" }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h3
          className="text-light-purple font-sans text-lg font-semibold tracking-wider mb-2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          OUR RESULTS
        </motion.h3>
        <motion.h1
          className="text-3xl font-sans sm:text-4xl font-bold uppercase tracking-wider leading-tight mb-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          Speaks For Itself
        </motion.h1>

        {/* Carousel */}
        <motion.div
          className="relative border border-light-purple  bg-gradient-to-b from-purple to-black h-[300px] sm:h-[350px] lg:h-[450px] rounded-lg mb-8 flex items-center justify-between overflow-hidden shadow-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? slides.length - 1 : prevIndex - 1
              )
            }
            className=" sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple hover:bg-light-purple text-white text-3xl rounded-full w-10 h-10 sm:w-12 sm:h-12 items-center justify-center z-10 shadow-md transition-colors"
          >
            &#9664;
          </button>

          <div className="relative border w-full h-full flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="loader"></div>
        </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="relative w-full h-full p-4 sm:px-16 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {slides[currentIndex].image.endsWith(".mp4") ? (
                    <video
                      src={slides[currentIndex].image}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-md "
                    />
                  ) : (
                    <Image
                      src={slides[currentIndex].image}
                      alt="Background Half Circle Right"
                      layout="fill" // Fills the inner container
                      objectFit="cover" // Maintains aspect ratio
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
            }
            className="sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple hover:bg-light-purple text-white text-3xl rounded-full w-10 h-10 sm:w-12 sm:h-12 items-center justify-center z-10 shadow-md transition-colors"
          >
            &#9654;
          </button>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          {
            !props.hideCTA &&
            <CTAButton
            text="YES! I WANT TO START"
            subtext="Limited seats available, so book your slot before they run out."
          />
          }
        </motion.div>
      </div>
    </section>
  );
}
