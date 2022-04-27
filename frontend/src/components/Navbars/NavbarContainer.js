import "classnames"
import "prop-types"
import "react"
import classnames
import PropTypes
import React

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
