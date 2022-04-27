import BlogPosts from "views/blog/BlogPosts.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import headerimagetitlebuttons from "_texts/blog/headers/headerimagetitlebuttons.js";
import blogs5 from "_texts/blog/blogs/blogs5.js";
import blogs3 from "_texts/blog/blogs/blogs3.js";
import blogs6 from "_texts/blog/blogs/blogs6.js";
import teams3 from "_texts/blog/teams/teams3.js";
import hero7 from "_texts/blog/heroes/hero7.js";
import hero6 from "_texts/blog/heroes/hero6.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Blogs5 from "@notus-pro/react/Blogs/Blogs5";
import Blogs3 from "@notus-pro/react/Blogs/Blogs3";
import Blogs6 from "@notus-pro/react/Blogs/Blogs6";
import Teams3 from "@notus-pro/react/Teams/Teams3";
import Hero7 from "@notus-pro/react/Heroes/Hero7";
import Hero6 from "@notus-pro/react/Heroes/Hero6";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall";
import HeaderImageTitleButtons from "@notus-pro/react/HeaderImageTitleButtons";

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
