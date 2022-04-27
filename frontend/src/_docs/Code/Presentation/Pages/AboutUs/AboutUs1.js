import "_texts/presentation/blogs/blogs1.js"
import "_texts/presentation/blogs/blogs2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/headers/headernewsletterillustration.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "_texts/presentation/pricing/pricing1.js"
import "_texts/presentation/teams/teams2.js"
import "views/presentation/AboutUs.js"
import AboutUs
import blogs1
import blogs2
import footersmall
import headernewsletterillustration
import hero5
import navbarlinkslanding2
import prefooterlarge
import pricing1
import teams2

const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Blogs1"
import "@notus-pro/react/Blogs2"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderNewsletterIllustration"
import "@notus-pro/react/Hero5"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Pricing1"
import "@notus-pro/react/Teams2"
import Blogs1
import Blogs2
import FooterSmall
import HeaderNewsletterIllustration
import Hero5
import NavbarLinks
import PreFooterLarge
import Pricing1
import Teams2

// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};
const headernewsletterillustration = ${JSON.stringify(headernewsletterillustration)};
const hero5 = ${JSON.stringify(hero5)};
const blogs1 = ${JSON.stringify(blogs1)};
const blogs2 = ${JSON.stringify(blogs2)};
const pricing1 = ${JSON.stringify(pricing1)};
const teams2 = ${JSON.stringify(teams2)};

export default function AboutUs() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderNewsletterIllustration {...headernewsletterillustration} />
      <div className="container mx-auto px-4">
        <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Blogs2 {...blogs2} />
        <Pricing1 {...pricing1} />
        <Teams2 {...teams2} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}`;

const docsObjects = {
  component: AboutUs,
  componentName: "AboutUs",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "ct-docs-disable-nav-fixed w-full",
  },
};
export default docsObjects;
