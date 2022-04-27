/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import classnames from "classnames";

const DropdownCollapseNavbar = ({ text, items, navColor }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [openSection, setOpenSection] = React.useState(-1);
  const [animate, setAnimate] = React.useState("");
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
  const openNewSections = (e, section) => {
    e.preventDefault();
    setOpenSection(section);
    setTimeout(function () {
      setAnimate("in");
    }, 100);
  };
  const closeNewSection = (e) => {
    e.preventDefault();
    setAnimate("out");
    setTimeout(function () {
      setOpenSection(-1);
    }, 300);
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
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-48 overflow-x-hidden"
        }
      >
        <div className="inline-flex">
          <div className="w-48">
            {items.map((prop, key) => {
              return (
                <a
                  key={key}
                  onClick={(e) => openNewSections(e, key)}
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-800 flex flex-row items-center justify-between"
                >
                  {prop.title} <i className="fas fa-angle-right"></i>
                </a>
              );
            })}
          </div>
          <div
            className={classnames(
              "w-48 bg-white transition-all duration-300 ease-in-out transform",
              {
                hidden: openSection === -1,
                block: openSection !== -1,
                "-translate-x-full": animate === "in",
              }
            )}
          >
            <a
              onClick={(e) => closeNewSection(e)}
              href="#pablo"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-800 flex flex-row items-center justify-between"
            >
              <i className="fas fa-angle-left"></i>Back
            </a>
            {items.map((prop, key) => {
              return (
                <div
                  key={key}
                  className={classnames({
                    hidden: key !== openSection,
                    block: key === openSection,
                  })}
                >
                  {prop.items.map((itemProp, itemKey) => {
                    return (
                      <Link
                        {...itemProp}
                        key={itemKey}
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-800 flex flex-row items-center justify-between"
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

DropdownCollapseNavbar.defaultProps = {
  items: [],
};

DropdownCollapseNavbar.propTypes = {
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

export default DropdownCollapseNavbar;
