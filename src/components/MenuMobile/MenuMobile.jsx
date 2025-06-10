import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Productos", path: "/listado" },
  { label: "Contacto", path: "/contact" },
];

const MenuMobile = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-1 p-4">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onClose}
          className="px-4 py-2 border rounded bg-black text-white text-center"
        >
          {item.label.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

MenuMobile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MenuMobile;
