/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
// import classnames from "classnames";

const DropdownHoverNavbar = ({ text, items, navColor }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [menuClasses, setMenuClasses] = React.useState("");
  const [animating, setAntimating] = React.useState(false);
  const [transformOrigin, setTransformOrigin] = React.useState(
    "origin-top-right"
  );
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const origins = {
    "top-start": "origin-bottom-left",
    "top-end": "origin-bottom-right",
    "bottom-start": "origin-top-left",
    "bottom-end": "origin-top-right",
    "right-start": "origin-top-left",
    "right-end": "origin-top-left",
    "left-start": "origin-top-right",
    "left-end": "origin-top-right",
    bottom: "origin-top",
    top: "origin-bottom",
    left: "origin-right",
    right: "origin-left",
  };
  const startAnimation = () => {
    if (!animating) {
      setAntimating(true);
      if (dropdownPopoverShow) {
        setMenuClasses("");
        setTimeout(function () {
          setDropdownPopoverShow(false);
        }, 310);
      } else {
        let popperObject = createPopper(
          btnDropdownRef.current,
          popoverDropdownRef.current,
          {
            placement: "bottom-start",
          }
        );
        setTransformOrigin(origins[popperObject.state.placement]);
        setDropdownPopoverShow(true);
        setTimeout(function () {
          setMenuClasses("opacity-100 scale-100 ");
        }, 10);
      }
      setTimeout(function () {
        setAntimating(false);
      }, 350);
    }
  };
  let linkColor = {
    light: "text-blueGray-800",
    white: "text-blueGray-800",
    transparent: "lg:text-white text-blueGray-700",
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
      <div
        className="inline-block"
        onMouseEnter={() => {
          if (window.innerWidth > 1023) {
            startAnimation();
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 1023) {
            startAnimation();
          }
        }}
        onClick={() => {
          if (window.innerWidth <= 1023) {
            startAnimation();
          }
        }}
      >
        <a
          className={
            "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
            linkColor[navColor]
          }
          href="#pablo"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {text}{" "}
          <i
            className={
              "ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "
            }
          ></i>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "block ") +
            " static-important transform-none-important "
          }
        >
          <div
            className={
              transformOrigin +
              " bg-white text-base float-left p-2 list-none text-left rounded-lg lg:shadow-lg min-w-48 transition-all duration-200 ease-in-out transform " +
              menuClasses
            }
          >
            <div className="flex flex-wrap max-lg:pl-4">
              {items.map((prop, key) => {
                return (
                  <div key={key} className="w-full lg:w-1/3">
                    <p className="uppercase font-bold text-xs px-3 pt-6 pb-2 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                      {prop.title}
                    </p>
                    <div className="pl-4">
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
