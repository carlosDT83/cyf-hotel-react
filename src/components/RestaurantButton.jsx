import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderFunctionProp}>
      Add
    </button>
  );
};

export default RestaurantButton;
