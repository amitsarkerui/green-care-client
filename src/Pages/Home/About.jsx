import React from "react";
import SectionHeader from "../../Components/SectionHeader";
import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <div className=" container mx-auto grid grid-cols-1 gap-4 items-center md:grid-cols-2 my-24">
      <img src="https://i.ibb.co/YjrFGvS/image.png" alt="doctor with patient" />
      <div>
        <SectionHeader
          subHeading={"HEALTH & CARE"}
          heading={"The Best Medics, Doctors & Physicians for A Healing Touch"}
        ></SectionHeader>
        <p className="font-medium text-gray-500 max-w-[650px] my-5">
          At Green Care Medical Center, we are dedicated to providing
          outstanding medical care in a warm and welcoming environment. Our
          state-of-the-art facility combines advanced technology with
          compassionate healthcare professionals to ensure you receive the
          highest standard of treatment and support.
        </p>
        <div>
          <p className=" flex items-center gap-2 font-medium text-gray-700">
            <FaCheck className="text-primary" /> Comprehensive Healthcare
            Services
          </p>
          <p className=" flex items-center gap-2 font-medium text-gray-700">
            <FaCheck className="text-primary" /> Expert Medical Professionals
          </p>
          <p className=" flex items-center gap-2 font-medium text-gray-700">
            <FaCheck className="text-primary" /> State-of-the-Art Facilities
          </p>
          <p className=" flex items-center gap-2 font-medium text-gray-700">
            <FaCheck className="text-primary" /> Patient-Centered Approach
          </p>
          <p className=" flex items-center gap-2 font-medium text-gray-700">
            <FaCheck className="text-primary" /> Convenient and Accessible
          </p>
        </div>
        <button className="btn btn-primary text-white font-medium mt-10">
          Discover More <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
        </button>
      </div>
    </div>
  );
};

export default About;
