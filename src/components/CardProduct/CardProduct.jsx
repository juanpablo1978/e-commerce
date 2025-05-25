import { AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardProduct = ({ oneCard }) => {
  const { title, price, brand, category, images, id, rating } = oneCard || {};
  console.log(oneCard);

  const { buyProduct } = useContext(CartContext);

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
        {/*rend. dinamico de las estrellas del rating*/}
        <div className=" flex items-center justify-center mt-3 text-xl lg:text-2xl gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar
              key={i}
              className={
                i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-2 text-gray-700 text-base lg:text-xl">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="py-3 flex justify-center items-center">
          <Link to={`/detailPage/${id}`}>
            {" "}
            <button
              onClick={() => buyProduct(oneCard)}
              className="flex justify-center items-center gap-2 px-2 py-2 bg-transparent
             text-black border-2 border-gray-300 cursor-pointer hover:border-black duration-300 rounded-xl"
            >
              <p className="text-center text-base">View detail</p>
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  oneCard: PropTypes.object.isRequired,
};
