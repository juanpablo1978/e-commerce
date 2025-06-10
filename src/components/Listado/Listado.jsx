import { productos } from "../../../public/data/Data";
import CardProduct from "../CardProduct/CardProduct";
import { useState, useEffect } from "react";

const Listado = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(productos);
  }, []);

  return (
    <>
      <main className="bg-white min-h-screen flex flex-wrap justify-center gap-20 py-1 lg:py-16">
        <div className="w-full flex justify-center"></div>
        <section className="flex flex-wrap gap-14 justify-center max-w-[1080px]">
          {data.map((oneCard) => (
            <article key={oneCard.id}>
              <CardProduct oneCard={oneCard} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default Listado;
