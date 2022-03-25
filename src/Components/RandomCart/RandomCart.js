import React from "react";

const RandomCart = (props) => {
  if (props.random[0] !== undefined) {
    const { name, img, price } = props.random[0];
    console.log(name);
    return (
      <div>
        <img src={img} alt="" width="200px" />
        <h5>{name}</h5>
        <h5>Price: {price}</h5>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RandomCart;
