import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const NavbarCollapse = React.forwardRef(
  ({ children, breakpoint, className, ...rest }, ref) => {
    const breakpoints = {
      all: "",
      sm: "sm:flex sm:w-auto",
      md: "md:flex md:w-auto",
      lg: "lg:flex lg:w-auto",
      xl: "xl:flex xl:w-auto",
    };
    const classes = classnames(
      "items-center w-full flex-grow overflow-hidden duration-300 transition-all ease-in-out",
      breakpoints[breakpoint],
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
);

NavbarCollapse.defaultProps = {
  className: "",
  breakpoint: "lg",
};

NavbarCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // where the collapse should start being visible
  breakpoint: PropTypes.oneOf(["all", "sm", "md", "lg", "xl"]),
};

export default NavbarCollapse;
