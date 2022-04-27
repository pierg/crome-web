import "components/Cards/CardBody.js"
import CardBody

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
import "@notus-pro/react/CardBody"
import CardBody

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
