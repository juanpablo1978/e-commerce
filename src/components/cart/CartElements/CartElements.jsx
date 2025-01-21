import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import { FaRegTrashAlt } from "react-icons/fa";

const CartElements = () => {
  const { cart, deleteProduct } = useContext(CartContext); //aca estaba setCart, ver si al sacar algo no funciona

  /*const deleteProduct = (id) => {
    const foundID = cart.find((element) => element.id === id); //pase esta funcion al cartContext, si esta todo ok, borrar de aca
    const newCart = cart.filter((element) => {
      return element !== foundID;
    });

    setCart(newCart);
  };*/

  return cart.map((detailCard) => {
    return (
      <article
        key={detailCard.id}
        className="flex text-gray-600 text-2xl justify-between p-12 items-center border-b-[2px] border-b-gray-500"
      >
        <div className="h-[200px] w-[200px]">
          <img
            className="w-full h-full object-cover"
            src={detailCard.images}
            alt="imagen producto"
          />
        </div>
        <div>
          <h3>{detailCard.title}</h3>
        </div>
        <div>
          <ItemCount product={detailCard} />
        </div>
        <div>
          <h3> ${detailCard.price * detailCard.quanty}</h3>
        </div>
        <div>
          <button
            onClick={() => deleteProduct(detailCard.id)}
            className="text-black text-2xl"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </article>
    );
  });
};

export default CartElements;
