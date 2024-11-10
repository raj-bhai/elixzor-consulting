"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useInView from "./useInView"; // Make sure this path is correct

const FAQItem = ({ question, answer, isInView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`p-4 font-sans border-b border-purple-600 cursor-pointer transition-colors duration-300 ${
        isOpen
          ? "bg-gradient-to-r from-[#3A0E4F] via-[#1D0631] to-[#3A0E4F]"
          : "bg-transparent"
      }`}
      onClick={() => setIsOpen(!isOpen)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg text-left font-semibold">{question}</h3>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-2 text-left "
      >
        <p className="text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default function FAQSection() {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const [faqs, setFaqs] = useState([
    {
      question: "What is Youtube Automation?",
      answer:
        "YouTube automation, also known as faceless cashcow brands, involves creating content without showing the creator's face, often using stock footage, voiceovers, and outsourced video editing to generate revenue via adsense. This method allows creators to run multiple channels efficiently and anonymously.",
    },
    {
      question: "How to make money with Youtube Automation?",
      answer:
        "After you are eligible for monetization on YouTube (which you are from DAY 1 with us) You can generate income through ads. You can even generate income from sponsorships and affiliate marketing. Consistently upload content to grow your audience and increase revenue streams.",
    },
    {
      question: "Who will own and control my channel?",
      answer:
        "Once you get started with us, the owner invitation of the channel will be sent to your email and each and every step, from deciding the niche to uploading the first video, everything will be in your control. 100% control over everything.",
    },
    {
      question: "How does the guarantee of the program works?",
      answer:
        "If within the first two weeks or first 5 classes, you don't think that its valuable and start to learn everything live and understand how youtube automation works, you can get your money back, no questions asked.",
    },
    {
      question: "Why ELIXZOR ?",
      answer:
        "It’s simple, because we have the most experience and the most data but don’t take our word for it. You can scour freelancing websites or the internet and if you manage to find any other coaching program or course better than us in terms of results and quality, we will close our company on that same day.",
    },
  ]);

  return (
    <section
      ref={ref}
      className="relative font-sans overflow-y-hidden overflow-x-hidden w-screen bg-black text-white py-16 px-8 flex flex-col items-center"
    >
      <div className="max-w-4xl mx-auto relative text-center">
        {/* Subheading */}
        <motion.h3
          className="text-light-purple text-lg font-semibold tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl font-bold uppercase tracking-wider leading-tight mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          GET YOUR QUESTIONS ANSWERED
        </motion.h1>

        {/* Background Half-Circle Image with Subtle Scaling Motion */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[20%] z-0 w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={isInView ? { scale: 1, opacity: 0.8 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/images/bg-circle.png" // Update the path to your half-circle image
            alt="Half Circle Background"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            quality={100}
            className="opacity-60"
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="relative z-10 bg-gradient-to-r from-[#270238] via-[#0b0119] to-[#270238] p-4 rounded-lg shadow-lg border border-white border-opacity-30">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
