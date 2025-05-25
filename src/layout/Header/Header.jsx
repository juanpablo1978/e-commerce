import { BsCartDash } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import Search from "../../components/Search/Search";
import { CounterCart } from "../../components/cart/countCart/CounterCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white h-full w-full px-6 py-12 font-poppins ">
      <article className="h-full flex items-center justify-center gap-11 pb-9 flex-wrap">
        <div className="flex gap-x-4">
          <div className="w-[50px] h-[50px] rounded-lg">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://images.pexels.com/photos/28428592/pexels-photo-28428592/free-photo-of-estructura-abstracta-de-cubo-3d-sobre-fondo-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="contact img"
            />
          </div>
          <button>
            <p
              className=" font-bold
          text-4xl pt-[4px] pl-[2px] text-white"
            >
              <Link to="/">E-COMMERCE</Link>
            </p>
          </button>
        </div>

        <div className="flex flex-row items-center gap-x-9 lg:gap-10">
          <Search className="" />

          <nav>
            <ul className="flex gap-5 font-semibold text-white text-[32px] pt-6 md:text-[42px] md: pb-4">
              <li>
                <Link to="/cartContent">
                  <div className="relative flex md:gap-3">
                    <button className="">
                      <BsCartDash />
                    </button>

                    <span>{cart.length > 0 ? <CounterCart /> : null}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </article>

      <article className="flex flex-row justify-center h-[2px] gap-5 items-center md:gap-11 relative">
        <div className="flex items-center md:gap-8">
          <button
            className="md:flex items-center md:border-[1px] md: border-gray-300 rounded-3xl
        justify-center w-[260px] h-12 font-light text-white gap-[75px]"
            onClick={toggleOpen}
          >
            <div className="flex items-center gap-3">
              <AiOutlineMenu />
              <h2 className="font-semibold text-xl text-gray-300">
                Categories
              </h2>
            </div>
            <BiChevronDown className="text-xl hidden md:block" />
          </button>
          <div
            className="absolute top-3  lg:top-6 lg:left-[575px]"
            onClick={toggleOpen}
          >
            {isOpen && <MenuCategories />}
          </div>

          <div className="md:hidden flex gap-2">
            <h3>Menu</h3>
            <span className="pt-1">
              <AiOutlineMenu />
            </span>
          </div>

          <div className="md:pt-3 font-semibold text-gray-300 text-[20px]">
            <ul className="md:flex gap-7 sm: hidden">
              <li className="hover:text-gray-400">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="/listado">Products</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div></div>
    </header>
  );
};

export default Header;
