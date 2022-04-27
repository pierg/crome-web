/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const DropdownNavbar = ({ text, items, navColor }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
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
      <a
        className={
          "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
          linkColor[navColor]
        }
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {text}{" "}
        <i
          className={
            "ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform " +
            (dropdownPopoverShow ? "rotate-180" : "")
          }
        ></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {items.map((prop, key) => {
          if (prop.disabled) {
            return (
              <span
                className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-500"
                key={key}
              >
                {prop.children}
              </span>
            );
          } else {
            if (prop.to) {
              return (
                <Link
                  {...prop}
                  key={key}
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-800"
                />
              );
            } else {
              return (
                <a
                  {...prop}
                  key={key}
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-800"
                />
              );
            }
          }
        })}
      </div>
    </>
  );
};

DropdownNavbar.defaultProps = {
  items: [],
};

DropdownNavbar.propTypes = {
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

export default DropdownNavbar;
