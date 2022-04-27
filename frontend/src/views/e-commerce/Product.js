import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Product1 from "components/Sections/ECommerce/Product/Product1.js";
import Testimonials1 from "components/Sections/ECommerce/Testimonials/Testimonials1.js";
import Hero8 from "components/Sections/ECommerce/Heroes/Hero8.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleLeft from "components/Headers/ECommerce/HeaderImageTitleLeft.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headerimagetitleleft from "_texts/e-commerce/headers/headerimagetitleleft.js";
import product1 from "_texts/e-commerce/sections/product1.js";
import testimonials1 from "_texts/e-commerce/sections/testimonials1.js";
import hero8 from "_texts/e-commerce/sections/hero8.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Product() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleLeft {...headerimagetitleleft} />
      <Product1 {...product1} />
      <Testimonials1 {...testimonials1} />
      <Hero8 {...hero8} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
