import React, { useContext } from "react";
import "./Works.css";
import JS from "../../img/htmlCssJavaS.png";
import Git from "../../img/gitGithub.png";
import Mern from "../../img/Mern.png";
import Java from "../../img/java2.svg";
import DSA from "../../img/DSA.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Acquired
          </span>
          <span>Skills</span>
          <spane>
            <h1 style={{ color: darkMode ? "white" : "" }}>SOFT SKILLS</h1>
           <ul>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Public Speaking</li>
            <li>Leadership</li>
            <li>Punctuality</li>
            <li>Creativity</li>
            <li>Decision-making</li>
            <li>Active Listening</li>
            <li>Critical thinking</li>
            <li>Adaptability</li>
            

            </ul>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={JS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mern} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Git} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={DSA} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
        </div>
       <div className="w-last">
        <div className="w-hard hard2">HARD</div>
        <div className="w-hard hard1" style={{ color: darkMode ? "white" : "" }}>SKILLS</div>

        </div>
    </div>
  );
};

export default Works;
