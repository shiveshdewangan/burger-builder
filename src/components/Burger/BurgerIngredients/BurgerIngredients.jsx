import React from "react";
import "./BurgerIngredient.css";
import PropTypes from "prop-types";

const BurgerIngredients = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom" />;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1" />
          <div className="Seeds2" />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat" />;
      break;
    case "cheese":
      ingredient = <div className="Cheese" />;
      break;
    case "salad":
      ingredient = <div className="Salad" />;
      break;
    case "bacon":
      ingredient = <div className="Bacon" />;
      break;
    default:
      return null;
      break;
  }

  return ingredient;
};

BurgerIngredients.prototype = {
  type: PropTypes.string.required
};

export default BurgerIngredients;
