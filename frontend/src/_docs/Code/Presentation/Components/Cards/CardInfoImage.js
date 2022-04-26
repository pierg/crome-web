import CardInfoImage from "components/Cards/Presentation/CardInfoImage.js";
import passProps from "_texts/presentation/cards/cardinfoimage.js";
const props = `CardInfoImage.defaultProps = {
  color: "blueGray",
};

CardInfoImage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
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
import CardInfoImage from "@notus-pro/react/CardInfoImage";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardInfoImage {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardInfoImage,
  componentName: "CardInfoImage",
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
    defaultColor: "blueGray",
  },
};
export default docsObjects;
