import React from "react";
import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
      {children}
    </div>
  );
}

Card.defaultProps = {};

Card.propTypes = {
  children: PropTypes.node,
};
