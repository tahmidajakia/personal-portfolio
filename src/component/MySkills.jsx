import meter1 from "../assets/images/html.png";
import meter2 from "../assets/images/css.png";
import meter3 from "../assets/images/js.png";
import meter4 from "../assets/images/react.png";
import meter5 from "../assets/images/tailwind.png";
import meter6 from "../assets/images/nodejs.png";
import meter7 from "../assets/images/expressjs.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";

export const MySkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      className="bg-gradient-to-r from-[#121212] via-[#281625] to-[#2f2554] relative"
      id="skills"
    >
      <div className="container mx-auto px-4 pb-14">
        <div className="text-center">
          <div className="skill-bx bg-gray-900 rounded-2xl py-16 px-12">
            <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item text-center">
                <img className="w-40 mx-auto mb-4" src={meter1} alt="HTML" />
                <h5 className="text-xl font-semibold text-white">HTML</h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-44 mx-auto mb-4 mt-1"
                  src={meter2}
                  alt="CSS"
                />
                <h5 className="text-xl font-semibold text-white">CSS</h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-16 mt-5 mx-auto mb-4"
                  src={meter3}
                  alt="JavaScript"
                />
                <h5 className="text-xl font-semibold text-white">JavaScript</h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-16 mt-5 mx-auto mb-4"
                  src={meter4}
                  alt="React JS"
                />
                <h5 className="text-xl font-semibold text-white">React JS</h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-16 mt-11 mx-auto mb-4"
                  src={meter5}
                  alt="Tailwind CSS"
                />
                <h5 className="text-xl font-semibold text-white">
                  Tailwind CSS
                </h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-16 mt-7 mx-auto mb-4"
                  src={meter6}
                  alt="Node JS"
                />
                <h5 className="text-xl font-semibold text-white">Node JS</h5>
              </div>
              <div className="item text-center">
                <img
                  className="w-28 mt-10 mx-auto mb-4"
                  src={meter7}
                  alt="Express JS"
                />
                <h5 className="text-xl font-semibold text-white">Express JS</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      {/* Background Image */}
      <img
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full sm:w-2/5 z-[-1]"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default MySkills;
