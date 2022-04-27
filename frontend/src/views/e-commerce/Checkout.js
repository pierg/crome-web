import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
// components
import "components/Cards/ECommerce/CardBilling.js"
import "components/Cards/ECommerce/CardProductsCheckout.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardBilling
import CardProductsCheckout
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
import "_texts/e-commerce/cards/cardbilling.js"
import "_texts/e-commerce/cards/cardproductscheckout.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcentercheckout.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import cardbilling
import cardproductscheckout
import footersmall
import headerimagetitlesmallcentercheckout
import navbarlinkslanding1
import prefooterlarge

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
