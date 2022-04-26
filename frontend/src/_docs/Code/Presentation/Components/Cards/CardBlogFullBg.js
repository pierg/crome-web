import CardBlogFullBg from "components/Cards/Presentation/CardBlogFullBg.js";
import passProps from "_texts/presentation/cards/cardblogfullbg.js";
const props = `CardBlogFullBg.defaultProps = {
  innerLink: false,
  rounded: true,
  size: "md"
};

CardBlogFullBg.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // if it should have rounded coreners or not
  rounded: PropTypes.bool,
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
  // this is for the height
  size: PropTypes.oneOf(["sm","lg","md"])
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardBlogFullBg from "@notus-pro/react/CardBlogFullBg";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardBlogFullBg {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardBlogFullBg,
  componentName: "CardBlogFullBg",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
