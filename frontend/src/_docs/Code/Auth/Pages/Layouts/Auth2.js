import Auth2 from "components/Layouts/Auth/Auth2.js";
import passProps from "_texts/auth/layouts/auth2.js";
const props = `Auth2.defaultProps = {
  children: undefined,
};

Auth2.propTypes = {
  children: PropTypes.node,
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the HeaderImageTitleSmallCenter component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  header: PropTypes.object,
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
import Auth2 from "@notus-pro/react/Auth2";
// texts as props
const auth2 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Auth2 {...auth2} />
    </>
  );
}`;

const docsObjects = {
  component: Auth2,
  componentName: "Auth2",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
