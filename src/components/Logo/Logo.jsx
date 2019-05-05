import React from "react";
import "./Logo.css";
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = ({ height }) => {
  return (
    <div className="Logo" style={{ height: height }}>
      <img src={BurgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
