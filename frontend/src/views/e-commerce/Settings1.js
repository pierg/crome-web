import React from "react";
import { useLocation } from "react-router-dom";

// sections
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import CardDetailSettingsUser from "components/Cards/ECommerce/CardDetailSettingsUser.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcentersettings from "_texts/e-commerce/headers/headerimagetitlesmallcentersettings.js";
import carddetailsettingsuser from "_texts/e-commerce/cards/carddetailsettingsuser.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Settings() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcentersettings} />
      <section className="bg-blueGray-100 relative py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full">
              <CardDetailSettingsUser {...carddetailsettingsuser} />
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
