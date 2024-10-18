import { useState } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Footer from "./component/Footer";
import MySkills from "./component/MySkills";
import "aos/dist/aos.css"; // AOS styles
import AOS from "aos"; // AOS library

AOS.init()

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#1a1a29]">
        <div className="max-w-7xl mx-auto ">
          <Header></Header>
          <Home></Home>
          <MySkills></MySkills>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
