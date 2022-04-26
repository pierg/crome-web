import Landing1 from "views/presentation/Landing1.js";
import hero1 from "_texts/presentation/heroes/hero1.js";
import hero2 from "_texts/presentation/heroes/hero2.js";
import hero3 from "_texts/presentation/heroes/hero3.js";
import teams1 from "_texts/presentation/teams/teams1.js";
import contactus1 from "_texts/presentation/contactus/contactus1.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlecenter from "_texts/presentation/headers/headerimagetitlecenter.js";
import footerlarge from "_texts/presentation/footers/footerlarge.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import Hero1 from "@notus-pro/react/Hero1";
import Hero2 from "@notus-pro/react/Hero2";
import Teams1 from "@notus-pro/react/Teams1";
import Hero3 from "@notus-pro/react/Hero3";
import ContactUs1 from "@notus-pro/react/ContactUs1";
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImageTitleCenter from "@notus-pro/react/HeaderImageTitleCenter";
import FooterLarge from "@notus-pro/react/FooterLarge";
// texts as props
const hero1 = ${JSON.stringify(hero1)};
const hero2 = ${JSON.stringify(hero2)};
const hero3 = ${JSON.stringify(hero3)};
const teams1 = ${JSON.stringify(teams1)};
const contactus1 = ${JSON.stringify(contactus1)};
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimagetitlecenter = ${JSON.stringify(headerimagetitlecenter)};
const footerlarge = ${JSON.stringify(footerlarge)};

export default function Landing1() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <HeaderImageTitleCenter {...headerimagetitlecenter} />
        <div className="-mt-24">
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
`;

const docsObjects = {
  component: Landing1,
  componentName: "Landing1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
