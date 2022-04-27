import React from "react";
import { useLocation } from "react-router-dom";

// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
import CardRegister from "components/Cards/Auth/CardRegister.js";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcenter from "_texts/auth/headers/headerimagetitlesmallcenter.js";
import cardregister from "_texts/auth/cards/cardregister.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Login2() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenter} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4">
          <div className="justify-between items-center flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-5/12 -mt-56">
              <CardRegister {...cardregister} />
            </div>
          </div>
        </div>
      </section>

      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
