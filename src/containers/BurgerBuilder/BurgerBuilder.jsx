import React, { Component } from "react";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      lettuce: 0
    }
  };
  render() {
    return (
      <>
        <div>Burger</div>
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
