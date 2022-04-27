import Contact from "components/Content/Contact.js";
import passProps from "_texts/misc/content/contact.js";
const props = `Contact.defaultProps = {};
Contact.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.oneOf([
    "light",
    "dark",
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
  // if Online, then a emerald bullet will appear near it
  // if Offline, then a red bullet will appear near it
  lastOnline: PropTypes.string,
  lastMessage: PropTypes.string,
  // properties to pass to the link object
  // that wrapps the whole component
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Contact from "@notus-pro/react/Contact";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Contact {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Contact,
  componentName: "Contact",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "light",
      "dark",
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
    defaultColor: "lightBlue",
  },
};
export default docsObjects;
