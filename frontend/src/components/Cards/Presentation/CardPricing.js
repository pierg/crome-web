/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// components

export default function CardPricing({ headText, price, unit, list, link }) {
  return (
    <>
      <div className="bg-white mb-6 text-center shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
        <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-200">
          <h6 className="font-bold my-2">{headText}</h6>
        </div>

        <div className="px-4 py-5 flex-auto">
          <div className="text-5xl mt-0 mb-0 font-bold">{price}</div>
          <span> {unit} </span>
          <ul className="mt-6 mb-0 list-none">
            {list.map((prop, key) => {
              return (
                <li className="py-1 text-blueGray-500" key={key}>
                  <b className="text-lightBlue-500"> {prop.feature} </b>
                  {prop.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-4 py-6 bg-transparent bg-transparent rounded-b px-4 py-3 border-t border-blueGray-200">
          {link && link.to ? (
            <Link {...link} className="text-lightBlue-500" />
          ) : (
            <a {...link} className="text-lightBlue-500" />
          )}
        </div>
      </div>
    </>
  );
}
CardPricing.defaultProps = {
  list: [],
};

CardPricing.propTypes = {
  headText: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      feature: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
