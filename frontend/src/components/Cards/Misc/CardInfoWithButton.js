import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardInfoWithButton({
  icon,
  color,
  title,
  description,
  button,
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
  };
  return (
    <>
      <div className="shadow-lg rounded-lg bg-white relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div className="p-6 flex-auto">
          <div
            className={
              iconColor[color] +
              " shadow-lg rounded-full justify-center items-center mx-auto mb-6 inline-flex w-12 h-12"
            }
          >
            <i className={icon + " text-xl"}></i>
          </div>
          <h6 className={textColor[color] + " text-xl font-bold mt-0 mb-0"}>
            {title}
          </h6>
          <p className="mt-2 mb-4 leading-relaxed text-blueGray-500">
            {description}
          </p>
          <Button {...button} />
        </div>
      </div>
    </>
  );
}
CardInfoWithButton.defaultProps = {
  color: "blueGray",
  button: {},
};

CardInfoWithButton.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
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
  // if the background should have a gradient
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
};
