import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../DetailCard/DetailCard";
import { productos } from "../../../../public/data/Data";

const DetailPage = () => {
  const [productData, setProductData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const found = productos.find((product) => product.id === Number(id));
    setProductData(found || null);
  }, [id]);

  return (
    <main className="min-h-screen bg-white">
      {productData ? (
        <DetailCard data={productData} />
      ) : (
        <p className="text-center p-4">Producto no encontrado</p>
      )}
    </main>
  );
};

export default DetailPage;
