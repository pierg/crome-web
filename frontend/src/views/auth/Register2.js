import "react"
import "react-router-dom"
import React
import { useLocation }

// components
import "components/Cards/Auth/CardLoginRegister.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardLoginRegister
import FooterSmall
import NavbarLinks
import PreFooterLarge

// texts
import "_texts/auth/cards/cardloginregister.js"
import "_texts/auth/footers/footersmallreset.js"
import "_texts/auth/prefooters/prefooterlargereset.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import cardloginregister
import footersmallreset
import navbarlinkslanding1
import prefooterlargereset

export default function Register2() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <div
        style={{
          backgroundImage:
            "url('" +
            require("assets/img/illustrations/register_bg.png").default +
            "')",
        }}
        className="bg-blueGray-900 relative py-24 bg-cover bg-50"
      >
        <div className="py-12 container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-8/12">
              <CardLoginRegister {...cardloginregister} />
            </div>
          </div>
        </div>
      </div>
      <PreFooterLarge {...prefooterlargereset} />
      <FooterSmall {...footersmallreset} />
    </>
  );
}
