/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardInfoIconLeft({
  icon,
  color,
  title,
  description,
  link,
  inverted,
}) {
  let iconColor = {
    light: "bg-blueGray-200 text-blueGray-800",
    dark: "bg-blueGray-800 text-blueGray-100",
    blueGray: "bg-blueGray-500 text-white",
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    lightBlue: "bg-lightBlue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    purple: "bg-purple-500 text-white",
    pink: "bg-pink-500 text-white",
    "light-inverted": "text-blueGray-200 bg-blueGray-800",
    "dark-inverted": "text-blueGray-800 bg-blueGray-100",
    "blueGray-inverted": "text-blueGray-500 bg-white",
    "red-inverted": "text-red-500 bg-white",
    "orange-inverted": "text-orange-500 bg-white",
    "amber-inverted": "text-amber-500 bg-white",
    "emerald-inverted": "text-emerald-500 bg-white",
    "teal-inverted": "text-teal-500 bg-white",
    "lightBlue-inverted": "text-lightBlue-500 bg-white",
    "indigo-inverted": "text-indigo-500 bg-white",
    "purple-inverted": "text-purple-500 bg-white",
    "pink-inverted": "text-pink-500 bg-white",
  };
  let textColor = {
    light: "text-blueGray-400",
    dark: "text-blueGray-800",
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
    "light-inverted": "text-blueGray-800",
    "dark-inverted": "text-white",
    "blueGray-inverted": "text-white",
    "red-inverted": "text-white",
    "orange-inverted": "text-white",
    "amber-inverted": "text-white",
    "emerald-inverted": "text-white",
    "teal-inverted": "text-white",
    "lightBlue-inverted": "text-white",
    "indigo-inverted": "text-white",
    "purple-inverted": "text-white",
    "pink-inverted": "text-white",
  };
  const cardColors = {
    "light-inverted": "bg-blueGray-400 text-blueGray-800",
    "dark-inverted": "bg-blueGray-800 text-white",
    "blueGray-inverted": "bg-blueGray-500 text-white",
    "red-inverted": "bg-red-500 text-white",
    "orange-inverted": "bg-orange-500 text-white",
    "amber-inverted": "bg-amber-500 text-white",
    "emerald-inverted": "bg-emerald-500 text-white",
    "teal-inverted": "bg-teal-500 text-white",
    "lightBlue-inverted": "bg-lightBlue-500 text-white",
    "indigo-inverted": "bg-indigo-500 text-white",
    "purple-inverted": "bg-purple-500 text-white",
    "pink-inverted": "bg-pink-500 text-white",
    light: "bg-white text-blueGray-800",
    dark: "bg-white text-blueGray-800",
    blueGray: "bg-white text-blueGray-800",
    red: "bg-white text-blueGray-800",
    orange: "bg-white text-blueGray-800",
    amber: "bg-white text-blueGray-800",
    emerald: "bg-white text-blueGray-800",
    teal: "bg-white text-blueGray-800",
    lightBlue: "bg-white text-blueGray-800",
    indigo: "bg-white text-blueGray-800",
    purple: "bg-white text-blueGray-800",
    pink: "bg-white text-blueGray-800",
  };
  return (
    <>
      <div
        className={
          cardColors[color + (inverted ? "-inverted" : "")] +
          " rounded-lg text-left p-6 flex items-start"
        }
      >
        <div
          className={
            iconColor[color + (inverted ? "-inverted" : "")] +
            " shadow-lg rounded-full justify-center items-center inline-flex text-center p-2 text-xl w-12 h-12"
          }
        >
          <i className={icon}></i>
        </div>
        <div className="ml-6 flex-1">
          <h6
            className={
              textColor[color + (inverted ? "-inverted" : "")] +
              " text-xl font-bold mt-3 mb-0"
            }
          >
            {title}
          </h6>
          <p
            className={
              (inverted ? "text-white opacity-75" : "text-blueGray-500") +
              " mt-2 mb-4 leading-relaxed"
            }
          >
            {description}
          </p>
          {link && link.to && (
            <Link
              {...link}
              className={textColor[color + (inverted ? "-inverted" : "")]}
            />
          )}
          {link && link.to === undefined && (
            <a
              {...link}
              className={textColor[color + (inverted ? "-inverted" : "")]}
            />
          )}
        </div>
      </div>
    </>
  );
}
CardInfoIconLeft.defaultProps = {
  color: "blueGray",
  link: {},
  inverted: false,
};

CardInfoIconLeft.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
  color: PropTypes.oneOf([
    "light",
    "dark",
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
  // if true, than the color will go as background
  // for the whole card, not only the icon
  inverted: PropTypes.bool,
  // if the background should have a gradient
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the anchor as object
  // if you pass a prop "to" it will be
  // generated as a Link from react-router-dom
  // otherwise as an <a> tag
  link: PropTypes.object,
};
