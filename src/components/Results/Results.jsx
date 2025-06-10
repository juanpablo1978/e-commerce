import { productos } from "../../../public/data/Data";
import DetailCard from "../Detail/DetailCard/DetailCard";

const Results = () => {
  const query = new URLSearchParams(window.location.search);
  const keyword = query.get("keyword")?.toLowerCase();
  const category = query.get("category");

  const filteredProducts = productos.filter((product) => {
    const matchesKeyword = keyword
      ? product.title.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
      : true;

    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesKeyword && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h2 className="text-2xl mb-4">
        {keyword && (
          <>
            Results for: <span className="font-bold">{keyword}</span>{" "}
          </>
        )}
        {category && (
          <>
            Category: <span className="font-bold">{category}</span>
          </>
        )}
        {!keyword && !category && <>All Products</>}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <DetailCard key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Results;
