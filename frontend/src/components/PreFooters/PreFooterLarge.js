import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../components/Elements/Button.js";

export default function PreFooterLarge({ title, subtitle, socials, type }) {
  let subtitleClass = "leading-normal mt-1 mb-2";
  let wrapperClass = "pt-12 pb-4 border-b";
  const wrapperTypes = {
    dark: "bg-blueGray-800 border-blueGray-700",
    light: "bg-blueGray-100",
  };
  const subtitleTypes = {
    dark: "text-white",
    light: "text-blueGray-500",
  };
  return (
    <>
      <div className={wrapperClass + " " + wrapperTypes[type]}>
        <div className="container mx-auto px-4">
          <div className="justify-between items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
              <h3 className="text-xl font-bold leading-normal mt-0">{title}</h3>
              <h4 className={subtitleClass + " " + subtitleTypes[type]}>
                {subtitle}
              </h4>
            </div>

            <div className="text-right pr-6 px-4 relative w-full lg:w-6/12">
              {socials.map((prop, key) => {
                return (
                  <Button {...prop.buttonProps} key={key}>
                    <i className={prop.icon}></i>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PreFooterLarge.defaultProps = {
  socials: [],
  type: "light",
};
PreFooterLarge.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["dark", "light"]),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      // the buttonProps can be any of the props of the Button component
      buttonProps: PropTypes.object,
    })
  ),
};
