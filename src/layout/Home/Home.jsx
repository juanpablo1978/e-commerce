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
    <div className="h-full w-full">
      <Hero />
      {/* Inicio segunda section */}
      <CounterBanner />

      <div className="m-5 sm:m-10">
        <h3 className="text-[40px] text-center mb-10 font-bold">
          Popular products
        </h3>
        <div className="sm:grid-rows-1 sm:grid-cols-4 sm:flex justify-around space-x-2.5">
          {popularData.map((oneCard) => (
            <article className="" key={oneCard.id}>
              <CardProduct oneCard={oneCard} />
            </article>
          ))}
        </div>
      </div>
      {/* Fin section de productos */}

      <Banner />

      <div className="m-5 sm:m-10 pb-6 ">
        <h3 className="text-[40px] text-center mb-10 font-bold">
          Testimonials
        </h3>
        <div
          className="flex justify-center flex-col lg:flex-row items-center
         lg:justify-around space-x-2.5"
        >
          {testimonialsData.map((testimonialProp) => (
            <article className="pb-4" key={testimonialProp.id}>
              <TestimonialCard testimonialProp={testimonialProp} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
