import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaFacebookF } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-[#1a1a29] text-white py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side (optional content) */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} Tahmida Jakia All rights reserved.</p>
        </div>

        {/* Right Side (Social Icons) */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-purple-500 transition duration-200" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-purple-500 transition duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-purple-500 transition duration-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-purple-500 transition duration-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-purple-500 transition duration-200" />
          </a>
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
