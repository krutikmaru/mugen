// import React, { useEffect, useState } from "react";
// // import "./Projects.css"

// const Projects = () => {
//   const [active, setActive] = useState(null);

//   const handleOnClickExpand = (index) => {
//     setActive(index);

//   };

//   const handleOnClickBack = () => {
//     setActive(null)
//   };

//   const projects = ["Project 1", "Project 2", "Project 3"];

//   return (
//     <div className="w-full h-screen  p-10 pt-24">
//       <div className="flex overflow-hidden border-2 w-full h-full">
//         <div className={`animate-marquee marqueeGroup w-full flex justify-center space-x-16  h-full border-2 relative border-red-500`}>
//           {projects.map((project, index) => (
//             <div
//               key={index}

//               // Test
//               className={`border-2  border-blue-500 w-[30%] transition-colors duration-500 ease-in-out ${active === index ? "bg-white":"bg-black"}`}
//               onClick={()=>handleOnClickExpand(index)}
//             >
//               <div onClick={() => handleOnClickBack} >{project}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Projects;




import React, { useEffect, useState } from "react";
import "animate.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import data from "../../data/servicesStore.js";

const Projects = () => {
  console.log(data)
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleOnClick = (index, active, isButton) => {
    if (active == null || isButton == true)
      setActive(active === index ? null : index);

    // if (active !== index){
    //   navigate(`/projects/${projects[index].type.toLowerCase()}`);
    // }
  };

const projects = data.projectStore

  return (
    <div className={`w-full h-screen flex p-10 pt-28 relative border-red-500 `}>
      <div className="flex justify-between space-x-16 h-full w-full relative border-red-500">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`border-2 bg-mugen-purple-dark  border-blue-500  w-[30%] relative cursor-pointer`}
            onClick={() => handleOnClick(index, active, false)}
          >
              <Link to={`/projects/${project.id}`}>
                <ProjectPreview project={project} active={active} />
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectPreview = ({ project, active }) => {
  return (
    <div className="p-2 h-full w-full">
      <div
        className={`border-red-500 border-2 w-fit p-1 rounded-t-lg absolute left-[50%] -translate-x-[50%] -top-8 bg-mugen-purple-dark text-slate-300`}
      >
        {project.type}
      </div>
      <div className="h-full">{project.description}</div>
    </div>
  );
};

export default Projects;

const RedirectDiv = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {children}
    </Link>
  );
};




  // ${
  //   active === index
  //     ? "absolute top-0 right-0 w-full h-full"
  //     : "w-[30%] relative"
  // }
  // ${active !== index && active !== null ? "hidden" : " visible"}
{
  /* {active === index ? (
                  <>
                    <button
                      className="px-2 border-2 rounded-lg hover:bg-white bg-mugen-purple-dark hover:text-black transition-colors duration-300 ease-in-out absolute -top-4 -right-3"
                      onClick={() => handleOnClick(index, active, true)}
                    >
                      x
                    </button>
                    <Routes>
                      <Route
                        path={`/projects/${project.type.toLowerCase()}`}
                        element={<ProjectMain project={project} />}
                      />
                    </Routes>
                    <ProjectMain project={project} />
                  </> */
}
{
  /*  ) : (
                   <ProjectPreview project={project} active={active} />
                 )} */
}

// const Carousel = () => {
//   const initalState = [
//     { idx: 1, pos: 1, text: "1", active: true },
//     { idx: 2, pos: 2, text: "2", active: true },
//     { idx: 3, pos: 3, text: "3", active: true },
//     { idx: 4, pos: 4, text: "4", active: false },
//   ];

//   const [cards, setCards] = useState(initalState);

//   const handleLeftClick = () => {
//     const prevState = [...cards];
//     const nextCardIdx = prevState
//       .filter((ft) => ft.active === true)
//       .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

//     // reset
//     prevState.find((f) => f.active === false).active = true;
//     // update
//     prevState.find((f) => f.idx === nextCardIdx).active = false;
//     // maximize pos
//     prevState.find((f) => f.idx === nextCardIdx).pos =
//       Math.max.apply(
//         null,
//         prevState.map(function (o) {
//           return o.pos;
//         })
//       ) + 1;

//     // update state
//     setCards(prevState);
//   };

//   return (
//     <>
//       <div className=" text-3xl" onClick={handleLeftClick}>
//         {"<"}
//       </div>
//     </>
//   );
// };

// className={`group border-2 w-[30%] h-full flex-shrink-0
// border-blue-500 transition-all duration-300 ease-in-out bg-mugen-purple-dark
// ${active === index ? "absolute w-full":""}`}

// Main
// className={`group ${active === index ?
//   "border-2 border-blue-500 w-full flex"
//   : "border-2 border-blue-500"}`}

{
  /* <div className="flex justify-center items-center gap-2 h-full">
        <Carousel />
      </div> */
}
