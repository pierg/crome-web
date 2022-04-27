import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardProductPrice({
  image,
  subtitle,
  title,
  description,
  price,
  button,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="px-6">
          <img alt="..." src={image} className="w-full" />
        </div>
        <div className="px-6 py-6 flex-auto">
          <h6 className="text-sm font-bold uppercase mt-0 mb-1 text-pink-500">
            {subtitle}
          </h6>
          <h5 className="text-2xl font-semibold mt-0 mb-2">{title}</h5>
          <p className="text-blueGray-500 leading-relaxed">{description}</p>
          <div className="flex justify-between mt-2">
            <span className="text-blueGray-700 text-xl mt-1">{price}</span>
            <Button {...button} size={"sm"} />
          </div>
        </div>
      </div>
    </>
  );
}

CardProductPrice.defaultProps = {
  button: {},
};

CardProductPrice.propTypes = {
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  // props to send to the Button component
  button: PropTypes.object,
};
