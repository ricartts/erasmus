import React from "react";

//IMATGES
import logo from "../../assets/logo.jpg";

//ESTILS
import "./FirstSection.css";

const FirstSection = ({ text }) => {
  return (
    <div className="firstSection__container">
      <p>{text}</p>
      <img src={logo} alt="mockLogo" />
    </div>
  );
};

export default FirstSection;
