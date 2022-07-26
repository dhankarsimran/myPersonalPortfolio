import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" >
      <div className="top1" id='experience'>
        <span style={{ color: darkMode ? "white" : "" }}>My</span>
        <span>Education</span>
      </div>
      <div className="top2">
        <div className="achievement">
          {/* darkMode */}
          <div className="circle" style={{ boxShadow: " 4px 6px 6px 3px #00ef29", color: darkMode ? 'var(--green)' : '' }}>9.8 CGPA</div>
          <span style={{ color: darkMode ? 'white' : '' }}>ADGITM <br /> BTech-CSE</span>
          <span>(2020-24)</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ boxShadow: " 4px 6px 6px 3px #00ef29", color: darkMode ? 'var(--green)' : '' }}>95.46%</div>
          <span style={{ color: darkMode ? 'white' : '' }}>Rattan Convent School <br /> 12th Class </span>
          <span>(2018-19)</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{ boxShadow: " 4px 6px 6px 3px #00ef29", color: darkMode ? 'var(--green)' : '' }}>10CGPA</div>
          <span style={{ color: darkMode ? 'white' : '' }}>Rattan Convent School <br />10th Class </span>
          <span>(2016-17)</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
