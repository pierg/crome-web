import CardProfileSkills from "components/Cards/Misc/CardProfileSkills.js";
import passProps from "_texts/misc/cards/cardprofileskills.js";
const props = `CardProfileSkills.defaultProps = {
  list: [],
  dropdown: {},
};

CardProfileSkills.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
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
      leftText: PropTypes.string,
      rightText: PropTypes.string,
    })
  ),
  // props that can be passed to the DropdownButton component
  dropdown: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardProfileSkills from "@notus-pro/react/CardProfileSkills";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardProfileSkills
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProfileSkills,
  componentName: "CardProfileSkills",
  passProps,
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2 lg:w-1/3",
  },
};
export default docsObjects;
