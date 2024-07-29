import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Pricing() {
  const pricings = [
    {
      name: "Basic",
      monthly: 19,
      yearly: 199,
      isFeatured: false,
      features: [
        {
          name: "ERPNext Core Modules",
          description: "Finance, Sales, Purchase, Inventory",
        },
        {
          name: "User Accounts",
          description: "Up to 10",
        },
        {
          name: "Website Development",
          description: "Basic one-page website",
        },
        {
          name: "Training",
          description: "5 hours of online training",
        },
      ],
    },
    {
      name: "Professional",
      monthly: 29,
      yearly: 299,
      isFeatured: true,
      features: [
        {
          name: "ERPNext Core Modules",
          description: "Finance, Sales, Purchase, Inventory",
        },
        {
          name: "User Accounts",
          description: "Up to 10",
        },
        {
          name: "Website Development",
          description: "Basic one-page website",
        },
        {
          name: "Training",
          description: "5 hours of online training",
        },
      ],
    },
    {
      name: "Enterprise",
      monthly: 49,
      yearly: 499,
      isFeatured: false,
      features: [
        {
          name: "ERPNext Core Modules",
          description: "Finance, Sales, Purchase, Inventory",
        },
        {
          name: "User Accounts",
          description: "Up to 10",
        },
        {
          name: "Website Development",
          description: "Basic one-page website",
        },
        {
          name: "Training",
          description: "5 hours of online training",
        },
      ],
    },
  ];
  return (
    <div className=" w-full flex flex-col space-y-10 items-center px-5 sm:px-16 ">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          Pricing
        </h1>
        <p className="text-base text-[#b1b1b1] text-center">
          Choose the perfect plan to elevate your business. From essential tools
          for growth to comprehensive solutions for industry leaders, Mugen
          offers tailored ERP packages to meet your unique needs.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 ">
        {pricings.map((pricing) => {
          return <PlanBox plan={pricing} />;
        })}
      </div>
    </div>
  );
}

export default Pricing;

const PlanBox = ({ plan }) => {
  let tailwindClass = `h-auto mx-auto sm:min-h-[500px] p-5 max-w-[500px] lg:max-w-full rounded-md flex flex-col items-center ${
    plan.isFeatured
      ? "scale-100 bg-gradient-to-br from-[#a795ff] to-[#d056fc]"
      : "scale-100 lg:scale-95 bg-[#131334]"
  }`;
  return (
    <div className={tailwindClass}>
      <div className=" w-full h-full mb-4">
        <div className="flex flex-col items-center mb-5">
          <p className="text-[#d4d4d4] font-light">{plan.name}</p>
          <h2 className="text-[#fff] text-9xl font-medium mt-4 mb-1">
            ${plan.monthly}/mo
          </h2>
          <p className="text-[#d4d4d4] text-sm font-light">
            oe ${plan.yearly} yearly
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          {plan.features.map((feature) => {
            return (
              <div
                key={feature.name + feature.description}
                className="flex items-center justify-start space-x-5 text-sm"
              >
                <FontAwesomeIcon icon={faCheck} />
                <p className="font-light text-white">
                  <span className="font-normal ">{feature.name}:</span>{" "}
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={`${
          plan.isFeatured ? "bg-[#fff] text-black" : "bg-[#a855f7]"
        } w-full py-2 rounded-md`}
      >
        Get Started
      </button>
    </div>
  );
};
