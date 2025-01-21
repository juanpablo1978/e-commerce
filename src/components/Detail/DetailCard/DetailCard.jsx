import PropTypes from "prop-types";

//quede en 1:48

const DetailCard = ({ data }) => {
  const { title, price, brand, category, images, rating, description } =
    data || {};

  return (
    <section className="flex flex-col items-center pt-10">
      <article>
        <div className="h-96 w-80 bg-slate-50  rounded-[2.4rem]  overflow-hidden relative">
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
          className=" h-96 w-80 bg-slate-50  rounded-[2.4rem]  overflow-hidden py-8 px-6
      relative top-[-50px]"
        >
          <h3 className=" text-2xl font-extrabold">{title}</h3>
          <h4 className=" text-gray-400  font-medium text-base">{price}</h4>
          <h4 className=" text-gray-400 font-medium text-sm">
            Rating {rating}
          </h4>
          <p className=" text-gray-600 mt-6 line-clamp-[5]">{description}</p>
          <div className="flex  items-center justify-between mt-8">
            <button
              className=" bg-black text-sm font-semibold uppercase text-white px-5 py-3  
          rounded-3xl cursor-pointer"
            >
              Añadir al carrito
            </button>
            <div
              className="flex justify-center items-center rounded-full text-white font-semibold
           bg-green-600 w-10 h-10"
            >
              {category}
              {brand}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetailCard;

DetailCard.propTypes = {
  data: PropTypes.node.isRequired,
};
