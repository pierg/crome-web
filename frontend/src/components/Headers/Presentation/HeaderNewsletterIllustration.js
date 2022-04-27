import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";

export default function HeaderNewsletterIllustration({
  image,
  button,
  input,
  title,
  description,
}) {
  return (
    <>
      <div className="p-0 flex items-center overflow-hidden min-h-screen-75">
        <div className="container mx-auto px-4">
          <div className="items-center text-left flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-6/12">
              <h1 className="text-4xl font-bold leading-tight">{title}</h1>
              <p className="mt-4 mb-4 text-xl leading-relaxed text-blueGray-400">
                {description}
              </p>
              <div className="flex flex-wrap -mx-4 mt-8">
                <div className="px-4 pr-2 relative w-full sm:w-8/12">
                  <Input {...input} />
                </div>
                <div className="px-4 pl-0 relative w-full sm:w-4/12">
                  <Button {...button} />
                </div>
              </div>
            </div>
            <div className="px-4 relative w-full lg:w-6/12">
              <img src={image} className="w-full lg:ml-12" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
HeaderNewsletterIllustration.defaultProps = {
  button: {},
  input: {},
};
HeaderNewsletterIllustration.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Input,
  // so please check that one out
  input: PropTypes.object,
};
