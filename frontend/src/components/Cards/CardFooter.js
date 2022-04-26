import React from "react";
import PropTypes from "prop-types";

export default function CardFooter({ border, children }) {
  const cardFooterClasses = (border && " border-t border-blueGray-300") || "";
  return (
    <div className={"bg-transparent rounded-b px-5 py-3" + cardFooterClasses}>
      {children}
    </div>
  );
}

CardFooter.defaultProps = {
  border: true,
};

CardFooter.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool,
};
