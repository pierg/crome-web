/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import Button from "../../../../components/Elements/Button.js";

export default function Blogs9({
  heading3badge,
  user,
  leftButtons,
  image,
  description,
  links,
  bottomButtons,
}) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  return (
    <>
      <div className="py-12">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-10/12">
              <div className="flex items-center justify-between my-4 flex-col md:flex-row">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src={user.image}
                    alt="..."
                    className="rounded-full mr-4 max-w-40-px"
                  />
                  <div className="flex-1">
                    <div className="justify-between items-center">
                      <h6 className="text-lg font-bold leading-tight">
                        {user.name}
                      </h6>
                      <p className="text-blueGray-500 text-sm">{user.date}</p>
                    </div>
                  </div>
                </div>
                <div className="relative inline-block">
                  {leftButtons.map((prop, key) => (
                    <Button key={key} {...prop} />
                  ))}
                </div>
              </div>
              <img
                alt="..."
                src={image}
                className="w-full rounded-lg shadow-lg"
              />
              {newDescription.map((prop, key) => (
                <p key={key} className="text-blueGray-500 pt-6 leading-relaxed">
                  {prop}
                </p>
              ))}

              <div>
                <h5 className="text-lg font-normal mt-2 mb-4 text-lightBlue-500">
                  {links.map((prop, key) => {
                    if (prop && prop.to) {
                      return <Link key={key} {...prop} className="mr-2"></Link>;
                    }
                    return <a key={key} {...prop} className="mr-2"></a>;
                  })}
                </h5>
              </div>
              {bottomButtons.map((prop, key) => (
                <Button key={key} {...prop} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Blogs9.defaultProps = {
  user: {},
  description: [],
  leftButtons: [],
  bottomButtons: [],
  links: [],
  heading3badge: null,
};
Blogs9.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
  }),
  leftButtons: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // array of properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  links: PropTypes.arrayOf(PropTypes.object),
  // array of props to pass to the Button component
  bottomButtons: PropTypes.arrayOf(PropTypes.object),
};
