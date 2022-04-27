import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Button from "../../../components/Elements/Button.js";

export default function CardBlogFullBgAuthor({
  bgImage,
  title,
  description,
  userimage,
  username,
  user,
  button,
}) {
  let userComponent = (
    <>
      <img
        src={userimage}
        className="rounded-full mr-4"
        style={{ maxWidth: "40px" }}
        alt="..."
      />
      <div className="flex-1">
        <div className="justify-between items-center">
          <h6 className="text-sm uppercase mb-2 mt-2 text-white font-semibold">
            {username}
          </h6>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="overflow-hidden mb-12 rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-550-px transition-all duration-150 ease-in-out hover:transform hover:scale-110 group">
        <div
          className="absolute rounded-lg w-full h-full bg-50-center bg-cover transition-all duration-1000 ease-in-out group-hover:transform group-hover:scale-110"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/unsplashs.jpg").default +
              ")",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="absolute rounded-lg w-full h-full bg-black opacity-50"></div>
        <div className="p-10 flex h-full items-end z-1">
          <div>
            <h1 className="text-4xl font-semibold mt-0 mb-2 text-white">
              {title}
            </h1>
            <p className="text-white opacity-75 text-lg">{description}</p>
            <div className="py-4 mb-3 flex items-start">
              {user.to ? (
                <Link {...user} className="flex items-center">
                  {userComponent}
                </Link>
              ) : (
                <a {...user} className="flex items-center">
                  {userComponent}
                </a>
              )}
            </div>
            <Button {...button} />
          </div>
        </div>
      </div>
    </>
  );
}

CardBlogFullBgAuthor.defaultProps = {
  button: {},
  user: {},
};

CardBlogFullBgAuthor.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bgImage: PropTypes.string,
  userimage: PropTypes.string,
  username: PropTypes.string,
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // this will wrapp the username and userimage
  user: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
};
