import React from "react";
import { integrations } from "../../data/integrations";

const Integrations = () => {
  return (
    <div className=" w-full  flex flex-col items-center justify-center px-5 sm:px-16 pb-20 text-center">
      <h1 className="text-3xl font-semibold pb-4 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
        Integrations
      </h1>
      <p className="text-base text-neutral-600 dark:text-[#b1b1b1]">
        Connect seamlessly with storage solutions, productivity tools, messaging
        platforms. Build your own ecosystem with robust Rest-API secured using
        OAuth 2.0 and Multi Factor Authentication.
      </p>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-4 mx-auto text-black dark:text-white">
        {integrations.map((integration) => {
          return (
            <div className="flex flex-col justify-center items-center w-40 h-40 bg-[#efefef] dark:bg-[#131334]  p-4 rounded-md">
              <img
                src={integration.image}
                alt={integration.title}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h1 className="text-center text-xs text-[#777777]">
                {integration.title}
              </h1>
              <span className="px-4 py-1 text-xs rounded-full border-[1px] border-mugen-purple-white mt-1">
                {integration.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
