import CardProfileFullPage from "components/Cards/ECommerce/CardProfileFullPage.js";
import passProps from "_texts/e-commerce/cards/cardprofilefullpage.js";
const props = `CardProfileFullPage.defaultProps = {
  stats: [],
  buttons: [],
  achievements: [],
  showMore: {},
};

CardProfileFullPage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  // You send a simple string for a one paragraph description
  // or you can send an array of strings, that will generate
  // each string into a new paragraph
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  showMore: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  // array of objects representing the props
  // that you can pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardProfileFullPage from "@notus-pro/react/CardProfileFullPage";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <CardProfileFullPage {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardProfileFullPage,
  componentName: "CardProfileFullPage",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full mt-16",
  },
};
export default docsObjects;
