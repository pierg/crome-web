import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardPricingLogo({
  description,
  title,
  list,
  line,
  image,
  button,
}) {
  const colors = {
    blueGray: "border-blueGray-500",
    red: "border-red-500",
    orange: "border-orange-500",
    amber: "border-amber-500",
    emerald: "border-emerald-500",
    teal: "border-teal-500",
    lightBlue: "border-lightBlue-500",
    indigo: "border-indigo-500",
    purple: "border-purple-500",
    pink: "border-pink-500",
  };
  return (
    <>
      <div className="mt-12 shadow-lg rounded-lg bg-white w-full mb-6">
        <div className="pt-4">
          <img alt="..." className="block mx-auto w-100-px" src={image} />
        </div>
        <div className="text-center p-5 flex-auto">
          <div className="flex flex-wrap">
            <div className="px-4 relative w-full">
              <span className="text-blueGray-500 mt-2 text-5xl">
                {description}
              </span>
              <h5 className="text-2xl font-bold leading-tight mt-2 mb-2">
                {title}
              </h5>

              <hr className={colors[line] + " my-2 mx-auto w-1/5"} />
            </div>
          </div>

          <div className="flex flex-wrap">
            <ul className="mt-2 mb-6 list-none mx-auto text-center flex flex-col">
              {list.map((prop, key) => (
                <li key={key} className="py-1 text-blueGray-500">
                  {prop}
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-4">
            <Button {...button} />
          </div>
        </div>
      </div>
    </>
  );
}
CardPricingLogo.defaultProps = {
  list: [],
  line: "blueGray",
  button: {},
};
CardPricingLogo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.string),
  line: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
