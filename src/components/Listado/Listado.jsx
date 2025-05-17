import { productos } from "../../../public/data/Data";
import CardProduct from "../CardProduct/CardProduct";
import { useState, useEffect } from "react";
//pasar la card al componente CardProduct

const Listado = () => {
  // const { buyProduct } = useContext(CartContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(productos);
  }, []);

  return (
    <main className="bg-white min-h-screen flex flex-wrap justify-center gap-20 py-16">
      <div className="w-full flex justify-center"></div>
      <section className="flex flex-wrap gap-14 justify-center max-w-[1080px]">
        {data.map((oneCard) => (
          <article key={oneCard.id}>
            <CardProduct oneCard={oneCard} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default Listado;
