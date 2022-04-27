/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components

export default function CardPricingDetails({
  head,
  title,
  description,
  list,
  link,
  footer,
  gradient,
  color,
}) {
  const listColors = {
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
    "blueGray-gradient":
      "bg-gradient-to-tl from-blueGray-700 to-blueGray-500 bg-blueGray-500",
    "red-gradient": "bg-gradient-to-tl from-red-700 to-red-500 bg-red-500",
    "orange-gradient":
      "bg-gradient-to-tl from-orange-700 to-orange-500 bg-orange-500",
    "amber-gradient":
      "bg-gradient-to-tl from-amber-700 to-amber-500 bg-amber-500",
    "emerald-gradient":
      "bg-gradient-to-tl from-emerald-700 to-emerald-500 bg-emerald-500",
    "teal-gradient": "bg-gradient-to-tl from-teal-700 to-teal-500 bg-teal-500",
    "lightBlue-gradient":
      "bg-gradient-to-tl from-lightBlue-700 to-lightBlue-500 bg-lightBlue-500",
    "indigo-gradient":
      "bg-gradient-to-tl from-indigo-700 to-indigo-500 bg-indigo-500",
    "purple-gradient":
      "bg-gradient-to-tl from-purple-700 to-purple-500 bg-purple-500",
    "pink-gradient": "bg-gradient-to-tl from-pink-700 to-pink-500 bg-pink-500",
  };
  return (
    <>
      <div
        className={
          colors[color + (gradient ? "-gradient" : "")] +
          " mb-6 text-center text-white shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 text-white"
        }
      >
        <div className="bg-transparent first:rounded-lg-t px-5 py-3 mx-4 border-b border-black border-opacity-10">
          <h4 className="font-bold uppercase my-2 text-white">{head}</h4>
        </div>
        <div className="lg:px-12 px-4 py-5 flex-auto">
          <div className="text-6xl font-normal leading-tight font-bold text-white">
            {title}
          </div>
          <span>{description}</span>
          <ul className="my-8 list-none">
            {list.map((prop, key) => (
              <li key={key} className="py-2">
                <div className="flex items-center">
                  <span
                    className={
                      listColors[prop.color] +
                      " inline-flex text-center rounded-full mr-3 items-center justify-center w-10 h-10 bg-white"
                    }
                  >
                    <i className={prop.icon}></i>
                  </span>
                  <h6 className="text-lg">{prop.text}</h6>
                </div>
              </li>
            ))}
          </ul>
          {footer && footer.to && (
            <Link {...link} className="py-2 text-white uppercase font-bold" />
          )}
          {footer && footer.to === undefined && (
            <a {...link} className="py-2 text-white uppercase font-bold" />
          )}
        </div>

        <div className="mt-2 px-4 py-4 border-t border-black border-opacity-10 mx-4">
          {footer && footer.to && (
            <Link {...footer} className="text-white opacity-75" />
          )}
          {footer && footer.to === undefined && (
            <a {...footer} className="text-white opacity-75" />
          )}
        </div>
      </div>
    </>
  );
}
CardPricingDetails.defaultProps = {
  link: {},
  footer: {},
  list: [],
  gradient: false,
};
CardPricingDetails.propTypes = {
  head: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  footer: PropTypes.object,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
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
    })
  ),
  gradient: PropTypes.bool,
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
