import FooterSmall from "components/Footers/Landing/FooterSmall.js";
import passProps from "_texts/presentation/footers/footersmall.js";
const props = `FooterSmall.defaultProps = {
  copyright: {},
  links: [],
  type: "light"
};

FooterSmall.propTypes = {
  type: PropTypes.oneOf(["light","dark"]),
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
import FooterSmall from "@notus-pro/react/FooterSmall";

const props = ${JSON.stringify(passProps)}

export default function Landing2() {
  return (
    <>
      <FooterSmall
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: FooterSmall,
  componentName: "FooterSmall",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
