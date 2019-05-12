import React from "react";
import "./Logo.css";
import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = ({ height }) => {
  console.log("BurgerLogo", BurgerLogo);
  return (
    <div className="Logo" style={{ height: height }}>
      {/* <img src="https://www.freepik.com/free-vector/hamburger_2900465.htm" alt="MyBurger" /> */}
      {/* <img src="../../assets/images/burger-logo.png" alt=""/> */}
      <img src={BurgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
