import Pricing7 from "components/Sections/Misc/Pricing/Pricing7.js";
import passProps from "_texts/misc/pricing/pricing7.js";
const dependencies = [
  {
    name: "Heading3Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `Pricing7.defaultProps = {
  table: {
    head: [],
    body: [],
  },
  heading3badge: null,
};
Pricing7.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  table: PropTypes.shape({
    head: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          subtitle: PropTypes.string,
          // props to pass to the Button component
          button: PropTypes.object,
        }),
      ])
    ),
    body: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
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
      )
    ),
  }),
};`;
const description = "";
const preview = `import React from "react";

// sections
import Pricing7 from "@notus-pro/react/Pricing7";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Pricing7
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing7,
  componentName: "Pricing7",
  passProps,
  description,
  props,
  preview,
  dependencies,
};
export default docsObjects;
