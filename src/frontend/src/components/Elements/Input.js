import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  ({ border, size, leftIcon, rightIcon, type, ...rest }, ref) => {
    const sizes = {
      sm: "px-2 py-2 text-sm ",
      lg: "px-3 py-3 text-sm ",
      regular: "px-3 py-2 text-sm ",
    };
    const borders = {
      border: "border-blueGray-300",
      borderless: "border-transparent shadow",
    };
    let inputClasses =
      sizes[size] +
      " w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 ";
    inputClasses = borders[border] + " " + inputClasses;
    let leftAddon = null;
    let rightAddon = null;
    let wrapperClasses = "mb-3 pt-0";
    if (leftIcon) {
      inputClasses = inputClasses + "pl-10 ";
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      leftAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 pl-3">
          <i className={leftIcon}></i>
        </span>
      );
    }
    if (rightIcon) {
      inputClasses = inputClasses + "pr-10 ";
      wrapperClasses = "relative flex w-full flex-wrap items-stretch mb-3";
      rightAddon = (
        <span className="z-10 h-full flex absolute text-center text-blueGray-300 text-sm items-center w-8 right-0">
          <i className={rightIcon}></i>
        </span>
      );
    }
    return (
      <>
        <div className={wrapperClasses} ref={ref}>
          {leftAddon}
          {type && type === "textarea" ? (
            <textarea {...rest} type={type} className={inputClasses} />
          ) : (
            <input {...rest} type={type} className={inputClasses} />
          )}
          {rightAddon}
        </div>
      </>
    );
  }
);

Input.defaultProps = {
  border: "border",
  size: "regular",
};

Input.propTypes = {
  border: PropTypes.oneOf(["border", "borderless"]),
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  leftIcon: PropTypes.string,
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  rightIcon: PropTypes.string,
};

export default Input;
