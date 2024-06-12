import React from "react";

//IMATGES
import mockImage from "../../assets/mockFooter.jpg";

//ESTILS
import "./Footer.css";
import Button from "../Button/Button";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__button-wrapper">
        <Button text={"Contact"} color={"#5482b0"} />
        <span>Project ref. 2020-1-ES01-KA203-082513</span>
      </div>
      <img src={mockImage} alt="" />
      <img src={mockImage} alt="" />
    </div>
  );
};

export default Footer;
