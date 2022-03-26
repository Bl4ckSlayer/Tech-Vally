import React from "react";

const CartProduct = (props) => {
  const { name, price, img } = props.item;
  const { DeleteItem } = props;
  return (
    <div className="my-4 mx-auto ">
      <img src={img} width="100px" alt=""></img>
      <h6>Product: {name}</h6>
      <h6>price: ${price}</h6>
      <button
        onClick={() => DeleteItem(props.item)}
        className="btn btn-outline-success fw-bolder "
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
