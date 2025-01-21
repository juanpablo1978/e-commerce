const Contact = () => {
  return (
    <main className="min-h-screen bg-white">
      <article className="flex justify-evenly py-16 flex-col sm: px-4 lg:flex-row">
        <div className="lg:w-[1200px] lg:h-[900px] w-[350px] h-[300px]">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/28428592/pexels-photo-28428592/free-photo-of-estructura-abstracta-de-cubo-3d-sobre-fondo-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="contact img"
          />
        </div>
        <div className="pt-7">
          <div className="pb-7">
            <h3 className="text-black lg:text-3xl text-2xl font-semibold pb-3">
              BUENOS AIRES
            </h3>
            <h4 className="text-gray-600 text-2xl">
              Vicente López 557, Recoleta, CABA
            </h4>
            <h4 className="text-gray-600 text-2xl">11 5194 5555</h4>
            <h4 className="text-gray-600 text-2xl">
              Avenida del Libertador 1111, Recoleta, Bs. As.
            </h4>
            <h4 className="text-gray-600 text-2xl">11 5111 5555</h4>
            <h4 className="text-gray-600 text-2xl">
              ecommerce@ecommerce.com.ar
            </h4>
          </div>
          <div className="pb-6">
            <h3 className="text-black lg:text-3xl text-2xl font-semibold pb-3">
              NEW YORK
            </h3>
            <h4 className="text-gray-600 text-2xl">Madison Av. 22, NYC</h4>
            <h4 className="text-gray-600 text-2xl">94944 1555</h4>
            <h4 className="text-gray-600 text-2xl">Park Av. 543, NYC</h4>
            <h4 className="text-gray-600 text-2xl">9999 2222</h4>
            <h4 className="text-gray-600 text-2xl">ecommerce@ecommerce.com</h4>
          </div>
          <div>
            <h3 className="text-black lg:text-3xl text-2xl font-semibold pb-3">
              WARSZAWA
            </h3>
            <h4 className="text-gray-600 text-2xl">Ulica Marszałkowska 16</h4>
            <h4 className="text-gray-600 text-2xl">2344 4445</h4>
            <h4 className="text-gray-600 text-2xl">Ulica Świętokrzyska</h4>
            <h4 className="text-gray-600 text-2xl">9889 4545</h4>
            <h4 className="text-gray-600 text-2xl">ecommerce@ecommerce.pl</h4>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Contact;
