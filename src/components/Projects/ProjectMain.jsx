import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/servicesStore.js";
import { motion } from "framer-motion";
const ProjectMain = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = data.projectStore.find((p) => p.id === projectId);
  console.log(project);
  if (!project) return <ProjectNotFound />;
  return (
    <div className="h-screen w-full pt-20 flex ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full relative bg-red-400"
      ></motion.div>
    </div>
  );
};

const ProjectNotFound = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        Project Not Found
      </div>
    </>
  );
};

export default ProjectMain;
