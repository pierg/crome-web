import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import Button from "../../../components/Elements/Button.js";
import Input from "../../../components/Elements/Input.js";
import Select from "../../../components/Elements/Select.js";

export default function CardBilling({
  title,
  inputs,
  paymentTitle,
  defaultPaymentOpened,
  paymentOptions,
  onPaymentChange,
  paymentTabColor,
  returnButton,
  orderButton,
}) {
  const [open, setOpen] = React.useState(defaultPaymentOpened);
  const [oldInTransition, setOldInTransition] = React.useState(false);
  const [newInTransition, setNewInTransition] = React.useState(false);
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
  const activeColors = {
    blueGray: "bg-blueGray-500 text-white",
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    lightBlue: "bg-lightBlue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    purple: "bg-purple-500 text-white",
    pink: "bg-pink-500 text-white",
  };
  const nonActiveColors = {
    blueGray: "text-blueGray-500 bg-white",
    red: "text-red-500 bg-white",
    orange: "text-orange-500 bg-white",
    amber: "text-amber-500 bg-white",
    emerald: "text-emerald-500 bg-white",
    teal: "text-teal-500 bg-white",
    lightBlue: "text-lightBlue-500 bg-white",
    indigo: "text-indigo-500 bg-white",
    purple: "text-purple-500 bg-white",
    pink: "text-pink-500 bg-white",
  };
  const toggleNew = (e, newOpen, text) => {
    e.preventDefault();
    if (!newInTransition && !oldInTransition) {
      setOldInTransition(true);
      setTimeout(function () {
        setOpen(newOpen);
      }, 500);
      setTimeout(function () {
        setOldInTransition(false);
        setNewInTransition(true);
      }, 600);
      setTimeout(function () {
        setNewInTransition(false);
      }, 1100);
    }
    onPaymentChange(newOpen, text);
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <form>
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-semibold mt-4 mb-6">{title}</h3>
              <div className="flex flex-wrap -mx-4">
                {inputs.map((prop, key) => (
                  <div
                    key={key}
                    className={
                      "px-4 pb-2 relative w-full " + widths[prop.width]
                    }
                  >
                    <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2 ml-1">
                      {prop.label}
                    </label>
                    {prop.input && <Input {...prop.input} />}
                    {prop.select && <Select {...prop.select} />}
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-semibold mt-4 mb-6">
                {paymentTitle}
              </h3>
              <ul className="flex-col md:flex-row flex flex-wrap list-none pl-0 mb-0">
                {paymentOptions.map((prop, key) => (
                  <li
                    key={key}
                    className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                  >
                    <a
                      href="#pablo"
                      className={classnames(
                        "text-xs font-bold uppercase px-5 py-3 shadow rounded block leading-normal sm:mb-4 md:mb-0 uppercase duration-500 transition-all ease-in-out",
                        {
                          [nonActiveColors[paymentTabColor]]: key !== open,
                          [activeColors[paymentTabColor]]: key === open,
                        }
                      )}
                      onClick={(e) => toggleNew(e, key, prop.tabName)}
                    >
                      {prop.tabName}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-full">
                {paymentOptions.map((prop, key) => (
                  <div
                    key={key}
                    className={classnames(
                      "my-8 transform duration-500 transition-all ease-in-out",
                      {
                        hidden: key !== open,
                        block: key === open,
                        "opacity-0 scale-0": key === open && oldInTransition,
                        "opacity-100 scale-100":
                          key === open && newInTransition,
                      }
                    )}
                  >
                    <div className="flex flex-wrap -mx-4">
                      {prop.inputs.map((inputProp, inputKey) => (
                        <div
                          key={inputKey}
                          className={
                            "px-4 relative w-full " + widths[inputProp.width]
                          }
                        >
                          <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2 ml-1">
                            {inputProp.label}
                          </label>
                          {inputProp.input && <Input {...inputProp.input} />}
                          {inputProp.select && <Select {...inputProp.select} />}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-12 mb-8">
                <Button {...returnButton} />
                <Button {...orderButton} />
              </div>
            </div>
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

CardBilling.defaultProps = {
  inputs: [],
  paymentOptions: [],
  onPaymentChange: () => {},
  returnButton: {},
  orderButton: {},
  defaultPaymentOpened: 0,
  paymentTabColor: "blueGray",
};

CardBilling.propTypes = {
  title: PropTypes.string,
  inputs: inputsTypes,
  paymentTitle: PropTypes.string,
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultPaymentOpened: PropTypes.number,
  paymentOptions: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string,
      inputs: inputsTypes,
    })
  ),
  // this function has two parameters,
  // index number of the tab that was pressed
  // and the tabName of that tab
  // example: onPaymentChange={(index,name) => console.log(index,name)}
  onPaymentChange: PropTypes.func,
  paymentTabColor: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  // props to pass to the Button component on the left
  returnButton: PropTypes.object,
  // props to pass to the Button component on the right
  orderButton: PropTypes.object,
};
