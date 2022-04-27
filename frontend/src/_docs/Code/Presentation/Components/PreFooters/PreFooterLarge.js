import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import passProps from "_texts/presentation/prefooters/prefooterlarge.js";
const props = `PreFooterLarge.defaultProps = {
  socials: [],
  type: "light"
};
PreFooterLarge.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(["dark","light"]),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      // the buttonProps can be any of the props of the Button component
      buttonProps: PropTypes.object,
    })
  ),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <PreFooterLarge
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: PreFooterLarge,
  componentName: "PreFooterLarge",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
