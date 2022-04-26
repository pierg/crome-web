import CardChatPeople from "components/Cards/ECommerce/CardChatPeople.js";
import passProps from "_texts/e-commerce/cards/cardchatpeople.js";
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Contact",
    link:
      "/components/misc/components/comments#misc-id-misc-id-components-contact",
  },
];
const props = `CardChatPeople.defaultProps = {
  contacts: [],
};

CardChatPeople.propTypes = {
  // props to pass to the Input component
  input: PropTypes.object,
  // array of props to pass to the Contact component
  contacts: PropTypes.arrayOf(PropTypes.object),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardChatPeople from "@notus-pro/react/CardChatPeople";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/3">
        <CardChatPeople {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardChatPeople,
  componentName: "CardChatPeople",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
