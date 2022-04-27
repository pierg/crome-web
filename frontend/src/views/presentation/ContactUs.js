import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Presentation/ContactUs/ContactUs2.js"
import "components/Sections/Presentation/ContactUs/ContactUs3.js"
import ContactUs2
import ContactUs3

// components
import "components/Footers/Landing/FooterSmall.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import FooterSmall
import NavbarLinks
import PreFooterLarge

// texts for components as props
import "_texts/presentation/contactus/contactus2.js"
import "_texts/presentation/contactus/contactus3.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import contactus2
import contactus3
import footersmall
import navbarlinkslanding2
import prefooterlarge

export default function ContactUs() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <div>
        <ContactUs2 {...contactus2} />
        <ContactUs3 {...contactus3} />
        <PreFooterLarge {...prefooterlarge} />
        <FooterSmall {...footersmall} />
      </div>
    </>
  );
}
