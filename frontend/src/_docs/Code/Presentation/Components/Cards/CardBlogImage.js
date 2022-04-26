import CardBlogImage from "components/Cards/Presentation/CardBlogImage.js";
import passProps from "_texts/presentation/cards/cardblogimage.js";
const props = `CardBlogImage.defaultProps = {
  color: "blueGray",
};
CardBlogImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // the background of the bottom part of the card
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
};
`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardBlogImage from "@notus-pro/react/CardBlogImage";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardBlogImage {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardBlogImage,
  componentName: "CardBlogImage",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
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
