import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/htmlCssJavaS.png";
import Fiverr from "../../img/react2.png";
import Amazon from "../../img/gitGithub.png";
import Shopify from "../../img/nodejs2.png";
import Facebook from "../../img/java2.svg";
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
            <li>Public Speaker</li>
            <li>Team Builder</li>
            <li>Punctual</li>
            <li>Creative</li>
            <li>Soft Spoken</li>
            <li>Active Listener</li>
            <li>Efficient Learner</li>
            

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
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
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
