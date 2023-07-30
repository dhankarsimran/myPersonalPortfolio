import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import EnactusBird from "../../img/enactusBird.png";
import Developer from "../../img/female-developer.webp";
import Mlsa from "../../img/mlsa.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './SimranDhankar.pdf';

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
        <span style={{fontSize: "17px" ,wordWrap:"break-word"}}>
          I am a multifaceted individual with a strong commitment to social impact,
          <br />
           technology advocacy, open-source contributions, and athletic excellence.
          <br />
          <br/>
          I had the privilege of being selected as a contributor in GirlScript
          <br/>
          Summer of Code where I actively contributed to open-source projects, 
          <br/>
          further enhancing my technical skills and knowledge. 
          <br/>
          <br/>
          I am honored to serve as a Microsoft Learn Student Ambassador,
          <br/>
          where I conducted webinars to share my expertise in GitHub, VS Code,
           <br/>
          and  other  relevant topics with my peers. 
          <br/>
          <br/>
          As the Vice President of Enactus ADGITM, a non-profit organization,
          <br/>
          I led a team in executing real-life projects that aimed to generate income
          <br/>
          for underprivileged individuals, making a positive impact on their lives.
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
            detail={"MERN, NextJs, Redux, Redux-Toolkit, Java (DSA), JavaScript, HTML, CSS, TailwindJS"}
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
