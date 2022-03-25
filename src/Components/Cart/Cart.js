import React from "react";
import CartProduct from "../Cart-Product/CartProduct";
import { getLocal } from "../utilities/Utilities";

const Cart = (props) => {
  const { carts, DeleteItem, randomProduct, emptyCart } = props;
  const storedCart = getLocal();
  console.log(emptyCart);
  return (
    <div>
      <h1>carts</h1>
      <button onClick={() => randomProduct(storedCart)}>Random</button>
      <button onClick={() => emptyCart()}>delete</button>

      {carts.map((item) => (
        <CartProduct
          key={item.id}
          item={item}
          DeleteItem={DeleteItem}
        ></CartProduct>
      ))}
    </div>
  );
};

export default Cart;
