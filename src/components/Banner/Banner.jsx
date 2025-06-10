import banner from "/src/assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="m-5 sm:m-10 rounded-xl sm:bg-cover bg-center md:text-right flex items-center justify-end h-48 sm:h-96"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.75)",
      }}
    >
      <div className="text-center me-[5%] sm:me-[10%]">
        <p className="text-lg sm:text-[40px] sm:mb-4 font-medium text-white lg:text-[55px] lg:font-bold pb-4">
          ¡Super Sale!
        </p>
        <p className="text-sm sm:text-[20px] lg:text-[45px] lg:font-semibold text-white pb-6">
          Up to 35% off{" "}
        </p>
        <Link to="/listado">
          <button
            className="bg-black text-white font-medium py-1 px-2
         sm:px-5 sm:py-2 my-2 sm:text-[20px] text-sm lg:text-[30px] lg:font-semibold lg:w-[190px] lg:h-[65px]
          hover:bg-gray-800"
          >
            Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
