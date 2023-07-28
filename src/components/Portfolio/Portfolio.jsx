import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ExpenseTracker from "../../img/expenseTracker.png";
import TravelApp from "../../img/TravelApp.png";
import MyPortfolio from "../../img/MyPortfolio.png"
import Dukaandaar from "../../img/Dukaandaar.png";
import CollabX from "../../img/CollabX.png";
import CC from "../../img/CC.png";
import NewsApp2 from "../../img/NewsApp2.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
        <a href="https://my-dukaan-daar.vercel.app/"><img src={Dukaandaar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://collabx-beta.vercel.app/"><img src={CollabX} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://codechefadgitm.vercel.app/" ><img src={CC} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://expensetrackerforyou.netlify.app"><img src={ExpenseTracker} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/dhankarsimran/TravelAdvisorApp"><img src={TravelApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://simrandhankar.netlify.app"><img src={MyPortfolio} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/dhankarsimran/NewsApp"><img src={NewsApp2} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
