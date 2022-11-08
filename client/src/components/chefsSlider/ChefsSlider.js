import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import ChefCard from "./ChefCard";
import chefsSliderData from "./ChefsSliderData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chefsSlider.css";

const ChefsSlider = () => {
  const chefsData = chefsSliderData.map((data) => {
    return (
      <SwiperSlide key={data.key}>
        <ChefCard
          key={data.key}
          chefName={data.name}
          chefCountry={data.country}
          chefImg={data.chefImg}
          chefRatingImg={data.chefRatingImg}
        />
      </SwiperSlide>
    );
  });
  return (
    <div className="container py-4 px-4 justify-content-center ">
      <h5 className="chefs-slider-header text-center">Top 10 rating chefs</h5>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Pagination]}
        pagination={{
          clickable: true,
        }}
        className="chefs-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          2048: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {chefsData}
      </Swiper>
    </div>
  );
};

export default ChefsSlider;
