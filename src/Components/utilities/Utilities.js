const AddLocal = (product) => {
  let cart = [];
  let flag = 0;

  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  for (const items of cart) {
    if (items.id === product.id) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

const getLocal = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
export { AddLocal, getLocal };
