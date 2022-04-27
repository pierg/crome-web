import "react"
import "react-router-dom"
import React
import { useLocation }

// sections
import "components/Sections/Presentation/ContactUs/ContactUs1.js"
import "components/Sections/Presentation/Heroes/Hero1.js"
import "components/Sections/Presentation/Heroes/Hero2.js"
import "components/Sections/Presentation/Heroes/Hero3.js"
import "components/Sections/Presentation/Teams/Teams1.js"
import ContactUs1
import Hero1
import Hero2
import Hero3
import Teams1

// components
import "components/Footers/Landing/FooterLarge.js"
import "components/Headers/Presentation/HeaderImageTitleCenter.js"
import "components/Navbars/NavbarLinks.js"
import FooterLarge
import HeaderImageTitleCenter
import NavbarLinks

// texts for sections as props
import "_texts/presentation/contactus/contactus1.js"
import "_texts/presentation/heroes/hero1.js"
import "_texts/presentation/heroes/hero2.js"
import "_texts/presentation/heroes/hero3.js"
import "_texts/presentation/teams/teams1.js"
import contactus1
import hero1
import hero2
import hero3
import teams1

// texts for components as props
import "_texts/presentation/footers/footerlarge.js"
import "_texts/presentation/headers/headerimagetitlecenter.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import footerlarge
import headerimagetitlecenter
import navbarlinkslanding1

export default function Landing1() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <HeaderImageTitleCenter {...headerimagetitlecenter} />
        <div className="">
          <Hero1 {...hero1} />
        </div>
        <div className="-mt-20">
          <Hero2 {...hero2} />
        </div>
        <Teams1 {...teams1} />
        <div className="-mt-20">
          <Hero3 {...hero3} />
        </div>
        <ContactUs1 {...contactus1} />
      </main>
      <div className="-mt-20">
        <FooterLarge {...footerlarge} />
      </div>
    </>
  );
}
