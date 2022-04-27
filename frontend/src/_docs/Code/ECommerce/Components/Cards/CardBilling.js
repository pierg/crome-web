import CardBilling from "components/Cards/ECommerce/CardBilling.js";
import passProps from "_texts/e-commerce/cards/cardbilling.js";
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Select",
    link: "/components/misc/components/forms#misc-id-misc-id-components-select",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `const inputsObject = {
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardBilling from "@notus-pro/react/CardBilling";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <CardBilling {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardBilling,
  componentName: "CardBilling",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "paymentTabColor",
    colorsSwitcher: [
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
    ],
    defaultColor: "pink",
  },
};
export default docsObjects;
