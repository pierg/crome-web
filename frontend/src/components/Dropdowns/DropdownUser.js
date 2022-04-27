/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

export default function DropdownUser({ image, items }) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [transformOrigin, setTransformOrigin] = React.useState(
    "origin-top-right"
  );
  const [menuClasses, setMenuClasses] = React.useState("");
  const [animating, setAntimating] = React.useState(false);
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
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          startAnimation();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={image}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={(dropdownPopoverShow ? "block " : "block ") + "z-50"}
      >
        <div
          className={
            menuClasses +
            "bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-0 absolute " +
            transformOrigin
          }
        >
          {items.map((prop, key) => {
            if (prop.divider) {
              return (
                <div
                  key={key}
                  className="h-0 my-2 border border-solid border-blueGray-100"
                />
              );
            } else if (prop.disabled) {
              return (
                <span
                  key={key}
                  {...prop}
                  className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent text-blueGray-400"
                />
              );
            } else if (prop.to) {
              return (
                <Link
                  key={key}
                  {...prop}
                  className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                />
              );
            } else {
              return (
                <a
                  key={key}
                  {...prop}
                  className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

DropdownUser.defaultProps = {
  items: [],
};

DropdownUser.propTypes = {
  image: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // array of properties to pass to the link object
      // if you pass a prop named to, the link will be
      // generated using Link from react-router-dom
      // also, if you pass a prop named disabled
      // the link will be generated as a simple text
      PropTypes.object,
      PropTypes.shape({
        divider: true,
      }),
    ])
  ),
};
