import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = (props) => {
  const { id, name, img, price } = props.product;
  const { AddCart } = props;

  return (
    <div className="card">
      <img
        src={img}
        className="rounded mx-auto d-block m-3 img-fluid p-4 "
        alt=""
      ></img>
      <div className="card-body text-center">
        <h5 className="card-title">{id}</h5>
        <h4 className="card-title">{name}</h4>
        <h4 className="card-title">{price}</h4>
        <button onClick={() => AddCart(props.product)}>add to cart </button>
      </div>
    </div>
  );
};

export default Product;
