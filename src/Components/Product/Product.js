import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = (props) => {
  const { name, img, price } = props.product;
  const { AddCart } = props;

  return (
    <div className="card  gx-2 ">
      <img
        src={img}
        className="rounded mx-auto d-block m-2 w-50  "
        alt=""
      ></img>
      <div className="card-body text-center">
        <h5 className="card-title">Product Name: {name}</h5>
        <h5 className="card-title">Price: ${price}</h5>
        <button
          onClick={() => AddCart(props.product)}
          className="btn btn-outline-warning  fw-bolder "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
