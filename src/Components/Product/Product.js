import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { name, img, price } = props.product;
  const { AddCart } = props;

  return (
    <div className="card product mx-1 rounded  my-1  ">
      <img
        src={img}
        className="rounded mx-auto d-block m-2 img-fluid   "
        alt=""
      ></img>
      <div className="card-body text-center ">
        <h5 className="card-title">Product Name: {name}</h5>
        <h5 className="card-title">Price: ${price}</h5>
      </div>

      <button onClick={() => AddCart(props.product)} className="bton p-2 mb-2">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
