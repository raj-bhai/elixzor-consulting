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
            Refund Policy
          </h1>
          {/* Refund Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Refund Policy
            </h2>
            <p className="text-gray-300 text-lg">
              Our refund policy ensures that you are eligible for a refund if
              you meet certain conditions. Refunds will be processed if there is
              a failure to deliver the agreed-upon services or if a technical
              issue on our end prevents you from using our services. Please note
              that we do not provide refunds for cancellations made by users or
              for services already delivered. If you believe you qualify for a
              refund, please contact us at the provided email address with your
              purchase details.
            </p>
          </section>

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
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
