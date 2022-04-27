/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardBlogImageHorizontal({
  image,
  title,
  description,
  link,
}) {
  return (
    <>
      <div className="bg-blueGray-800 text-white shadow-lg rounded-lg overflow-hidden relative flex flex-col min-w-0 w-full mb-6">
        <img
          alt="..."
          src={image}
          className="w-full"
          style={{ marginTop: "-45%" }}
        />
        <div className="px-4 py-5 flex-auto">
          <h4 className="text-3xl mt-0 mb-2 my-4 font-bold">{title}</h4>
          <p className="text-xl font-light">{description}</p>
          {link && link.to ? (
            <Link
              {...link}
              className="font-semibold text-sm uppercase py-3 inline-block"
            >
              Read more
            </Link>
          ) : (
            <a
              {...link}
              className="font-semibold text-sm uppercase py-3 inline-block"
            >
              Read more
            </a>
          )}
        </div>
      </div>
    </>
  );
}
CardBlogImageHorizontal.defaultProps = {
  link: {},
};
CardBlogImageHorizontal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object after the description
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: you cannot pass a child component
  link: PropTypes.object,
};
