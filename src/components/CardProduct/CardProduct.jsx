import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
//import { useContext } from "react";
//import { CartContext } from "../../context/CartContext/CartContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardProduct = ({ oneCard }) => {
  const { title, price, brand, category, images, id } = oneCard || {};

  //const { buyProduct } = useContext(CartContext);

  return (
    <div className="shadow-md mb-4">
      <article className="bg-white rounded-[20px] h-[520px] w-[300px] shadow-md">
        <div className="  flex justify-center items-center w-[300px] h-[280px] rounded-[10px]">
          <img
            src={images}
            alt="Imagen producto"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="p-5">
          <p className="text-black opacity-80 text-center text-sm">
            {category}, {brand}
          </p>
          <h2 className="text-black text-center text-lg py-2 font-semibold">
            {title}
          </h2>
          <p className="text-black text-center text-lg font-semibold">
            ${price}
          </p>
        </div>
        <div className="[&>p]:text-yellow-500 flex justify-center items-center pb-3">
          <p className="">
            <AiFillStar />
          </p>
          <p className="">
            <AiFillStar />
          </p>
          <p className="">
            <AiFillStar />
          </p>
          <p className="">
            <AiFillStar />
          </p>
          <p className="">
            <AiFillStar />
          </p>
        </div>
        <div className="py-3 flex justify-center items-center">
          <Link to={`/detail/${id}`}>
            {" "}
            <button
              /* onClick={() => buyProduct(oneCard)}*/
              className="flex justify-center items-center gap-2 px-2 py-2 bg-transparent
             text-black border-2 border-gray-300 cursor-pointer hover:border-black duration-300 rounded-xl"
            >
              <AiOutlineShoppingCart className="text-xl flex justify-center items-center" />
              <p className="text-center text-base">Ver detalle</p>
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  oneCard: PropTypes.node,
};
