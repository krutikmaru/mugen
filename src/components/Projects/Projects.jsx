import {
  faArrowCircleRight,
  faClock,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import data from "../../data/servicesStore";
import { useApplicationManager } from "../../contexts/ApplicationContext";

const Projects = () => {
  const { parentRef } = useApplicationManager();
  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.scrollTop = 0;
    }
  }, [parentRef]);
  return (
    <div className="w-full min-h-screen flex flex-col p-4 md:p-10 mt-24 ">
      <ProjectsOverview />
    </div>
  );
};

const ProjectsOverview = () => {
  const projects = data.projectStore;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center pb-4 relative transition-all duration-500 ease-in-out">
        {projects.map((project, index) => (
          <OverviewProjectCard project={project} index={index} />
        ))}
      </div>
    </>
  );
};

const OverviewProjectCard = ({ project, index }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [shouldAppear, setShouldAppear] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setShouldAppear(true);
      setTimeout(() => {
        // navigate("/projects/krutik");
        navigate(`/projects/${project.id}`);
      }, 500);
    }, 300);
  };

  return (
    <>
      <motion.div
        className="h-[500px] min-w-full md:min-w-[300px] flex flex-col rounded-md overflow-hidden lg:mb-0 relative p-7 cursor-pointer "
        animate={{
          scale: isClicked ? 100 : 1,
          zIndex: isClicked ? 10 : 1,
          rotate: isClicked ? "-30deg" : "0deg",
        }}
        transition={{ duration: 3.5 }}
        onClick={handleCardClick}
      >
        <img
          src="/assets/images/gradients/gradient_background_1.jpg"
          alt="background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="relative z-10 h-full ">
          <div>
            <FontAwesomeIcon
              className="text-mugen-purple-dark text-6xl"
              icon={project.icon}
            />
            <h1 className="text-mugen-purple-dark text-8xl mb-2 font-semibold flex flex-col items-start justify-start">
              {project.title}
            </h1>
            <p className="text-mugen-purple-dark mb-4">{project.overview}</p>
          </div>
          <div className="w-full text-mugen-purple-dark">
            <div className="w-full flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <FontAwesomeIcon icon={faIndustry} />
                <span>Industry</span>
              </div>
              <p className="font-semibold">{project.industry}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <FontAwesomeIcon icon={faClock} />
                <span>Duration</span>
              </div>
              <p className="font-semibold">{project.duration}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-right text-5xl text-mugen-purple-dark">
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: shouldAppear ? 1 : 0,
          display: shouldAppear ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-screen bg-mugen-purple-dark z-[1000]"
      ></motion.div>
    </>
  );
};

export default Projects;
