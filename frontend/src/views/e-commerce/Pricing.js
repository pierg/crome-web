import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Pricing2 from "components/Sections/ECommerce/Pricing/Pricing2.js";
import Hero5 from "components/Sections/Presentation/Heroes/Hero5.js";
import ContactUs2 from "components/Sections/Presentation/ContactUs/ContactUs2.js";
import Projects1 from "components/Sections/ECommerce/Projects/Projects1.js";
import Hero6 from "components/Sections/Blog/Heroes/Hero6.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderBlogPost from "components/Headers/ECommerce/HeaderBlogPost.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts as props
import navbarlinkspricing from "_texts/e-commerce/navbars/navbarlinkspricing.js";
import headerblogpost from "_texts/e-commerce/headers/headerblogpost.js";
import hero5 from "_texts/presentation/heroes/hero5.js";
import pricing2 from "_texts/e-commerce/pricing/pricing2.js";
import contactus2 from "_texts/presentation/contactus/contactus2.js";
import projects1 from "_texts/e-commerce/projects/projects1.js";
import hero6pricing from "_texts/e-commerce/heroes/hero6pricing.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Pricing() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div>
        <NavbarLinks {...navbarlinkspricing} />
        <HeaderBlogPost {...headerblogpost} />
      </div>
      <div className="mt-12 main">
        <Pricing2 {...pricing2} />
        <div className="relative py-8">
          <div className="container mx-auto px-4">
            <Hero5 {...hero5} />
          </div>
        </div>
        <ContactUs2 {...contactus2} />
        <Projects1 {...projects1} />
        <div className="bg-blueGray-800">
          <Hero6 {...hero6pricing} />
        </div>
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
