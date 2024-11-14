import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div className="flex-1 w-full px-6 py-10 sm:py-16 sm:px-24">
        <div className="max-w-5xl mx-auto bg-black bg-opacity-50 p-8 sm:p-12 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-[#DA54FF] mb-8">Privacy Policy</h1>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 text-lg">
              This Privacy Policy describes how we handle and protect your personal data and the choices you have regarding the use of that data. Please take a moment to review this policy and contact us if you have any questions.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Collection</h2>
            <p className="text-gray-300 text-lg">
              We collect personal data from users to provide a personalized and efficient experience on our platform. The data we collect includes but is not limited to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-lg">
              <li>Personal information such as name, email address, and phone number.</li>
              <li>Account information and usage data.</li>
              <li>Data collected through cookies and other tracking technologies.</li>
            </ul>
          </section>

          {/* Use of Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Use of Data</h2>
            <p className="text-gray-300 text-lg">
              The data we collect is used for various purposes, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-lg">
              <li>To provide and maintain our services.</li>
              <li>To personalize your experience and offer tailored content.</li>
              <li>To manage your account and provide customer support.</li>
              <li>To monitor usage and improve our services.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
            <p className="text-gray-300 text-lg">
              We do not share your personal data with third parties except in the following cases:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-lg">
              <li>When required by law or government agencies.</li>
              <li>To trusted third-party service providers who assist in delivering our services.</li>
              <li>For business transactions such as mergers or acquisitions.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="text-gray-300 text-lg">
              We take data security seriously and implement appropriate measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
            </p>
          </section>

          {/* User Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 text-lg">
              You have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300 text-lg">
              <li>The right to access, update, or delete your personal data.</li>
              <li>The right to object to or restrict the processing of your data.</li>
              <li>The right to withdraw consent at any time.</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 text-lg">
              If you have any questions about this Privacy Policy, please contact us at:
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
