import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import data from "../../data/servicesStore";

const Project2 = () => {
  return (
    <div className="w-full min-h-screen flex p-10 pt-28 relative ">
      <ProjectsOverview />
    </div>
  );
};

const ProjectsOverview = () => {
  const projects = data.projectStore
  return (
    <div className="w-full min-h-full grid grid-cols-1 lg:grid-cols-3 items-center">
      {projects.map((project)=>(
        <OverviewProjectCard project={project}/>
      ))}
    </div>
  );
};

const OverviewProjectCard = ({project}) => {
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
        className="h-[500px] w-[90%] mx-auto rounded-md overflow-hidden mb-5 lg:mb-0 relative p-7 cursor-pointer"
        animate={{
          scale: isClicked ? 100 : 1,
          zIndex: isClicked ? 10 : 1,
          rotate: isClicked ? "-30deg" : "0deg",
          // opacity: shouldDisappear ? 0 : 1,
        }}
        transition={{ duration: 3.5 }}
        onClick={handleCardClick}
      >
        <img
          src="/assets/images/gradients/gradient_background_1.jpg"
          alt="background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <h1 className="absolute z-10 text-mugen-purple-dark text-9xl font-semibold flex flex-col items-start justify-start">
          {project.type}
          <span className="text-5xl ml-2">Design</span>
        </h1>
        <div className="absolute z-10 bottom-12 right-12 text-6xl text-mugen-purple-dark">
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

export default Project2;
