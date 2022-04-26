import Pricing8 from "components/Sections/Misc/Pricing/Pricing8.js";
import passProps from "_texts/misc/pricing/pricing8.js";
const dependencies = [
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `Pricing8.defaultProps = {
  table: {
    head: [],
    body: [],
  },
  color: "blueGray",
  heading2badge: null,
};
Pricing8.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // this color will be applied on all
  // links and on the section background
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
  // NOTE: the head and the body's arrays should
  // // // have the same ammount of elements, otherwise
  // // // the output will not be the one expected
  table: PropTypes.shape({
    head: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          image: PropTypes.string,
        }),
        PropTypes.shape({
          title: PropTypes.string,
          // props to pass to the Button component
          button: PropTypes.object,
          // properties to pass to the link object
          // if you pass a prop named to, the link will be
          // generated using Link from react-router-dom
          link: PropTypes.object,
        }),
      ])
    ),
    body: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          // this will generate a single line with
          // the mentioned string, and the mentioned color
          // this acts like a section line
          line: PropTypes.string,
        }),
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
              // properties to pass to the link object
              // if you pass a prop named to, the link will be
              // generated using Link from react-router-dom
              link: PropTypes.object,
            }),
            PropTypes.shape({
              icon: PropTypes.string,
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
            }),
          ])
        ),
      ])
    ),
  }),
};`;
const description = "";
const preview = `import React from "react";

// sections
import Pricing8 from "@notus-pro/react/Pricing8";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Pricing8
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing8,
  componentName: "Pricing8",
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
