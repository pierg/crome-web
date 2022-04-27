import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
// components
import "components/Cards/ECommerce/CardChatDiscussion.js"
import "components/Cards/ECommerce/CardChatPeople.js"
import "components/Footers/Landing/FooterSmall.js"
import "components/Headers/Auth/HeaderImageTitleSmallCenter.js"
import "components/Navbars/NavbarLinks.js"
import "components/PreFooters/PreFooterLarge.js"
import CardChatDiscussion
import CardChatPeople
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts  as props
import "_texts/e-commerce/cards/cardchatdiscussion.js"
import "_texts/e-commerce/cards/cardchatpeople.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcenterchat.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import cardchatdiscussion
import cardchatpeople
import footersmall
import headerimagetitlesmallcenterchat
import navbarlinkslanding2
import prefooterlarge

export default function Chat() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenterchat} />
      <section className="relative bg-blueGray-100 py-4 z-2">
        <div className="container mx-auto px-4 -mt-24">
          <div className="flex flex-wrap justify-center">
            <div className="px-4 relative w-full lg:w-4/12">
              <CardChatPeople {...cardchatpeople} />
            </div>
            <div className="pl-6 lg:text-right lg:self-center px-4 relative w-full lg:w-8/12">
              <CardChatDiscussion {...cardchatdiscussion} />
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}
