import React, { useState } from "react";

const Work = () => {
  return (
    <div className="min-h-[40vh] sm:min-h-[70vh] w-[100%] relative top-16 px-10 rounded-lg overflow-hidden">
      <div className="w-full h-32  absolute left-0 bottom-0 z-10 bg-gradient-to-t from-white dark:from-mugen-purple-dark to-transparent"></div>
      <img
        src={"/assets/images/test.png"}
        alt="Work Illustration"
        className="absolute top-0 left-0 w-full "
      />
    </div>
  );
};

export default Work;
