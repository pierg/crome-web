import Teams4 from "components/Sections/Misc/Teams/Teams4.js";
import passProps from "_texts/misc/teams/teams4.js";
const dependencies = [
  {
    name: "Heading2",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading2",
  },
  {
    name: "CardProfileSkills",
    link: "",
  },
];
const props = `Teams4.defaultProps = {
  cards: [],
  heading2: null,
};
Teams4.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  // an array of props that can be passed to the
  // CardProfileSkills component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Teams4 from "@notus-pro/react/Teams4";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Teams4 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Teams4,
  componentName: "Teams4",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
