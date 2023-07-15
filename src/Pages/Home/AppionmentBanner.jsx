import React from "react";
import { FaLongArrowAltRight, FaPlus } from "react-icons/fa";
import bannerImage from "../../assets/images/banner-center-02.jpg";

const AppointmentBanner = () => {
  return (
    <div className="relative  flex items-center w-full my-24">
      <div
        className="bg-[url('${bannerImage}')]  w-full bg-cover relative flex items-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="content relative z-10 container mx-auto text-center py-44">
          <h1 className="text-white text-4xl font-bold">
            Online Appointments And Prescriptions
          </h1>
          <p className="text-white mt-3 mb-10">
            You can now book a limited amount of doctors’ appointments online.
            Very easy to process. Save your time.
          </p>
          <button className="btn btn-outline text-white border-white hover:bg-[#83C05D]">
            Doctor Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
