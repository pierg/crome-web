import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Comment({
  image,
  username,
  description,
  likes,
  shares,
}) {
  let likesComponent = (
    <>
      <i className="fas fa-thumbs-up"></i>
      <span className="text-blueGray-500"> {likes.children} likes </span>
    </>
  );
  let sharesComponent = (
    <>
      <i className="fas fa-share"></i>
      <span className="text-blueGray-500"> {shares.children} shares </span>
    </>
  );
  return (
    <>
      <div className="mt-2 flex items-start group border-b border-blueGray-200">
        <img
          alt="..."
          src={image}
          className="relative rounded-full w-10 h-10 mt-3"
        />
        <div className="flex-1 relative">
          <div className="p-5">
            <h5 className="text-lg font-bold mt-0 mb-2">{username}</h5>
            <p className="mb-4 text-blueGray-500">{description}</p>
            <div>
              {likes.to ? (
                <Link
                  {...likes}
                  className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                >
                  {likesComponent}
                </Link>
              ) : (
                <a
                  {...likes}
                  className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                >
                  {likesComponent}
                </a>
              )}
              {shares.to ? (
                <Link
                  {...shares}
                  className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                >
                  {sharesComponent}
                </Link>
              ) : (
                <a
                  {...shares}
                  className="inline-block mr-3 text-blueGray-400 font-semibold text-sm"
                >
                  {sharesComponent}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Comment.defaultProps = {
  likes: { children: "0" },
  shares: { children: "0" },
};
Comment.propTypes = {
  username: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the like icon is set by default,
  // // // you only need to set the number of like
  likes: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: the share icon is set by default,
  // // // you only need to set the number of comments
  shares: PropTypes.object,
};
