import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
const Layout = ({ children }) => {
  return (
    <div className="bg-[#040404] min-h-screen w-screen text-white">
      <TopNavigation />
      {children}
    </div>
  );
};

export default Layout;
