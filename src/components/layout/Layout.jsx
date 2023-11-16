import React from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import { Toaster } from "react-hot-toast";
import FullScreenPopupCenter from "../reusables/FullScreenPopupCenter";

const Layout = ({ children }) => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <FullScreenPopupCenter />
      <div
        className={`scrollclass relative bg-mugen-purple-dark min-h-screen w-screen font-lexend-deca text-white`}
      >
        <TopNavigation />
        <div className="min-h-screen w-full mt-20 relative flex flex-col justify-center items-start overflow-x-hidden bg-mugen-purple-dark">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
