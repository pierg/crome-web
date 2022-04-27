import CardChatDiscussion from "components/Cards/ECommerce/CardChatDiscussion.js";
import passProps from "_texts/e-commerce/cards/cardchatdiscussion.js";
const dependencies = [
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Message",
    link:
      "/components/misc/components/comments#misc-id-misc-id-components-message",
  },
];
const props = `CardChatDiscussion.defaultProps = {
  input: {},
  messages: [],
  buttons: [],
};

CardChatDiscussion.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  // if Online, then a emerald bullet will appear near it
  // if Offline, then a red bullet will appear near it
  lastOnline: PropTypes.string,
  // array of props to pass to the Button component
  buttons: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the Input component
  input: PropTypes.object,
  messages: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // array of props to pass to the Message component
      PropTypes.object,
      // this will be generated as a date divider
      PropTypes.shape({
        divider: PropTypes.string,
      }),
    ])
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardChatDiscussion from "@notus-pro/react/CardChatDiscussion";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-8/12">
        <CardChatDiscussion {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardChatDiscussion,
  componentName: "CardChatDiscussion",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-8/12",
  },
};
export default docsObjects;
