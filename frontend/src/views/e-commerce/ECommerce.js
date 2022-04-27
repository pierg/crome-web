import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/ECommerce/Blogs/Blogs7.js"
import "components/Sections/ECommerce/Heroes/Hero9.js"
import "components/Sections/ECommerce/Pricing/Pricing3.js"
import "components/Sections/ECommerce/Testimonials/Testimonials2.js"
import Blogs7
import Hero9
import Pricing3
import Testimonials2

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/ECommerce/HeaderImageTitleButtonCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderImageTitleButtonCenter
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/blogs/blogs7.js"
import "_texts/e-commerce/headers/headerimagetitlebuttoncenter.js"
import "_texts/e-commerce/heroes/hero9.js"
import "_texts/e-commerce/pricing/pricing3ecommerce1.js"
import "_texts/e-commerce/pricing/pricing3ecommerce2.js"
import "_texts/e-commerce/sections/testimonials2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import blogs7
import footersmall
import headerimagetitlebuttoncenter
import hero9
import navbarlinkslanding1
import prefooterlarge
import pricing3ecommerce1
import pricing3ecommerce2
import testimonials2

export default function ECommerce() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleButtonCenter {...headerimagetitlebuttoncenter} />
      <div className="container mx-auto px-4">
        <Hero9 {...hero9} />
        <Pricing3 {...pricing3ecommerce1} />
        <Blogs7 {...blogs7} />
        <Pricing3 {...pricing3ecommerce2} />
      </div>
      <Testimonials2 {...testimonials2} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
