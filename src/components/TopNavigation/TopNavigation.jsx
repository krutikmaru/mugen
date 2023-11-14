import React from "react";
import NavigationLogo from "./NavigationLogo";
import NavigationLinks from "./NavigationLinks";

const TopNavigation = () => {
  return (
    <div className="w-full h-20 bg-mugen-purple-navigation fixed top-0 left-0 border-b-[1px] border-[#131334] z-[1000]">
      <div className="w-full h-full flex items-center justify-center px-10 relative">
        <div className="absolute left-10">
          <NavigationLogo />
        </div>
        <div>
          <NavigationLinks />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
