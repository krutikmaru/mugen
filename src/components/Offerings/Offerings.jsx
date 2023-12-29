import {
  faArrowRight,
  faBrain,
  faCloud,
  faLaptop,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Offerings = () => {
  const offerings = [
    {
      title: "IT Consulting",
      icon: faPeopleArrows,
      description: "Get the best personalized IT consulting from Mugen",
    },
    {
      title: "Business Success Software",
      icon: faLaptop,
      description: "Get the best personalized IT consulting from Mugen",
    },
    {
      title: "Cloud & Dev Ops",
      icon: faCloud,
      description: "Get the best personalized IT consulting from Mugen",
    },
    {
      title: "AI and ML",
      icon: faBrain,
      description: "Get the best personalized IT consulting from Mugen",
    },
  ];
  return (
    <div className=" w-full min-h-screen flex flex-col items-center px-16 pb-20">
      <div className="flex flex-col justify-start items-start w-full mb-5">
        <h1 className="text-3xl font-semibold pb-4 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          What we Offer
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
          {offerings.map((offering) => {
            return (
              <div className="w-[300px] sm:w-[400px] lg:w-[320px] min-h-[280px] p-5 px-7 bg-[#131334] border-2 border-[#1f1f49] rounded-md flex flex-col">
                <div className="w-20 h-20 bg-[#1f1f49] rounded-full flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={offering.icon}
                    className="text-2xl text-[#6a6ad3]"
                  />
                </div>
                <h1 className="mt-4 text-xl text-[#b4b4ff]">
                  {offering.title}
                </h1>
                <p className="text-sm mt-2 text-[#b1b1b1]">
                  {offering.description}
                </p>
                <button className="w-full mt-7 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-[#131334] font-semibold rounded-md text-base py-2 px-4">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
