import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Contact({
  image,
  name,
  color,
  lastOnline,
  lastMessage,
  link,
}) {
  const bgColors = {
    light: "bg-blueGray-200 text-blueGray-800",
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
  const lastOnlineColors = {
    light: "text-blueGray-500",
    dark: "text-blueGray-200",
    blueGray: "text-blueGray-200",
    red: "text-blueGray-200",
    orange: "text-blueGray-200",
    amber: "text-blueGray-200",
    emerald: "text-blueGray-200",
    teal: "text-blueGray-200",
    lightBlue: "text-blueGray-200",
    indigo: "text-blueGray-200",
    purple: "text-blueGray-200",
    pink: "text-blueGray-200",
  };
  const lastMessageColors = {
    light: "text-blueGray-500",
    dark: "text-blueGray-100",
    blueGray: "text-blueGray-100",
    red: "text-blueGray-100",
    orange: "text-blueGray-100",
    amber: "text-blueGray-100",
    emerald: "text-blueGray-100",
    teal: "text-blueGray-100",
    lightBlue: "text-blueGray-100",
    indigo: "text-blueGray-100",
    purple: "text-blueGray-100",
    pink: "text-blueGray-100",
  };
  const details = (
    <div className="flex items-center p-3">
      <img src={image} className="rounded-full max-w-40-px" alt="..." />
      <div className="flex-1">
        <div className="justify-between items-center">
          <h6 className="text-lg font-semibold leading-normal pl-3 inline-block">
            {name}
          </h6>
          <p
            className={
              "text-blueGray-200 uppercase font-bold text-xs inline-block float-right " +
              lastOnlineColors[color]
            }
          >
            {lastOnline}
            {lastOnline === "Online" && (
              <span className="p-1 mt-2 ml-2 text-xs font-semibold inline-block uppercase last:mr-0 mr-1 p-1 rounded bg-emerald-400"></span>
            )}
            {lastOnline === "Offline" && (
              <span className="p-1 mt-2 ml-2 text-xs font-semibold inline-block uppercase last:mr-0 mr-1 p-1 rounded bg-red-500"></span>
            )}
          </p>
          <div className="pl-3">
            <span className={"block truncate " + lastMessageColors[color]}>
              {lastMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className={"mx-4 rounded-md relative block my-1 " + bgColors[color]}>
        {link && link.to && <Link {...link}>{details}</Link>}
        {link && link.to === undefined && <a {...link}>{details}</a>}
      </div>
    </>
  );
}

Contact.defaultProps = {};
Contact.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.oneOf([
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
  // if Online, then a emerald bullet will appear near it
  // if Offline, then a red bullet will appear near it
  lastOnline: PropTypes.string,
  lastMessage: PropTypes.string,
  // properties to pass to the link object
  // that wrapps the whole component
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
