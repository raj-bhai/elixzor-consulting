import { FaInstagram } from "react-icons/fa"; // Importing Font Awesome's Instagram icon
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-screen bg-gradient-to-r from-purple to-black text-white py-8">
      <div className="container mx-auto  px-4 md:px-8 lg:px-16">
        {/* Top section with contact info and quick links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-8 md:space-y-0 mb-8">
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-light-purple mb-2">
              Contact Us
            </h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@elixzor.com"
                className="underline hover:text-yellow-300"
              >
                paul@elixzorconsulting.com
              </a>
            </p>
            <p>Address: Mumbai, Maharastra, India</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-light-purple mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy-policy"
                  className="underline hover:text-light-purple transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="underline hover:text-light-purple transition duration-300"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-light-purple mb-2">
              Follow Us
            </h3>
            <a
              href="https://www.instagram.com/elixzor_consulting"
              className="inline-block p-2 border border-light-purple rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            © 2024 Elixzor Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
