import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import ChefCard from "./ChefCard";
import chefImg from "../../../public/images/img_avatar.png";
import chefRatingImg from "../../../public/images/rating.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../chefsSlider.css";

const ChefsSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center ">
      <h2 className="chefs-slider-header text-center">Top 10 rating chefs</h2>
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
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImg={chefImg} chefRatingImg={chefRatingImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ChefsSlider;
