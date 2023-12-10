import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/servicesStore.js";
import { motion } from "framer-motion";
import PrefaceSectorIntegrations from "./PrefaceSectorIntegrations.jsx";
import TimelineDifficulty from "./TimelineDifficulty.jsx";
import StackThirdParty from "./StackThirdParty.jsx";
import ProjectNotFound from "./ProjectNotFound.jsx";

const Project = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = data.projectStore.find((p) => p.id === projectId);
  console.log(project);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  if (!project) return <ProjectNotFound />;

  return (
    <div className="h-screen w-full pt-20 flex">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-full relative flex flex-col lg:flex-row justify-start lg:justify-center items-center"
      >
        <PrefaceSectorIntegrations project={project} variants={variants} />
        <TimelineDifficulty project={project} variants={variants} />
        <StackThirdParty project={project} variants={variants} />
      </motion.div>
    </div>
  );
};

export default Project;
