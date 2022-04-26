import React from "react";
import PropTypes from "prop-types";

// components
import Heading2 from "../../../../components/Headings/Heading2.js";
import Button from "../../../../components/Elements/Button.js";
import Input from "../../../../components/Elements/Input.js";

export default function Hero6({ heading2, input, button }) {
  return (
    <>
      <div className="py-12">
        <div className="my-12 container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-7/12 w-10/12">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
                <div className="px-5 py-3 flex-auto">
                  <form className="my-0">
                    <div className="flex flex-wrap -mx-4">
                      <div className="px-4 relative w-full sm:w-8/12 pt-4">
                        <Input {...input} />
                      </div>
                      <div className="px-4 sm:pl-0 relative w-full sm:w-4/12 text-right pt-4">
                        <Button {...button} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Hero6.defaultProps = {
  input: {},
  button: {},
  heading2: null,
};
Hero6.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // props that can be passed to the Input component
  input: PropTypes.object,
  // props that can be passed to the Button component
  button: PropTypes.object,
};
