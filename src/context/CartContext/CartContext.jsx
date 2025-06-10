import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const decrese = (oneCard) => {
    const productRepeat = cart.find((item) => item.id === oneCard.id);

    productRepeat.quanty !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === oneCard.id
            ? { ...oneCard, quanty: productRepeat.quanty - 1 }
            : item
        )
      );
  };

  const buyProduct = (oneCard) => {
    const productRepeat = cart.find((item) => item.id === oneCard.id);

    if (productRepeat) {
      setCart(
        cart.map((item) =>
          item.id === oneCard.id
            ? { ...oneCard, quanty: productRepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, oneCard]);
    }
  };

  const deleteProduct = (id) => {
    const foundID = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => {
      return element !== foundID;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, buyProduct, decrese, deleteProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
