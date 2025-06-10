import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

  const handlePay = () => {
    navigate("/checkout");
  };

  return (
    <>
      <article className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-8">
        <h3 className="text-2xl lg:text-3xl text-black md:text-4xl">
          Total to pay: US${total}
        </h3>

        <button
          onClick={handlePay}
          className="text-white text-2xl bg-black w-[190px] lg:w-[240px] h-[75px]
           hover:bg-gray-800 lg:text-3xl md:text-[30px]"
        >
          PAY ORDER
        </button>
      </article>
    </>
  );
};

export default CartTotal;
