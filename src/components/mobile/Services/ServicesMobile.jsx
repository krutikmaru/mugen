import React, { useState } from "react";
import data from "../../../data/servicesStore";
import OptionsHeader from "../../Services/OptionsHeader";
import MainContentMobile from "./MainContentMobile";

const ServicesMobile = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(data.optionsStore[0]);
  console.log(data.optionsStore);
  return (
    <div className=" w-full min-h-screen flex flex-col items-center p-14 px-5 ">
      <OptionsHeader
        options={data.optionsStore}
        onMouseEnter={(index) => {
          setFocusedIndex(index);
        }}
        onOptionClick={(index) => {
          setFocusedIndex(index);
        }}
      />
      <div
        className="w-full min-h-full flex  items-center justify-start overflow-visible relative transition-all duration-500 ease-in-out"
        style={{ left: -320 * focusedIndex }}
      >
        {data.optionsStore.map((option, index) => {
          return (
            <>
              <div
                onClick={() => {
                  setIsMainContentVisible(true);
                  setCurrentItem(data.optionsStore[index]);
                }}
                key={option.id}
                className="h-[400px] min-w-[300px] flex justify-center items-center flex-col mt-5 mr-5 rounded-md overflow-hidden mb-5 lg:mb-0 relative p-7 cursor-pointer border-2 border-mugen-purple-white"
              >
                <h1 className="absolute top-10 text-3xl text-gray-400 font-semibold left-1/2 -translate-x-1/2 ">
                  {option.title}
                </h1>
                <img src={option.previewIcon} alt="" className=" w-60 h-60" />
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
