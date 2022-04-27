import "_texts/auth/cards/cardresetpassword.js"
import "components/Cards/Auth/CardResetPassword.js"
import CardResetPassword
import passProps

const props = `CardResetPassword.defaultProps = {
  input: {},
  button: {}
}

CardResetPassword.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  input: PropTypes.object,
  // It is represetnted by the props you
  // can pass to our Button component element
  button: PropTypes.object,
}`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardResetPassword"
import CardResetPassword

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:1/3">
        <CardLoginSocial {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardResetPassword,
  componentName: "CardResetPassword",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/3",
  },
};
export default docsObjects;
