import React from "react";

//CUSTOM-HOOKS
import useScroll from "../../custom-hooks/useScroll";

//IMATGES
import logo from "../../assets/1da574ba82669021a53d32b4c675a408.png";

//ESTILS
import "./Navbar.css";

const Navbar = () => {
  const hasScrolled = useScroll();
  return (
    <div
      className="navbar__container"
      style={
        hasScrolled === false
          ? { paddingTop: "15px", paddingBottom: "15px" }
          : { paddingTop: "8px", paddingBottom: "8px" }
      }
    >
      <img src={logo} alt="blearn" className="navbar__image" />
      <div className="navbar__right-wrapper">
        <span>Home</span>
        <span>Team</span>
        <span>Intellectual Outputs</span>
        <span>Dissemination</span>
        <span>Blog</span>
      </div>
    </div>
  );
};

export default Navbar;
