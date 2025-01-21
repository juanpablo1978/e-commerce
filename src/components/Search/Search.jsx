import { FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();

    if (keyword.length === 0) {
      Swal.fire("Escriba el nombre del producto");
      /* } else if (search.length < 4) {
      Swal.fire("Escriba un mínimo 4 caracteres");*/
    } else {
      e.target.keyword.value = "";
      navigate(`/results?keyword=${keyword}`);
    }
  };

  return (
    <form
      className="flex text-white
gap-2  text-2xl pr-5 relative"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="text-lg md:w-[560px] bg-transparent border-[2px] md:h-[51px] border-gray-300 
outline-none rounded-3xl px-5 sm: w-[50px] h-[15px] hidden md:block"
        placeholder="Search for products"
        name="keyword"
      />
      <div className="absolute text-xl md:left-[500px] md:bottom-2">
        <button type="submit">
          <FiSearch className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default Search;
