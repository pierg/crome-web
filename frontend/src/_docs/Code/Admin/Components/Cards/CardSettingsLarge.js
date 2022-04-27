import CardSettingsLarge from "components/Cards/Admin/CardSettingsLarge.js";
import passProps from "_texts/admin/cards/cardsettingslarge.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Select",
    link: "/components/misc/components/forms#misc-id-misc-id-components-select",
  },
  {
    name: "Input",
    link: "/components/misc/components/inputs",
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardSettingsLarge from "@notus-pro/react/CardSettingsLarge";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-10/12">
        <CardSettingsLarge {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardSettingsLarge,
  componentName: "CardSettingsLarge",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-10/12",
  },
};
export default docsObjects;
