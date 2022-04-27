/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components

export default function InfoAreaIconTitleLinkColor({
  icon,
  color,
  title,
  description,
  link,
}) {
  const iconColor = {
    blueGray: "text-blueGray-500 border-blueGray-500",
    red: "text-red-500 border-red-500",
    orange: "text-orange-500 border-orange-500",
    amber: "text-amber-500 border-amber-500",
    emerald: "text-emerald-500 border-emerald-500",
    teal: "text-teal-500 border-teal-500",
    lightBlue: "text-lightBlue-500 border-lightBlue-500",
    indigo: "text-indigo-500 border-indigo-500",
    purple: "text-purple-500 border-purple-500",
    pink: "text-pink-500 border-pink-500",
  };

  return (
    <>
      <div
        className={
          iconColor[color] +
          " shadow-lg rounded-full justify-center items-center inline-flex text-center mb-2 bg-white w-16 h-16"
        }
      >
        <i className={icon + " text-1625"}></i>
      </div>
      <h6 className="text-xl font-semibold leading-tight mb-2 mt-6">{title}</h6>
      <p className="mb-2 text-blueGray-400">{description}</p>
      {link && link.to ? (
        <Link className="text-lightBlue-500" {...link}>
          {link.text} <i className="ml-1 fas fa-angle-right"></i>
        </Link>
      ) : link && link.href ? (
        <a className="text-lightBlue-500" {...link}>
          {link.children} <i className="ml-1 fas fa-angle-right"></i>
        </a>
      ) : null}
    </>
  );
}
InfoAreaIconTitleLinkColor.defaultProps = {
  color: "blueGray",
  link: {},
};
InfoAreaIconTitleLinkColor.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
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
