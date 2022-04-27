import React from "react";
import PropTypes from "prop-types";
// components

export default function CardInfoImage({ title, description, image, color }) {
  const bgColor = {
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
  const textColor = {
    blueGray: "text-blueGray-500",
    red: "text-red-500",
    orange: "text-orange-500",
    amber: "text-amber-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    lightBlue: "text-lightBlue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
  };
  return (
    <>
      <div
        className={
          "shadow-lg rounded border-0 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg text-white " +
          bgColor[color]
        }
      >
        <img
          className="w-full flex-shrink-0 rounded-t-lg"
          src={image}
          alt="..."
        />

        <blockquote className="p-6 relative mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="block w-full absolute text-blueGray-700 h-95-px -top-94-px left-0"
          >
            <polygon
              points="0,52 583,95 0,95"
              className={textColor[color] + " fill-current"}
            ></polygon>
            <polygon
              points="0,42 583,95 683,0 0,95"
              opacity=".2"
              className={textColor[color] + " fill-current"}
            ></polygon>
          </svg>
          <h4 className="text-2xl font-semibold mt-0 text-white">{title}</h4>
          <p className="text-white mt-2">{description}</p>
        </blockquote>
      </div>
    </>
  );
}

CardInfoImage.defaultProps = {
  color: "blueGray",
};

CardInfoImage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
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
