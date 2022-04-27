import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components

export default function CardBlogandAuthor({
  image,
  title,
  description,
  user,
  icon,
  text,
  link,
}) {
  let linkContent = (
    <>
      <img
        alt="..."
        className="shadow-lg rounded-lg w-full flex-shrink-0"
        src={image}
      />
      <h3 className="text-2xl font-bold leading-tight ml-1 mt-6">{title}</h3>
    </>
  );
  return (
    <>
      <div className="mb-12 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
        {link && link.to && <Link {...link}>{linkContent}</Link>}
        {link && link.to === undefined && <a {...link}>{linkContent}</a>}
        <p className="mt-3 leading-relaxed text-blueGray-500 ml-1">
          {description}
        </p>
        <div className="mt-6 flex items-center">
          <img
            alt="..."
            src={user.image}
            className="rounded-full mr-3 max-w-40-px"
          />
          <div className="flex-1">
            <div className="justify-between items-center">
              <h6 className="font-bold mt-0 mb-0">
                {user.name}
                <small className="text-sm text-blueGray-500 float-right">
                  <i className={icon + " opacity-75 text-red-500 mr-1"}></i>{" "}
                  {text}
                </small>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardBlogandAuthor.defaultProps = {
  user: {},
  link: {},
};

CardBlogandAuthor.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  icon: PropTypes.string,
  text: PropTypes.string,
  // wrapper link for the image and title
  // if you send a prop named to the link
  // will be generated as a Link from react-router-dom
  // otherwise it will be generated as an <a> tag
  link: PropTypes.object,
};
