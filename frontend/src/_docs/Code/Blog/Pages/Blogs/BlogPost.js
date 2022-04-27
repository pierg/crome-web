import "_texts/blog/blogs/blogs3.js"
import "_texts/blog/blogs/blogs4.js"
import "_texts/blog/headers/headerblogpostdark.js"
import "_texts/misc/content/activityfeed.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/blog/BlogPost.js"
import activityfeed
import BlogPost
import blogs3
import blogs4
import footersmall
import headerblogpostdark
import navbarlinkslanding2
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ActivityFeed"
import "@notus-pro/react/Blogs3.js"
import "@notus-pro/react/Blogs4.js"
import "@notus-pro/react/FooterSmall.js"
import "@notus-pro/react/HeaderBlogPostDark.js"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import ActivityFeed
import Blogs3
import Blogs4
import FooterSmall
import HeaderBlogPostDark
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};
const headerblogpostdark = ${JSON.stringify(headerblogpostdark)};
const blogs3 = ${JSON.stringify(blogs3)};
const blogs4 = ${JSON.stringify(blogs4)};
const activityfeed = ${JSON.stringify(activityfeed)};

export default function BlogPost() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderBlogPostDark {...headerblogpostdark} />
      <Blogs4 {...blogs4} />
      <ActivityFeed {...activityfeed} />
      <Blogs3 {...blogs3} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
`;

const docsObjects = {
  component: BlogPost,
  componentName: "BlogPost",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "ct-docs-disable-nav-fixed w-full",
  },
};
export default docsObjects;
