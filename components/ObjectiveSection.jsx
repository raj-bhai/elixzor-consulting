"use client"; // Ensure this is a client component

import CTAButton from "./CTAButton";
import useInView from "./useInView";

export default function ObjectiveSection({ scrollToBookYourCall }) {
  const [subheadingRef, subheadingInView] = useInView({ threshold: 0.1 });
  const [headingRef, headingInView] = useInView({ threshold: 0.1 });
  const [descriptionRef, descriptionInView] = useInView({ threshold: 0.1 });
  const [bulletPointsRef, bulletPointsInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative font-sans bg-gradient-to-r from-black via-purple to-black w-screen text-white py-16 px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple via-transparent to-purple opacity-20"></div>
      
      <div className="relative font-sans max-w-4xl mx-auto text-center z-10">
        {/* Subheading */}
        <h3
          ref={subheadingRef}
          className={`text-light-purple text-lg font-semibold tracking-wider mb-4 ${
            subheadingInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
          } transition-all duration-700 ease-out`}
        >
          MY OBJECTIVE HERE IS SIMPLE...
        </h3>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-8 ${
            headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
          } transition-all duration-700 ease-out`}
        >
          Helping You Grow In Youtube Automation By Teaching You Everything...
          <span className="">Plus</span> Give You The Complete Path And Guidance To Make Your First
          <span className=""> $1000</span> From Youtube In Record Time.
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className={`text-lg sm:text-xl mb-8 text-left ${
            descriptionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
          } transition-all duration-700 ease-out`}
        >
          Here&apos;s just a mere fraction of the <span className="">golden nuggets you&apos;ll discover</span> with our service...
        </p>

        {/* Bullet Points */}
        <ul
          ref={bulletPointsRef}
          className={`text-left space-y-6 mb-8 ${
            bulletPointsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
          } transition-all duration-700 ease-out`}
        >
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg">
            <span className="font-bold text-light-purple">Prevent mistakes before creating a channel</span> - Most of the people create a channel from scratch and it takes them more than 6 months just to get it monetized.
          </li>
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg animate-delay-200">
            <span className="font-bold text-yellow-400">Branding and SEO Optimisation errors</span> - Make sure the channel is perfectly suited for the niche and audience we will be targeting rather than randomly making any logo or banner.
          </li>
          <li className="text-lg sm:text-xl bg-gray-800 p-4 rounded-lg shadow-lg animate-delay-400">
            <span className="font-bold text-green-400">Video length and the analytics</span> - Custom length videos which are viral prone with perfectly stitched script and animations.
          </li>
        </ul>

        {/* Call to Action Button */}
        <CTAButton onClick={scrollToBookYourCall} text="YES! I WANT TO START" subtext="Limited seats available, so book your slot before they run out." />
      </div>
    </section>
  );
}
