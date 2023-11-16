import React, { useState } from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import toast from "react-hot-toast";

const MoreDetail = (props) => {
  const [email, setEmail] = useState(props.email);
  const [note, setNote] = useState("");
  const [selectedServices, setSelectedService] = useState([]);
  const [formData, setFormData] = useState({
    email: email,
    note: note,
    services: selectedServices,
  });

  const { deactivatePopupCenter } = useApplicationManager();

  const services = [
    "Server",
    "Website",
    "HCS",
    "Purchase",
    "Accounting",
    "Project Management",
  ];

  const handleCheckboxChange = (index) => {
    const updatedServices = [...selectedServices];

    const selectedIndex = updatedServices.indexOf(services[index]);

    if (selectedIndex === -1) {
      updatedServices.push(services[index]);
    } else {
      updatedServices.splice(selectedIndex, 1);
    }

    return setSelectedService(updatedServices);
  };

  const handleConnectWithUsClick = () => {
    const localFormData = {
      email: email,
      note: note,
      services: selectedServices,
    };
    setFormData(localFormData);
    deactivatePopupCenter();
    toast.success("We received you Mail", {
      style: {
        backgroundColor: "#080821",
        color: "#fff",
        border: "1px solid #131334",
      },
    });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-gradient-to-r from-red-500 to-purple-600 rounded-lg p-[1px] min-h-fit  w-[50rem] mx-20 md:mx-40"
    >
      <div
        className="text-white min-h-full  w-full relative bg-mugen-purple-dark rounded-lg md:p-10 p-4  flex flex-col  space-y-6"
        style={{ paddingBottom: 180 }}
      >
        <div>
          <label htmlFor="email" className="p-3 text-sm  text-gray-500">
            Email
          </label>
          <input
            className="mt-1 px-5 py-2 w-full text-base font-light rounded-lg outline-none bg-[#ffffff0d] backdrop-blur-sm border-[1px] border-gray-800"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          ></input>
        </div>
        <div>
          <label htmlFor="note" className="p-3 text-sm  text-gray-500">
            Note
          </label>
          <textarea
            className="mt-1 px-5 py-2 w-full min-h-28 max-h-32 text-base font-light rounded-lg outline-none bg-[#ffffff0d] backdrop-blur-sm border-[1px] border-gray-800"
            type="text"
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note......"
          ></textarea>
        </div>
        <div className=" text-sm text-gray-500">
          <label className="" htmlFor="services">
            What are you looking for?
          </label>
          <div className="mt-2 flex md:justify-between flex-col md:flex-row md:space-x-3 pt-1">
            {services.map((service, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="hidden"
                  id={`${index}`}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <div className="relative w-4 h-4 border-2 border-purple-500 rounded-md cursor-pointer">
                  {selectedServices.includes(service) && (
                    <div className="w-full h-full bg-purple-500 "></div>
                  )}
                </div>
                <span className="pl-2">{service}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex w-[90%] absolute bottom-10 md:justify-between md:flex-row flex-col flex-wrap md:space-y-0 space-y-3">
          <button
            onClick={handleConnectWithUsClick}
            className="px-5 py-2 md:w-48 w-30 mt-7 md:mt-0 bg-gradient-to-r text-base from-red-500 to-purple-600 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            Connect with us
          </button>
          <button
            onClick={deactivatePopupCenter}
            className="text-red-500 underline underline-offset-2 font-medium text-base hover:underline-offset-4 transition-all ease-in-out duration-100"
          >
            Cancel
          </button>
          {/* <button onClick={test}>check</button> */}
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
