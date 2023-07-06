import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaHeadphonesAlt,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Doctor List</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        {/* --------Nav Top ----------- */}
        <div className="bg-primary py-2 text-white">
          <div className="container mx-auto px-3 flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col sm:gap-0 md:flex-row md:gap-6">
              <span className="flex gap-2 items-center">
                <FaEnvelope></FaEnvelope>
                <Link>
                  <p>greencare@gmail.com</p>
                </Link>
              </span>
              <span className="flex gap-2 items-center">
                <FaHeadphonesAlt></FaHeadphonesAlt>
                <Link>
                  <p>+880 1706385704</p>
                </Link>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedinIn></FaLinkedinIn>
            </div>
          </div>
        </div>
        {/* --------Nav Bottom ---------- */}
        <div className=" bg-base-100 shadow-lg ">
          <div className="navbar container mx-auto py-4">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
              <img className="w-52" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn btn-primary text-white font-semibold">
                Get a quote
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-32"></div>
    </div>
  );
};

export default Navbar;
