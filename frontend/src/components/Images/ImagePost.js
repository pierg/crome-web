import React from "react";
import PropTypes from "prop-types";

export default function ImagePost({ src, size }) {
  let imgClasses = {
    sm: "w-450-px",
    lg: "w-850-px",
    regular: "w-650-px",
  };
  return (
    <>
      <img
        src={src}
        alt="..."
        className={"rounded-lg shadow-lg " + imgClasses[size]}
      />
    </>
  );
}

ImagePost.defaultProps = {
  size: "regular",
};

ImagePost.propTypes = {
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
  // Image source
  src: PropTypes.string,
};
