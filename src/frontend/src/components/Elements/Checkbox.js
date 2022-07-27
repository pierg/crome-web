import React from "react";
import PropTypes from "prop-types";

export default function Checkbox({ label, ...rest }) {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          {...rest}
          type="checkbox"
          className="form-checkbox appearance-none ml-1 w-5 h-5 ease-linear transition-all duration-150 border border-blueGray-300 rounded checked:bg-blueGray-700 checked:border-blueGray-700 focus:border-blueGray-300"
        />
        {label ? (
          <span className="ml-2 text-sm font-semibold text-blueGray-500">
            {label}
          </span>
        ) : null}
      </label>
    </>
  );
}

Checkbox.defaultProps = {};
// you can also pass additional props
// such as defaultValue, value, onChange, onClick etc.
Checkbox.propTypes = {
  label: PropTypes.string,
};
