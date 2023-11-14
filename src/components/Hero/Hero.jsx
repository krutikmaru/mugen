import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-[50vh] space-y-8 flex flex-col justify-center items-center">
        <span className="text-white text-5xl font-bold font-lexend-deca">
          Mugen Digital
        </span>
        <span className="text-2xl bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
          One Step Solution to all your Business Problems
        </span>
        <div className="text-xl flex justify-center space-x-5">
          <input
            className="px-5 py-2 rounded-lg bg-white bg-opacity-5"
            type="email"
            placeholder="Enter your email..."
          ></input>
          <button
            // style={hover}
            className="px-5 py-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg"
          >
            Connect with us
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
