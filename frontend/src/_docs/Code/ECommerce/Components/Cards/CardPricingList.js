import "_texts/e-commerce/cards/cardpricinglist.js"
import "components/Cards/ECommerce/CardPricingList.js"
import CardPricingList
import passProps

const props = `CardPricingList.defaultProps = {
  list: [],
  button: {},
};

CardPricingList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  // props to send to the Button component
  button: PropTypes.object,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardPricingList"
import CardPricingList

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardPricingList {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardPricingList,
  componentName: "CardPricingList",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
