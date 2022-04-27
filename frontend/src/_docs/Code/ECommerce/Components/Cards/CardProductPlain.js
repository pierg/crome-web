import CardProductPlain from "components/Cards/ECommerce/CardProductPlain.js";
import passProps from "_texts/e-commerce/cards/cardproductplain.js";
const dependencies = [
  {
    name: "Badge",
    link: "/components/misc/components/badges",
  },
];
const props = `CardProductPlain.defaultProps = {
  link: {},
  type: "border",
};

CardProductPlain.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["border", "borderless"]),
  price: PropTypes.oneOfType([
    // this is a simple price tag
    PropTypes.string,
    // this is to show a new price with an old one
    PropTypes.shape({
      old: PropTypes.string,
      new: PropTypes.string,
    }),
  ]),
  // props to pass to the Badge component
  badge: PropTypes.object,
  // properties to pass to the link object that wraps the title
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProductPlain from "@notus-pro/react/CardProductPlain";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <CardProductPlain {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardProductPlain,
  componentName: "CardProductPlain",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4",
  },
};
export default docsObjects;
