import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const MainContentMobile = ({ setIsMainContentVisible, mainContent }) => {
  const [currentItem, setCurrentItem] = useState(mainContent[0]);
  const parentRef = useRef();
  return (
    <div
      ref={parentRef}
      className="fixed z-[1000000] scroll-smooth top-0 left-0 w-screen h-screen overflow-y-scroll scrollbar-hidden "
    >
      <div className="w-screen min-h-screen  bg-mugen-purple-dark flex justify-between flex-col items-center p-10">
        <FontAwesomeIcon
          icon={faX}
          className="absolute top-5 right-5 cursor-pointer z-[1000]"
          onClick={() => {
            setIsMainContentVisible(false);
            console.log(false);
          }}
        />
        <div className="w-full ">
          {/* Title ⬇️ */}
          <div>
            <h1
              className="bg-gradient-to-r from-[#FF0022] to-purple-600 text-transparent 
              bg-clip-text font-semibold text-3xl"
            >
              {currentItem.title}
            </h1>
          </div>

          {/* Modules ⬇️ */}
          <div className="mt-2 text-gray-300 ">
            <span>Works well with modules like</span>
            <div className="flex flex-wrap mt-2">
              {currentItem.modules.map((module) => {
                return (
                  <span className="px-4 py-1 text-xs rounded-full mr-2 mb-2 border-[1px] border-mugen-purple-white">
                    {module}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Details ⬇️ */}
          <div className="mt-2 flex flex-col">
            {currentItem.details.map((detail) => {
              return (
                <div className="w-full mb-2 min-h-[150px] border-[1px] rounded-md border-mugen-purple-white flex flex-col sm:flex-row items-center justify-evenly p-4">
                  {/* icon */}
                  <div className=" w-[20%] mb-6 sm:mb-0  flex justify-center items-center">
                    <div className="w-16 h-16  relative flex justify-cemter items-center">
                      <img
                        src={detail.icon}
                        alt=""
                        className=" w-full h-auto opacity-30"
                      />
                    </div>
                  </div>
                  {/* description */}
                  <div className="w-[75%] flex flex-col justify-center">
                    <h1 className="text-lg">{detail.title}</h1>
                    <p className="text-sm text-gray-500">
                      {detail.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selection boxes ⬇️ */}
          <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {mainContent.map((object) => {
              return (
                <div
                  onClick={() => {
                    setCurrentItem(object);
                    if (parentRef.current) {
                      parentRef.current.scrollTop = 0;
                    }
                  }}
                  className="w-full h-full mb-5 p-5 bg-[#9142ff] rounded-md overflow-hidden flex flex-col justify-center items-center cursor-pointer m-auto"
                >
                  <div className="w-12 h-12 ">
                    <img src={object.icon} alt="" className=" w-full h-auto" />
                  </div>
                  <h1 className="text-xs text-center">{object.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentMobile;
