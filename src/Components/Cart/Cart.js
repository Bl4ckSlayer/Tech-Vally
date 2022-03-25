import React from "react";
import CartProduct from "../Cart-Product/CartProduct";
import RandomCart from "../RandomCart/RandomCart";
import { getLocal } from "../utilities/Utilities";

const Cart = (props) => {
  const { carts, DeleteItem, randomProduct, emptyCart, random } = props;
  const storedCart = getLocal();
  console.log(emptyCart);
  return (
    <div className="bg-info text-center  sticky ">
      <h1>carts</h1>
      {carts.map((item) => (
        <CartProduct
          key={item.id}
          item={item}
          DeleteItem={DeleteItem}
        ></CartProduct>
      ))}

      <button
        onClick={() => randomProduct(storedCart)}
        className="btn btn-danger fw-bolder mb-3 "
      >
        Random Item
      </button>
      <RandomCart random={random} />
      <button
        onClick={() => emptyCart()}
        className="btn btn-danger  fw-bolder mb-2 mt-2 "
      >
        Delete all
      </button>
    </div>
  );
};

export default Cart;
