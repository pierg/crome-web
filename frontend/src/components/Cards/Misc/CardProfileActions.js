import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function CardProfileActions({
  headImage,
  image,
  title,
  description,
  leftButton,
  rightButton,
  stats,
}) {
  return (
    <>
      <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div
          className="bg-red-500 mb-12 w-full border-0 rounded-t-lg px-5 py-3 h-140-px bg-bottom bg-cover"
          style={{ backgroundImage: "url(" + headImage + ")" }}
        >
          <div className="flex justify-center">
            <img
              alt="..."
              src={image}
              className="rounded-full shadow-lg align-middle absolute mt-12 border-4 border-white max-w-150-px"
            />
          </div>
        </div>

        <div className="px-4 py-5 flex-auto">
          <div className="flex justify-center mt-8">
            <Button {...leftButton} />
            <Button {...rightButton} />
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full">
              <div className="py-4 flex justify-center">
                {stats.map((prop, key) => (
                  <div key={key} className="text-center mr-4 p-4">
                    <span className="font-bold text-xl block">
                      {prop.title}
                    </span>
                    <span className="text-blueGray-400">{prop.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold leading-tight mt-0 mb-1">
              {title}
            </h3>
            <p className="text-lg text-blueGray-400">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
CardProfileActions.defaultProps = {
  leftButton: {},
  rightButton: {},
  stats: [],
};

CardProfileActions.propTypes = {
  headImage: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  leftButton: PropTypes.object,
  // props to pass to the Button component
  rightButton: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
};
