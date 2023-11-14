import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
// import Hero from "../Hero/Hero";
const Layout = ({ children }) => {
  return (
    <div className="bg-[#040404] min-h-screen w-screen font-lexend-deca text-white">
      <TopNavigation />
      <div className="min-h-screen w-full mt-20 flex justify-center items-center bg-mugen-purple-dark">
        {children}
      </div>
    </div>
  );
};

export default Layout;
