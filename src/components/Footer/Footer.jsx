import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mr-10 min-w-full">
      <div className="text-white p-5 border-t-2 border-[#c8c8c8] dark:border-[#131334] flex sm:flex-row sm:space-y-0 sm:space-x-5 flex-col space-y-5 justify-between font-extralight">
        <span className="text-purple-400 font-semibold "> MUGEN </span>
        <div className="flex space-x-10 font-extralight pr-24 text-neutral-600 dark:text-neutral-400">
          <div className="flex flex-col space-y-2">
            <span className="font-normal text-black dark:text-white">
              Resources
            </span>
            <Link
              to="/contact"
              className="font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer"
            >
              Contact Us
            </Link>
            <span className="font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer">
              About us
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-normal text-black dark:text-white">
              Legal
            </span>
            <Link
              to="/privacy-policy"
              className="font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="font-normal transition-all duration-300 ease-in-out hover:text-[#a855f7] cursor-pointer"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 border-t-2 border-[#c8c8c8] text-black dark:text-white dark:border-[#131334] min-w-full flex justify-between text-sm">
        <span>
          &copy; {new Date().getFullYear()} Mugen&trade;. All Rights Reserved.
        </span>
        <div className="pr-14">
          <a href="https://www.linkedin.com/in/krutik-maru/">
            <svg
              className="fill-[#828282] w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
