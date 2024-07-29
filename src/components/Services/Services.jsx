import React, { useState } from "react";
import data from "../../data/servicesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const [currentItem, setCurrentItem] = useState(data.optionsStore[0]);
  const [currentSubItem, setCurrentSubItem] = useState(
    data.optionsStore[0].mainContent[0]
  );

  return (
    <div className=" w-full min-h-screen flex flex-col items-center px-4 md:px-16 py-20">
      <div className="flex flex-col justify-start items-center w-full mb-5">
        <h1 className="text-3xl font-semibold pb-10 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          A Modern Business Management System
        </h1>
        <p className="text-base text-[#b1b1b1]">
          A modern business needs a safe, reliable, easy and fast solution to
          better manage their processes and resources. Find out how our ERP
          solution made with your business in mind can help your business.
        </p>
      </div>
      <div className="w-full flex flex-col mt-5">
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-scroll scrollbar-hidden">
          {data.optionsStore.map((option) => {
            if (currentItem.title === option.title) {
              return (
                <div className="cursor-pointer border-[1px] border-purple-500 bg-purple-500 rounded-md py-3 px-5  min-w-[160px] flex mr-1 sm:mr-4 items-center justify-center">
                  <FontAwesomeIcon icon={option.icon} />
                  <span className="ml-2">{option.title}</span>
                </div>
              );
            }
            return (
              <div
                onClick={() => {
                  setCurrentItem(option);
                  setCurrentSubItem(option.mainContent[0]);
                }}
                className="cursor-pointer border-[1px] border-purple-500 rounded-md py-3 px-5  min-w-[160px] flex mr-4 items-center justify-center"
              >
                <FontAwesomeIcon icon={option.icon} />
                <span className="ml-2">{option.title}</span>
              </div>
            );
          })}
        </div>
        <div className="w-full mt-5 flex flex-col xl:flex-row items-center xl:items-start justify-center">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 xl:mr-4 mb-4 xl:mb-0">
            {currentItem.mainContent.map((content) => {
              return (
                <div
                  className="flex cursor-pointer flex-col border-[2px] border-[#6e37a53b] border-dashed p-2 rounded-md w-28 h-28 items-center justify-center"
                  style={{
                    background:
                      content.title === currentSubItem.title
                        ? "#a855f7"
                        : "transparent",
                    border:
                      content.title === currentSubItem.title
                        ? "2px solid #a855f7"
                        : "2px dashed #6e37a53b",
                  }}
                  onClick={() => setCurrentSubItem(content)}
                >
                  <img
                    className="w-5 h-5"
                    src={content.icon}
                    alt={content.title}
                  />
                  <span className="text-center text-[10px]  mt-2">
                    {content.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-full xl:w-1/2 items-start justify-start  p-5 xl:px-10 border-[1px] rounded-md border-[#6e37a53b]">
            <h1 className="text-3xl font-medium bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text mb-4">
              {currentSubItem.title}
            </h1>
            <div className="flex flex-wrap">
              <h1 className="mr-2">Works well with</h1>
              {currentSubItem.modules.map((module) => {
                return (
                  <div className="px-4 py-1 text-xs rounded-full mr-2 mb-2 border-[1px] border-mugen-purple-white">
                    {module}
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-[#b1b1b1]">{currentSubItem.overview}</p>
            <div className="flex flex-col mt-4 mx-auto xl:mx-0">
              {currentSubItem.details.map((detail) => {
                return (
                  <div className="flex items-center justify-start mb-5 pb-3 border-b-[1px] border-[#6e37a53b]">
                    <img
                      src={detail.icon}
                      alt={detail.title}
                      className="w-5 h-5 mr-5"
                    />
                    <div>
                      <h1 className="text-purple-400 mb-1">{detail.title}</h1>
                      <p className="text-xs text-[#b1b1b1]">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
