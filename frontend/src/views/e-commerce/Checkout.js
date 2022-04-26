import React from "react";
import { useLocation } from "react-router-dom";

// sections
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import CardProductsCheckout from "components/Cards/ECommerce/CardProductsCheckout.js";
import CardBilling from "components/Cards/ECommerce/CardBilling.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcentercheckout from "_texts/e-commerce/headers/headerimagetitlesmallcentercheckout.js";
import cardproductscheckout from "_texts/e-commerce/cards/cardproductscheckout.js";
import cardbilling from "_texts/e-commerce/cards/cardbilling.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Checkout() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcentercheckout} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full lg:w-4/12">
              <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-white">
                Order summary
              </h3>
              <CardProductsCheckout {...cardproductscheckout} />
            </div>
            <div className="px-4 relative w-full lg:w-8/12">
              <CardBilling {...cardbilling} />
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
