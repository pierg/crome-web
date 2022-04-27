import "_texts/misc/cards/cardprofilereviews.js"
import "components/Cards/Misc/CardProfileReviews.js"
import CardProfileReviews
import passProps

const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `CardProfileReviews.defaultProps = {
  button: {},
  stats: [],
};

CardProfileReviews.propTypes = {
  headImage: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
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
import "@notus-pro/react/CardProfileReviews"
import CardProfileReviews

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <CardProfileReviews
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardProfileReviews,
  componentName: "CardProfileReviews",
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
