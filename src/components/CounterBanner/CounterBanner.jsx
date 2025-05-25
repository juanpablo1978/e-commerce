import { FaBoxOpen } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { FaShieldHeart } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import CountUp from "react-countup";
import { dataCounter } from "../../../public/data/Data";

const CounterBanner = () => {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 m-6 md:m-12 p-4 border
    py-10 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl"
    >
      {dataCounter.map(({ id, endCounter, text }) => (
        <div
          className="flex justify-center flex-col items-center me-4 md:me-0 
          text-3xl  pt-10"
          key={id}
        >
          <p className="pb-2 font-semibold">
            + <CountUp end={endCounter} start={0} duration={7} /> K
          </p>
          <p className="font-semibold">{text}</p>
        </div>
      ))}

      <div className="flex justify-center  flex-col items-center pt-11">
        <FaBoxOpen className="h-12 w-12 text-primary mr-3 mb-2" />
        <div>
          <p className="text-lg sm:text-base font-medium text-center">
            Free delivery
          </p>
          <p className="text-sm sm:text-xs text-center">
            on orders above $50.00
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center ms-4 md:ms-0">
        <FaCrown className="h-12 w-12 text-primary mr-3 mb-2" />
        <div>
          <p className="text-lg sm:text-base font-medium text-center">
            Best quality
          </p>
          <p className="text-sm sm:text-xs text-center">
            best quality at a low price
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center me-4 md:me-0">
        <FaShieldHeart className="h-12 w-12 text-primary mr-3 mb-2" />
        <div>
          <p className="text-lg sm:text-base font-medium text-center">
            1 year warranty
          </p>
          <p className="text-sm sm:text-xs text-center">Available warranty</p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center me-4 md:me-0">
        <FaCheck className="h-12 w-12 text-primary mr-3 mb-2" />
        <div>
          <p className="text-lg sm:text-base font-medium text-center">
            Happy client
          </p>
          <p className="text-sm sm:text-xs text-center">around the worlds</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBanner;
