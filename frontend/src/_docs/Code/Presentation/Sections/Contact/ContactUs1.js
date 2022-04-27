import "_texts/presentation/contactus/contactus1.js"
import "components/Sections/Presentation/ContactUs/ContactUs1.js"
import ContactUs1
import passProps

const dependencies = [
  {
    name: "CardContactUsTitle",
    link: "/components/presentation/components/cards#presentation-id-presentation-id-components-cardcontactustitle",
  },
  {
    name: "Heading3Badge",
    link: "/components/misc/components/headings#misc-id-misc-id-components-heading3badge",
  },
];
const props = `ContactUs1.defaultProps = {
  card: {},
  heading3badge: null,
};
ContactUs1.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  // it is represented by the props
  // that can be passed to the CardContactUsTitle,
  // so please check that one out
  card: PropTypes.object,
};`;
const description = "";
const preview = `
import "react"
import React

// @notus-pro/react
import "@notus-pro/react/ContactUs1"
import ContactUs1

const props = ${JSON.stringify(passProps)};

export default function Example() {
  return (
    <>
      <ContactUs1
        {...props}
      />
    </>
  );
}
`;

const docsObjects = {
  component: ContactUs1,
  componentName: "ContactUs1",
  description,
  props,
  preview,
  passProps,
  dependencies,
};
export default docsObjects;
