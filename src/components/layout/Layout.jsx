import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div
        className={`scrollclass bg-mugen-purple-dark min-h-screen w-screen font-lexend-deca text-white`}
      >
        <TopNavigation />
        <div className="h-screen w-full mt-20 flex justify-center items-start overflow-x-hidden bg-mugen-purple-dark">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
