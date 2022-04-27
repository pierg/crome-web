import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Skew from "../../../components/Skews/Skew.js";

export default function HeaderImageTitleButtons({
  image,
  title,
  socials,
  skew,
}) {
  return (
    <>
      <div
        className="relative section min-h-screen-75 flex items-center bg-cover"
        style={{
          backgroundImage: "url('" + image + "')",
        }}
      >
        <div className="absolute w-full h-full bg-black opacity-75"></div>
        <div className="flex items-center justify-center container mx-auto px-4 h-full">
          <div className="flex flex-wrap -mx-4">
            <div className="text-center mx-auto px-4 relative w-full lg:w-7/12">
              <h1 className="text-4xl font-bold leading-tight mt-0 mb-6 text-white">
                {title}
              </h1>
              {socials.map((prop, key) => {
                return (
                  <Button
                    key={key}
                    color="pink"
                    size="sm"
                    href={prop.link}
                    target="_blank"
                  >
                    <i className={"fab fa-" + prop.icon}></i>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full absolute text-white bottom-0 z-1">
          <Skew {...skew} />
        </div>
      </div>
    </>
  );
}

HeaderImageTitleButtons.defaultProps = {
  socials: [],
};

HeaderImageTitleButtons.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  // this will generate an anchor with target blank to the given link
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "dribbble",
        "github",
      ]),
      link: PropTypes.string,
    })
  ),
};
