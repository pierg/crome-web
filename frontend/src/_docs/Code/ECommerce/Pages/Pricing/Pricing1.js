import "_texts/e-commerce/headers/headerblogpost.js"
import "_texts/e-commerce/heroes/hero6pricing.js"
import "_texts/e-commerce/navbars/navbarlinkspricing.js"
import "_texts/e-commerce/pricing/pricing2.js"
import "_texts/e-commerce/projects/projects1.js"
import "_texts/presentation/contactus/contactus2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Pricing.js"
import contactus2
import footersmall
import headerblogpost
import hero5
import hero6pricing
import navbarlinkspricing
import prefooterlarge
import Pricing
import pricing2
import projects1

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ContactUs2"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderBlogPost"
import "@notus-pro/react/Hero5"
import "@notus-pro/react/Hero6"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Pricing2"
import "@notus-pro/react/Projects1"
import ContactUs2
import FooterSmall
import HeaderBlogPost
import Hero5
import Hero6
import NavbarLinks
import PreFooterLarge
import Pricing2
import Projects1

// texts as props
const navbarlinkspricing = ${JSON.stringify(navbarlinkspricing)};
const headerblogpost = ${JSON.stringify(headerblogpost)};
const hero5 = ${JSON.stringify(hero5)};
const pricing2 = ${JSON.stringify(pricing2)};
const contactus2 = ${JSON.stringify(contactus2)};
const projects1 = ${JSON.stringify(projects1)};
const hero6pricing = ${JSON.stringify(hero6pricing)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Pricing() {
  return (
    <>
      <div>
        <NavbarLinks {...navbarlinkspricing} />
        <HeaderBlogPost {...headerblogpost} />
      </div>
      <div className="mt-12 main">
        <Pricing2 {...pricing2} />
        <div className="relative py-8">
          <div className="container mx-auto px-4">
            <Hero5 {...hero5} />
          </div>
        </div>
        <ContactUs2 {...contactus2} />
        <Projects1 {...projects1} />
        <Hero6 {...hero6pricing} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: Pricing,
  componentName: "Pricing",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "relative w-full ct-docs-disable-nav-fixed",
  },
};
export default docsObjects;
