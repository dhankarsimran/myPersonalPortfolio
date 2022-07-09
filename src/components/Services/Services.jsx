import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import EnactusBird from "../../img/enactusBird.png";
import Developer from "../../img/female-developer.webp";
import Mlsa from "../../img/mlsa.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Me</span>
        <span style={{fontSize: "16px"}}>
          Typically, from a non-technical background, suddenly getting 
          <br />
          into CSE was somewhere unnatural, but the way
          <br />
           computer & coding fascinates me towards itself,
          <br />
          is what makes me more passionate to go deep inside it...
          <br />
          <br/>
          I'm currently a Front-end Web Developer and still learning 
          <br/>
          new technologies so that to be updated with the 
          <br/>
          growing technical world.
          <br/>
          <br/>
          I'm also a Microsoft Learn Student Ambassador apart from 
          <br/>
          being a Vice President of ENACTUS ADGITM and trying to 
          <br/>
          contribute for the betterment of the society in any way.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={EnactusBird}
            heading={"ENACTUS-Adgitm Vice President"}
            detail={"Entreprenuership, Leadership, Team BuildUp, Community Help"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
        >
          <Card
            emoji={Developer}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Java"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={Mlsa}
            heading={"MLSA-Beta Milestone"}
            detail={
              "Problem Solver, Digital Community BuildUp, Connect With World"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
