import CartElements from "../CartElements/CartElements";
import CartTotal from "../CartTotal/CartTotal";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";

const CartContent = () => {
  const { cart } = useContext(CartContext);

  return cart.length > 0 ? (
    <div className="bg-white min-h-screen text-black mb-28">
      <div className="">
        <CartElements />
      </div>

      <div>
        <CartTotal />
      </div>
    </div>
  ) : (
    <div className="bg-white min-h-screen text-black text-3xl flex justify-center items-center">
      <EmptyCart />
    </div>
  );
};

export default CartContent;
