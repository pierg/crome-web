import React from "react";
import PropTypes from "prop-types";
// components

export default function CardBlogImage({ image, title, description, color }) {
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
          "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg " +
          bgColor[color]
        }
      >
        <img
          alt="..."
          src={image}
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block h-95-px -top-94-px"
          >
            <polygon
              points="-30,95 583,95 583,65"
              className={textColor[color] + " fill-current"}
            ></polygon>
          </svg>
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-md font-light mt-2 text-white">{description}</p>
        </blockquote>
      </div>
    </>
  );
}

CardBlogImage.defaultProps = {
  color: "blueGray",
};
CardBlogImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // the background of the bottom part of the card
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
