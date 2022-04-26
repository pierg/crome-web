import React from "react";
import { useLocation } from "react-router-dom";

// sections
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.js";
import CardInvoice from "components/Cards/ECommerce/CardInvoice.js";
import Button from "components/Elements/Button.js";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlesmallcenterinvoice from "_texts/e-commerce/headers/headerimagetitlesmallcenterinvoice.js";
import cardinvoice from "_texts/e-commerce/cards/cardinvoice.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Invoice() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenterinvoice} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-10/12">
              <CardInvoice {...cardinvoice} />
              <div className="float-right">
                <Button color="pink" onClick={() => window.print()}>
                  <i className="fas fa-print mr-2"></i>
                  Print
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
