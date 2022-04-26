/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import classnames from "classnames";

const DropdownHoverNavbar = ({ text, items, navColor }) => {
  let linkColor = {
    light: "text-blueGray-800",
    white: "text-blueGray-800",
    transparent: "lg:text-white text-blueGray-800",
    dark: "text-white",
    black: "text-white",
    blueGray: "text-white",
    red: "text-white",
    orange: "text-white",
    amber: "text-white",
    emerald: "text-white",
    teal: "text-white",
    lightBlue: "text-white",
    indigo: "text-white",
    purple: "text-white",
    pink: "text-white",
  };
  return (
    <>
      <div className="inline-block group">
        <a
          className={
            "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-200 ease-in-out " +
            linkColor[navColor]
          }
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {text} <i className="ml-1 fas fa-caret-down"></i>
        </a>
        <div className=" block absolute origin-top-left bg-white text-base float-left p-2 pt-0 list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-200 ease-in-out transform scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 border">
          <div className="flex flex-wrap max-lg:pl-4">
            {items.map((prop, key) => {
              return (
                <div key={key} className="w-full lg:w-1/3">
                  <p className="uppercase font-bold text-xs px-3 pt-6 pb-2 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                    {prop.title}
                  </p>
                  <div className="pl-0">
                    {prop.items.map((itemProp, itemKey) => {
                      return (
                        <Link
                          {...itemProp}
                          key={itemKey}
                          className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

DropdownHoverNavbar.defaultProps = {
  items: [],
};

DropdownHoverNavbar.propTypes = {
  // text of the dropdown
  text: PropTypes.string,
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: if you pass disabled as prop inside this object
  // // // the link will be rendered as a span element
  items: PropTypes.arrayOf(PropTypes.object),
  // you specify the nav color, so that the
  // dropdown text will be styled accordingly
  navColor: PropTypes.oneOf([
    "dark",
    "light",
    "transparent",
    "white",
    "black",
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

export default DropdownHoverNavbar;
