import ContactUs1 from "views/presentation/ContactUs.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import contactus2 from "_texts/presentation/contactus/contactus2.js";
import contactus3 from "_texts/presentation/contactus/contactus3.js";
const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import ContactUs2 from "@notus-pro/react/ContactUs2";
import ContactUs3 from "@notus-pro/react/ContactUs3";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};
const contactus2 = ${JSON.stringify(contactus2)};
const contactus3 = ${JSON.stringify(contactus3)};

export default function ContactUs() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <div>
        <ContactUs2 {...contactus2} />
        <ContactUs3 {...contactus3} />
        <PreFooterLarge {...prefooterlarge} />
        <FooterSmall {...footersmall} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: ContactUs1,
  componentName: "ContactUs1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "ct-docs-disable-nav-fixed w-full",
  },
};
export default docsObjects;
