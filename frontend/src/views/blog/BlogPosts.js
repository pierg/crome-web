import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Blogs5 from "components/Sections/Blog/Blogs/Blogs5.js";
import Blogs3 from "components/Sections/Blog/Blogs/Blogs3.js";
import Blogs6 from "components/Sections/Blog/Blogs/Blogs6.js";
import Teams3 from "components/Sections/Blog/Teams/Teams3.js";
import Hero7 from "components/Sections/Blog/Heroes/Hero7.js";
import Hero6 from "components/Sections/Blog/Heroes/Hero6.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
import HeaderImageTitleButtons from "components/Headers/Blog/HeaderImageTitleButtons.js";
// texts for components as props
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

export default function BlogPosts() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
