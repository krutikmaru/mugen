import React from "react";
import { termsAndConditions } from "../../data/terms-and-conditions";

function TermsAndConditions() {
  return (
    <div className="w-full min-h-screen flex flex-col items-start p-20 mt-8">
      <h1 className="text-5xl font-medium mb-8 text-[#bbbbbb]">
        Terms And Conditions
      </h1>

      {termsAndConditions.map((tnc) => {
        return (
          <div key={tnc.heading}>
            <h3 className="text-2xl font-medium text-[#bbbbbb] mb-1">
              {tnc.heading}
            </h3>
            {tnc.description && (
              <p className="font-light mb-8 text-sm ">{tnc.description}</p>
            )}
            {tnc.subSections &&
              tnc.subSections.map((subSection) => {
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

export default TermsAndConditions;
