import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
    <div className="f-content">
        <span>simrandhankar3@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/dhankarsimran/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/simran-dhankar-229550206/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/dhankarsimran"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div> 

     

    </div>
  );
};

export default Footer;
