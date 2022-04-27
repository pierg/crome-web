import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Blog/Heroes/Hero6.js"
import "components/Sections/ECommerce/Pricing/Pricing2.js"
import "components/Sections/ECommerce/Projects/Projects1.js"
import "components/Sections/Presentation/ContactUs/ContactUs2.js"
import "components/Sections/Presentation/Heroes/Hero5.js"
import ContactUs2
import Hero5
import Hero6
import Pricing2
import Projects1

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/ECommerce/HeaderBlogPost.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import HeaderBlogPost
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/headers/headerblogpost.js"
import "_texts/e-commerce/heroes/hero6pricing.js"
import "_texts/e-commerce/navbars/navbarlinkspricing.js"
import "_texts/e-commerce/pricing/pricing2.js"
import "_texts/e-commerce/projects/projects1.js"
import "_texts/presentation/contactus/contactus2.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/heroes/hero5.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import contactus2
import footersmall
import headerblogpost
import hero5
import hero6pricing
import navbarlinkspricing
import prefooterlarge
import pricing2
import projects1

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
