import AboutUs from "views/presentation/AboutUs.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import headernewsletterillustration from "_texts/presentation/headers/headernewsletterillustration.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import blogs1 from "_texts/presentation/blogs/blogs1.js";
import blogs2 from "_texts/presentation/blogs/blogs2.js";
import pricing1 from "_texts/presentation/pricing/pricing1.js";
import teams2 from "_texts/presentation/teams/teams2.js";
const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";
const preview = `import React from "react";

// @notus-pro/react
import Hero5 from "@notus-pro/react/Hero5";
import Blogs1 from "@notus-pro/react/Blogs1";
import Blogs2 from "@notus-pro/react/Blogs2";
import Pricing1 from "@notus-pro/react/Pricing1";
import Teams2 from "@notus-pro/react/Teams2";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
import HeaderNewsletterIllustration from "@notus-pro/react/HeaderNewsletterIllustration";
// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};
const headernewsletterillustration = ${JSON.stringify(
  headernewsletterillustration
)};
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
