import BlogPost from "views/blog/BlogPost.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import headerblogpostdark from "_texts/blog/headers/headerblogpostdark.js";
import blogs3 from "_texts/blog/blogs/blogs3.js";
import blogs4 from "_texts/blog/blogs/blogs4.js";
import activityfeed from "_texts/misc/content/activityfeed.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Blogs3 from "@notus-pro/react/Blogs3.js";
import Blogs4 from "@notus-pro/react/Blogs4.js";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import PreFooterLarge from "@notus-pro/react/PreFooterLarge";
import FooterSmall from "@notus-pro/react/FooterSmall.js";
import HeaderBlogPostDark from "@notus-pro/react/HeaderBlogPostDark.js";
import ActivityFeed from "@notus-pro/react/ActivityFeed";

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
