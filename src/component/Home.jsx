import React from "react";
import img2 from "../assets/img2.png";


const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-3xl mt-10">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">
              Tahmida Jakia
            </h1>
            <h1 className="text-2xl md:text-3xl font-semibold mb- md:mb-8">
              Junior Web Developer
            </h1>
            <p className="md:w-96">
              Based in Sylhet, Bangladesh. Having a high level of experience in
              web development knowledge and building web and mobile applications
              with JavaScript, React, Node.js, and some other cool libraries and
              frameworks.
            </p>
            <div className="mt-5">
              <button className="btn transition-all duration-500 bg-purple-700 py-2 px-4 rounded text-white hover:bg-white hover:text-purple-700">
                About me
              </button>
              <button className="btn transition-all duration-500 bg-white py-2 ml-5 rounded text-purple-700 hover:bg-purple-700 hover:text-white">
                Projects
              </button>
            </div>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative">
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;
