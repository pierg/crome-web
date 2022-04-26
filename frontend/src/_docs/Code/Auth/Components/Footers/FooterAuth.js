import FooterAuth from "components/Footers/Auth/FooterAuth.js";
import passProps from "_texts/auth/footers/footerauth.js";
const props = `FooterAuth.defaultProps = {
  copyright: {},
  links: [],
};

FooterAuth.propTypes = {
  // this is a link, so if you pass "to" as prop
  // it will be generated as a Link from react-router-dom
  // otherwise, it will be generated as a simple anchor tag
  copyright: PropTypes.object,
  // same as above, just that this an array of them
  links: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import FooterAuth from "@notus-pro/react/FooterAuth";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <FooterAuth {...props} />
    </>
  );
}`;

const docsObjects = {
  component: FooterAuth,
  componentName: "FooterAuth",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full h-64 xl:h-16 relative",
    previewClasses: "bg-blueGray-200",
  },
};
export default docsObjects;
