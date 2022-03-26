import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { name, img, price } = props.product;
  const { AddCart } = props;

  return (
    <div className="product mx-1 rounded  my-1  ">
      <img
        src={img}
        className="rounded mx-auto d-block m-2 img-fluid   "
        alt=""
      ></img>
      <div className="card-body text-center">
        <h5 className="">Product Name: {name}</h5>
        <h5 className="">Price: ${price}</h5>

        <button onClick={() => AddCart(props.product)} className="bton">
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
