import React from "react";
import PropTypes from "prop-types";

// components
import ImageTooltip from "../../components/Images/ImageTooltip.js";

export default function ImagesOverlap({ images, text, size }) {
  const newSize = {
    sm: "w-6 h-6",
    lg: "w-10 h-10",
    regular: "w-8 h-8",
  };
  return (
    <>
      <div className="flex items-center">
        <div>
          {images.map((prop, key) => (
            <a
              className={
                "text-white bg-blueGray-500 inline-flex items-center justify-center shadow-lg rounded rounded-full relative border-2 border-white -ml-4 hover:z-1 " +
                newSize[size]
              }
              key={key}
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <ImageTooltip {...prop} />
            </a>
          ))}
        </div>
        <small className="pl-2 font-bold mb-1">{text}</small>
      </div>
    </>
  );
}

ImagesOverlap.defaultProps = {
  images: [],
  size: "regular",
};
ImagesOverlap.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
};
