import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import LoginSession from "../Custom/LoginSession";

export default function CustomSidebar({
  brand,
  items,
  activeColor,
  currentRoute,
  id,
  setId,
  cookie,
  page,
}) {
  const [sidebarShow, setSidebarShow] = React.useState("-translate-x-full");

  const activeColors = {
    red: "text-red-500 hover:text-red-700",
    orange: "text-orange-500 hover:text-orange-700",
    amber: "text-amber-500 hover:text-amber-700",
    emerald: "text-emerald-500 hover:text-emerald-700",
    teal: "text-teal-500 hover:text-teal-700",
    lightBlue: "text-lightBlue-500 hover:text-lightBlue-700",
    indigo: "text-indigo-500 hover:text-indigo-700",
    purple: "text-purple-500 hover:text-purple-700",
    pink: "text-pink-500 hover:text-pink-700",
  };

  return (
    <>
      <nav
        className={
          "block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 fixed flex-row flex-nowrap xxl:z-10 z-9999 transition-all duration-300 ease-in-out transform xxl:translate-x-0 " +
          sidebarShow
        }
      >
        <button
          className="xxl:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998"
          onClick={() => {
            if (sidebarShow === "") {
              setSidebarShow("-translate-x-full");
            } else {
              setSidebarShow("");
            }
          }}
        >
          <i className="fas fa-ellipsis-v" />
        </button>
        {/* Collapse */}
        <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
            {/* Brand */}
            {brand && brand.link && brand.link.to && (
              <Link
                {...brand}
                className="xxl:flex items-center flex-col text-center xxl:pb-2 text-blueGray-700 mr-0 inline-flex whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              >
                {brand && brand.image && (
                  <img src={brand.image} alt="..." className="max-w-full rounded" />
                )}
                {brand && brand.text && <span>{brand.text}</span>}
              </Link>
            )}
            {brand && brand.link && brand.link.to === undefined && (
              <a
                {...brand}
                href={brand.link.href}
                className="xxl:flex items-center flex-col text-center xxl:pb-2 text-blueGray-700 mr-0 inline-flex whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              >
                {brand && brand.image && (
                  <img src={brand.image} alt="..." className="max-w-full rounded" />
                )}
                {brand && brand.text && <span>{brand.text}</span>}
              </a>
            )}
            <div className="xxl:flex-col xxl:min-w-full flex flex-col list-none">
              <LoginSession id={id} onIdSubmit={setId} cookie={cookie}/>
            </div>
            <div className="xxl:flex-col xxl:min-w-full flex flex-col list-none">
              {items.map((prop, key) => {
                if (prop.divider) {
                  return <hr key={key} className="my-4 xxl:min-w-full" />;
                } else if (prop.titleCrome) {
                  return (
                    <h6
                      key={key}
                      className="xxl:min-w-full text-blueGray-500 text-xs uppercase font-bold inline"
                    >
                      {prop.titleCrome}
                    </h6>
                  );
                } else if (prop.titleSynthesis) {
                  return (
                    <h6
                      key={key}
                      className="xxl:min-w-full text-blueGray-500 text-xs uppercase font-bold inline mt-3"
                    >
                      {prop.titleSynthesis}
                    </h6>
                  );
                } else if(prop.titleContracts){
                  return (
                    <h6
                      key={key}
                      className="xxl:min-w-full text-blueGray-500 text-xs uppercase font-bold inline mt-3"
                    >
                      {prop.titleContracts}
                    </h6>
                  );
                }
                else {
                  return (
                    <a
                      {...prop.link}
                      key={key}
                      className={classnames("text-xs uppercase py-3 font-bold block", {
                        [activeColors[activeColor]]: prop.link.href === currentRoute,
                        "text-blueGray-800 hover:text-blueGray-500":
                          prop.link.href !== currentRoute,
                      })}
                    >
                      <i
                        className={classnames(prop.icon, "mr-2 text-sm", {
                          "opacity-75": prop.link.href === currentRoute,
                          "text-blueGray-400": prop.link.href !== currentRoute,
                        })}
                      />
                      {prop.text}
                      {(page !== "index") && (prop.text === "Run CROME") &&
                        <i className="fas fa-arrow-right ml-2"/>
                      }
                      {(page !== "synthesis") && (prop.text === "Run SYNTHESIS") &&
                        <i className="fas fa-arrow-right ml-2"/>
                      }
                      {(page !== "contracts") && (prop.text === "Run CONTRACTS") &&
                        <i className="fas fa-arrow-right ml-2"/>
                      }
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

CustomSidebar.defaultProps = {
  items: [],
  activeColor: "pink",
};

CustomSidebar.propTypes = {
  // this only applies for those items that have active set to true
  activeColor: PropTypes.oneOf([
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
  brand: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.string,
    // props to pass to the wrapper link of the text and image
    // if you pass a prop named to, it will be generated as
    // Link from react-router-dom
    link: PropTypes.object,
  }),
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this will generate a divider hr tag
      PropTypes.shape({
        divider: PropTypes.bool,
      }),
      // this will generate a text with the title string
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this will generate a Link/Anchor with bellow options
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
        // if set to true, the link will change color to the active one
        active: PropTypes.bool,
        // props to pass to the wrapper link of the text and icon
        // if you pass a prop named to, it will be generated as
        // Link from react-router-dom
        link: PropTypes.object,
      }),
    ])
  ),
};
