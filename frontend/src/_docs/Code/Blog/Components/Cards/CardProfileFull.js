import CardProfileFull from "components/Cards/Blog/CardProfileFull.js";
import passProps from "_texts/blog/cards/cardprofilefull.js";
const props = `CardProfileFull.defaultProps = {
  list: [],
  dropdown: {},
};
CardProfileFull.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
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
    })
  ),
  // props that can be passed to the DropdownButton component
  dropdown: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProfileFull from "@notus-pro/react/CardProfileFull";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardProfileFull {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardProfileFull,
  componentName: "CardProfileFull",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
