import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../gallery.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

//import slide_image_1 from "../assets/images/a7x.jpg";
//import slide_image_2 from "../assets/images/godsmack.jpg";
//import slide_image_3 from "../assets/images/killswitch-engage.jpg";
//import slide_image_4 from "../assets/images/Linkin_Park.webp";
//import slide_image_5 from "../assets/images/metallica.jpg";
//import slide_image_6 from "../assets/images/parkway.webp";
//import slide_image_7 from "../assets/images/trivium.webp";

import metalImages from "../assets/images/metalImages.js";
import tvfImages from "../assets/images/tvfImages.js";
import gamesImages from "../assets/images/gamesImages.js";
import animeImages from "../assets/images/animeImages.js";

function Swiper_func() {
  const location = useLocation(); // Извлича се текущият път

  let images;

  if (location.pathname === "/metal") {
    images = metalImages;
  } else if (location.pathname === "/tvf") {
    images = tvfImages;
  } else if (location.pathname === "/games") {
    images = gamesImages;
  } else if (location.pathname === "/anime") {
    images = animeImages;
  }

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link to={image.route}>
                <img src={image.src} alt={`slide_image_${index}`} />
              </Link>
            </SwiperSlide>
          ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swiper_func;
