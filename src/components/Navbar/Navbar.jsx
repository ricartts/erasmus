import React from "react";

//IMATGES
import logo from "../../assets/1da574ba82669021a53d32b4c675a408.png";

//ESTILS
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={logo} alt="blearn" className="navbar__image" />
      <div className="navbar__right-wrapper"></div>
    </div>
  );
};

export default Navbar;
