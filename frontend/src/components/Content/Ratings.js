import React from "react";
import PropTypes from "prop-types";

export default function Ratings({ rating, text }) {
  let starArray = [];
  for (var i = 1; i < 6; i++) {
    if (rating === i - 0.5) {
      starArray.push("half");
    } else if (rating >= i) {
      starArray.push("full");
    } else if (rating < i) {
      starArray.push("empty");
    }
  }
  return (
    <>
      <div className="text-orange-500">
        {starArray.map((prop, key) => {
          if (prop === "half") {
            return <i key={key} className="mr-1 fas fa-star-half-alt"></i>;
          } else if (prop === "full") {
            return <i key={key} className="mr-1 fas fa-star"></i>;
          } else {
            return <i key={key} className="mr-1 far fa-star"></i>;
          }
        })}
        <a
          href="https://www.creative-tim.com"
          className="inline text-sm ml-1 text-blueGray-700 hover:text-blueGray-500"
        >
          (76 customer reviews)
        </a>
      </div>
    </>
  );
}

Ratings.defaultProps = {
  rating: 0,
};

Ratings.propTypes = {
  rating: PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),
  text: PropTypes.string,
};
