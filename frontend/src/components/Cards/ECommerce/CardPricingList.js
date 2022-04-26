/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components
import Button from "../../../components/Elements/Button.js";

export default function CardPricingList({
  title,
  description,
  price,
  list,
  button,
  link,
}) {
  return (
    <>
      <div className="shadow-lg rounded-lg text-center text-blueGray-500 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 bg-blueGray-800">
        <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-700">
          <h4 className="font-bold uppercase my-2 text-white">{title}</h4>
        </div>
        <div className="lg:px-12 px-4 py-5 flex-auto">
          <div className="text-6xl font-normal leading-tight font-bold text-white">
            {price}
          </div>
          <span className="text-lg text-white opacity-50">{description}</span>
          <ul className="mt-8 mb-8 list-none">
            {list.map((prop, key) => (
              <li key={key} className="py-2">
                <div className="flex items-center">
                  <span className="inline-flex text-center rounded-full mr-3 items-center justify-center w-8 h-8 text-sm text-blueGray-500 bg-blueGray-200">
                    <i className={prop.icon}></i>
                  </span>
                  <h6 className="text-lg text-white opacity-75">{prop.text}</h6>
                </div>
              </li>
            ))}
          </ul>
          <Button {...button} />
        </div>
        <div className="bg-transparent mt-2 py-6 bg-transparent rounded-b px-4 py-3 border-t border-blueGray-700">
          {link && link.to ? (
            <Link className="text-blueGray-500" {...link} />
          ) : (
            <a className="text-blueGray-500" {...link} />
          )}
        </div>
      </div>
    </>
  );
}

CardPricingList.defaultProps = {
  list: [],
  button: {},
};

CardPricingList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  // props to send to the Button component
  button: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
