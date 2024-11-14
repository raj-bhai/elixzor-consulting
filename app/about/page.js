import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden ">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div className="flex-1 w-full px-6 py-10 sm:py-16 sm:px-24">
        <div className="max-w-5xl mx-auto bg-black bg-opacity-50 p-8 sm:p-12 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-[#DA54FF] mb-8">About Us</h1>

          {/* Our Mission */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              At Elixzor Consulting, our mission is to empower businesses through innovative solutions,
              driving sustainable growth and meaningful impact. We strive to bridge the gap between
              ideas and success, helping our clients navigate the complexities of the digital world.
            </p>
          </section>

          {/* Our Values */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li>Integrity: We uphold transparency and honesty in all our work.</li>
              <li>Innovation: We prioritize creativity and embrace technology to offer unique solutions.</li>
              <li>Customer Success: Your growth is our top priority, guiding all our strategies and actions.</li>
            </ul>
          </section>

          {/* Our Team */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
            <p className="text-gray-300 text-lg">
              Our team consists of experienced professionals passionate about technology and business
              solutions. We bring together diverse skills in consulting, development, and design to
              create impactful projects for our clients.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 text-lg">
              Interested in learning more? Reach out to us at <strong>paul@elixzorconsulting.com</strong> for inquiries.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
