import React, { useState, useEffect } from "react";

//ESTILS
import "./Button.css";
const Button = ({ text, route, color }) => {
  const [styles, setStyles] = useState({});
  const [spanStyles, setSpanStyles] = useState({ coor: color });
  useEffect(() => {
    setStyles({
      color: color,
      backgroundColor: "transparent",
      border: `2px solid ${color}`,
    });
    setSpanStyles({ color: color });
  }, []);
  return (
    <div
      className="button__container"
      onMouseOver={() => {
        setStyles({
          color: "white",
          backgroundColor: color,
          border: `2px solid ${color}`,
        });
      }}
      onMouseLeave={() => {
        setStyles({
          color: color,
          backgroundColor: "transparent",
          border: `2px solid ${color}`,
        });
      }}
      style={styles}
    >
      <span
        onMouseOver={() => {
          setSpanStyles({ color: "white" });
        }}
        onMouseLeave={() => {
          setSpanStyles({ color: color });
        }}
        style={spanStyles}
      >
        {text}
      </span>
    </div>
  );
};

export default Button;
