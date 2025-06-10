import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import CardProduct from "../../components/CardProduct/CardProduct";
import { popular, testimonials } from "../../../public/data/Data";
import TestimonialCard from "../../components/TestimonialsCard/TestimonialCard";
import CounterBanner from "../../components/CounterBanner/CounterBanner";
import { useState, useEffect } from "react";

const Home = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    setPopularData(popular);
  }, []);

  useEffect(() => {
    setTestimonialsData(testimonials);
  }, []);

  return (
    <main className="h-full w-full">
      <Hero />

      {/* Componente contador */}
      <div className="flex justify-center items-center lg:block">
        <CounterBanner />
      </div>

      {/*productos populares*/}
      <div className="flex flex-col justify-center">
        <h3 className="text-[38px] lg:text-[48px] text-center mb-10 font-bold">
          Popular products
        </h3>
        <div
          className="flex flex-col justify-center lg:grid lg:grid-cols-4 lg:justify-around 
        md:grid md:grid-cols-2"
        >
          {popularData.map((oneCard) => (
            <article
              className="flex flex-col justify-center items-center lg:flex-row lg:justify-around"
              key={oneCard.id}
            >
              <CardProduct oneCard={oneCard} />
            </article>
          ))}
        </div>
      </div>

      {/* Banner super sale */}

      <Banner />

      {/*testimonios*/}
      <div className="m-5 sm:m-10 pb-6 ">
        <h3 className="text-[48px] text-center mb-10 font-bold">
          Testimonials
        </h3>
        <div
          className="flex justify-center flex-col lg:flex-row items-center
         lg:justify-around space-x-2.5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-5"
        >
          {testimonialsData.map((testimonialProp) => (
            <article className="pb-4" key={testimonialProp.id}>
              <TestimonialCard testimonialProp={testimonialProp} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
