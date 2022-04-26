import React from "react";
import { useLocation } from "react-router-dom";

// sections
import ContactUs2 from "components/Sections/Presentation/ContactUs/ContactUs2.js";
import ContactUs3 from "components/Sections/Presentation/ContactUs/ContactUs3.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";
import contactus2 from "_texts/presentation/contactus/contactus2.js";
import contactus3 from "_texts/presentation/contactus/contactus3.js";

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
