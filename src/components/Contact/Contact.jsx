import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full flex flex-col items-start px-5 py-20 sm:p-20 mt-8">
      <h1 className="text-5xl font-medium mb-2 text-black dark:text-[#bbbbbb]">
        Contact us
      </h1>
      <p className="font-light mb-8 text-black dark:text-white">
        Drop in your details and we'll get in touch.
      </p>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex-col sm:flex-row flex space-y-2 space-x-0 sm:space-y-0 sm:space-x-2">
          <div className="w-full flex flex-col space-y-1">
            <span className="text-neutral-600 dark:text-[#888888] text-sm">
              Name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-black dark:text-white bg-[#efefef] dark:bg-[#0e0c30] border-[1px] border-[#c8c8c8] p-4 rounded-md outline-none"
            />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <span className="text-neutral-600 dark:text-[#888888] text-sm">
              Email
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full text-black dark:text-white bg-[#efefef] dark:bg-[#0e0c30] border-[1px] border-[#c8c8c8] p-4 rounded-md outline-none"
            />
          </div>
        </div>
        <div className="w-full flex space-x-2 pb-4">
          <div className="w-full flex flex-col space-y-1">
            <span className="text-neutral-600 dark:text-[#888888] text-sm">
              Message
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-black dark:text-white bg-[#efefef] dark:bg-[#0e0c30] border-[1px] border-[#c8c8c8] p-4 rounded-md outline-none"
            />
          </div>
        </div>
        <button className="w-full mt-7 bg-gradient-to-r from-[#fc3f3f] to-[#b82ff7]   text-[#fff] font-medium rounded-md text-base py-3 px-4 flex justify-center items-center">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
