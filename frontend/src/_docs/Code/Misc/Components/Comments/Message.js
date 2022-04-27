import Message from "components/Content/Message.js";
import passProps from "_texts/misc/content/message.js";
const props = `Contact.defaultProps = {
  content: [],
  color: "blueGray",
  align: "right",
};
Contact.propTypes = {
  align: PropTypes.oneOf(["left", "right"]),
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this will generate a paragraph
      PropTypes.string,
      // this will generate an image
      PropTypes.shape({
        image: PropTypes.string,
      }),
    ])
  ),
  time: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  color: PropTypes.oneOf([
    "white",
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
  // properties to pass to the link object
  // that wrapps the whole component
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import Message from "@notus-pro/react/Message";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <Message {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Message,
  componentName: "Message",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
      "white",
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
