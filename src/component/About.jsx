import about from "../assets/images/aboutme.jpg";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import resume from "../assets/images/B9 A10 Type-01 Requirements.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { div } from "framer-motion/client";

const AboutMe = () => {
  return (
    <div id="about" className="p-4 md:pl-28 md:pr-28">
      <motion.div
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}>
        <h1 className="text-4xl text-white text-center font-bold">
          Get to know me!
        </h1>
        <h2 className="border flex text-center items-center justify-center mx-auto mt-5 mb-14 border-cyan-400 w-28"></h2>
        <div className="md:flex justify-center md:gap-10">
          <div>
            <img className="w-[500px]" src={about} alt="" />
          </div>
          <div>
            <p className="md:w-[600px] text-white">
              I am a{" "}
              <span className="text-purple-400 font-bold">
                Junior Web Developer
              </span>{" "}
              building the Front-end of websites and Web Applications that leads
              to the success of the overall product.Check out some of my work in
              the <span className="text-purple-400 font-bold">Projects</span>{" "}
              section.I also like sharing content related to the stuff that i
              have learned over the years in{" "}
              <span className="text-purple-400 font-bold">Web Development</span>{" "}
              so it can help other people of the Dev Community .Feel free to
              Connect or Follow on my Linkedin where i post useful content
              related to Web Development and Programming. I am open to{" "}
              <span className="text-purple-400 font-bold">Job</span>{" "}
              opportunities where i can contributes, learn and grow,If you have
              a good opportunity that matches my skills and then do not hesitate
              to <span className="text-purple-400 font-bold">Contact</span> me.
            </p>
            <div className="mt-5 text-white ">
              <div className="flex gap-12">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="mt-1">
                      <FaUser />
                    </span>
                    <h3>Name :</h3>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1">
                      <MdEmail />
                    </span>
                    <h3>Email :</h3>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1">
                      <FaPhoneAlt />
                    </span>
                    <h3>Phone :</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3>Tahmida Jakia</h3>
                  <h3>devtahmidajakia@gmail.com</h3>
                  <h3>01724519356</h3>
                </div>
              </div>
            </div>
            <div className="text-white">
              <h3 className="mt-5 font-bold">Education</h3>
              <div className="mt-5 ">
                <div className="flex gap-12">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="mt-1"></span>
                      <h3>University :</h3>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-1"></span>
                      <h3>Degree :</h3>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-1"></span>
                      <h3>Year :</h3>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-1"></span>
                      <h3>Field of Study :</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3>Dhaksin Shurma, Sylhet</h3>
                    <h3>Honours</h3>
                    <h3>2nd Year</h3>
                    <h3>Accounting</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="mt-6 btn transition-all duration-500 bg-purple-700 py-2 px-4 rounded text-white hover:bg-white hover:text-purple-700">
                <a href={resume} download="Resume">
                  DOWNLOAD CV
                </a>
              </button>
              <button className="btn transition-all duration-500 bg-white py-2 ml-5 rounded text-purple-700 hover:bg-purple-700 hover:text-white mt-6">
                HIRE ME
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
