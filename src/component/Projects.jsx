import { useEffect, useState } from "react";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectsCard from "./ProjectsCard";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState(1); // Track the active tab

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  // Filter projects based on the active tab
  const getProjectsForTab = (tab) => {
    const itemsPerTab = 3; // Number of projects per tab
    const startIndex = (tab - 1) * itemsPerTab;
    return projects.slice(startIndex, startIndex + itemsPerTab);
  };

  return (
    <div id="projects" className="bg-black md:p-10 lg:p-28 relative">
      <div>
        <h1 className="text-center pt-9 text-white text-3xl md:text-5xl font-bold mb-11">
          Projects
        </h1>

        {/* Tabs */}
        <div className="text-center mb-20">
          <div className="inline-flex">
            {/* Tab Buttons with extra padding */}
            <button
              onClick={() => setActiveTab(1)}
              className={`px-10 sm:px-20 md:px-32 py-5 text-white text-lg font-bold ${
                activeTab === 1
                  ? "bg-gradient-to-r from-[#94358c] to-[#5e31b0]"
                  : "bg-gray-700"
              } rounded-tl-full rounded-bl-full border border-white transition duration-300`}
            >
              Tab 1
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`px-10 sm:px-20 md:px-32 py-5 text-white text-lg font-bold ${
                activeTab === 2
                  ? "bg-gradient-to-r from-[#94358c] to-[#5e31b0]"
                  : "bg-gray-700"
              } transition duration-300 border border-white`}
            >
              Tab 2
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`px-10 sm:px-20 md:px-32 py-5 text-white text-lg font-bold ${
                activeTab === 3
                  ? "bg-gradient-to-r from-[#94358c] to-[#5e31b0]"
                  : "bg-gray-700"
              } rounded-tr-full border border-white rounded-br-full transition duration-300`}
            >
              Tab 3
            </button>
          </div>
        </div>

        {/* Projects Grid with Padding for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-10 mb-14">
          {getProjectsForTab(activeTab).map((project) => (
            <div className="p-4">
              {/* Add padding around each card */}
              <ProjectsCard key={project._id} project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <img
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full sm:w-2/5 z-[-1]"
        src={colorSharp2}
        alt="Background"
      />
    </div>
  );
};

export default Projects;
