import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0); //a  acumulador se suma el precio del element

  return (
    <>
      <article className="flex justify-center items-center gap-10 pt-8">
        <h3 className="text-3xl text-black">Total a pagar: US${total}</h3>
        <Link to="/checkout">
          {" "}
          <button className="text-white text-2xl bg-black w-[240px] h-[75px] hover:bg-gray-800">
            PAGAR PEDIDO
          </button>
        </Link>
      </article>
    </>
  );
};

export default CartTotal;
