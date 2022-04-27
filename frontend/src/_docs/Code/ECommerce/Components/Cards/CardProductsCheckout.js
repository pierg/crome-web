import CardProductsCheckout from "components/Cards/ECommerce/CardProductsCheckout.js";
import passProps from "_texts/e-commerce/cards/cardproductscheckout.js";
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardProductsCheckout.defaultProps = {
  images: [],
  details: [],
};

CardProductsCheckout.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      price: PropTypes.string,
    })
  ),
  discount: PropTypes.shape({
    text: PropTypes.string,
    // props to pass to the Input component
    input: PropTypes.object,
    // props to pass to the Button component
    button: PropTypes.object,
  }),
  details: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        info: PropTypes.string,
      })
    )
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProductsCheckout from "@notus-pro/react/CardProductsCheckout";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardProductsCheckout {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardProductsCheckout,
  componentName: "CardProductsCheckout",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
