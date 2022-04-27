import "_texts/e-commerce/blogs/blogs7.js"
import "_texts/e-commerce/headers/headerimagetitlebuttoncenter.js"
import "_texts/e-commerce/heroes/hero9.js"
import "_texts/e-commerce/pricing/pricing3ecommerce1.js"
import "_texts/e-commerce/pricing/pricing3ecommerce2.js"
import "_texts/e-commerce/sections/testimonials2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/ECommerce.js"
import blogs7
import ECommerce
import footersmall
import headerimagetitlebuttoncenter
import hero9
import navbarlinkslanding1
import prefooterlarge
import pricing3ecommerce1
import pricing3ecommerce2
import testimonials2

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Blogs7"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleButtonCenter"
import "@notus-pro/react/Hero9"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Pricing3"
import "@notus-pro/react/Testimonials2"
import Blogs7
import FooterSmall
import HeaderImageTitleButtonCenter
import Hero9
import NavbarLinks
import PreFooterLarge
import Pricing3
import Testimonials2

// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlebuttoncenter = ${JSON.stringify(headerimagetitlebuttoncenter)};
const hero9 = ${JSON.stringify(hero9)};
const pricing3ecommerce1 = ${JSON.stringify(pricing3ecommerce1)};
const blogs7 = ${JSON.stringify(blogs7)};
const pricing3ecommerce2 = ${JSON.stringify(pricing3ecommerce2)};
const testimonials2 = ${JSON.stringify(testimonials2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function ECommerce() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleButtonCenter {...headerimagetitlebuttoncenter} />
      <div className="container mx-auto px-4 -mt-64">
        <Hero9 {...hero9} />
        <Pricing3 {...pricing3ecommerce1} />
        <Blogs7 {...blogs7} />
        <Pricing3 {...pricing3ecommerce2} />
      </div>
      <Testimonials2 {...testimonials2} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: ECommerce,
  componentName: "ECommerce",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
