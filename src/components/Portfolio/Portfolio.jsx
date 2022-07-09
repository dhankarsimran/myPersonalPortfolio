import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import NetflixClone from "../../img/NetflixClone.png";
import SurvayForm from "../../img/SurvayForm.png";
import LinkedInClone from "../../img/LinkedInClone.png";
import NewsApp from "../../img/NewsApp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={NetflixClone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NewsApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SurvayForm} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LinkedInClone} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
