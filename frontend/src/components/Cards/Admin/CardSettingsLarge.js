import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";
import Select from "../../../components/Elements/Select.js";

export default function CardSettingsLarge({ title, button, forms }) {
  const widths = {
    1: "lg:w-1/12",
    2: "lg:w-2/12",
    3: "lg:w-3/12",
    4: "lg:w-4/12",
    5: "lg:w-5/12",
    6: "lg:w-6/12",
    7: "lg:w-7/12",
    8: "lg:w-8/12",
    9: "lg:w-9/12",
    10: "lg:w-10/12",
    11: "lg:w-11/12",
    12: "lg:w-12/12",
  };
  return (
    <>
      <div className="relative flex flex-col w-full mb-6 shadow-lg rounded-lg bg-white">
        <div className="mb-0 p-6 pb-0">
          <div className="text-center flex justify-between items-center">
            <h6 className="text-xl font-bold mb-0">{title}</h6>
            <Button {...button} />
          </div>
        </div>
        <div className="flex-auto px-6 pb-6 pt-0">
          <form>
            {forms.map((prop, key) => (
              <div key={key}>
                <h6 className="mt-6 mb-2 font-bold">{prop.title}</h6>
                <hr className="mb-6 border-b-1 border-blueGray-200" />
                <div className="flex flex-wrap -mx-4">
                  {prop.inputs &&
                    prop.inputs.map((inputProp, inputKey) => (
                      <div
                        key={inputKey}
                        className={"w-full px-4 " + widths[inputProp.width]}
                      >
                        <div className="relative w-full mb-3">
                          {inputProp.label && (
                            <label
                              className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1"
                              htmlFor="grid-password"
                            >
                              {inputProp.label}
                            </label>
                          )}
                          {inputProp.input && <Input {...inputProp.input} />}
                          {inputProp.select && <Select {...inputProp.select} />}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}

const inputsObject = {
  // NOTE: this width only applies on large devices
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  // if you wish, you can send somthing like
  // <span className="mr-2">Label Name</span><span className="text-red-500">*</span>
  // NOTE: the label tag will be auto generated
  label: PropTypes.node,
};

const inputsShape = PropTypes.shape({
  ...inputsObject,
  // props to pass to the Input component
  input: PropTypes.object,
});

const selectsShape = PropTypes.shape({
  ...inputsObject,
  // props to pass to the Select component
  select: PropTypes.object,
});

const inputsTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([inputsShape, selectsShape])
);

CardSettingsLarge.defaultProps = {
  button: {},
  forms: [],
};

CardSettingsLarge.propTypes = {
  title: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,

  forms: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      inputs: inputsTypes,
    })
  ),
};
