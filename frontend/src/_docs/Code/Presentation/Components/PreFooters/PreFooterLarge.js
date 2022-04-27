import "_texts/presentation/prefooters/prefooterlarge.js"
import "components/PreFooters/PreFooterLarge.js"
import passProps
import PreFooterLarge

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
import "@notus-pro/react/PreFooterLarge"
import PreFooterLarge

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
