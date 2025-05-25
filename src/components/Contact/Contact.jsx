const Contact = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center">
      <article className="flex justify-center items-center py-16 flex-col lg:flex-row">
        <div className="lg:w-[900px] lg:h-[800px] w-[300px] h-[290px] lg:mr-6 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/28428592/pexels-photo-28428592/free-photo-of-estructura-abstracta-de-cubo-3d-sobre-fondo-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="contact img"
          />
        </div>
        <div className="pt-7 lg:pl-5">
          <div className="pb-7">
            <h3 className="text-black lg:text-3xl text-[24px] font-semibold pb-3">
              BUENOS AIRES
            </h3>
            <div className="text-[22px]">
              <h4 className="text-gray-600 text">Vicente López 557, CABA</h4>
              <h4 className="text-gray-600">11 5194 5555</h4>
              <h4 className="text-gray-600">Del Libertador 1111, Bs. As.</h4>
              <h4 className="text-gray-600">11 5111 5555</h4>
              <h4 className="text-gray-600">ecommerce@ecom.com.ar</h4>
            </div>
          </div>
          <div className="pb-6">
            <h3 className="text-black lg:text-3xl text-[24px] font-semibold pb-3">
              NEW YORK
            </h3>
            <div className="text-[22px]">
              <h4 className="text-gray-600">Madison Av. 22, NYC</h4>
              <h4 className="text-gray-600">94944 1555</h4>
              <h4 className="text-gray-600">Park Av. 543, NYC</h4>
              <h4 className="text-gray-600">9999 2222</h4>
              <h4 className="text-gray-600">ecommerce@ecom.com</h4>
            </div>
          </div>
          <div>
            <h3 className="text-black lg:text-3xl text-[24px] font-semibold pb-3">
              WARSZAWA
            </h3>
            <div className="text-[22px]">
              <h4 className="text-gray-600">Ulica Marszałkowska 16</h4>
              <h4 className="text-gray-600">2344 4445</h4>
              <h4 className="text-gray-600">Ulica Świętokrzyska</h4>
              <h4 className="text-gray-600">9889 4545</h4>
              <h4 className="text-gray-600">ecommerce@ecom.pl</h4>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Contact;
