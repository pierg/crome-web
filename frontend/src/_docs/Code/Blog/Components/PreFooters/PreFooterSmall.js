import PreFooterSmall from "components/PreFooters/PreFooterSmall.js";
import passProps from "_texts/blog/prefooters/prefootersmall.js";
const props = `PreFooterSmall.defaultProps = {
  cards: [],
};

PreFooterSmall.propTypes = {
  // aray of props that can be passed to the CardSocialMedia component
  cards: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import PreFooterSmall from "@notus-pro/react/PreFooterSmall";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <PreFooterSmall
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: PreFooterSmall,
  componentName: "PreFooterSmall",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
