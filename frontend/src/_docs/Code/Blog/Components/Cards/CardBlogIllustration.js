import CardBlogIllustration from "components/Cards/Blog/CardBlogIllustration.js";
import passProps from "_texts/blog/cards/cardblogillustration.js";
const props = `CardBlogImageHorizontal.defaultProps = {
  link: {},
};
CardBlogImageHorizontal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  // properties to pass to the link object after the description
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  // NOTE: you cannot pass a child component
  link: PropTypes.object,
};
`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardBlogIllustration from "@notus-pro/react/CardBlogIllustration";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardBlogIllustration {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardBlogIllustration,
  componentName: "CardBlogIllustration",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
