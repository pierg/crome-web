import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function NavbarListItem({ children, className, ...rest }) {
  const classes = classnames(className);
  return (
    <>
      <li {...rest} className={classes}>
        {children}
      </li>
    </>
  );
}

NavbarListItem.defaultProps = {
  className: "",
};

NavbarListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
