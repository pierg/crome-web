/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components

export default function InfoAreaIconTitleLink({
  icon,
  iconColor,
  title,
  description,
  link,
}) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  const iconBgColor = {
    blueGray: "text-blueGray-500 bg-white",
    red: "text-red-500 bg-red-100",
    orange: "text-orange-500 bg-orange-100",
    amber: "text-amber-500 bg-amber-100",
    emerald: "text-emerald-500 bg-emerald-100",
    teal: "text-teal-500 bg-teal-100",
    lightBlue: "text-lightBlue-500 bg-lightBlue-100",
    indigo: "text-indigo-500 bg-indigo-100",
    purple: "text-purple-500 bg-purple-100",
    pink: "text-pink-500 bg-pink-100",
  };
  return (
    <>
      <div
        className={
          iconBgColor[iconColor] +
          " p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full"
        }
      >
        <i className={icon + " text-xl"}></i>
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">{title}</h3>
      {newDescription.map((prop, key) => {
        return (
          <p
            className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-700"
            key={key}
          >
            {prop}
          </p>
        );
      })}
      {link && link.innerLink ? (
        <Link to={link.link} className="font-bold text-blueGray-800 mt-8">
          {link.text}
        </Link>
      ) : link && !link.innerLink ? (
        <a
          href={link.link}
          target="_blank"
          className="font-bold text-blueGray-800 mt-8"
        >
          {link.text}
        </a>
      ) : null}
    </>
  );
}
InfoAreaIconTitleLink.defaultProps = {
  iconColor: "blueGray",
  description: [],
  link: {},
};
InfoAreaIconTitleLink.propTypes = {
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
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    // where the user should be redirected on click
    link: PropTypes.string.isRequired,
    // if innerLink is set to false
    // then the link will be generated as simple <a> a tag with target="_blank"
    // if not, it will be generated as a <Link> tag from react-router-dom
    innerLink: PropTypes.bool.isRequired,
  }),
};
