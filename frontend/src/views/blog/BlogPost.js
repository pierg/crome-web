import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Blog/Blogs/Blogs3.js"
import "components/Sections/Blog/Blogs/Blogs4.js"
import Blogs3
import Blogs4

// components
import "components/Content/ActivityFeed.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Blog/HeaderBlogPostDark.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import ActivityFeed
import FooterSmall
import HeaderBlogPostDark
import NavbarLinks
import PreFooterLarge

// texts for components as props
import "_texts/blog/blogs/blogs3.js"
import "_texts/blog/blogs/blogs4.js"
import "_texts/blog/headers/headerblogpostdark.js"
import "_texts/misc/content/activityfeed.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import activityfeed
import blogs3
import blogs4
import footersmall
import headerblogpostdark
import navbarlinkslanding2
import prefooterlarge

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
