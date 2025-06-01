import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <article className="flex flex-col lg:flex-row items-center justify-center gap-16">
      <div
        className="flex flex-col lg:flex-row gap-10 text-2xl font-semibold items-center
      text-center px-4 lg:px-0"
      >
        <BsCartX className="w-32 h-32" />
        <p>
          Your cart is empty, add
          <br />
          products and get free shipping!
        </p>
      </div>
      <div className="flex">
        <h3 className="font-bold text-blue-900 hover:text-blue-700">
          {" "}
          <Link to="/listado">Discover products</Link>
        </h3>
      </div>
    </article>
  );
};

export default EmptyCart;
