import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/servicesStore.js";
import {motion} from "framer-motion"
const ProjectMain = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = data.projectStore.find((p) => p.id === projectId);
  console.log(project)
  if (!project) return <ProjectNotFound/>
  return (
    <div className="h-screen w-full p-10 pt-28 flex ">
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full relative bg-gradient-to-br from-[#FF0022] to-[#9333EA]">
        <Link to={`/projects`} className=" absolute -top-4 -right-3 border-2 rounded-full px-2 bg-black hover:bg-white hover:text-black transition-colors duration-300">x</Link>
        <div className="m-[1px] h-full">{project.name}</div>
      </motion.div>
    </div>
  );
};

const ProjectNotFound = () =>{
  return<>
  <div className="h-screen w-full flex justify-center items-center">Project Not Found</div>
  </>
}

export default ProjectMain;
