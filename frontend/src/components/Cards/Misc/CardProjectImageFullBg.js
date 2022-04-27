import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardProjectImageFullBg({
  image,
  title,
  description,
  icon,
  color,
  button,
  alignment,
}) {
  const colors = {
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
  const alignmentsText = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const alignmentsIcon = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };
  return (
    <>
      <div
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-50 bg-cover p-10"
        style={{ backgroundImage: "url('" + image + "')" }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 z-0 rounded-lg"></div>
        <div className={alignmentsText[alignment] + " flex-auto z-1"}>
          <div
            className={
              alignmentsIcon[alignment] +
              " mb-6 bg-white rounded-full w-16 h-16 text-center inline-flex items-center justify-center "
            }
          >
            <i className={colors[color] + " text-2xl " + icon}></i>
          </div>
          <h3 className="text-3xl font-bold mt-0 mb-2 text-white leading-tight">
            {title}
          </h3>
          <h6 className="text-white opacity-75 text-xl mt-0 mb-4">
            {description}
          </h6>
          <Button {...button} />
        </div>
      </div>
    </>
  );
}
CardProjectImageFullBg.defaultProps = {
  button: {},
  color: "blueGray",
  alignment: "center",
};
CardProjectImageFullBg.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  icon: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
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
