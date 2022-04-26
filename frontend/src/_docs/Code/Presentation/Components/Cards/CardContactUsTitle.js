import CardContactUsTitle from "components/Cards/Presentation/CardContactUsTitle.js";
import passProps from "_texts/presentation/cards/cardcontactustitle.js";
const props = `CardContactUsTitle.defaultProps = {
  inputs: [],
};

CardContactUsTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  // for example you could pass an onClick handler like so:
  // buttonProps={{
  //   onClick: () => { alert("Check your console"); console.log("hey my dude"); }
  // }}
  buttonProps: PropTypes.object,
  // NOTE: you cannot change the default design of these components,
  // // // i.e. you cannot pass className as props for them
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      labelText: PropTypes.string,
      labelProps: PropTypes.object,
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> inputProps: { type: "textarea" }
      inputProps: PropTypes.object,
    })
  ),
};
`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardContactUsTitle from "@notus-pro/react/CardContactUsTitle";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <CardContactUsTitle {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardContactUsTitle,
  componentName: "CardContactUsTitle",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
