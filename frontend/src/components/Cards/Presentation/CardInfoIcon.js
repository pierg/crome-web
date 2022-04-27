import React from "react";
import PropTypes from "prop-types";
// components

export default function CardInfoIcon({
  icon,
  iconColor,
  gradient,
  title,
  description,
}) {
  const iconBgColor = {
    blueGray: "bg-blueGray-400",
    red: "bg-red-400",
    orange: "bg-orange-400",
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    teal: "bg-teal-400",
    lightBlue: "bg-lightBlue-400",
    indigo: "bg-indigo-400",
    purple: "bg-purple-400",
    pink: "bg-pink-400",
    "blueGray-gradient":
      "bg-gradient-to-b from-blueGray-400 to-blueGray-600 bg-blueGray-400",
    "red-gradient": "bg-gradient-to-b from-red-400 to-red-600 bg-red-400",
    "orange-gradient":
      "bg-gradient-to-b from-orange-400 to-orange-600 bg-orange-400",
    "amber-gradient":
      "bg-gradient-to-b from-amber-400 to-amber-600 bg-amber-400",
    "emerald-gradient":
      "bg-gradient-to-b from-emerald-400 to-emerald-600 bg-emerald-400",
    "teal-gradient": "bg-gradient-to-b from-teal-400 to-teal-600 bg-teal-400",
    "lightBlue-gradient":
      "bg-gradient-to-b from-lightBlue-400 to-lightBlue-600 bg-lightBlue-400",
    "indigo-gradient":
      "bg-gradient-to-b from-indigo-400 to-indigo-600 bg-indigo-400",
    "purple-gradient":
      "bg-gradient-to-b from-purple-400 to-purple-600 bg-purple-400",
    "pink-gradient": "bg-gradient-to-b from-pink-400 to-pink-600 bg-pink-400",
  };
  const gradientText = gradient ? "-gradient" : "";
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <div
            className={
              "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full " +
              iconBgColor[iconColor + gradientText]
            }
          >
            <i className={icon}></i>
          </div>
          <h6 className="text-xl font-semibold">{title}</h6>
          <p className="mt-2 mb-4 text-blueGray-400">{description}</p>
        </div>
      </div>
    </>
  );
}
CardInfoIcon.defaultProps = {
  iconColor: "lightBlue",
  gradient: true,
};

CardInfoIcon.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
  iconColor: PropTypes.oneOf([
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
  // if the background should have a gradient
  gradient: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};
