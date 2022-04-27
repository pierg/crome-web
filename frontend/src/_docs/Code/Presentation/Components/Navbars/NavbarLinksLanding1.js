import NavbarLinksLanding1 from "components/Navbars/NavbarLinks.js";
import passProps from "_texts/presentation/navbars/navbarlinkslanding1.js";
const props = `NavbarLinks.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  socials: [],
  type: "",
};
NavbarLinks.propTypes = {
  logoImage: PropTypes.string,
  logoText: PropTypes.string,
  // properties to pass to the link object wrapping
  // the logoText and logoImage
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  logoLink: PropTypes.object,
  color: PropTypes.oneOf([
    "dark",
    "light",
    "transparent",
    "white",
    "black",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  type: PropTypes.oneOf(["absolute", "fixed", ""]),
  // array of properties (for both, left and right Links)
  // to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: you can generate a dropdown if, inside the
  // // // object you pass dropdown: true as a prop
  // // // please check the DropdownNavbar to see
  // // // what the object should be in this case
  leftLinks: PropTypes.arrayOf(PropTypes.object),
  rightLinks: PropTypes.arrayOf(PropTypes.object),
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
      // this will be visible only on mobile devices
      text: PropTypes.string,
    })
  ),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <NavbarLinks
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: NavbarLinksLanding1,
  componentName: "NavbarLinksLanding1",
  passProps,
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full h-16 relative",
    previewClasses: "bg-blueGray-100",
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "dark",
      "light",
      "transparent",
      "white",
      "black",
      "blueGray",
      "red",
      "orange",
      "amber",
      "emerald",
      "teal",
      "lightBlue",
      "indigo",
      "purple",
      "pink",
    ],
    defaultColor: "transparent",
  },
};
export default docsObjects;
