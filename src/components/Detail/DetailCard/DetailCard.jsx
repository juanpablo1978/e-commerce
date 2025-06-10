import PropTypes from "prop-types";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { CartContext } from "../../../context/CartContext/CartContext";
import { useContext } from "react";

const DetailCard = ({ data }) => {
  const { title, price, brand, category, images, description, rating } =
    data || {};

  const { buyProduct } = useContext(CartContext);

  return (
    <>
      <section className="flex flex-col items-center lg:my-20 pt-10">
        <article className="lg:flex">
          <div
            className="h-[350px] w-80 bg-slate-50 overflow-hidden md:h-[450px] md:w-[500px]
           lg:h-[500px] lg:w-[550px]"
          >
            <img
              className=" w-full h-full  object-cover"
              src={images}
              alt="imagen de detalle"
            />
            <div
              className="flex justify-center items-center absolute top-5 right-5 w-10 h-10 rounded-full
        text-black text-3xl bg-[#00000025] cursor-pointer"
            ></div>
          </div>

          <div
            className=" h-[400px] w-80 bg-white overflow-hidden py-8 px-6 lg:h-[500px] lg:w-[550px] md:h-[450px] md:w-[500px]
      relative top-[-30px] border-gray-400 border-[1px] lg:top-[0px]"
          >
            <h3 className="text-2xl lg:text-4xl font-extrabold mb-2">
              {title}
            </h3>
            <h4 className=" text-gray-900  font-semibold text-xl lg:text-[32px] ">
              <span>Price $</span>
              {price}
            </h4>
            <div className="flex items-center mt-3 text-xl lg:text-2xl gap-1">
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

            <p className=" text-gray-600 mt-6 line-clamp-[5] lg:text-[19px]">
              {description}
            </p>
            <div className="flex  items-center flex-col lg:flex-row lg:gap-x-4 mt-6">
              <button
                className="flex justify-center items-center gap-2 w-[130px] lg:w-[210px] lg:px-[10px] py-2 bg-transparent
                         text-black border-[2px] border-gray-400 cursor-pointer hover:border-black duration-300
                          rounded-xl mb-4 lg:mb-0"
                onClick={() => buyProduct({ ...data, quanty: 1 })}
              >
                <AiOutlineShoppingCart className="text-xl lg:text-2xl flex justify-center items-center" />
                <p className="text-center text-[14px] lg:text-2xl">
                  ADD TO CART
                </p>
              </button>
              <div
                className="flex justify-center items-center rounded-xl bg-gradient-to-r from-blue-900 to-black 
              text-transparent bg-clip-text font-bold text-[18px] lg:text-[23px] gap-x-2 uppercase"
              >
                <p>{category}</p>
                <p>{brand}</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

DetailCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
    images: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default DetailCard;
