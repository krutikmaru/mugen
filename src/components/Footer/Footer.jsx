import React from "react";
import { Link } from "react-router-dom";
// import {
//     faEnvelope,
//     faIndustry,
//     faLightbulb,
//     faStore,
//     faWarehouse,
//     faFace
//   } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mr-10 min-w-full">
      <div className="text-white p-5 border-t-2 border-[#131334] flex sm:flex-row sm:space-y-0 sm:space-x-5 flex-col space-y-5 justify-between font-extralight">
        <span className="text-purple-400 font-semibold "> MUGEN </span>
        <div className="flex space-x-10 font-extralight pr-24">
          <div className="flex flex-col space-y-2 ">
            <span className="font-normal">Resources</span>
            <span className="text-neutral-400 font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer">
              Contact us
            </span>
            <span className="text-neutral-400 font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer">
              About us
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-normal">Legal</span>
            <Link
              to="/privacy-policy"
              className="text-neutral-400 font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-neutral-400 font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white p-3 border-t-2 border-[#131334] min-w-full flex justify-between font-thin text-xs">
        <span>&copy; 2022 Mugen&trade;. All Rights Reserved.</span>
        <div className="pr-14">
          <span>F</span>
          <span>T</span>
          <span>W</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
