import { productos } from "../../../public/data/Data";
import DetailCard from "../Detail/DetailCard/DetailCard";

const Results = () => {
  //Buscador
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword")?.toLowerCase();

  const filteredProducts = productos.filter(
    (product) =>
      product.title.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword)
  );

  //filtro por categoria

  return (
    <div className="min-h-screen bg-white text-black p-8">
      {/*Resultados del buscador, reutilizando DetailCard*/}
      <h2 className="text-2xl mb-4">
        Results for: <span className="font-bold">{keyword}</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md border-black blorder-[2px]"
            >
              <DetailCard key={product.id} data={product} />
            </div>
          ))}
        </div>
      )}
      {/*Resultados del filtrado por categorias*/}
    </div>
  );
};

export default Results;
