import CardProfileActions from "components/Cards/Misc/CardProfileActions.js";
import passProps from "_texts/misc/cards/cardprofileactions.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardProfileActions.defaultProps = {
  leftButton: {},
  rightButton: {},
  stats: [],
};

CardProfileActions.propTypes = {
  headImage: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  leftButton: PropTypes.object,
  // props to pass to the Button component
  rightButton: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardProfileActions from "@notus-pro/react/CardProfileActions";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <CardProfileActions
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProfileActions,
  componentName: "CardProfileActions",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full lg:w-1/2",
  },
};
export default docsObjects;
