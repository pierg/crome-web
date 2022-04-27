/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Pagination({ color, links, size }) {
  const colors = {
    light:
      "bg-transparent border-blueGray-200 text-blueGray-200 hover:border-blueGray-400 hover:text-blueGray-400",
    dark:
      "bg-transparent border-blueGray-800 text-blueGray-800 hover:border-blueGray-700 hover:text-blueGray-700",
    blueGray:
      "bg-transparent border-blueGray-500 text-blueGray-500 hover:border-blueGray-700 hover:text-blueGray-700",
    red:
      "bg-transparent border-red-500 text-red-500 hover:border-red-700 hover:text-red-700",
    orange:
      "bg-transparent border-orange-500 text-orange-500 hover:border-orange-700 hover:text-orange-700",
    amber:
      "bg-transparent border-amber-500 text-amber-500 hover:border-amber-700 hover:text-amber-700",
    emerald:
      "bg-transparent border-emerald-500 text-emerald-500 hover:border-emerald-700 hover:text-emerald-700",
    teal:
      "bg-transparent border-teal-500 text-teal-500 hover:border-teal-700 hover:text-teal-700",
    lightBlue:
      "bg-transparent border-lightBlue-500 text-lightBlue-500 hover:border-lightBlue-700 hover:text-lightBlue-700",
    indigo:
      "bg-transparent border-indigo-500 text-indigo-500 hover:border-indigo-700 hover:text-indigo-700",
    purple:
      "bg-transparent border-purple-500 text-purple-500 hover:border-purple-700 hover:text-purple-700",
    pink:
      "bg-transparent border-pink-500 text-pink-500 hover:border-pink-700 hover:text-pink-700",
    "light-active":
      "bg-blueGray-200 border-blueGray-200 text-blueGray-800 hover:border-blueGray-400 hover:text-blueGray-800 hover:bg-blueGray-400",
    "dark-active":
      "bg-blueGray-800 border-blueGray-800 text-white hover:border-blueGray-700 hover:text-white hover:bg-blueGray-700",
    "blueGray-active":
      "bg-blueGray-500 border-blueGray-500 text-white hover:border-blueGray-700 hover:text-white hover:bg-blueGray-700",
    "red-active":
      "bg-red-500 border-red-500 text-white hover:border-red-700 hover:text-white hover:bg-red-700",
    "orange-active":
      "bg-orange-500 border-orange-500 text-white hover:border-orange-700 hover:text-white hover:bg-orange-700",
    "amber-active":
      "bg-amber-500 border-amber-500 text-white hover:border-amber-700 hover:text-white hover:bg-amber-700",
    "emerald-active":
      "bg-emerald-500 border-emerald-500 text-white hover:border-emerald-700 hover:text-white hover:bg-emerald-700",
    "teal-active":
      "bg-teal-500 border-teal-500 text-white hover:border-teal-700 hover:text-white hover:bg-teal-700",
    "lightBlue-active":
      "bg-lightBlue-500 border-lightBlue-500 text-white hover:border-lightBlue-700 hover:text-white hover:bg-lightBlue-700",
    "indigo-active":
      "bg-indigo-500 border-indigo-500 text-white hover:border-indigo-700 hover:text-white hover:bg-indigo-700",
    "purple-active":
      "bg-purple-500 border-purple-500 text-white hover:border-purple-700 hover:text-white hover:bg-purple-700",
    "pink-active":
      "bg-pink-500 border-pink-500 text-white hover:border-pink-700 hover:text-white hover:bg-pink-700",
    "light-disabled":
      "border-white text-blueGray-300 bg-white pointer-events-none",
    "dark-disabled":
      "border-blueGray-400 text-white bg-blueGray-400 pointer-events-none",
    "blueGray-disabled":
      "border-blueGray-200 text-white bg-blueGray-200 pointer-events-none",
    "red-disabled": "border-red-200 text-white bg-red-200 pointer-events-none",
    "orange-disabled":
      "border-orange-200 text-white bg-orange-200 pointer-events-none",
    "amber-disabled":
      "border-amber-200 text-white bg-amber-200 pointer-events-none",
    "emerald-disabled":
      "border-emerald-200 text-white bg-emerald-200 pointer-events-none",
    "teal-disabled":
      "border-teal-200 text-white bg-teal-200 pointer-events-none",
    "lightBlue-disabled":
      "border-lightBlue-200 text-white bg-lightBlue-200 pointer-events-none",
    "indigo-disabled":
      "border-indigo-200 text-white bg-indigo-200 pointer-events-none",
    "purple-disabled":
      "border-purple-200 text-white bg-purple-200 pointer-events-none",
    "pink-disabled":
      "border-pink-200 text-white bg-pink-200 pointer-events-none",
  };
  const sizes = {
    sm: "w-8 h-8",
    regular: "w-10 h-10",
    lg: "w-12 h-12",
  };
  let className =
    sizes[size] +
    " text-xs font-semibold flex mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid transition-all duration-150 ease-in-out";
  return (
    <>
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {links.map((prop, key) => (
            <li key={key}>
              {prop.to && (
                <Link
                  {...prop}
                  active={undefined}
                  disabled={undefined}
                  className={
                    className +
                    " " +
                    colors[
                      color +
                        (prop.disabled
                          ? "-disabled"
                          : prop.active
                          ? "-active"
                          : "")
                    ]
                  }
                />
              )}
              {prop.to === undefined && (
                <a
                  {...prop}
                  active={undefined}
                  disabled={undefined}
                  className={
                    className +
                    " " +
                    colors[
                      color +
                        (prop.disabled
                          ? "-disabled"
                          : prop.active
                          ? "-active"
                          : "")
                    ]
                  }
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Pagination.defaultProps = {
  size: "regular",
  color: "blueGray",
  links: [],
};

Pagination.propTypes = {
  // props to pass to the link component
  // if you pass a prop named to, the link will
  // be generated as a Link from react-router-dom
  // otherwise it will be generated as a <a> tag
  // you can also send disabled: true or active: true
  // for disabled and active effects
  links: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
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
};
