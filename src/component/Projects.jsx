import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { div } from "framer-motion/client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div id="projects" className="p-4 md:p-10 lg:p-28">
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}>
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold mb-9 mt-14">
          My Recent Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-10 mb-14">
          {projects.map((project) => (
            <ProjectsCard key={project._id} project={project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
