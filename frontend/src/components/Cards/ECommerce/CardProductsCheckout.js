import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";

export default function CardProductsCheckout({ images, discount, details }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          {images.map((prop, key) => (
            <div key={key} className="items-center my-4 flex items-start">
              <img src={prop.image} className="mr-4 w-20 p-2" alt="..." />
              <div className="flex-1">
                <div className="justify-between">
                  <h6 className="text-xl font-semibold leading-tight mb-1">
                    {prop.title}
                  </h6>
                  <p className="text-blueGray-500 uppercase font-bold text-xs">
                    {prop.subtitle}
                  </p>
                </div>
              </div>
              <span className="text-blueGray-700">{prop.price}</span>
            </div>
          ))}
          {discount && (
            <>
              <hr className="mt-6 mb-4 bg-blueGray-300 ml-0" />
              <div className="mb-0 pt-0 relative">
                <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2 ml-1">
                  {discount.text}
                </label>
                <div className="mb-2 relative flex flex-wrap w-full items-stretch">
                  <div className="mr-2">
                    <Input {...discount.input} />
                  </div>
                  <div className="mb-0">
                    <Button {...discount.button} />
                  </div>
                </div>
              </div>
            </>
          )}
          {details.map((prop, key) => (
            <div key={key}>
              <hr className="mt-4 mb-2 bg-blueGray-300 ml-0" />
              {prop.map((propDetails, propKey) => (
                <div key={propKey} className="flex justify-between">
                  <h6 className="text-blueGray-700 leading-normal mt-0 mb-2">
                    {propDetails.text}
                  </h6>
                  <h6 className="leading-normal mt-0 mb-2">
                    {propDetails.info}
                  </h6>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

CardProductsCheckout.defaultProps = {
  images: [],
  details: [],
};

CardProductsCheckout.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      price: PropTypes.string,
    })
  ),
  discount: PropTypes.shape({
    text: PropTypes.string,
    // props to pass to the Input component
    input: PropTypes.object,
    // props to pass to the Button component
    button: PropTypes.object,
  }),
  details: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        info: PropTypes.string,
      })
    )
  ),
};
