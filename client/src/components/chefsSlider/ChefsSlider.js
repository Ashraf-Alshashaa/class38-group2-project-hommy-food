import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import ChefCard from "./ChefCard";
import chefImg from "../../../public/images/img_avatar.png";
import useFetch from "../../hooks/useFetch";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const ChefsSlider = () => {
  const [highTenRatedChefs, setHighTenRatedChefs] = useState();

  const { performFetch } = useFetch(
    "/rate/chefs/high-rated",
    setHighTenRatedChefs
  );

  useEffect(() => {
    performFetch();
  }, []);
  return (
    <div className="container my-5 justify-content-center ">
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
            slidesPerView: 1,
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
        {highTenRatedChefs?.result.map(
          ({ _id, userName, photo, AvgCustomerRates }, idx) => {
            return (
              <SwiperSlide key={_id}>
                <ChefCard
                  key={`${_id}_${idx}`}
                  chefName={userName}
                  chefImg={photo ? photo : chefImg}
                  id={_id}
                  chefRating={AvgCustomerRates}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

export default ChefsSlider;
