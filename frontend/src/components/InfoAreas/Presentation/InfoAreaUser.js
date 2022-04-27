/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";

// components

export default function InfoAreaUser({ image, name, jobTitle, socialLinks }) {
  const colors = {
    facebook: "bg-lightBlue-500",
    twitter: "bg-lightBlue-400",
    dribbble: "bg-pink-500",
    instagram: "bg-pink-700",
  };
  return (
    <div className="px-6">
      <img
        alt="..."
        src={image}
        className="shadow-lg rounded-full mx-auto max-w-120-px"
      />
      <div className="pt-6 text-center">
        <h5 className="text-xl font-bold">{name}</h5>
        <p className="mt-1 text-sm text-blueGray-400 uppercase font-bold">
          {jobTitle}
        </p>
        <div className="mt-6">
          {socialLinks.map((prop, key) => {
            return (
              <a
                key={key}
                href={prop.link}
                target="_blank"
                type="button"
                className={
                  colors[prop.icon] +
                  " inline-flex items-center justify-center text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                }
              >
                <i className={"fab fa-" + prop.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
InfoAreaUser.defaultProps = {
  socialLinks: [],
};
InfoAreaUser.propTypes = {
  // src of the image
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    // this will generate an anchor with target blank to the given link
    PropTypes.shape({
      icon: PropTypes.oneOf(["facebook", "twitter", "instagram", "dribbble"]),
      link: PropTypes.string,
    })
  ),
};
