import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden ">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div className="flex-1 w-full px-6 py-10 sm:py-16 sm:px-24">
        <div className="max-w-5xl mx-auto bg-black bg-opacity-50 p-8 sm:p-12 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-[#DA54FF] mb-8">
         Contact us
          </h1>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-300 text-lg">
              If you have any questions about our Terms and Conditions, please
              contact us at:
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              <strong>Email:</strong> paul@elixzorconsulting.com <br />
              {/* <strong>Phone:</strong> +123 456 7890 */}
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              <strong>Address:</strong>      Address: Tummy Fillers, Floor no. 2nd, Flat no. B-208, PRABHAKAR
              JANGID ESTATE CHSL, Near Vijay Park, Jangid Estate, Mira Road
              East, Mira Bhayandar, Thane, Maharashtra, 401107 <br />
              {/* <strong>Phone:</strong> +123 456 7890 */}
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
