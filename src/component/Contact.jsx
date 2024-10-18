import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
    return (
      <div id="contact" className="p-4 md:p-8 lg:pl-28 lg:pr-28">
        <motion.div 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
         className="mb-5">
          <h3
            className="text-center text-white text-3xl md:text-4xl font-bold">
            GET IN TOUCH
          </h3>
          <h2 className="border flex text-center items-center justify-center mx-auto mt-3 border-purple-600 w-20 md:w-28"></h2>
          <h3 className="flex text-center mx-auto mt-7 w-full md:w-2/4 text-white">
            Feel free to contact me by submitting the form below, and I will get
            back to you as soon as possible.
          </h3>
        </motion.div>
  
        <div className="p-4 md:p-10 lg:p-20">
          <div className="hero-content">
            <div className="w-full md:w-[600px] lg:w-[800px] shadow-2xl mx-auto">
              <form className="card-body bg-purple-700">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input bg-gray-200 input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input bg-gray-200 input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    placeholder="Enter your message"
                    className="p-2 bg-gray-200 input-bordered"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-none bg-purple-950 text-white w-full">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
  