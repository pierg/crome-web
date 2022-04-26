import Landing2 from "views/presentation/Landing2.js";
import blogs1 from "_texts/presentation/blogs/blogs1.js";
import hero4 from "_texts/presentation/heroes/hero4.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import pricing1 from "_texts/presentation/pricing/pricing1.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headervideotitle from "_texts/presentation/headers/headervideotitle.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import Hero4 from "@notus-pro/react/Hero4";
import Hero5 from "@notus-pro/react/Hero5";
import Blogs1 from "@notus-pro/react/Blogs1";
import Pricing1 from "@notus-pro/react/Pricing1";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderVideoTitle from "@notus-pro/react/HeaderVideoTitle";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
// texts as props
const blogs1 = ${JSON.stringify(blogs1)};
const hero4 = ${JSON.stringify(hero4)};
const hero5 = ${JSON.stringify(hero5)};
const pricing1 = ${JSON.stringify(pricing1)};
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const headervideotitle = ${JSON.stringify(headervideotitle)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Landing2() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Hero4 {...hero4} />
        <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Pricing1 {...pricing1} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: Landing2,
  componentName: "Landing2",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "ct-docs-disable-nav-fixed w-full",
  },
};
export default docsObjects;
