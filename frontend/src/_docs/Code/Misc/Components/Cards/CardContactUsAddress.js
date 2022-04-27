import CardContactUsAddress from "components/Cards/Misc/CardContactUsAddress.js";
import passProps from "_texts/misc/cards/cardcontactusaddress.js";
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Select",
    link: "/components/misc/components/forms#misc-id-misc-id-components-select",
  },
  {
    name: "InfoAreaIcon",
    link:
      "/components/presentation/components/info-areas#presentation-id-presentation-id-components-infoareaicon",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `const widthTypes = {
  // The width the component should have by default
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
};

const inputsTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Input component element
  // NOTE: if you wish to generate a textarea, you will need to pass
  // // // inside this object >> type: "textarea"
  // // // full example >> input: { type: "textarea" }
  input: PropTypes.object,
});

const selectTypes = PropTypes.shape({
  ...widthTypes,
  label: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Select component element
  select: PropTypes.object,
});

const infoAreaTypes = PropTypes.shape({
  // props to pass to the InfoAreaIcon component
  infoarea: PropTypes.object,
});

CardContactUsAddress.defaultProps = {
  components: [],
  button: {},
};
CardContactUsAddress.propTypes = {
  title: PropTypes.string,
  // props to pass to the Button component
  button: PropTypes.object,
  components: PropTypes.arrayOf(
    PropTypes.oneOfType([inputsTypes, selectTypes, infoAreaTypes])
  ),
};`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import CardContactUsAddress from "@notus-pro/react/CardContactUsAddress";

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <div className="w-full md:w-1/2">
        <CardContactUsAddress
          {...props}
        />
      </div>
    </>
  );
}
`;

const docsObjects = {
  component: CardContactUsAddress,
  componentName: "CardContactUsAddress",
  passProps,
  description,
  props,
  preview,
  dependencies,
  codeSnippetProps: {
    wrapperClasses: "w-full md:w-1/2",
  },
};
export default docsObjects;
