import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";

// components
import DropdownUser from "../../components/Dropdowns/DropdownUser.js";
import Input from "../../components/Elements/Input.js";

export default function NavbarSearchUser({ brand, input, dropdown }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseStyle, setCollapseStyle] = React.useState(undefined);
  const [animation, setAnimation] = React.useState(false);
  const collapseRef = React.useRef(null);
  const startAnitmation = () => {
    if (!animation) {
      setAnimation(true);
      if (collapseOpen) {
        setCollapseStyle(0);
        setTimeout(function () {
          setAnimation(false);
          setCollapseOpen(false);
        }, 310);
      } else {
        setCollapseOpen(true);
        setTimeout(function () {
          setCollapseStyle(collapseRef.current.scrollHeight);
        }, 10);
        setTimeout(function () {
          setAnimation(false);
        }, 310);
      }
    }
  };
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-1 px-4 lg:bg-transparent">
        <div className="w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
          {brand && brand.to && (
            <Link
              {...brand}
              className="text-blueGray-800 lg:text-white text-sm uppercase inline-block font-semibold my-3"
            >
              {brand.children}
            </Link>
          )}
          {brand && brand.to === undefined && (
            <a
              {...brand}
              className="text-blueGray-800 lg:text-white text-sm uppercase inline-block font-semibold my-3"
            >
              {brand.children}
            </a>
          )}
          <button
            className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden"
            type="button"
            onClick={startAnitmation}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={classnames(
              "items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important",
              {
                "block h-0": collapseOpen,
                hidden: !collapseOpen,
                "overflow-hidden": animation,
              }
            )}
            style={{
              height: collapseStyle,
            }}
            ref={collapseRef}
          >
            {/* Form */}
            <form className="flex flex-row flex-wrap items-center ml-auto mr-3 mt-3">
              <Input {...input} />
            </form>
            {/* User */}
            <DropdownUser {...dropdown} />
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

NavbarSearchUser.defaultProps = {
  brand: {},
  input: {},
  dropdown: {},
};

NavbarSearchUser.propTypes = {
  // properties to pass to the link object for the brand
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  brand: PropTypes.object,
  // properties to pass to the Input component
  input: PropTypes.object,
  // properties to pass to the DropdownUser component
  dropdown: PropTypes.object,
};
