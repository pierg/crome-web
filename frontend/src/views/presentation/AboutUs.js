/*eslint-disable*/
import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Presentation/Blogs/Blogs1.js"
import "components/Sections/Presentation/Blogs/Blogs2.js"
import "components/Sections/Presentation/Heroes/Hero5.js"
import "components/Sections/Presentation/Pricing/Pricing1.js"
import "components/Sections/Presentation/Teams/Teams2.js"
import Blogs1
import Blogs2
import Hero5
import Pricing1
import Teams2

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Presentation/HeaderNewsletterIllustration.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderNewsletterIllustration
import NavbarLinks
import PreFooterLarge

// texts for components as props
import "_texts/presentation/blogs/blogs1.js"
import "_texts/presentation/blogs/blogs2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/headers/headernewsletterillustration.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "_texts/presentation/pricing/pricing1.js"
import "_texts/presentation/teams/teams2.js"
import blogs1
import blogs2
import footersmall
import headernewsletterillustration
import hero5
import navbarlinkslanding2
import prefooterlarge
import pricing1
import teams2

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
      <div class="container mx-auto px-4">
        <Teams2 {...teams2} />
      </div>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
