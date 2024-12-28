import about from "../assets/images/aboutme.jpg";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import resume from "../assets/images/Tahmida Jakia Fron End Developer (7).pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { div } from "framer-motion/client";

const AboutMe = () => {
  return (
    <div id="about" className="p-4 md:pl-28 md:pr-28">
      <div>
        <motion.h1
          variants={fadeIn("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-4xl text-white text-center font-bold"
        >
          Get to know me!
        </motion.h1>
        <h2 className="border flex text-center items-center justify-center mx-auto mt-5 mb-14 border-cyan-400 w-28"></h2>
        <div className="md:flex justify-center md:gap-10">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <img className="w-[500px]" src={about} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
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
            <div className="flex gap-3">
              <a
                href={resume}
                download="Resume"
                className="btn transition-all duration-500 bg-purple-700 py-2 rounded text-white hover:bg-white hover:text-purple-700 mt-6"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
