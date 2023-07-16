import React from "react";
import logo from "./../assets/logo/Logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaMap,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F6F7F5] py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img className="w-[220px]" src={logo} alt="" />
            <p className="w-3/4 mt-10 text-gray-500 mb-4">
              To receive email releases, simply provide us with your email below
            </p>
            <form action="#" className="w-3/4">
              <div className="items-center mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center bg-primary text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <div className="flex gap-3 mt-10">
              <p className="rounded-full bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all delay-100 cursor-pointer">
                <FaFacebookF></FaFacebookF>
              </p>
              <p className="rounded-full bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all delay-100 cursor-pointer">
                <FaTwitter></FaTwitter>
              </p>
              <p className="rounded-full bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all delay-100 cursor-pointer">
                <FaInstagram></FaInstagram>
              </p>
              <p className="rounded-full bg-white shadow-md w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white transition-all delay-100 cursor-pointer">
                <FaYoutube></FaYoutube>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Blog Post</h2>
            <div className="mt-10">
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 rounded-md"
                  src="https://i.ibb.co/Zz795HJ/image.png"
                  alt=""
                />
                <span>
                  <p className=" font-medium text-gray-500">
                    Medications & Oral Health
                  </p>
                  <p className="text-gray-400">18 July 2023</p>
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  className="w-14 h-14 rounded-md"
                  src="https://i.ibb.co/6RJFS10/team-young-specialist-doctors-standing-corridor-hospital-min.jpg"
                  alt=""
                />
                <span>
                  <p className=" font-medium text-gray-500">
                    Way to fit your health
                  </p>
                  <p className="text-gray-400">25 July 2023</p>
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  className="w-14 h-14 rounded-md"
                  src="https://i.ibb.co/Sf48s7V/image.png"
                  alt=""
                />
                <span>
                  <p className=" font-medium text-gray-500">
                    How to rid from flu
                  </p>
                  <p className="text-gray-400">28 July 2023</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-10">Our Contacts</h2>
            <span className="flex items-center gap-3 mb-4">
              <FaLocationArrow className="text-primary text-xl"></FaLocationArrow>
              <p className=" font-medium text-gray-500">
                12-Bifold Road, Jashore
              </p>
            </span>
            <span className="flex items-center gap-3 mb-4">
              <FaMobileAlt className="text-primary text-xl"></FaMobileAlt>
              <p className=" font-medium text-gray-500">+880 1706355704</p>
            </span>
            <span className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-primary text-xl"></FaEnvelope>
              <p className=" font-medium text-gray-500">greencare@gmail.com</p>
            </span>
            <span className="flex items-center gap-3 mb-4">
              <FaMap className="text-primary text-xl"></FaMap>
              <p className=" font-medium h-9 px-16  rounded-full bg-primary cursor-pointer text-white flex items-center">
                See Map Location
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
