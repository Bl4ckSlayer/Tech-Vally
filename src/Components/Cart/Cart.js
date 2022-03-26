import React from "react";
import CartProduct from "../Cart-Product/CartProduct";
import RandomCart from "../RandomCart/RandomCart";
import { getLocal } from "../utilities/Utilities";
import "./Cart.css";

const Cart = (props) => {
  const { carts, DeleteItem, randomProduct, emptyCart, random } = props;
  const storedCart = getLocal();
  // console.log(emptyCart);
  return (
    <div className="cart text-center  sticky ">
      <h1>Carts</h1>
      {carts.map((item) => (
        <CartProduct
          key={item.id}
          item={item}
          DeleteItem={DeleteItem}
        ></CartProduct>
      ))}

      <button
        onClick={() => randomProduct(storedCart)}
        className="btn btn-outline-danger fw-bolder mb-3 "
      >
        CHOOSE 1 FOR ME
      </button>
      <RandomCart random={random} />
      <button
        onClick={() => emptyCart()}
        className="btn btn-outline-danger  fw-bolder mb-2 mt-2 "
      >
        DELETE ALL
      </button>
    </div>
  );
};

export default Cart;
