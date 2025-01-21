import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { SlSocialGoogle } from "react-icons/sl";

const Footer = () => {
  return (
    <main
      className=" bg-black text-white flex p-8 items-center
     flex-col xl:flex-row justify-around"
    >
      <article className="flex items-center flex-col">
        <p className="text-lg font-light text-stone-300">
          64 st james boulevard
        </p>
        <p className="text-lg font-light pb-9 text-stone-300">
          hoswick ,ze2 7z
        </p>
        <span className="border-t-[1px] text-stone-300 px-[135px]"></span>
        <div className="flex flex-row text-stone-500 text-3xl gap-8 py-10">
          <SlSocialGoogle />
          <AiOutlineFacebook />
          <FaWhatsapp />
        </div>
      </article>

      <article className="pb-16 text-stone-300">
        <h3 className="text-lg font-bold">Find product</h3>
        <ul className="text-lg list-disc font-light">
          <li>Brownze arnold</li>
          <li>Chronograph blue</li>
          <li>Smart phones</li>
          <li>Automatic watch</li>
          <li>Hair straighteners</li>
        </ul>
      </article>

      <article className="pb-16 text-stone-300">
        <h3 className="text-lg font-bold">Get help</h3>
        <ul className="text-lg list-disc font-light">
          <li>About us</li>
          <li>Contact us</li>
          <li>Return policy</li>
          <li>Privacy policy</li>
          <li>Payment policy</li>
        </ul>
      </article>

      <article className="text-stone-300">
        <h3 className="text-lg font-bold">About us</h3>
        <ul className="text-lg list-disc font-light xl:pb-[63px]">
          <li>News</li>
          <li>Service</li>
          <li>Out policy</li>
          <li>Custmer care</li>
          <li>Faq’s</li>
        </ul>
      </article>
    </main>
  );
};

export default Footer;
