/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components

export default function CardDashboardProfile({
  image,
  name,
  stats,
  description,
  showMore,
  location,
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
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={image}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-fulltext-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                {stats.map((prop, key) => (
                  <div key={key} className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-700">
                      {prop.title}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      {prop.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-bold leading-normal mb-2">{name}</h3>
            {location && (
              <div className="text-xs mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-blueGray-400 opacity-75"></i>
                {location}
              </div>
            )}
          </div>
          <div className="mt-6 py-6 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                {newDescription.map((prop, key) => (
                  <p key={key} className="font-light leading-relaxed mb-4">
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

CardDashboardProfile.defaultProps = {
  stats: [],
  achievements: [],
  showMore: {},
};

CardDashboardProfile.propTypes = {
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
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
