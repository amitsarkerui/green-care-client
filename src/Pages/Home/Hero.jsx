import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { FaLongArrowAltRight, FaPlus } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <div className="bg-[url('https://i.ibb.co/6RJFS10/team-young-specialist-doctors-standing-corridor-hospital-min.jpg')] h-full bg-cover py-72 relative">
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="text-center relative z-10">
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
      </Swiper>
    </>
  );
};

export default Hero;
