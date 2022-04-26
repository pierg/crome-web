import CardRegister from "components/Cards/Auth/CardRegister.js";
import passProps from "_texts/auth/cards/cardregister.js";
const props = `CardRegister.defaultProps = {
  inputs: [],
  button: {}
};

CardRegister.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Button component element
  button: PropTypes.object,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "github",
        "pinterest",
        "youtube",
        "vimeo",
        "slack",
        "dribbble",
        "reddit",
        "tumblr",
        "linkedin",
      ]),
      // It is represetnted by the props you
      // can pass to our Button component element
      // for example you can add an onClick handler
      button: PropTypes.object,
    })
  ),
  // It is represetnted by the props you
  // can pass to our Checkbox component element
  checkbox: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      // It is represetnted by the props you
      // can pass to our Input component element
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> input: { type: "textarea" }
      input: PropTypes.object,
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardRegister from "@notus-pro/react/CardRegister";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:1/2">
        <CardRegister {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardRegister,
  componentName: "CardRegister",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
