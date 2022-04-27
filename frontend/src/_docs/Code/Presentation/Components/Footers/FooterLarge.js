import FooterLarge from "components/Footers/Landing/FooterLarge.js";
import passProps from "_texts/presentation/footers/footerlarge.js";
const props = `FooterLarge.defaultProps = {
  links: [],
  socials: [],
};
FooterLarge.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      // array of properties to pass to the link object
      // if you pass a prop named to, the link will be
      // generated using Link from react-router-dom
      items: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  socials: PropTypes.arrayOf(
    // this will generate an anchor with target blank to the given link
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "dribbble",
        "github",
      ]),
      link: PropTypes.string,
    })
  ),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import FooterLarge from "@notus-pro/react/FooterLarge";

const props = ${JSON.stringify(passProps)}

export default function Landing1() {
  return (
    <>
      <FooterLarge
        {...props}
      />
    </>
  );
}`;

const docsObjects = {
  component: FooterLarge,
  componentName: "FooterLarge",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
