import React from "react";

const SectionHeader = ({ subHeading, heading }) => {
  return (
    <div>
      <p className="text-sm font-medium text-secondary bg-[#D3E9FB] inline-block px-2 py-[2px]">
        {subHeading}
      </p>
      <h2 className="text-4xl font-bold max-w-[600px] leading-normal mt-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;
