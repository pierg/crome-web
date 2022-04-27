import React from "react";
import { useLocation } from "react-router-dom";

// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import CardLoginRegister from "components/Cards/Auth/CardLoginRegister.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import cardloginregister from "_texts/auth/cards/cardloginregister.js";
import prefooterlargereset from "_texts/auth/prefooters/prefooterlargereset.js";
import footersmallreset from "_texts/auth/footers/footersmallreset.js";

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
