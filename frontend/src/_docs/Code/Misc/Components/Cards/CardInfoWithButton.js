import CardInfoWithButton from "components/Cards/Misc/CardInfoWithButton.js";
import passProps from "_texts/misc/cards/cardinfowithbutton.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardInfoWithButton.defaultProps = {
  color: "blueGray",
  button: {},
};

CardInfoWithButton.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "light",
    "dark",
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
  // if the background should have a gradient
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardInfoWithButton from "@notus-pro/react/CardInfoWithButton";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardInfoWithButton
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardInfoWithButton,
  componentName: "CardInfoWithButton",
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
