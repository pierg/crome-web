import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Badge from "../../../components/Elements/Badge.js";

export default function CardProductPlain({
  type,
  image,
  title,
  price,
  badge,
  link,
}) {
  const types = {
    border: "bg-white shadow-lg rounded",
    borderless: "bg-transparent",
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full " + types[type]
        }
      >
        <div>
          <div className="h-8 text-center">{badge && <Badge {...badge} />}</div>
          <img alt="..." src={image} className="w-full p-6" />
        </div>
        <div className="p-6 flex-auto text-center">
          <h5 className="text-2xl font-bold mt-0">
            {link && link.to ? (
              <Link {...link} className="">
                {title}
              </Link>
            ) : (
              <a {...link} className="">
                {title}
              </a>
            )}
          </h5>
          {price && price.old && price.new ? (
            <>
              <span className="text-blueGray-700 text-lg line-through mr-2">
                {price.old}
              </span>
              <span className="text-red-500 font-semibold text-lg">
                {price.new}
              </span>
            </>
          ) : (
            <span className="text-blueGray-700 text-lg">{price}</span>
          )}
        </div>
      </div>
    </>
  );
}

CardProductPlain.defaultProps = {
  link: {},
  type: "border",
};

CardProductPlain.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["border", "borderless"]),
  price: PropTypes.oneOfType([
    // this is a simple price tag
    PropTypes.string,
    // this is to show a new price with an old one
    PropTypes.shape({
      old: PropTypes.string,
      new: PropTypes.string,
    }),
  ]),
  // props to pass to the Badge component
  badge: PropTypes.object,
  // properties to pass to the link object that wraps the title
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
