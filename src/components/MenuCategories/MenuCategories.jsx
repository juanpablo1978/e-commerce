import { Link } from "react-router-dom";

//https://www.youtube.com/watch?v=TToPJy1kTAw ver este video 2 hs 46 min resuelve categoria

const MenuCategories = () => {
  return (
    <article
      className="bg-black w-52 pl-3 font-semibold text-[16px] font-poppins text-white
     leading-10 md:w-[250px]
     border-gray-700 border-2 md:pl-4 md:leading-[50px] rounded-xl"
    >
      <ul>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Smartphone</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Computer</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Handset</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Cameras</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Robots</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Watches</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Consoles</Link>
        </li>
        <li className="hover:text-gray-400 border-b-[1px] border-gray-300">
          <Link to="/results">Smartwatches</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/results">Laptops</Link>
        </li>
      </ul>
    </article>
  );
};

export default MenuCategories;
