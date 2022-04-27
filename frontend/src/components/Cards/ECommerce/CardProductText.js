import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardProductText({
  image,
  icon,
  color,
  text,
  description,
  title,
  link,
}) {
  let iconColor = {
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
      <div className="shadow-lg rounded-lg overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div className="p-6">
          <img alt="..." src={image} className="w-full" />
        </div>
        <div className="px-6 pb-6 flex-auto">
          <h6
            className={iconColor[color] + " font-bold uppercase text-sm mb-2"}
          >
            <i className={icon + " mr-1 opacity-75"}></i> {text}
          </h6>
          <h4 className="text-2xl font-semibold leading-tight mt-0 mb-2 my-4">
            {link && link.to ? (
              <Link {...link} className="">
                {title}
              </Link>
            ) : (
              <a {...link} className="">
                {title}
              </a>
            )}
          </h4>
          <p className="text-blueGray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
}

CardProductText.defaultProps = {
  link: {},
  color: "blueGray",
};

CardProductText.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.string,
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
  text: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  // properties to pass to the link object that wraps the title
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
