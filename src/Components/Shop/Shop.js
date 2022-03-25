import React, { useEffect, useState } from "react";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { AddLocal, getLocal } from "../utilities/Utilities";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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

  return (
    <div className="row">
      <div className="col col-md-9 col-lg-9">
        <h4 className="mb-3">Products</h4>
        <div className="row row-cols-1 row-cols-md-3  ">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              AddCart={AddCart}
            ></Product>
          ))}
        </div>
      </div>

      <div className="col-3 ">
        <Cart carts={carts} DeleteItem={DeleteItem}></Cart>
      </div>
    </div>
  );
};

export default Shop;
