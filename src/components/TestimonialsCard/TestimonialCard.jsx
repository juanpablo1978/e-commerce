import PropTypes from "prop-types";

const TestimonialCard = ({ testimonialProp }) => {
  const { image, profile, testimonial } = testimonialProp || {};

  return (
    <article
      className="w-[300px] h-[300px] bg-gradient-to-r from-black to-gray-900 shadow-3xl text-white
    p-6 flex flex-col gap-y-4 rounded-md"
    >
      <div className="w-[70px] h-[70px] rounded-full">
        <img
          src={image}
          alt="foto perfil"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="font-semibold text-[22px]">{profile}</h3>
      <p className="text-gray-400">{testimonial}</p>
    </article>
  );
};

export default TestimonialCard;

TestimonialCard.propTypes = {
  testimonialProp: PropTypes.node.isRequired,
};
