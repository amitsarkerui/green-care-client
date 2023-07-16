import React from "react";
import { FaMobileAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col  items-center md:flex-row gap-4">
      <img src="https://i.ibb.co/0JYD0kq/CTA-images.jpg" alt="" />
      <div className="text-center mx-auto">
        <h1 className="text-4xl font-bold">
          Looking for a <span className="text-primary">Certified Doctor?</span>
        </h1>
        <hr className="w-[80px] border-2 mx-auto border-primary mt-8" />
        <p className="text-gray-400 my-10">
          We're always accepting new patients! We believe in providing the best
          possible care to all our existing patients and welcome new patients to
          sample the service we have to offer.
        </p>
        <div className="flex items-center gap-2 justify-center w-full">
          <FaMobileAlt className="text-2xl text-primary"></FaMobileAlt>
          <h4 className="text-2xl font-bold">+12 123 456789</h4>
        </div>
      </div>
    </div>
  );
};

export default CTA;
