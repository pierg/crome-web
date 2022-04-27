/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";

// components
import DropdownNavbar from "../../components/Dropdowns/DropdownNavbar.js";

export default function NavbarLinks({
  leftLinks,
  rightLinks,
  logoImage,
  logoText,
  logoLink,
  socials,
  color,
  type,
}) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseStyle, setCollapseStyle] = React.useState(undefined);
  const [animation, setAnimation] = React.useState(false);
  const collapseRef = React.useRef(null);
  const startAnitmation = () => {
    if (!animation) {
      setAnimation(true);
      if (collapseOpen) {
        setCollapseStyle(0);
        setTimeout(function () {
          setAnimation(false);
          setCollapseOpen(false);
        }, 310);
      } else {
        setCollapseOpen(true);
        setTimeout(function () {
          setCollapseStyle(collapseRef.current.scrollHeight);
        }, 10);
        setTimeout(function () {
          setAnimation(false);
        }, 310);
      }
    }
  };
  let brand = (
    <>
      <img
        src={logoImage}
        className="rounded-full mr-2"
        style={{ width: "30px" }}
      />
      <span>{logoText}</span>
    </>
  );
  const navBg = {
    dark: "bg-blueGray-800 shadow-md",
    light: "bg-blueGray-200 shadow-md",
    transparent: "lg:bg-transparent bg-white",
    white: "bg-white shadow-md",
    black: "bg-black shadow-md",
    blueGray: "bg-blueGray-500 shadow-md",
    red: "bg-red-500 shadow-md",
    orange: "bg-orange-500 shadow-md",
    amber: "bg-amber-500 shadow-md",
    emerald: "bg-emerald-500 shadow-md",
    teal: "bg-teal-500 shadow-md",
    lightBlue: "bg-lightBlue-500 shadow-md",
    indigo: "bg-indigo-500 shadow-md",
    purple: "bg-purple-500 shadow-md",
    pink: "bg-pink-500 shadow-md",
  };
  const linkColors = {
    light: "text-blueGray-500",
    dark: "text-white",
    transparent: "lg:text-white text-blueGray-500",
    white: "text-blueGray-500",
    black: "text-white",
    blueGray: "text-white",
    red: "text-white",
    orange: "text-white",
    amber: "text-white",
    emerald: "text-white",
    teal: "text-white",
    lightBlue: "text-white",
    indigo: "text-white",
    purple: "text-white",
    pink: "text-white",
  };
  return (
    <>
      <nav
        className={
          type +
          " w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 " +
          navBg[color]
        }
      >
        <div className="flex container mx-auto flex flex-wrap items-center justify-between px-0 lg:px-4">
          {logoLink && logoLink.to ? (
            <Link
              {...logoLink}
              className={
                "text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase " +
                linkColors[color]
              }
            >
              {brand}
            </Link>
          ) : logoLink ? (
            <a
              {...logoLink}
              className={
                "text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase " +
                linkColors[color]
              }
            >
              {brand}
            </a>
          ) : null}

          <button
            className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden"
            type="button"
            onClick={startAnitmation}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={classnames(
              "items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out",
              {
                "block h-0": collapseOpen,
                hidden: !collapseOpen,
                "overflow-hidden": animation,
              }
            )}
            style={{
              height: collapseStyle,
            }}
            ref={collapseRef}
          >
            <ul className="lg:items-center flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
              {leftLinks.map((prop, key) => {
                if (prop.to) {
                  <li key={key}>
                    <Link
                      {...prop}
                      className={
                        "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
                        linkColors[color]
                      }
                    />
                  </li>;
                } else if (prop.dropdown) {
                  return (
                    <li className="relative" key={key}>
                      <DropdownNavbar {...prop} navColor={color} />
                    </li>
                  );
                } else {
                  return (
                    <li key={key}>
                      <a
                        {...prop}
                        className={
                          "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
                          linkColors[color]
                        }
                      />
                    </li>
                  );
                }
              })}
            </ul>

            <ul className="lg:items-center lg:ml-auto flex flex-wrap list-none pl-0 mb-0 flex flex-col list-none pl-0 mb-0 lg:flex-row">
              {rightLinks.map((prop, key) => {
                if (prop.to) {
                  <li key={key}>
                    <Link
                      {...prop}
                      className={
                        "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
                        linkColors[color]
                      }
                    />
                  </li>;
                } else if (prop.dropdown) {
                  return (
                    <li className="relative" key={key}>
                      <DropdownNavbar {...prop} navColor={color} />
                    </li>
                  );
                } else {
                  return (
                    <li key={key}>
                      <a
                        {...prop}
                        className={
                          "hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out " +
                          linkColors[color]
                        }
                      />
                    </li>
                  );
                }
              })}
              {socials.map((prop, key) => {
                return (
                  <li key={key}>
                    <a
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out " +
                        linkColors[color]
                      }
                      href={prop.link}
                      target="_blank"
                    >
                      <i
                        className={
                          "fab fa-" +
                          prop.icon +
                          " text-lg leading-lg opacity-75 hover:opacity-50 " +
                          linkColors[color]
                        }
                      ></i>
                      <span className="lg:hidden lg:ml-0 ml-2">
                        {prop.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
NavbarLinks.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  socials: [],
  type: "",
};
NavbarLinks.propTypes = {
  logoImage: PropTypes.string,
  logoText: PropTypes.string,
  // properties to pass to the link object wrapping
  // the logoText and logoImage
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  logoLink: PropTypes.object,
  color: PropTypes.oneOf([
    "dark",
    "light",
    "transparent",
    "white",
    "black",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  type: PropTypes.oneOf(["absolute", "fixed", ""]),
  // array of properties (for both, left and right Links)
  // to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: you can generate a dropdown if, inside the
  // // // object you pass dropdown: true as a prop
  // // // please check the DropdownNavbar to see
  // // // what the object should be in this case
  leftLinks: PropTypes.arrayOf(PropTypes.object),
  rightLinks: PropTypes.arrayOf(PropTypes.object),
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
      // this will be visible only on mobile devices
      text: PropTypes.string,
    })
  ),
};
