import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { FaLongArrowAltRight, FaPlus } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative  flex items-center w-full">
            <div className="bg-[url('https://i.ibb.co/6RJFS10/team-young-specialist-doctors-standing-corridor-hospital-min.jpg')] h-screen w-full bg-cover relative flex items-center">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="content text-center relative z-10 mx-auto">
                <h1 className="text-white text-5xl font-bold leading-snug">
                  Superior healthcare at Green Care <br /> Your well-being, our
                  priority.
                </h1>
                <p className="max-w-[800px] text-center mx-auto text-white my-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia sed repellendus voluptate corrupti neque temporibus,
                  nihil incidunt exercitationem? Libero laboriosam natus sed
                  unde, rem impedit veniam odio nihil alias.
                </p>
                <span>
                  <button className="btn btn-primary text-white mr-5">
                    Find a doctor <FaPlus></FaPlus>{" "}
                  </button>
                  <button className="btn">
                    About Us <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  flex items-center w-full">
            <div className="bg-[url('https://i.ibb.co/vZZY1w0/young-handsome-physician-medical-robe-with-stethoscope-2.jpg')] h-screen w-full bg-cover relative flex items-center">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="content relative z-10 container mx-auto">
                <h1 className="text-white text-2xl font-bold leading-snug md:text-5xl md:font-bold md:leading-snug">
                  Superior healthcare at Green Care <br /> Your well-being, our
                  priority.
                </h1>
                <p className="max-w-[800px]  text-white my-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia sed repellendus voluptate corrupti neque temporibus,
                  nihil incidunt exercitationem? Libero laboriosam natus sed
                  unde, rem impedit veniam odio nihil alias.
                </p>
                <span>
                  <button className="btn btn-primary text-white mr-5">
                    Find a doctor <FaPlus></FaPlus>{" "}
                  </button>
                  <button className="btn">
                    About Us <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
