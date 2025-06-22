import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";

export const CounterCart = () => {
  const { cart } = useContext(CartContext);

  const totalQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);

  return (
    <div
      className="rounded-full  bg-gradient-to-r from-gray-500 to-yellow-600 text-white text-[16px] md:bottom-[29px]
       w-6 h-6 absolute  bottom-[16px] left-[20px] lg:bottom-[30px] lg:left-[32px] flex justify-center items-center
       md:left-[25px] md:w-8 md:h-8 lg:w-6 lg:h-6"
    >
      <span>{totalQuanty}</span>
    </div>
  );
};
