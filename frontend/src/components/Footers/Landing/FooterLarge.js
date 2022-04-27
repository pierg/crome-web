/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Skew from "../../../components/Skews/Skew.js";

export default function FooterLarge({
  title,
  description,
  links,
  socials,
  copyright,
}) {
  return (
    <>
      <footer>
        <Skew color="blueGray" />
        <div className="relative bg-blueGray-100 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-xl mt-4 font-bold">{title}</h4>
                <h5 className="mt-1 mb-2 text-blueGray-500">{description}</h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  {socials.map((prop, key) => {
                    return (
                      <a
                        key={key}
                        href={prop.link}
                        target="_blank"
                        className={
                          "bg-white text-" +
                          prop.icon +
                          "-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                        }
                        type="button"
                      >
                        <i className={"fab fa-" + prop.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  {links.map((prop, key) => {
                    return (
                      <div className="w-full lg:w-4/12 px-4 ml-auto" key={key}>
                        <span className="block uppercase text-xs font-bold mb-2">
                          {prop.name}
                        </span>
                        <ul className="list-unstyled">
                          {(prop.items || []).map((itemProp, itemKey) => {
                            if (itemProp.to) {
                              return (
                                <Link
                                  {...itemProp}
                                  key={itemKey}
                                  className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                                />
                              );
                            } else {
                              return (
                                <a
                                  {...itemProp}
                                  key={itemKey}
                                  className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                                />
                              );
                            }
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-200" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 py-1">
                  {copyright}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

FooterLarge.defaultProps = {
  links: [],
  socials: [],
};
FooterLarge.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      // array of properties to pass to the link object
      // if you pass a prop named to, the link will be
      // generated using Link from react-router-dom
      items: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  socials: PropTypes.arrayOf(
    // this will generate an anchor with target blank to the given link
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
