import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Auth/CardResetPassword.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardResetPassword
import FooterSmall
import NavbarLinks
import PreFooterLarge

// texts
import "_texts/auth/cards/cardresetpassword.js"
import "_texts/auth/footers/footersmallreset.js"
import "_texts/auth/prefooters/prefooterlargereset.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import cardresetpassword
import footersmallreset
import navbarlinkslanding1
import prefooterlargereset

export default function Reset() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <div className="p-0 flex items-center overflow-hidden relative bg-blueGray-800 min-h-screen max-h-999-px">
        <div
          className="absolute w-full h-full bg-cover bg-50"
          style={{
            backgroundImage:
              "url('" + require("assets/img/illustrations/reset.svg").default + "')",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="justify-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-5/12 w-full md:w-8/12">
              <CardResetPassword {...cardresetpassword} />
            </div>
          </div>
        </div>
      </div>
      <PreFooterLarge {...prefooterlargereset} />
      <FooterSmall {...footersmallreset} />
    </>
  );
}
