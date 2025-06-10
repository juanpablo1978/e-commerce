import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

const Checkout = () => {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    // Vacía el carrito al entrar al checkout
    clearCart();
  }, [clearCart]);

  return (
    <article className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-10 text-2xl font-semibold items-center">
        <FaCheckCircle className="w-32 h-32 text-green-700" />
        <p className="text-3xl text-center">
          Successful payment!
          <br />
          Thanks for your purchase! Your order is being processed.
        </p>
      </div>
      <div className="flex">
        <h3 className="font-bold text-blue-900 text-4xl hover:text-blue-700">
          {" "}
          <Link to="/">Go back</Link>
        </h3>
      </div>
    </article>
  );
};

export default Checkout;
