/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

// components
import Button from "../../components/Elements/Button.js";

export default function DropdownButton({ text, icon, items, button }) {
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
  return (
    <>
      <div className="relative">
        <Button
          {...button}
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            startAnimation();
          }}
        >
          {icon ? <i className={icon + (text ? " mr-2" : "")}></i> : null}
          {text}
          <i
            className={
              "ml-2 fas fa-caret-down transition-all duration-100 ease-in-out transform "
            }
          ></i>
        </Button>
        <div
          ref={popoverDropdownRef}
          className={(dropdownPopoverShow ? "block " : "block ") + " z-50"}
        >
          <div
            className={
              transformOrigin +
              " bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in transform opacity-0 scale-95 absolute " +
              menuClasses
            }
          >
            {items.map((prop, key) => {
              if (prop.disabled) {
                return (
                  <span
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent text-blueGray-400"
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
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    />
                  );
                } else {
                  return (
                    <a
                      {...prop}
                      key={key}
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    />
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

DropdownButton.defaultProps = {
  items: [],
};
DropdownButton.propTypes = {
  text: PropTypes.string,
  // if you want an icon to the left of the text
  icon: PropTypes.string,
  // Array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  items: PropTypes.arrayOf(PropTypes.object),
  // props that can be passed to the Button component
  button: PropTypes.object,
};
