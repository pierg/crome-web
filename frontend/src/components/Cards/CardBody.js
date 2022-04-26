import React from "react";
import PropTypes from "prop-types";

export default function CardBody({ children }) {
  return <div className="px-4 py-5 flex-auto">{children}</div>;
}

CardBody.defaultProps = {};

CardBody.propTypes = {
  children: PropTypes.node,
};
