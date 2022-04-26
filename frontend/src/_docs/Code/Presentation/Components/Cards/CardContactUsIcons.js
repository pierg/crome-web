import CardContactUsIcons from "components/Cards/Presentation/CardContactUsIcons.js";
import passProps from "_texts/presentation/cards/cardcontactusicons.js";

const props = `CardContactUsIcons.defaultProps = {
  inputs: [],
  button: {},
};
CardContactUsIcons.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      // The width the input should have by default
      // if this is not set, then it is defaulted to 100% (w-full)
      width: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
      // The width the input should have on sm breakpoint
      sm: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
      // The width the input should have on md breakpoint
      md: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
      // The width the input should have on lg breakpoint
      lg: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
      // The width the input should have on xl breakpoint
      xl: PropTypes.oneOf([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]),
      // It is represetnted by the props you
      // can pass to our Input component element
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> input: { type: "textarea" }
      input: PropTypes.object,
    })
  ),
  // it is represented by the props
  // that can be passed to the Button,
  // so please check that one out
  button: PropTypes.object,
};
`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardContactUsIcons from "@notus-pro/react/CardContactUsIcons";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <div className="w-full md:w-8/12">
        <CardContactUsIcons {...props} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: CardContactUsIcons,
  componentName: "CardContactUsIcons",
  description,
  props,
  preview,
  passProps,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-8/12",
  },
};
export default docsObjects;
