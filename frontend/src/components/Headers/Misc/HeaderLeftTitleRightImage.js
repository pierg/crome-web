import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";

export default function HeaderLeftTitleRightImage({
  image,
  title,
  description,
  button,
}) {
  return (
    <>
      <div className="p-0 flex items-center overflow-hidden min-h-screen-75">
        <div
          className="absolute bg-contain bg-100 bg-no-repeat w-full h-full"
          style={{ backgroundImage: "url('" + image + "')" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div
              className="px-4 relative w-full lg:w-5/12 w-full md:w-7/12"
              ct-utillities="mr-auto;text-left;d-flex;justify-content-center;flex-column"
            >
              <h1 className="text-5xl font-bold leading-tight mt-0 mb-2">
                {title}
              </h1>
              <p className="text-xl leading-relaxed opacity-75">
                {description}
              </p>
              <div className="mt-8">
                <Button {...button} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderLeftTitleRightImage.defaultProps = {
  button: {},
};

HeaderLeftTitleRightImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
};
