/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components

export default function CardBlogFullBg({
  image,
  title,
  subtitle,
  link,
  innerLink,
  rounded,
  size,
}) {
  const sizes = {
    sm: "h-330-px",
    md: "h-430-px",
    lg: "h-530-px",
  };
  let body = (
    <div className="absolute text-left p-6 bottom-0">
      <h6 className="text-xl leading-normal mb-0 text-white opacity-75">
        {subtitle}
      </h6>
      <h5 className="text-2xl font-bold leading-tight mt-0 mb-2 text-white">
        {title}
      </h5>
    </div>
  );
  return (
    <>
      <div
        className={
          sizes[size] +
          " overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg transition-all duration-150 ease-in-out hover:z-1 hover:transform hover:scale-110 group" +
          (rounded ? " rounded-lg mb-4" : "")
        }
      >
        <div
          className={
            "absolute w-full h-full bg-50-center bg-cover transition-all duration-1000 ease-in-out group-hover:transform group-hover:scale-110" +
            (rounded ? " rounded-lg" : "")
          }
          style={{
            backgroundImage: "url('" + image + "')",
            backfaceVisibility: "hidden",
          }}
        ></div>
        <div
          className={
            "absolute w-full h-full bg-black opacity-50" +
            (rounded ? " rounded-lg" : "")
          }
        ></div>
        {link && link.to ? (
          <Link {...link}>{body}</Link>
        ) : (
          <a {...link}>{body}</a>
        )}
      </div>
    </>
  );
}
CardBlogFullBg.defaultProps = {
  innerLink: false,
  rounded: true,
  size: "md",
};

CardBlogFullBg.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // if it should have rounded coreners or not
  rounded: PropTypes.bool,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
  // this is for the height
  size: PropTypes.oneOf(["sm", "lg", "md"]),
};
