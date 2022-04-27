import "_texts/misc/cards/cardinfoiconleft.js"
import "components/Cards/Misc/CardInfoIconLeft.js"
import CardInfoIconLeft
import passProps

const props = `CardInfoIconLeft.defaultProps = {
  color: "blueGray",
  link: {},
  inverted: false,
};

CardInfoIconLeft.propTypes = {
  // icon name to be added on the <i></i> tag, for example "fa fa-heart"
  icon: PropTypes.string.isRequired,
  // the background of the icon
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
  // if true, than the color will go as background
  // for the whole card, not only the icon
  inverted: PropTypes.bool,
  // if the background should have a gradient
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the anchor as object
  // if you pass a prop "to" it will be
  // generated as a Link from react-router-dom
  // otherwise as an <a> tag
  link: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardInfoIconLeft"
import CardInfoIconLeft

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardInfoIconLeft
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardInfoIconLeft,
  componentName: "CardInfoIconLeft",
  passProps,
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
  },
};
export default docsObjects;
