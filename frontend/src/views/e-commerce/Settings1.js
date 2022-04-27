import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
// components
import "components/Cards/ECommerce/CardDetailSettingsUser.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardDetailSettingsUser
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/cards/carddetailsettingsuser.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcentersettings.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import carddetailsettingsuser
import footersmall
import headerimagetitlesmallcentersettings
import navbarlinkslanding1
import prefooterlarge

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
