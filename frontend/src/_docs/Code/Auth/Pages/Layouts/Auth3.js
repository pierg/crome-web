import Auth3 from "components/Layouts/Auth/Auth3.js";
import passProps from "_texts/auth/layouts/auth3.js";
const props = `Auth3.defaultProps = {
  children: undefined,
  color: "purple-indigo",
};

Auth3.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "purple-indigo",
    "orange-red",
    "amber-orange",
    "emerald-teal",
    "lightBlue-indigo",
    "pink-purple",
  ]),
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
import Auth3 from "@notus-pro/react/Auth3";
// texts as props
const auth3 = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Auth3 {...auth3} />
    </>
  );
}`;

const docsObjects = {
  component: Auth3,
  componentName: "Auth3",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full",
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "purple-indigo",
      "orange-red",
      "amber-orange",
      "emerald-teal",
      "lightBlue-indigo",
      "pink-purple",
    ],
    defaultColor: "purple-indigo",
  },
};
export default docsObjects;
