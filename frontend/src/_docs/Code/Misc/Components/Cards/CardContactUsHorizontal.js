import CardContactUsHorizontal from "components/Cards/Misc/CardContactUsHorizontal.js";
import passProps from "_texts/misc/cards/cardcontactushorizontal.js";
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
const props = `const widthTypes = {
  // The width the component should have by default
  // if this is not set, then it is defaulted to 100% (w-full)
  width: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on sm breakpoint
  sm: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on md breakpoint
  md: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on lg breakpoint
  lg: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
  // The width the input should have on xl breakpoint
  xl: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
};

const inputsTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  // NOTE: if you wish to generate a textarea, you will need to pass
  // // // inside this object >> type: "textarea"
  // // // full example >> input: { type: "textarea" }
  input: PropTypes.object,
});

const selectTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Select component element
  select: PropTypes.object,
});

CardContactUsHorizontal.defaultProps = {
  left: {
    inputs: [],
    button: {},
  },
  right: {
    list: [],
  },
  color: "blueGray",
};
CardContactUsHorizontal.propTypes = {
  left: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    // props to pass to the Button component
    button: PropTypes.object,
    inputs: PropTypes.arrayOf(PropTypes.oneOfType([inputsTypes, selectTypes])),
  }),
  right: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
  // color for the right part
  color: PropTypes.oneOf([
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
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardContactUsHorizontal from "@notus-pro/react/CardContactUsHorizontal";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <CardContactUsHorizontal
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: CardContactUsHorizontal,
  componentName: "CardContactUsHorizontal",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
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
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
