import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    console.log(keyword);

    if (keyword.length === 0) {
      Swal.fire("Tienes que escribir una palabra clave");
    } else if (keyword.length < 4) {
      Swal.fire("Escriba un mínimo 4 caracteres");
    } else {
      e.target.keyword.value = "";
      navigate(`/results?keyword=${keyword}`);
    }
  };

  return (
    <form className="flex text-white text-2xl lg:pr-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text-lg bg-transparent border-[2px] border-gray-300 pl-7 lg:pl-10
        outline-none rounded-3xl md:block w-[205px] lg:h-[40px] lg:w-[540px]"
        placeholder="Search for products"
        name="keyword"
      />
      <div className="absolute text-xl lg:bottom-[20px] lg:left-[700px] lg:top-[80px] top-[167px] left-[65px]">
        <button type="submit">
          <FiSearch className="text-gray-500 lg:text-[21px]" />
        </button>
      </div>
    </form>
  );
};

export default Search;
