import "_texts/presentation/infoarea/infoareauser.js"
import "components/InfoAreas/Presentation/InfoAreaUser.js"
import InfoAreaUser
import passProps

const props = `InfoAreaUser.defaultProps = {
  socialLinks: []
};
InfoAreaUser.propTypes = {
  // src of the image
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    // this will generate an anchor with target blank to the given link
    PropTypes.shape({
      icon: PropTypes.oneOf(["facebook", "twitter", "instagram", "dribbble"]),
      link: PropTypes.string,
    })
  ),
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/InfoAreaUser"
import InfoAreaUser

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <InfoAreaUser {...props} />
    </>
  );
}`;

const docsObjects = {
  component: InfoAreaUser,
  componentName: "InfoAreaUser",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
