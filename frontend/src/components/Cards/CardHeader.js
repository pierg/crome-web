import React from "react";
import PropTypes from "prop-types";

export default function CardHeader({ border, children }) {
  const cardHeaderClasses = (border && " border-b border-blueGray-300") || "";
  return (
    <div
      className={"bg-transparent first:rounded-t px-5 py-3" + cardHeaderClasses}
    >
      {children}
    </div>
  );
}

CardHeader.defaultProps = {
  border: true,
};

CardHeader.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool,
};
