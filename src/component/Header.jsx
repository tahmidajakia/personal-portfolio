import { Link } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo1-removebg-preview.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // Mobile menu toggle state

  // Scroll effect for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "Home", link: "home" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
  ];

  const toggleMenu = () => setOpen(!open); // Toggle menu state when clicked

  return (
    <div
      className={`navbar fixed top-0 w-full z-50 transition-all ease-in-out ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-between items-center px-4 w-full">
          <div>
            <img className="w-56" src={logo} alt="Logo" />
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          onClick={toggleMenu} // Toggle the menu state when clicked
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white z-60"
        >
          {open ? (
            <XMarkIcon className="w-7 h-7" /> // Cross icon when menu is open
          ) : (
            <Bars3BottomRightIcon className="w-7 h-7" /> // Hamburger icon when closed
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-11">
            {Links.map((link) => (
              <button key={link.name}>
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-white text-lg"
                >
                  {link.name}
                </Link>
              </button>
            ))}
            {/* Social Media Icons */}
            <div className="hidden md:flex space-x-2 pt-2">
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
            {/* Connect Button */}
            <button className="relative font-semibold text-white border-2 border-white py-3 px-9 text-lg transition-all ease-in-out group hover:text-[#121212] whitespace-nowrap">
              <Link
                to="connect"
                smooth={true}
                duration={500}
                className="w-full h-full flex items-center justify-center"
              >
                Let’s Connect
              </Link>
              <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-500 ease-in-out group-hover:w-full z-[-1]"></span>
            </button>
          </ul>

          {/* Mobile Navigation */}
          <ul
            className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-6 transition-all ease-in-out duration-300 ${
              open ? "block" : "hidden"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-white text-lg"
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="relative font-semibold text-white text-lg transition-all ease-in-out group hover:text-[#121212] whitespace-nowrap">
                <Link
                  to="connect"
                  smooth={true}
                  duration={500}
                  className="w-full h-full flex items-center justify-center"
                  onClick={toggleMenu} // Close the menu when clicked
                >
                  Connect
                </Link>
                <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-500 ease-in-out group-hover:w-full z-[-1]"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
