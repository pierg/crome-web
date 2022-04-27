import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardPricingList({
  head,
  title,
  list,
  gradient,
  color,
  image,
  button,
}) {
  const colors = {
    blueGray: "bg-blueGray-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    lightBlue: "bg-lightBlue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
  };
  return (
    <>
      <div
        className={
          colors[color] +
          " pt-12 mb-6 text-center text-white shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 bg-contain bg-no-repeat bg-50-top"
        }
        style={{ backgroundImage: "url('" + image + "')" }}
      >
        <div className="mt-12 px-4 py-5 flex-auto">
          <h6 className="font-bold uppercase mb-2">{head}</h6>
          <div className="text-6xl font-bold leading-tight mt-0 mb-2">
            {title}
          </div>
          <ul className="my-6 mx-4 list-none">
            {list.map((prop, key) => (
              <li
                key={key}
                className="py-3 border-b border-black border-opacity-10"
              >
                <b className="mr-2">{prop.title}</b>
                {prop.description}
              </li>
            ))}
          </ul>
          <div className="mb-6">
            <Button {...button} />
          </div>
        </div>
      </div>
    </>
  );
}
CardPricingList.defaultProps = {
  list: [],
  button: {},
};
CardPricingList.propTypes = {
  image: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  color: PropTypes.oneOf([
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
