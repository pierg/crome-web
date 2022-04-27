import "_texts/presentation/blogs/blogs1.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/headers/headervideotitle.js"
import "_texts/presentation/heroes/hero4.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "_texts/presentation/pricing/pricing1.js"
import "views/presentation/Landing2.js"
import blogs1
import footersmall
import headervideotitle
import hero4
import hero5
import Landing2
import navbarlinkslanding2
import prefooterlarge
import pricing1

const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Blogs1"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderVideoTitle"
import "@notus-pro/react/Hero4"
import "@notus-pro/react/Hero5"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Pricing1"
import Blogs1
import FooterSmall
import HeaderVideoTitle
import Hero4
import Hero5
import NavbarLinks
import PreFooterLarge
import Pricing1

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
