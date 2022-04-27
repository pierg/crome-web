import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/ECommerce/Heroes/Hero8.js"
import "components/Sections/ECommerce/Product/Product1.js"
import "components/Sections/ECommerce/Testimonials/Testimonials1.js"
import Hero8
import Product1
import Testimonials1

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/ECommerce/HeaderImageTitleLeft.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderImageTitleLeft
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/headers/headerimagetitleleft.js"
import "_texts/e-commerce/sections/hero8.js"
import "_texts/e-commerce/sections/product1.js"
import "_texts/e-commerce/sections/testimonials1.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import footersmall
import headerimagetitleleft
import hero8
import navbarlinkslanding2
import prefooterlarge
import product1
import testimonials1

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
