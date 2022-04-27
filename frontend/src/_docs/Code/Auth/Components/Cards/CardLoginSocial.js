import CardLoginSocial from "components/Cards/Auth/CardLoginSocial.js";
import passProps from "_texts/auth/cards/cardloginsocial.js";
const props = `CardLoginSocial.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // NOTE: the "Forgot password?" text is allready set
  forgotPassword: PropTypes.object,
  // NOTE: the "Create new account" text is allready set
  createAccount: PropTypes.object,
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
import CardLoginSocial from "@notus-pro/react/CardLoginSocial";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:1/2">
        <CardLoginSocial {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardLoginSocial,
  componentName: "CardLoginSocial",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
