import React from "react";
import "./Button.css";

const Button = ({ btnType, clicked, children }) => (
  <button className={["Button", btnType].join(" ")} onClick={clicked}>
    {children}
  </button>
);

export default Button;
