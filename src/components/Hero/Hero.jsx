import compubanner from "/src/assets/images/compubanner.jpg";

const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-center h-36 sm:h-96"
      style={{
        backgroundImage: `url(${compubanner})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Hero;
