import "classnames"
import "prop-types"
import "react"
import classnames
import PropTypes
import React

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
