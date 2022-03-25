import React from "react";
import CartProduct from "../Cart-Product/CartProduct";

const Cart = (props) => {
  const { carts, DeleteItem } = props;
  return (
    <div>
      <h1>carts.map</h1>
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
