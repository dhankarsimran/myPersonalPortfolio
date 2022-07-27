import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Mode</div>
        <Toggle />
      </div>

      {/* right */}
      <div className="n-right">
      <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>
             {/* HamList */}
         <div className="ham-list">
         <ul style={{ listStyleType: "none" }}>
          <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Certification
              </Link>
            </li>
            </ul>
         </div>


       
        <div className="n-list">

        <ul style={{ listStyleType: "none" }}>
           {/* <!-- USING CHECKBOX HACK --> */}
      
        
        
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Certification
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="contact1">
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
      </div>
    </div>
  );



  // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  // return (
  //   <div className='navbar2' id="n1">
  //   <nav className="navbar1">
  //    {/* <!-- LOGO --> */}
  //    <div className="logo">Developer</div>
  //    {/* <!-- NAVIGATION MENU --> */}
  //    <ul className="nav-links">
  //      {/* <!-- USING CHECKBOX HACK --> */}
  //      <input type="checkbox" id="checkbox_toggle" />
  //      <label for="checkbox_toggle" className="hamburger">&#9776;</label>
  //      {/* <!-- NAVIGATION MENUS --> */}
  //      <div className="menu">
  //        <li><a href="/">Home</a></li>
  //        <li><a href="#a">About</a></li>
  //        <li><a href="#r">Resume</a></li>
  //        <li><a href="#pl">Projects</a></li>
  //        <li><a href="#c">Contact</a></li>
  //      </div>
  //    </ul>
  //  </nav>
  //   </div>
  // );
};

export default navbar;
