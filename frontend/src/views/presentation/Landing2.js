import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero4 from "components/Sections/Presentation/Heroes/Hero4.js";
import Hero5 from "components/Sections/Presentation/Heroes/Hero5.js";
import Blogs1 from "components/Sections/Presentation/Blogs/Blogs1.js";
import Pricing1 from "components/Sections/Presentation/Pricing/Pricing1.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props
import blogs1 from "_texts/presentation/blogs/blogs1.js";
import hero4 from "_texts/presentation/heroes/hero4.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import pricing1 from "_texts/presentation/pricing/pricing1.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headervideotitle from "_texts/presentation/headers/headervideotitle.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Landing2() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Hero4 {...hero4} />
        <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Pricing1 {...pricing1} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
