import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import ChefCard from "./ChefCard";
import chefImage from "../../../public/images/img_avatar.png";
import ratingImg from "../../../public/images/rating.jpg";

const ChefsSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={FreeMode}
        className="chefsSlider"
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
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ChefCard chefImage={chefImage} ratingImg={ratingImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ChefsSlider;
