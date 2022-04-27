import CardBody from "components/Cards/CardBody.js";
const passProps = {
  children: "This is the CardBody tag.",
};
const props = `CardBody.defaultProps = {};

CardBody.propTypes = {
  children: PropTypes.node,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardBody from "@notus-pro/react/CardBody";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <CardBody {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardBody,
  componentName: "CardBody",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
