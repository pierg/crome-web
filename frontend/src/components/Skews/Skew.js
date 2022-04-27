import React from "react";
import PropTypes from "prop-types";
// components
export default function Skew({ color }) {
  let textColor = "text-blueGray-100";
  if (color === "white") {
    textColor = "text-white";
  } else if (color === "dark") {
    textColor = "text-blueGray-900";
  }
  return (
    <>
      <div
        className="w-full pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className={textColor + " fill-current"}
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </>
  );
}

Skew.defaultProps = {
  color: "white",
};
Skew.propTypes = {
  color: PropTypes.oneOf(["white", "blueGray", "dark"]),
};
