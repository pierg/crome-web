import HeaderNewsletterIllustration from "components/Headers/Presentation/HeaderNewsletterIllustration.js";
import passProps from "_texts/presentation/headers/headernewsletterillustration.js";
const props = `HeaderNewsletterIllustration.defaultProps = {
  button: {},
  input: {},
};
HeaderNewsletterIllustration.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
  // it is represented by the props
  // that can be passed to the Input,
  // so please check that one out
  input: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import HeaderNewsletterIllustration from "@notus-pro/react/HeaderNewsletterIllustration";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <HeaderNewsletterIllustration
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: HeaderNewsletterIllustration,
  componentName: "HeaderNewsletterIllustration",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
