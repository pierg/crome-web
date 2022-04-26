import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Message({ align, content, time, color, link }) {
  const bgClasses = {
    light: "bg-blueGray-100 text-blueGray-800",
    dark: "bg-blueGray-800 text-white",
    blueGray: "bg-blueGray-500 text-white",
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    lightBlue: "bg-lightBlue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    purple: "bg-purple-500 text-white",
    pink: "bg-pink-500 text-white",
  };
  const alignClasses = {
    left: "justify-start text-left",
    right: "justify-end text-right",
  };
  let details = (
    <div className="px-4 relative w-auto">
      <div
        className={
          "relative flex px-4 py-2 my-4 break-words shadow-lg rounded-lg " +
          bgClasses[color]
        }
      >
        <div className="">
          {content.map((prop, key) =>
            prop.image ? (
              <img
                key={key}
                src={prop.image}
                className="rounded my-2 max-w-250-px"
                alt="..."
              />
            ) : (
              <p key={key} className="mb-1 text-lg leading-relaxed">
                {prop}
              </p>
            )
          )}
          <p className="block uppercase font-semibold opacity-75 text-sm">
            {time && align === "left" && (
              <>
                <i className={time.icon + " mr-2"}></i>
                <span>{time.text}</span>
              </>
            )}
            {time && align === "right" && (
              <>
                <span className="mr-2">{time.text}</span>
                <i className={time.icon}></i>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className={alignClasses[align] + " flex flex-wrap -mx-4"}>
        {link && link.to && <Link {...link}>{details}</Link>}
        {link && link.to === undefined && <a {...link}>{details}</a>}
      </div>
    </>
  );
}

Message.defaultProps = {
  content: [],
  color: "blueGray",
  align: "right",
};
Message.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this will generate a paragraph
      PropTypes.string,
      // this will generate an image
      PropTypes.shape({
        image: PropTypes.string,
      }),
    ])
  ),
  time: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  color: PropTypes.oneOf([
    "white",
    "light",
    "dark",
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
  // properties to pass to the link object
  // that wrapps the whole component
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
