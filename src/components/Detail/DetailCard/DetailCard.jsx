import PropTypes from "prop-types";

const DetailCard = ({ data }) => {
  const { title, price, brand, category, images, rating, description } =
    data || {};

  return (
    <section className="flex flex-col items-center pt-10">
      <article>
        <div className="h-96 w-80 bg-slate-50  rounded-t-[12px]  overflow-hidden relative lg:h-80 lg:w-96">
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
          className=" h-96 w-80 bg-white  rounded-b-[12px]  overflow-hidden py-8 px-6 lg:h-[340px] lg:w-96
      relative top-[-30px] border-gray-400 border-[1px]"
        >
          <h3 className=" text-3xl font-extrabold mb-2">{title}</h3>
          <h4 className=" text-black  font-semibold text-xl ">
            <span>Price $</span>
            {price}
          </h4>
          <h4 className=" text-black font-medium text-xl">Rating {rating}</h4>
          <p className=" text-gray-600 mt-6 line-clamp-[5]">{description}</p>
          <div className="flex  items-center justify-between gap-x-2 mt-8">
            <button
              className=" bg-white border-gray-400 border-[1px] text-[15px] font-semibold 
              uppercase text-black px-5 py-1  
            cursor-pointer"
            >
              Add to cart
            </button>
            <div
              className="flex justify-center items-center rounded-xl text-black font-semibold
           border-purple-900 border-[2px] w-[212px] h-14 text-xl"
            >
              <p className="mr-2">{category}</p>
              <p>{brand}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
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
