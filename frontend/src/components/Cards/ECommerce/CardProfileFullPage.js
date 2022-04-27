/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardProfileFullPage({
  image,
  name,
  location,
  description,
  showMore,
  stats,
  buttons,
  achievements,
}) {
  let newDescription = [];
  if (!Array.isArray(description)) {
    newDescription = [description];
  } else {
    newDescription = description;
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={image}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                {buttons.map((prop, key) => (
                  <Button {...prop} key={key} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                {stats.map((prop, key) => (
                  <div key={key} className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block tracking-wide text-blueGray-700">
                      {prop.title}
                    </span>
                    <span className="text-sm text-blueGray-500">
                      {prop.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-bold leading-tight mb-2 mb-0">
              {name}
            </h3>
            {location ? (
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-500 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-500"></i>
                {location}
              </div>
            ) : null}
            <div className="mb-2 text-blueGray-700 mt-10">
              {achievements.map((prop, key) => (
                <p key={key} className="mb-2 text-blueGray-700">
                  <i
                    className={prop.icon + " mr-2 text-lg text-blueGray-500"}
                  ></i>
                  {prop.text}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                {newDescription.map((prop, key) => (
                  <p
                    key={key}
                    className="mb-4 text-lg leading-relaxed text-blueGray-800"
                  >
                    {prop}
                  </p>
                ))}
                {showMore && showMore.to ? (
                  <Link
                    {...showMore}
                    className="font-normal text-lightBlue-500 hover:text-lightBlue-600"
                  />
                ) : (
                  <a
                    {...showMore}
                    className="font-normal text-lightBlue-500 hover:text-lightBlue-600"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardProfileFullPage.defaultProps = {
  stats: [],
  buttons: [],
  achievements: [],
  showMore: {},
};

CardProfileFullPage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  // You send a simple string for a one paragraph description
  // or you can send an array of strings, that will generate
  // each string into a new paragraph
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  showMore: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  // array of objects representing the props
  // that you can pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
