import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../DetailCard/DetailCard";
import { productos } from "../../../../public/data/Data";

const DetailPage = () => {
  const [productData, setProductData] = useState({});

  const { id } = useParams;

  const filterById = () => {
    productos.some((product) => {
      if (product.id == id) {
        setProductData(product);
      }
    });
  };

  useEffect(() => {
    filterById();
  });

  return (
    <main className="min-h-screen bg-white">
      <DetailCard data={JSON.stringify(productData)} />
    </main>
  );
};

export default DetailPage;
