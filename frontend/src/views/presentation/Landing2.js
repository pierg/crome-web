import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Presentation/Blogs/Blogs1.js"
import "components/Sections/Presentation/Heroes/Hero4.js"
import "components/Sections/Presentation/Heroes/Hero5.js"
import "components/Sections/Presentation/Pricing/Pricing1.js"
import Blogs1
import Hero4
import Hero5
import Pricing1

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Presentation/HeaderVideoTitle.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderVideoTitle
import NavbarLinks
import PreFooterLarge

// texts for sections as props
import "_texts/presentation/blogs/blogs1.js"
import "_texts/presentation/heroes/hero4.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/pricing/pricing1.js"
import blogs1
import hero4
import hero5
import pricing1

// texts for components as props
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/headers/headervideotitle.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import footersmall
import headervideotitle
import navbarlinkslanding2
import prefooterlarge

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
