import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <article className="flex items-center justify-center gap-16 min-h-screen">
      <div className="flex gap-10 text-2xl font-semibold items-center">
        <FaCheckCircle className="w-32 h-32 text-green-700" />
        <p className="text-3xl">Pago exitoso!</p>
      </div>
      <div className="flex">
        <h3 className="font-bold text-blue-900 text-3xl hover:text-blue-700">
          {" "}
          <Link to="/">Volver</Link>
        </h3>
      </div>
    </article>
  );
};

export default Checkout;
