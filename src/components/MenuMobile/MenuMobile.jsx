import { Link } from "react-router-dom";

const MenuMobile = () => {
  return (
    <article
      className="bg-black w-52 pl-3 font-semibold text-[16px] font-poppins text-white
   leading-10 md:w-[250px]
   border-gray-700 border-2 md:pl-4 md:leading-[50px] rounded-xl"
    >
      <ul>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Home</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Productos</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/results">Contacto</Link>
        </li>
      </ul>
    </article>
  );
};

export default MenuMobile;
