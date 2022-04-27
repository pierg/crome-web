import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
// components
import "components/Cards/ECommerce/CardInvoice.js"
import "components/Elements/Button.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import Button
import CardInvoice
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/cards/cardinvoice.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcenterinvoice.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import cardinvoice
import footersmall
import headerimagetitlesmallcenterinvoice
import navbarlinkslanding1
import prefooterlarge

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
