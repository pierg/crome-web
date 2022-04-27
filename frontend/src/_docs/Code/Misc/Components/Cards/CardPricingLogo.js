import "_texts/misc/cards/cardpricinglogo.js"
import "components/Cards/Misc/CardPricingLogo.js"
import CardPricingLogo
import passProps

const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardPricingLogo.defaultProps = {
  list: [],
  line: "blueGray",
  button: {},
};
CardPricingLogo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  list: PropTypes.arrayOf(PropTypes.string),
  line: PropTypes.oneOf([
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
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardPricingLogo"
import CardPricingLogo

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardPricingLogo
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardPricingLogo,
  componentName: "CardPricingLogo",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
  },
};
export default docsObjects;
