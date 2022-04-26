import Pricing from "views/e-commerce/Pricing.js";
import navbarlinkspricing from "_texts/e-commerce/navbars/navbarlinkspricing.js";
import headerblogpost from "_texts/e-commerce/headers/headerblogpost.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import pricing2 from "_texts/e-commerce/pricing/pricing2.js";
import contactus2 from "_texts/presentation/contactus/contactus2.js";
import projects1 from "_texts/e-commerce/projects/projects1.js";
import hero6pricing from "_texts/e-commerce/heroes/hero6pricing.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Pricing2 from "@notus-pro/react/Pricing2";
import Hero5 from "@notus-pro/react/Hero5";
import ContactUs2 from "@notus-pro/react/ContactUs2";
import Projects1 from "@notus-pro/react/Projects1";
import Hero6 from "@notus-pro/react/Hero6";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderBlogPost from "@notus-pro/react/HeaderBlogPost";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
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
