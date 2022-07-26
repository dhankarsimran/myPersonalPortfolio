import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import TravelApp from "../../img/TravelApp.png";
import Portfolio2 from "../../img/portfolio.png"
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
        <a href="https://github.com/dhankarsimran/TravelAdvisorApp"><img src={TravelApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/dhankarsimran/NewsApp"><img src={NewsApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href=""><img src={Portfolio2} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/dhankarsimran/LinkedIn-Clone" ><img src={LinkedInClone} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
