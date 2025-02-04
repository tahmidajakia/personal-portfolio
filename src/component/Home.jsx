import { useState, useEffect } from "react";
import headerImg from "../assets/images/header-img.svg";
import bannerBg from "../assets/images/banner-bg.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner bg-cover bg-center bg-no-repeat bg-gray-900 text-white py-32 sm:py-24 md:py-32"
      style={{ backgroundImage: `url(${bannerBg})` }}
      id="home"
    >
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-44">
          <div className="w-full md:w-1/2">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="ml-14 pr-7">
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* Tagline with Gradient, Border, Padding */}
                    <span className="inline-block text-xl font-bold text-gray-200 bg-gradient-to-r from-[#632a5f] to-[#39236c] bg-opacity-50 border border-white/50 px-4 py-2 mb-4 tracking-tight">
                      Welcome to my Portfolio
                    </span>

                    <h1 className="text-4xl md:text-6xl font-semibold mt-2">
                      {`Hi! I'm Tahmida Jakia`}{" "}
                      <span
                        className="txt-rotate inline-block font-bold"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Developer", "Web Developer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                      Based in Sylhet, Bangladesh. Having a high level of
                      experience in web development knowledge and building web
                      and mobile applications with JavaScript, React, Node.js,
                      and some other cool libraries and frameworks.
                    </p>

                    <button
                      onClick={() => console.log("connect")}
                      className="mt-6 inline-flex items-center px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-gray-900 transition-all"
                    >
                      Let’s Connect{" "}
                      <ArrowRightCircle className="ml-2" size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="w-full max-w-[500px] h-auto rounded-lg shadow-lg mx-auto"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
