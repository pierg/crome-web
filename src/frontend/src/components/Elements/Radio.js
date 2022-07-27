import React from "react";
import PropTypes from "prop-types";

export default function Radio({ label, ...rest }) {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          {...rest}
          type="radio"
          className="form-radio appearance-none ml-1 w-5 h-5 ease-linear transition-all duration-150 border border-blueGray-400 rounded-full checked:bg-blueGray-800 checked:border-blueGray-800 focus:border-blueGray-400"
        />
        {label ? (
          <span className="ml-2 text-sm font-semibold text-blueGray-700">
            {label}
          </span>
        ) : null}
      </label>
    </>
  );
}

Radio.defaultProps = {};
// you can also pass additional props
// such as defaultValue, value, onChange, onClick etc.
Radio.propTypes = {
  label: PropTypes.string,
};
