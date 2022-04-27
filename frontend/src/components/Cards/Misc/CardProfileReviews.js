import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardProfileReviews({
  headImage,
  image,
  title,
  description,
  button,
  stats,
}) {
  return (
    <>
      <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 bg-white w-full mb-6">
        <div
          className="bg-blueGray-800 mb-12 w-full border-0 rounded-t-lg px-5 py-3 h-140-px bg-bottom bg-cover"
          style={{ backgroundImage: "url(" + headImage + ")" }}
        >
          <div className="flex justify-center">
            <img
              alt="..."
              src={image}
              className="rounded-full shadow-lg align-middle absolute mt-16 border-4 border-white max-w-150-px"
            />
          </div>
        </div>

        <div className="px-4 py-5 flex-auto">
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold leading-tight mt-0 mb-1">
              {title}
            </h3>
            <p className="text-blueGray-400 text-lg">{description}</p>
          </div>
          <div className="py-4 flex justify-center">
            {stats.map((prop, key) => (
              <div key={key} className="text-center mr-4 p-4">
                <span className="font-bold text-lg block">{prop.title}</span>
                <span className="text-blueGray-400">{prop.subtitle}</span>
              </div>
            ))}
          </div>
          <Button {...button} />
        </div>
      </div>
    </>
  );
}

CardProfileReviews.defaultProps = {
  button: {},
  stats: [],
};

CardProfileReviews.propTypes = {
  headImage: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
};
