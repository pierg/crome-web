import Profile1 from "views/e-commerce/Profile1.js";
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimage from "_texts/e-commerce/headers/headerimage.js";
import cardprofilefullpage from "_texts/e-commerce/cards/cardprofilefullpage.js";
import footerlarge from "_texts/presentation/footers/footerlarge.js";
const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import NavbarLinks from "@notus-pro/react/NavbarLinks";
import HeaderImage from "@notus-pro/react/HeaderImage";
import CardProfileFullPage from "@notus-pro/react/CardProfileFullPage";
import FooterLarge from "@notus-pro/react/FooterLarge";
// texts as props
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const headerimage = ${JSON.stringify(headerimage)};
const cardprofilefullpage = ${JSON.stringify(cardprofilefullpage)};
const footerlarge = ${JSON.stringify(footerlarge)};

export default function Profile1() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <HeaderImage {...headerimage} />
        <section className="relative py-16 bg-blueGray-300">
          <div className="container mx-auto px-4 -mt-64">
            <CardProfileFullPage {...cardprofilefullpage} />
          </div>
        </section>
      </main>
      <div className="-mt-20">
        <FooterLarge {...footerlarge} />
      </div>
    </>
  );
}`;

const docsObjects = {
  component: Profile1,
  componentName: "Profile1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
