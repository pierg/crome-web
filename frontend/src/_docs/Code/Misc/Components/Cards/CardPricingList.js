import CardPricingList from "components/Cards/Misc/CardPricingList.js";
import passProps from "_texts/misc/cards/cardpricinglist.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardPricingList.defaultProps = {
  list: [],
  button: {},
};
CardPricingList.propTypes = {
  image: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  color: PropTypes.oneOf([
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
import CardPricingList from "@notus-pro/react/CardPricingList";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardPricingList
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardPricingList,
  componentName: "CardPricingList",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
    colorSwitchePropToChange: "color",
    colorsSwitcher: [
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
