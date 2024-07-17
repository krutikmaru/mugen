import React from "react";

function Testimonial({ testimonial }) {
  return (
    <div className="max-w-[380px] h-auto bg-[#0F0E29] border-[1px] border-[#372447] rounded-md p-5 flex flex-col justify-center items-start space-y-2 relative overflow-hidden group">
      <div className="opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 absolute w-32 h-32 left-1/2 top-0 -translate-x-1/2 bg-purple-500/70 blur-3xl"></div>

      <Client name={testimonial.clientName} image={testimonial.clientImage} />
      <Comment comment={testimonial.comment} />
    </div>
  );
}

export default Testimonial;

function Client({ name, image }) {
  return (
    <div className="flex items-center space-x-4 z-[10]">
      <div className="w-10 h-10 rounded-full overflow-hidden relative border-[1px] border-[#B352FF]">
        <img
          src={image}
          alt={"Legend"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p>{name}</p>
    </div>
  );
}
function Comment({ comment }) {
  return (
    <div>
      <p className="text-[#B0B0B0] text-xs font-light relative z-[10]">
        {comment}
      </p>
    </div>
  );
}
