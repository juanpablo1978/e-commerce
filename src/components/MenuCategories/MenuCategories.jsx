//import { Link } from "react-router-dom";

const categories = [
  "all",
  "Smartphone",
  "Computer",
  "Handset",
  "Cameras",
  "Robots",
  "Watches",
  "Consoles",
  "Smartwatches",
  "Laptops",
];

const MenuCategories = () => {
  return (
    <div className="flex flex-col gap-1 p-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className="px-4 py-2 border rounded bg-black text-white "
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
