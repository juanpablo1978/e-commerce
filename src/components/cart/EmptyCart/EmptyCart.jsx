import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <article className="flex items-center justify-center gap-16">
      <div className="flex gap-10 text-2xl font-semibold items-center">
        <BsCartX className="w-32 h-32" />
        <p>
          Tu carrito está vacíó, agrega
          <br />
          productos y consigue envios gratis!
        </p>
      </div>
      <div className="flex">
        <h3 className="font-bold text-blue-900 hover:text-blue-700">
          {" "}
          <Link to="/listado">Descubrir productos</Link>
        </h3>
      </div>
    </article>
  );
};

export default EmptyCart;
