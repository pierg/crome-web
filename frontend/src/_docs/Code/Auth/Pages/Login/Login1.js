import "_texts/auth/cards/cardloginsocial.js"
import "_texts/auth/footers/footerauth.js"
import "_texts/presentation/navbars/navbarlinkslanding1.js"
import "views/auth/Login1.js"
import cardloginsocial
import footerauth
import Login1
import navbarlinkslanding1

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardLoginSocial"
import "@notus-pro/react/FooterAuth"
import "@notus-pro/react/NavbarLinks"
import CardLoginSocial
import FooterAuth
import NavbarLinks

// texts as props
const cardloginsocial = ${JSON.stringify(cardloginsocial)};
const navbarlinkslanding1 = ${JSON.stringify(navbarlinkslanding1)};
const footerauth = ${JSON.stringify(footerauth)};

export default function Login1() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <CardLoginSocial {...cardloginsocial} />
              </div>
            </div>
          </div>
          <FooterAuth {...footerauth} />
        </section>
      </main>
    </>
  );
}`;

const docsObjects = {
  component: Login1,
  componentName: "Login1",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full",
  },
};
export default docsObjects;
