import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa"; // Import icons
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import logo from "../assets/images/logo1-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a29] text-white py-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side (optional content) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div>
            <img className="w-56" src={logo} alt="Logo" />
          </div>
        </div>

        {/* Right Side (Social Icons) */}
        <div>
          <div className="hidden md:flex space-x-2">
            <a
              href="https://www.linkedin.com/in/tahmida-jakia/"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-all"
            >
              <img src={navIcon1} alt="LinkedIn" className="w-4" />
            </a>
            <a
              href="https://www.facebook.com/nadia.nahin.98/"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-all"
            >
              <img src={navIcon2} alt="Facebook" className="w-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-all"
            >
              <img src={navIcon3} alt="Social" className="w-4" />
            </a>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Tahmida Jakia All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Styles for the footer */}
      <style jsx>{`
        footer {
          bottom: 0;
          width: 100%;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
