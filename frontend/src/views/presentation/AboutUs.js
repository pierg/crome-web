/*eslint-disable*/
import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero5 from "components/Sections/Presentation/Heroes/Hero5.js";
import Blogs1 from "components/Sections/Presentation/Blogs/Blogs1.js";
import Blogs2 from "components/Sections/Presentation/Blogs/Blogs2.js";
import Pricing1 from "components/Sections/Presentation/Pricing/Pricing1.js";
import Teams2 from "components/Sections/Presentation/Teams/Teams2.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
import HeaderNewsletterIllustration from "components/Headers/Presentation/HeaderNewsletterIllustration.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import headernewsletterillustration from "_texts/presentation/headers/headernewsletterillustration.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import blogs1 from "_texts/presentation/blogs/blogs1.js";
import blogs2 from "_texts/presentation/blogs/blogs2.js";
import pricing1 from "_texts/presentation/pricing/pricing1.js";
import teams2 from "_texts/presentation/teams/teams2.js";

export default function AboutUs() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderNewsletterIllustration {...headernewsletterillustration} />
      <div className="container mx-auto px-4">
        <Hero5 {...hero5} />
        <div className="mt-20">
          <Blogs1 {...blogs1} />
        </div>
        <Blogs2 {...blogs2} />
      </div>
      <div className="bg-blueGray-100">
        <div className="container mx-auto px-4">
          <Pricing1 {...pricing1} />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Teams2 {...teams2} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
