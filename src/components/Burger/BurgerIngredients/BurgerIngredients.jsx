import React from "react";
import "./BurgerIngredients.css";

const BurgerIngredients = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom">BreadBottom</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1">Seeds1</div>
          <div className="Seeds2">Seeds2</div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat">Meat</div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese">Cheese</div>;
      break;
    case "salad":
      ingredient = <div className="Salad">Salad</div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon">Bacon</div>;
      break;
    default:
      null;
  }

  return (
    <div>
      <h1>Ingredients</h1>
    </div>
  );
};

export default BurgerIngredients;
