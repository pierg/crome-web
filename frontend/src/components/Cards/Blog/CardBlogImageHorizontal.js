/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components

export default function CardBlogImageHorizontal({
  image,
  title,
  description,
  link,
  user,
  username,
  userlink,
  date,
}) {
  const userComponent = (
    <>
      <img src={user} className="rounded-full mr-4 w-12 h-12" alt="..." />
      <div className="flex-1">
        <div className="justify-between items-center">
          <h6 className="text-md font-bold uppercase mt-0 mb-0 text-blueGray-500">
            {username}
          </h6>
          <small className="text-sm text-blueGray-500 mt-0">{date}</small>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="mb-12 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="items-center flex flex-wrap -mx-4">
          <div className="px-4 relative w-full lg:w-4/12">
            <img
              src={image}
              className="w-full rounded-lg rounded-r-none"
              alt="..."
            />
          </div>

          <div className="px-4 relative w-full lg:w-8/12">
            <div className="lg:pl-0 px-4 py-5 flex-auto">
              <h3 className="text-3xl font-semibold text-blueGray-700 leading-tight">
                {link && link.to ? (
                  <Link to={link.to}>{title}</Link>
                ) : (
                  <a href={link.href}>{title}</a>
                )}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                <span className="mr-2">{description}</span>
                {link && link.to ? (
                  <Link {...link} className="text-lightBlue-500" />
                ) : (
                  <a {...link} className="text-lightBlue-500" />
                )}
              </p>

              <div className="mt-6">
                {userlink && userlink.to ? (
                  <Link {...link} className="inline-flex items-center">
                    {userComponent}
                  </Link>
                ) : (
                  <a {...link} className="inline-flex items-center">
                    {userComponent}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardBlogImageHorizontal.defaultProps = {
  link: {},
  userlink: {},
};
CardBlogImageHorizontal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object after the description
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: this will also apply as a wrapper for the title
  link: PropTypes.object,
  // this is an image for the user
  user: PropTypes.string,
  username: PropTypes.string,
  // properties to pass to the link object that
  // wrapps the user, date and username
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  userlink: PropTypes.object,
  date: PropTypes.string,
};
