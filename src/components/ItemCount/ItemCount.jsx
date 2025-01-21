import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const ItemCount = ({ product }) => {
  const { buyProduct, decrese } = useContext(CartContext);

  return (
    <div className="flex text-gray-400 justify-center items-center gap-1">
      <button
        onClick={() => decrese(product)}
        className="border-gray-400 border-2 w-10 h-12"
      >
        -
      </button>
      <span className="border-gray-400 border-2 w-16 h-12 flex justify-center items-center">
        {product.quanty}
      </span>
      <button
        onClick={() => buyProduct(product)}
        className="border-gray-400 border-[2px] w-10 h-12"
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;

ItemCount.propTypes = {
  product: PropTypes.object,
};
