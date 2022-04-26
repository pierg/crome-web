import CardTableDetails from "components/Cards/ECommerce/CardTableDetails.js";
import passProps from "_texts/e-commerce/cards/cardtabledetails.js";
const props = `CardTableDetails.defaultProps = {
  table: [],
  link: {},
};

CardTableDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // example: [["one","two"],["three","four","five"]]
  // will be generated as a table with two rows,
  // the first row with two columns -         one | two
  // the second row with three columns - three | four | five
  table: PropTypes.arrayOf(PropTypes.arrayOf[PropTypes.string]),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardTableDetails from "@notus-pro/react/CardTableDetails";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <CardTableDetails {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardTableDetails,
  componentName: "CardTableDetails",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
