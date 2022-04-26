import Teams5 from "components/Sections/Misc/Teams/Teams5.js";
import passProps from "_texts/misc/teams/teams5.js";
const dependencies = [
  {
    name: "Heading2Badge",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2badge",
  },
  {
    name: "CardProfileFullDetails",
    link: "",
  },
];
const props = `Teams5.defaultProps = {
  card: {},
  heading2badge: null,
};
Teams5.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // props that can be passed to the
  // CardProfileFullDetails component
  card: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Teams5 from "@notus-pro/react/Teams5";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Teams5 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Teams5,
  componentName: "Teams5",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
