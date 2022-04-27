import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Blogs3 from "components/Sections/Blog/Blogs/Blogs3.js";
import Blogs4 from "components/Sections/Blog/Blogs/Blogs4.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
import HeaderBlogPostDark from "components/Headers/Blog/HeaderBlogPostDark.js";
import ActivityFeed from "components/Content/ActivityFeed.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import headerblogpostdark from "_texts/blog/headers/headerblogpostdark.js";
import blogs3 from "_texts/blog/blogs/blogs3.js";
import blogs4 from "_texts/blog/blogs/blogs4.js";
import activityfeed from "_texts/misc/content/activityfeed.js";

export default function BlogPost() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
