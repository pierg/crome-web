import "components/Cards/Card.js"
import Card

const passProps = {
  children:
    "This is the Card tag. It only adds some nice styles for the inner content, such as shadows, rounded corners etc.",
};
const props = `Card.defaultProps = {};

Card.propTypes = {
  children: PropTypes.node,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Card"
import Card

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <Card {...props} />
    </>
  );
}`;

const docsObjects = {
  component: Card,
  componentName: "Card",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
