import CardProductPrice from "components/Cards/ECommerce/CardProductPrice.js";
import passProps from "_texts/e-commerce/cards/cardproductprice.js";
const props = `CardProductPrice.defaultProps = {
  button: {},
};

CardProductPrice.propTypes = {
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  // props to send to the Button component
  button: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProductPrice from "@notus-pro/react/CardProductPrice";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/4">
        <CardProductPrice {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardProductPrice,
  componentName: "CardProductPrice",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/4",
  },
};
export default docsObjects;
