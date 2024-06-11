import React from "react";

//ESTILS
import "./Button.css";
const Button = ({ text, route }) => {
  return (
    <div className="button__container">
      <span>{text}</span>
    </div>
  );
};

export default Button;
