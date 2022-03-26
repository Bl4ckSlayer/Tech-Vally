import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CartProduct;
