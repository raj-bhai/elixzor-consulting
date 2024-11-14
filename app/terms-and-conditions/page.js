import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div className="flex-1 w-full px-6 py-10 sm:py-16 sm:px-24">
        <div className="max-w-5xl mx-auto bg-black bg-opacity-50 p-8 sm:p-12 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-[#DA54FF] mb-8">
            Terms and Conditions
          </h1>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-300 text-lg">
              Welcome to our Terms and Conditions page. By using our website,
              you agree to comply with and be bound by the following terms and
              conditions of use, which together with our privacy policy govern
              our relationship with you in relation to this website.
            </p>
          </section>

          {/* Use of the Website */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Use of the Website
            </h2>
            <p className="text-gray-300 text-lg">
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-300 text-lg">
              This website contains material that is owned by or licensed to us.
              This material includes, but is not limited to, the design, layout,
              look, appearance, and graphics. Reproduction is prohibited other
              than in accordance with the copyright notice, which forms part of
              these terms and conditions.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-300 text-lg">
              By using this website, you agree to refrain from any activity that
              may cause damage to the website, compromise its security, or
              disrupt the service to other users. You are also responsible for
              ensuring that any information you provide is accurate, up-to-date,
              and free of malicious content.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 text-lg">
              We shall not be held liable for any indirect, incidental, special,
              or consequential damages, including, without limitation, loss of
              revenue or profits, arising out of the use or inability to use
              this website.
            </p>
          </section>

          {/* Termination of Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Termination of Use
            </h2>
            <p className="text-gray-300 text-lg">
              We reserve the right to terminate your access to the website if we
              determine that you have violated these terms. Such termination may
              occur without notice and without any liability to you.
            </p>
          </section>

          {/* Changes to the Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to the Terms
            </h2>
            <p className="text-gray-300 text-lg">
              We may update these terms and conditions from time to time, and
              any changes will be effective immediately upon posting on this
              website. It is your responsibility to check this page periodically
              to stay informed of any changes.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-300 text-lg">
              These terms and conditions are governed by and construed in
              accordance with the laws of India, and any disputes relating to
              these terms and conditions will be subject to the exclusive
              jurisdiction of the courts of India.
            </p>
          </section>
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
