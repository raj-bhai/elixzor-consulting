import React from 'react';

export default function CTAButton({ text, onClick, subtext }) {
  return (
    <div className="flex font-sans flex-col items-center mt-12">
      <button
        onClick={() => {
            window.open('https://calendly.com/paul-elixzorconsulting/yta');
        }}
        className="bg-gradient-to-r from-[#6B03B0] to-[#270049] hover:from-[#A32CC4] hover:to-[#600080] text-white font-bold py-4 px-8 sm:px-10 md:px-12 rounded-full text-base sm:text-lg md:text-2xl shadow-lg transition"
      >
        {text}
      </button>
      {subtext && (
        <p className="text-center text-xs sm:text-lg mt-1">
          {subtext}
        </p>
      )}
    </div>
  );
}