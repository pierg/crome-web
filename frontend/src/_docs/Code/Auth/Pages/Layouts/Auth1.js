import "_texts/auth/layouts/auth1.js"
import "components/Layouts/Auth/Auth1.js"
import Auth1
import passProps

const props = `Auth1.defaultProps = {
  children: undefined,
};

Auth1.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  // props that you can pass to the NavbarLinks component
  // NOTE: if you do not pass this object,
  // // // the navbar will not be rendered
  navbar: PropTypes.object,
  // props that you can pass to the FooterAuth component
  // NOTE: if you do not pass this object,
  // // // the footer will not be rendered
  footer: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Auth1"
import Auth1

// texts as props
const auth1 = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <Auth1 {...auth1} />
    </>
  );
}`;

const docsObjects = {
  component: Auth1,
  componentName: "Auth1",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
