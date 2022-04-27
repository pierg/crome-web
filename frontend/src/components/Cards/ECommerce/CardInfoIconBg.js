/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardInfoIconBg({
  icon,
  color,
  title,
  description,
  link,
}) {
  const iconColor = {
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
  const footerColor = {
    blueGray: "text-blueGray-500 border-blueGray-200",
    red: "text-red-500 border-blueGray-200",
    orange: "text-orange-500 border-blueGray-200",
    amber: "text-amber-500 border-blueGray-200",
    emerald: "text-emerald-500 border-blueGray-200",
    teal: "text-teal-500 border-blueGray-200",
    lightBlue: "text-lightBlue-500 border-blueGray-200",
    indigo: "text-indigo-500 border-blueGray-200",
    purple: "text-purple-500 border-blueGray-200",
    pink: "text-pink-500 border-blueGray-200",
  };
  return (
    <>
      <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full mb-6 group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:z-2">
        <div
          className={
            "-mt-6 shadow-lg rounded-full mx-auto w-16 h-16 inline-flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-75 " +
            iconColor[color]
          }
        >
          <i className={icon + " block mx-auto text-xl"}></i>
        </div>
        <div className="pt-8 pb-16 px-10 flex-auto relative overflow-hidden">
          <h4 className="text-2xl font-bold mt-0 mb-2">{title}</h4>
          <p className="text-blueGray-500 leading-relaxed">{description}</p>
          <div
            className={
              footerColor[color] +
              " opacity-0 rounded-b px-4 py-4 border-t absolute bottom-0 left-0 w-full text-center flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-100"
            }
          >
            {link && link.to ? <Link {...link} /> : <a {...link} />}
          </div>
        </div>
      </div>
    </>
  );
}

CardInfoIconBg.defaultProps = {
  button: {},
  color: "blueGray",
};

CardInfoIconBg.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // color for the icon and link
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
  // properties to pass to the link object that appears on hover
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
