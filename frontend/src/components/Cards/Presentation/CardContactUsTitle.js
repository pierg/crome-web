import React from "react";
import PropTypes from "prop-types";
// components

export default function CardContactUsTitle({
  title,
  description,
  inputs,
  buttonProps,
  buttonText,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
            {description}
          </p>
          <div className="mt-8">
            {inputs.map((prop, key) => {
              let textarea =
                prop.inputProps && prop.inputProps.type === "textarea";
              let inputProps = prop.inputProps ? prop.inputProps : {};
              let labelProps = prop.labelProps ? prop.labelProps : {};
              return (
                <div className="relative w-full mb-3" key={key}>
                  <label
                    {...labelProps}
                    className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1"
                  >
                    {prop.labelText}
                  </label>
                  {textarea ? (
                    <textarea
                      {...inputProps}
                      className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                    />
                  ) : (
                    <input
                      {...inputProps}
                      className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <button
              {...buttonProps}
              className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CardContactUsTitle.defaultProps = {
  inputs: [],
};

CardContactUsTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  // for example you could pass an onClick handler like so:
  // buttonProps={{
  //   onClick: () => { alert("Check your console"); console.log("hey my dude"); }
  // }}
  buttonProps: PropTypes.object,
  // NOTE: you cannot change the default design of these components,
  // // // i.e. you cannot pass className as props for them
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      labelText: PropTypes.string,
      labelProps: PropTypes.object,
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> inputProps: { type: "textarea" }
      inputProps: PropTypes.object,
    })
  ),
};
