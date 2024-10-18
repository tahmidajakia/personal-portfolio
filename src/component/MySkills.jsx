import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import mongodb from "../assets/images/mongodb.png";
import nodejs from "../assets/images/nodejs.png";
import expressjs from "../assets/images/expressjs.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { div } from "framer-motion/client";

const MySkills = () => {
  return (
    <div id="skill"
    className="p-4 md:pl-28 md:pr-28">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
  
      >
        <h1 className="text-center text-white text-4xl font-bold ">
          My Skills
        </h1>
        <h2 className="border mb-14 flex text-center items-center justify-center mx-auto mt-3 border-cyan-400 w-28"></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-24">
          <div className="shadow-2xl border border-purple-700 hover:bg-white mb-7">
            <img className="w-[300px] pt-5" src={html} alt="" />
          </div>
          <div className="shadow-2xl mb-7 border border-purple-700 hover:bg-white">
            <img
              className="w-[400px] flex justify-center pt-7"
              src={css}
              alt=""
            />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[100px] h-[100px]" src={js} alt="" />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[100px] h-[100px] " src={react} alt="" />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[120px]" src={tailwind} alt="" />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[80px]" src={mongodb} alt="" />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[100px]" src={nodejs} alt="" />
          </div>
          <div className="shadow-2xl mb-7 flex justify-center p-10 border border-purple-700 hover:bg-white">
            <img className="w-[200px]" src={expressjs} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
