import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team dedicated to providing high-quality services and
              solutions. Our aim is to empower people through technology and
              design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#F58634]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#F58634]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#F58634]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#F58634]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F58634]"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F58634]"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F58634]"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F58634]"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
