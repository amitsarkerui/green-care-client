import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
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
          <div className="bg-[url('https://i.ibb.co/6RJFS10/team-young-specialist-doctors-standing-corridor-hospital-min.jpg')]">
            <div>
              <h1 className="text-center">
                Experience superior healthcare at Green Care <br /> Your
                well-being, our priority.
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
