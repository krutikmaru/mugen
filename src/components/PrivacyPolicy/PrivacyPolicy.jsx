import React from "react";
import { privacyPolicy } from "../../data/privacy-policy";

function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start p-20 mt-8">
      <h1 className="text-5xl font-medium mb-8 text-[#bbbbbb]">
        Privacy Policy
      </h1>
      <h2 className="text-[#bbbbbb]">WEBSITE TERMS OF USE EFFECTIVE 2021</h2>
      <p className="font-light mb-8">Effective date: 2021-11-30</p>

      {privacyPolicy.map((policy) => {
        return (
          <div key={policy.heading}>
            <h3 className="text-2xl font-medium text-[#bbbbbb] mb-1">
              {policy.heading}
            </h3>
            {policy.description && (
              <p className="font-light mb-8 text-sm ">{policy.description}</p>
            )}
            {policy.subSections &&
              policy.subSections.map((subSection) => {
                return (
                  <div className="pl-10 mt-4">
                    <h4 className="text-xl font-medium text-[#d1d1d1] mb-1">
                      {subSection.subHeading}
                    </h4>
                    <p className="font-light mb-8 text-sm ">
                      {subSection.description}
                    </p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default PrivacyPolicy;
