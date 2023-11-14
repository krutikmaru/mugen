import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex p-2 px-10 rounded-full border-[1px] border-[#131334]">
      <div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>Projects</span>
      </div>
      <div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>Blog</span>
      </div>
      <div className="cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>About</span>
      </div>
    </div>
  );
};

export default NavigationLinks;
