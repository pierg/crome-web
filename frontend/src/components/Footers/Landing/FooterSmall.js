/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components

export default function FooterSmall({ copyright, links, type }) {
  let copyrightClass = "text-center xl:text-left py-6 text-sm";
  const wrapperClasses = {
    dark: "bg-blueGray-800",
    light: "bg-blueGray-100",
  };
  const copyrightClasses = {
    dark: "text-white",
    light: "text-blueGray-500",
  };
  return (
    <>
      <footer className={wrapperClasses[type]}>
        <div className="container mx-auto px-4">
          <div className="items-center xl:justify-between flex flex-wrap -mx-4">
            <div className="px-4 relative w-full xl:w-6/12 w-full sm:w-full">
              <div className={copyrightClass + " " + copyrightClasses[type]}>
                Copyright © 2021
                {copyright && copyright.to ? (
                  <Link {...copyright} className="font-semibold ml-1" />
                ) : (
                  <a {...copyright} className="font-semibold ml-1" />
                )}
                . All rights reserved.
              </div>
            </div>

            <div className="px-4 relative w-full xl:w-6/12 w-full sm:w-full">
              <ul className="justify-center xl:justify-end mx-auto flex flex-wrap list-none pl-0 mb-0">
                {links.map((prop, key) => {
                  return (
                    <li key={key}>
                      {prop && prop.to ? (
                        <Link
                          {...prop}
                          className="text-sm block px-4 bg-transparent no-underline text-blueGray-500 hover:text-blueGray-700 py-4 md:py-6 mx-auto"
                        />
                      ) : (
                        <a
                          {...prop}
                          className="text-sm block px-4 bg-transparent no-underline text-blueGray-500 hover:text-blueGray-700 py-4 md:py-6 mx-auto"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

FooterSmall.defaultProps = {
  copyright: {},
  links: [],
  type: "light",
};

FooterSmall.propTypes = {
  type: PropTypes.oneOf(["light", "dark"]),
  // this is a link, so if you pass "to" as prop
  // it will be generated as a Link from react-router-dom
  // otherwise, it will be generated as a simple anchor tag
  copyright: PropTypes.object,
  // same as above, just that this an array of them
  links: PropTypes.arrayOf(PropTypes.object),
};
