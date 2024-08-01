import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/servicesStore.js";
import { motion } from "framer-motion";
import TimelineDifficulty from "./TimelineDifficulty.jsx";
import ProjectNotFound from "./ProjectNotFound.jsx";
import { SectorIntegrations } from "./PrefaceSectorIntegrations.jsx";

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
    <div className="w-full pt-20 flex">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-full relative flex flex-col lg:flex-row justify-start items-start"
      >
        <MetaDataSection project={project} variants={variants} />
        <DocumentSection projectContent={project.content} variants={variants} />
      </motion.div>
    </div>
  );
};

export default Project;

const DocumentSection = ({ projectContent, variants }) => {
  const finalContent = [];
  const Heading1 = ({ className, children }) => {
    return <h1 className={className}>{children}</h1>;
  };
  const Heading2 = ({ className, children }) => {
    return <h2 className={className}>{children}</h2>;
  };
  const Paragraph = ({ className, children }) => {
    return <p className={className}>{children}</p>;
  };
  const Li = ({ className, children }) => {
    return <li className={className}>{children}</li>;
  };
  for (let i = 0; i < projectContent.length; i++) {
    let element = projectContent[i];
    if (element.type === "h1") {
      finalContent.push(
        <Heading1 className={element.tailwindCss}>{element.data}</Heading1>
      );
    }
    if (element.type === "h2") {
      finalContent.push(
        <Heading2 className={element.tailwindCss}>{element.data}</Heading2>
      );
    }
    if (element.type === "p") {
      finalContent.push(
        <Paragraph className={element.tailwindCss}>{element.data}</Paragraph>
      );
    }
    if (element.type === "li") {
      finalContent.push(
        <Li className={element.tailwindCss}>{element.data}</Li>
      );
    }
  }
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="w-full lg:w-[70%] p-5"
    >
      {finalContent}
    </motion.div>
  );
};

const MetaDataSection = ({ project, variants }) => {
  return (
    <div className="w-full lg:w-[30%] flex flex-col p-5">
      <SectorIntegrations project={project} variants={variants} />
      <TimelineDifficulty project={project} variants={variants} />
    </div>
  );
};
