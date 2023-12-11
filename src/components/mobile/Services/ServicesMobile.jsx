import React, { useState } from "react";
import data from "../../../data/servicesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContentMobile from "./MainContentMobile";

const ServicesMobile = () => {
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(data.optionsStore[0]);

  return (
    <div className=" w-full min-h-screen flex flex-col items-center p-14 px-5">
      <div className="flex justify-center items-center w-full mb-5 relative">
        <h1 className="text-7xl font-semibold stroked-text text-mugen-purple-white opacity-90">
          Services
        </h1>
        <h1 className="text-7xl font-semibold absolute left-1/2 -translate-x-1/2 -top-3 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          Services
        </h1>
      </div>
      <div className="w-full min-h-full flex  items-center justify-start overflow-x-scroll pb-10 px-10 relative transition-all duration-500 ease-in-out">
        {data.optionsStore.map((option, index) => {
          return (
            <>
              <div
                onClick={() => {
                  setIsMainContentVisible(true);
                  setCurrentItem(data.optionsStore[index]);
                }}
                key={option.id}
                className="h-[400px] min-w-[280px] hover:scale-105 transition ease-in-out duration-300 flex justify-center items-center flex-col mt-5 mr-5 rounded-md overflow-hidden mb-5 lg:mb-0 relative p-7 cursor-pointer border-2 border-mugen-purple-white hover:bg-purple-500 group"
              >
                <h1 className="absolute top-10 text-3xl text-gray-400 group-hover:text-white font-semibold left-1/2 -translate-x-1/2 ">
                  {option.title}
                </h1>
                {/* <img src={option.previewIcon} alt="" className=" w-60 h-60" /> */}
                <FontAwesomeIcon
                  icon={option.icon}
                  className="text-7xl text-fuchsia-400 group-hover:text-fuchsia-950"
                />
              </div>
            </>
          );
        })}
      </div>
      {isMainContentVisible && (
        <MainContentMobile
          mainContent={currentItem.mainContent}
          setIsMainContentVisible={setIsMainContentVisible}
        />
      )}
    </div>
  );
};

export default ServicesMobile;
