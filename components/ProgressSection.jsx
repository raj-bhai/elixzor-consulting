"use client";

import Image from "next/image";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import useInView from "./useInView";
import { FaArrowRight } from "react-icons/fa";

export default function ProgressSection() {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative w-screen bg-black text-white py-16 px-4 flex flex-col items-center overflow-hidden"
    >
      {isInView && (
        <motion.div
          className="absolute w-[150px] h-[150px] sm:w-[400px] sm:h-[400px] bg-gradient-to-r from-purple to-purple rounded-full z-0 "
          style={{ opacity: 0.3 }} 
          animate={{
            x: ["-20%", "120%"],
            y: ["0%", "30%", "-20%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      <div className="sm:w-[700px] w-full mx-auto flex flex-row items-center justify-center z-10 relative">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-end space-y-32 sm:space-y-16 w-1/3"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#7E3A27]">
              3<sup className="text-sm sm:text-base lg:text-lg align-top">RD</sup>
            </h2>
            <p className="text-lg sm:text-xl mt-2">MONTH</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">EXPERT</p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#7E3A27]">
              6<sup className="text-sm sm:text-base lg:text-lg align-top">TH</sup>
            </h2>
            <p className="text-lg sm:text-xl mt-2">MONTH</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">MASTER</p>
          </div>

          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#7E3A27]">
              12<sup className="text-sm sm:text-base lg:text-lg align-top">TH</sup>
            </h2>
            <p className="text-lg sm:text-xl mt-2">MONTH</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">LEGENDARY</p>
          </div>
        </motion.div>

        {/* Middle Divider Line with Motion */}
        <motion.div
          className="flex flex-col items-center relative h-[600px] sm:h-[600px] mx-4 sm:mx-8 w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/divider-line.png"
              alt="Divider Line"
              layout="fill"
              className="sm:object-contain object-cover"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col items-start space-y-8 sm:space-y-16 w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Engaging Audience
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              $250-$500 INCOME
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Finalizing branding and style
            </li>
          </ul>

          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Plans for diversifying
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              $1000+ INCOME
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Brand deals and more...
            </li>
          </ul>

          <ul className="space-y-2 text-base sm:text-lg">
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Business
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              $5000+ INCOME
            </li>
            <li className="flex items-start">
              <FaArrowRight className="mt-1 text-xl text-purple-500 mr-2" />
              Multiple income sources + channels
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CTAButton
          text="YES! I WANT TO START"
          subtext="Limited seats available, so book your slot before they run out."
        />
      </motion.div>
    </section>
  );
}
