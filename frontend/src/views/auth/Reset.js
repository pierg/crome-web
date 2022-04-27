import React from "react";
import { useLocation } from "react-router-dom";

// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import CardResetPassword from "components/Cards/Auth/CardResetPassword.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import cardresetpassword from "_texts/auth/cards/cardresetpassword.js";
import prefooterlargereset from "_texts/auth/prefooters/prefooterlargereset.js";
import footersmallreset from "_texts/auth/footers/footersmallreset.js";

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
              "url('" +
              require("assets/img/illustrations/reset.svg").default +
              "')",
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
