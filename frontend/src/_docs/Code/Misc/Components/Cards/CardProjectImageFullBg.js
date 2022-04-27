import CardProjectImageFullBg from "components/Cards/Misc/CardProjectImageFullBg.js";
import passProps from "_texts/misc/cards/cardprojectimagefullbg.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardProjectImageFullBg.defaultProps = {
  button: {},
  color: "blueGray",
  alignment: "center",
};
CardProjectImageFullBg.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  icon: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
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
import CardProjectImageFullBg from "@notus-pro/react/CardProjectImageFullBg";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardProjectImageFullBg
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProjectImageFullBg,
  componentName: "CardProjectImageFullBg",
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
    defaultColor: "orange",
  },
};
export default docsObjects;
