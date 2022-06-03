import React, { useEffect, useState } from "react";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { AddLocal, getLocal } from "../utilities/Utilities";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getLocal();
    setCarts(storedCart);
  }, []);

  const AddCart = (product) => {
    const newCart = getLocal();
    if (newCart.length !== 4) {
      const storedCart = AddLocal(product);
      setCarts(storedCart);
    }
  };

  const DeleteItem = (item) => {
    let newCart = [],
      index = 0;
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      newCart = JSON.parse(storedCart);
    }

    for (const items of newCart) {
      if (items.id === item.id) {
        break;
      }
      index++;
    }
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCarts(newCart);
  };
// asdasd
  const randomProduct = (localCart) => {
    const NewItem = localCart[Math.floor(Math.random() * localCart.length)];

    // console.log(NewItem);
    let newCart = [];
    newCart.push(NewItem);
    setRandom(newCart);

    // console.log(random);
  };
  const emptyCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <div className="row mt-4 ">
      <div className="col-lg-4 ">
        <Cart
          carts={carts}
          DeleteItem={DeleteItem}
          randomProduct={randomProduct}
          emptyCart={emptyCart}
          random={random}
        ></Cart>
      </div>
      <div className="col-md-8 col-lg-8 order-md-first   ">
        <h1 className="fw-bolder text-danger text-center ">All Products</h1>
        <div className="row row-cols-1 row-cols-md-4 justify-content-center rounded  mt-3 m-2   ">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              AddCart={AddCart}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
