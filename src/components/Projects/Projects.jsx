import {
  faArrowCircleLeft,
  faArrowCircleRight,
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
    <div className="w-full min-h-screen flex flex-col p-10 pt-28 ">
      <ProjectsOverview />
    </div>
  );
};

const ProjectsOverview = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const projects = data.projectStore;

  return (
    <>
      <DotSelector
        projects={projects}
        focusedIndex={focusedIndex}
        setFocusedIndex={setFocusedIndex}
      />
      <div
        className="w-full min-h-full flex items-center justify-start  overflow-visible relative transition-all duration-500 ease-in-out"
        style={{ left: -320 * focusedIndex }}
      >
        {projects.map((project, index) => (
          <OverviewProjectCard
            project={project}
            index={index}
            focusedIndex={focusedIndex}
          />
        ))}
      </div>
    </>
  );
};

const OverviewProjectCard = ({ project, index, focusedIndex }) => {
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
        className="h-[400px] min-w-[300px]  mr-5 rounded-md overflow-hidden mb-5 lg:mb-0 relative p-7 cursor-pointer "
        style={{
          // height: focusedIndex === index ? 420 : 400,
          // minWidth: focusedIndex === index ? 320 : 300,
          border:
            focusedIndex === index ? `4px solid #565496` : `4px solid #07061e`,
        }}
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
        <h1 className="absolute z-10 text-mugen-purple-dark text-8xl font-semibold flex flex-col items-start justify-start">
          {project.type}
          <span className="text-5xl ml-2">Design</span>
        </h1>
        <div className="absolute z-10 bottom-12 right-12 text-5xl text-mugen-purple-dark">
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

const DotSelector = ({ projects, focusedIndex, setFocusedIndex }) => {
  const moveRight = () => {
    if (focusedIndex === projects.length - 1) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const moveLeft = () => {
    if (focusedIndex === 0) {
      setFocusedIndex(projects.length - 1);
    } else {
      setFocusedIndex(focusedIndex - 1);
    }
  };
  return (
    <div className="h-10 w-full mb-5  flex justify-between items-center">
      <FontAwesomeIcon
        className="text-xl text-mugen-purple-white cursor-pointer"
        icon={faArrowCircleLeft}
        onClick={moveLeft}
      />
      <div className="flex-grow  mx-4 flex justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Dot
              index={index}
              key={index}
              focusedIndex={focusedIndex}
              setFocusedIndex={setFocusedIndex}
            />
          );
        })}
      </div>
      <FontAwesomeIcon
        className="text-xl text-mugen-purple-white cursor-pointer"
        icon={faArrowCircleRight}
        onClick={moveRight}
      />
    </div>
  );
};

const Dot = ({ index, focusedIndex, setFocusedIndex }) => {
  return (
    <div
      className="h-4 w-4 mr-5 cursor-pointer border-2 border-mugen-purple-white rounded-full transition-all duration-200 ease-in-out"
      style={{ background: index === focusedIndex ? "#565496" : "transparent" }}
      onClick={() => setFocusedIndex(index)}
    ></div>
  );
};

export default Projects;
