import { useState } from "react";
import contactImg from "../assets/images/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-[#a23682] via-[#843497] to-[#5830b3] py-20"
      id="connect"
    >
      <div className="container mx-auto px-6 lg:px-32">
        <div className="flex flex-wrap items-center justify-center">
          {" "}
          {/* Centering the content */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Image - Centered on all screen sizes */}
            <img
              className="w-full md:w-3/4 lg:w-2/3 animate__animated animate__zoomIn"
              src={contactImg}
              alt="Contact Us"
            />
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* Form - Centered on all screen sizes */}
            <div className="w-full max-w-lg">
              <h2 className="text-4xl font-bold text-white mb-6 text-center">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full sm:w-1/2 px-3">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      className="w-full mt-5 bg-opacity-10 bg-white text-white border border-white rounded-lg py-3 px-6 placeholder-white focus:outline-none focus:bg-white focus:text-black focus:placeholder-gray-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 px-3">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="w-full mt-5 bg-opacity-10 bg-white text-white border border-white rounded-lg py-3 px-6 placeholder-white focus:outline-none focus:bg-white focus:text-black focus:placeholder-gray-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 px-3">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="w-full mt-5 bg-opacity-10 bg-white text-white border border-white rounded-lg py-3 px-6 placeholder-white focus:outline-none focus:bg-white focus:text-black focus:placeholder-gray-500"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 px-3">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="w-full mt-5 bg-opacity-10 bg-white text-white border border-white rounded-lg py-3 px-6 placeholder-white focus:outline-none focus:bg-white focus:text-black focus:placeholder-gray-500"
                    />
                  </div>
                  <div className="w-full px-3">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      className="w-full mt-5 bg-opacity-10 bg-white text-white border border-white rounded-lg py-3 px-6 placeholder-white focus:outline-none focus:bg-white focus:text-black focus:placeholder-gray-500"
                    ></textarea>
                  </div>
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="w-full mt-5 py-3 px-6 bg-white text-black font-bold text-lg rounded-lg hover:bg-black hover:text-white transition duration-300"
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
                {status.message && (
                  <div className="w-full mt-4">
                    <p
                      className={
                        status.success ? "text-green-500" : "text-red-500"
                      }
                    >
                      {status.message}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
