import "_texts/presentation/contactus/contactus1.js"
import "_texts/presentation/footers/footerlarge.js"
import "_texts/presentation/headers/headerimagetitlecenter.js"
import "_texts/presentation/heroes/hero1.js"
import "_texts/presentation/heroes/hero2.js"
import "_texts/presentation/heroes/hero3.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "_texts/presentation/teams/teams1.js"
import "views/presentation/Landing1.js"
import contactus1
import footerlarge
import headerimagetitlecenter
import hero1
import hero2
import hero3
import Landing1
import navbarlinkslanding1
import teams1

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/ContactUs1"
import "@notus-pro/react/FooterLarge"
import "@notus-pro/react/HeaderImageTitleCenter"
import "@notus-pro/react/Hero1"
import "@notus-pro/react/Hero2"
import "@notus-pro/react/Hero3"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/Teams1"
import ContactUs1
import FooterLarge
import HeaderImageTitleCenter
import Hero1
import Hero2
import Hero3
import NavbarLinks
import Teams1

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
