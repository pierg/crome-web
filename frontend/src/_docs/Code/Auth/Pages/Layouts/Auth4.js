import Auth4 from "components/Layouts/Auth/Auth4.js";
import passProps from "_texts/auth/layouts/auth4.js";
const props = `Auth4.defaultProps = {
  children: undefined,
};

Auth4.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the PreFooterLarge component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  prefooter: PropTypes.object,
  // props that you can pass to the FooterSmall component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  footer: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Auth4 from "@notus-pro/react/Auth4";
// texts as props
const auth4 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Auth4 {...auth4} />
    </>
  );
}`;

const docsObjects = {
  component: Auth4,
  componentName: "Auth4",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
