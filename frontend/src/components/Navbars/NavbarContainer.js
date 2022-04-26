import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function NavbarContainer({ children, className, ...rest }) {
  const classes = classnames(
    "container mx-auto flex flex-wrap items-center justify-between px-0 lg:px-4",
    className
  );
  return (
    <>
      <div {...rest} className={classes}>
        {children}
      </div>
    </>
  );
}

NavbarContainer.defaultProps = {
  className: "",
};

NavbarContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
