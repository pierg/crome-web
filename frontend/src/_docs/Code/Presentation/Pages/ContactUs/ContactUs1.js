import "_texts/presentation/contactus/contactus2.js"
import "_texts/presentation/contactus/contactus3.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/presentation/ContactUs.js"
import ContactUs1
import contactus2
import contactus3
import footersmall
import navbarlinkslanding2
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ContactUs2"
import "@notus-pro/react/ContactUs3"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import ContactUs2
import ContactUs3
import FooterSmall
import NavbarLinks
import PreFooterLarge

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
