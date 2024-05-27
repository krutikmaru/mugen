import React from "react";
import Testimonial from "./Testimonial";
import { firstRow, secondRow, thirdRow } from "../../../data/testimonials";

function Testimonials() {
  return (
    <div className="px-16 py-10 w-full">
      <div className="">
        <h1 className="text-3xl font-semibold pb-4 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          Testimonials
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        <div className="flex flex-col items-center justify-center flex-wrap space-y-5">
          {firstRow.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap space-y-5">
          {secondRow.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center flex-wrap space-y-5">
          {thirdRow.map((testimonial) => (
            <Testimonial testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
