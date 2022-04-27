import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero1 from "components/Sections/Presentation/Heroes/Hero1.js";
import Hero2 from "components/Sections/Presentation/Heroes/Hero2.js";
import Teams1 from "components/Sections/Presentation/Teams/Teams1.js";
import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";
import ContactUs1 from "components/Sections/Presentation/ContactUs/ContactUs1.js";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.js";
import HeaderImageTitleCenter from "components/Headers/Presentation/HeaderImageTitleCenter.js";
import FooterLarge from "components/Footers/Landing/FooterLarge.js";
// texts for sections as props
import hero1 from "_texts/presentation/heroes/hero1.js";
import hero2 from "_texts/presentation/heroes/hero2.js";
import hero3 from "_texts/presentation/heroes/hero3.js";
import teams1 from "_texts/presentation/teams/teams1.js";
import contactus1 from "_texts/presentation/contactus/contactus1.js";
// texts for components as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlecenter from "_texts/presentation/headers/headerimagetitlecenter.js";
import footerlarge from "_texts/presentation/footers/footerlarge.js";

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
