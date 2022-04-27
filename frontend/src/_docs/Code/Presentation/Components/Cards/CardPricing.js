import CardPricing from "components/Cards/Presentation/CardPricing.js";
import passProps from "_texts/presentation/cards/cardpricing.js";

const props = `CardPricing.defaultProps = {
  list: [],
};

CardPricing.propTypes = {
  headText: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      feature: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardPricing from "@notus-pro/react/CardPricing";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardPricing {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardPricing,
  componentName: "CardPricing",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
