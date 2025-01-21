import { productos } from "../../../public/data/Data";
import CardProduct from "../CardProduct/CardProduct";
//import axios from "axios";
//import { useState, useEffect } from "react";

//pasar la card al componente CardProduct

const Listado = () => {
  // const { buyProduct } = useContext(CartContext);

  //const [data, setData] = useState([]);

  /* useEffect(() => {
    axios.get({ productos }).then((res) => setData(res.data));
  }, []);

  const getProducts = async () => {
    const response = await fetch(productos);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getProducts();
  }[]);*/

  return (
    <main className="bg-white min-h-screen flex flex-wrap justify-center gap-20 py-16">
      <div className="w-full flex justify-center"></div>
      <section className="flex flex-wrap gap-14 justify-center max-w-[1080px]">
        {Array.isArray(productos) &&
          productos?.map((oneCard) => (
            <article className="" key={oneCard.id}>
              <CardProduct oneCard={oneCard} />
            </article>
          ))}
      </section>
    </main>
  );
};

export default Listado;
