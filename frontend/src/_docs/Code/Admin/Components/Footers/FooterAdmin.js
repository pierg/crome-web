import "_texts/admin/footers/footeradmin.js"
import "components/Footers/Admin/FooterAdmin.js"
import FooterAdmin
import passProps

const props = `FooterAdmin.defaultProps = {
  copyright: {},
  links: [],
};

FooterAdmin.propTypes = {
  // properties to pass to the link object
  // that sits on the left of the footer
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  copyright: PropTypes.object,
  // array of properties to pass to the link object
  // that are on the right side of the footer
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  links: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/FooterAdmin"
import FooterAdmin

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <FooterAdmin {...props} />
    </>
  );
}`;

const docsObjects = {
  component: FooterAdmin,
  componentName: "FooterAdmin",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
