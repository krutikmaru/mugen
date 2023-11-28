import React, { useState } from "react";
import OptionsHeader from "./OptionsHeader";
import Options from "./Options";
import data from "../../data/servicesStore";

// console.log("option store",data.optionStore)

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [onClickIndex, setOnClickIndex] = useState(null);

  const propsData = {
    options: data.optionsStore,
    handleMouseEnter: (index) => {
      setActiveIndex(index);
      if (index !== activeIndex) {
        setOnClickIndex(null);
      }
    },

    //👉 Setting Active Index of the click
    handleOptionOnClick: (index) => {
      if (onClickIndex === index) {
        setOnClickIndex(null);
      } else {
        setOnClickIndex(index);
      }
    },
  };


  //👉 Margin value to be changed on hover
  const marginChange = [
    "ml-[65rem]",
    "ml-[33rem]",
    "ml-[0rem]",
    "-ml-[33rem]",
    "-ml-[65rem]",
  ];

  //👉 Styling Tansition
  const marginTransition = {
    transition: `margin 300ms ease-in-out`,
  };

  return (
    <div className=" w-full min-h-fit flex flex-col items-center p-14">
      <OptionsHeader
        options={propsData.options}
        onMouseEnter={propsData.handleMouseEnter}
        onOptionClick={propsData.handleOptionOnClick}
      />
      <div className="w-full flex justify-center">
        <div
          className={`flex pt-5 w-fit h-fit space-x-5 ${marginChange[activeIndex]}`}
          style={marginTransition}
        >
          {propsData.options.map((option, index) => {
            return (
              <Options
                key={index}
                option={option}
                onClickIndex={onClickIndex}
                activeIndex={activeIndex}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
