import { useNavigate } from "react-router-dom";

const categories = [
  "all",
  "Smartphones",
  "Computers",
  "Cameras",
  "Robots",
  "Watches",
  "Consoles",
  "Smartwatches",
  "Laptops",
  "Handsets",
];

const MenuCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    if (cat === "all") {
      navigate("/listado"); // Ruta para ver todos los productos, ajusta si usás otra
    } else {
      navigate(`/results?category=${cat}`);
    }
  };

  return (
    <div className="flex flex-col gap-1 p-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className="px-4 py-2 border rounded bg-black text-white"
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
