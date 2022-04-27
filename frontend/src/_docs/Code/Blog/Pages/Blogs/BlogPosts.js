import "_texts/blog/blogs/blogs3.js"
import "_texts/blog/blogs/blogs5.js"
import "_texts/blog/blogs/blogs6.js"
import "_texts/blog/headers/headerimagetitlebuttons.js"
import "_texts/blog/heroes/hero6.js"
import "_texts/blog/heroes/hero7.js"
import "_texts/blog/teams/teams3.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/blog/BlogPosts.js"
import BlogPosts
import blogs3
import blogs5
import blogs6
import footersmall
import headerimagetitlebuttons
import hero6
import hero7
import navbarlinkslanding2
import prefooterlarge
import teams3

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/Blogs/Blogs3"
import "@notus-pro/react/Blogs/Blogs5"
import "@notus-pro/react/Blogs/Blogs6"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleButtons"
import "@notus-pro/react/Heroes/Hero6"
import "@notus-pro/react/Heroes/Hero7"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import "@notus-pro/react/Teams/Teams3"
import Blogs3
import Blogs5
import Blogs6
import FooterSmall
import HeaderImageTitleButtons
import Hero6
import Hero7
import NavbarLinks
import PreFooterLarge
import Teams3

// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};
const headerimagetitlebuttons = ${JSON.stringify(headerimagetitlebuttons)};
const blogs5 = ${JSON.stringify(blogs5)};
const blogs3 = ${JSON.stringify(blogs3)};
const blogs6 = ${JSON.stringify(blogs6)};
const teams3 = ${JSON.stringify(teams3)};
const hero7 = ${JSON.stringify(hero7)};
const hero6 = ${JSON.stringify(hero6)};

export default function BlogPosts() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleButtons {...headerimagetitlebuttons} />

      <div className="container mx-auto px-4">
        <Blogs5 {...blogs5} />
        <Blogs3 {...blogs3} />
      </div>
      <Blogs6 {...blogs6} />

      <section className="bg-blueGray-800">
        <div className="container mx-auto px-4">
          <Teams3 {...teams3} />
          <Hero7 {...hero7} />
          <Hero6 {...hero6} />
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: BlogPosts,
  componentName: "BlogPosts",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "ct-docs-disable-nav-fixed w-full",
  },
};
export default docsObjects;
