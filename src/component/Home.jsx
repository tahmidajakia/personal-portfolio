import React from "react";
import { motion } from "framer-motion"; // Ensure motion is imported
import img2 from "../assets/img2.png";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/images/B9 A10 Type-01 Requirements.pdf";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Text content */}
          <div className="text-white">
            <motion.h6
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }} // Adjusted viewport settings
              className="text-3xl mt-10"
            >
              Hello, I'm
            </motion.h6>
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }} // Adjusted viewport settings
              className="font-semibold md:text-5xl my-4 text-3xl"
            >
              Tahmida Jakia
            </motion.h1>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "",
                  1000,
                  "Web Developer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </h1>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }} // Adjusted viewport settings
              className="md:w-96"
            >
              Based in Sylhet, Bangladesh. Having a high level of experience in
              web development knowledge and building web and mobile applications
              with JavaScript, React, Node.js, and other libraries and
              frameworks.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }} // Adjusted viewport settings
              className="flex gap-4 my-4"
            >
              <FaGithub className="text-white hover:text-purple-700 cursor-pointer" />
              <FaFacebook className="text-white hover:text-purple-700 cursor-pointer" />
              <FaLinkedin className="text-white hover:text-purple-700 cursor-pointer" />
              <FaInstagram className="text-white hover:text-purple-700 cursor-pointer" />
              <FaTwitter className="text-white hover:text-purple-700 cursor-pointer" />
            </motion.div>

            {/* CV Download Button */}
            {/* <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }} // Adjusted viewport settings
              className="mt-5"
            >
              <button className="mt-6 btn transition-all duration-500 bg-purple-700 py-2 px-4 rounded text-white hover:bg-white hover:text-purple-700 flex items-center gap-2">
                <a
                  href={resume}
                  download="Resume"
                  className="flex items-center gap-2"
                >
                  MY CV <FaDownload />
                </a>
              </button>
            </motion.div> */}
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView="show"
            className="order-first md:order-last relative"
          >
            <img
              src={img2}
              alt="Profile"
              className="data-aos-fade-left" // Temporarily removed AOS attributes to test framer-motion
            />
          </motion.div>
        </div>
      </div>
      <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;
