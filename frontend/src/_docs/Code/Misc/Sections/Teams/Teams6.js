import Teams6 from "components/Sections/Misc/Teams/Teams6.js";
import passProps from "_texts/misc/teams/teams6.js";
const dependencies = [
  {
    name: "Heading3",
    link:
      "/components/misc/components/headings#misc-id-misc-id-components-heading3",
  },
  {
    name: "CardProfileActions",
    link: "",
  },
  {
    name: "CardProfileReviews",
    link: "",
  },
];
const props = `Teams6.defaultProps = {
  cards: [],
  heading3: null,
};
Teams6.propTypes = {
  // prop to pass to the Heading3 component
  heading3: PropTypes.object,
  cards: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // props that can be passed to the
      // the CardProfileActions component
      PropTypes.shape({
        cardprofileactions: PropTypes.object,
      }),
      // props that can be passed to the
      // CardProfileReviews component
      PropTypes.shape({
        cardprofilereviews: PropTypes.object,
      }),
    ])
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Teams6 from "@notus-pro/react/Teams6";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Teams6 {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Teams6,
  componentName: "Teams6",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
