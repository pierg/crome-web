import "_texts/e-commerce/cards/cardchatdiscussion.js"
import "_texts/e-commerce/cards/cardchatpeople.js"
import "_texts/e-commerce/headers/headerimagetitlesmallcenterchat.js"
import "_texts/presentation/footers/footersmall.js"
import "_texts/presentation/navbars/navbarlinkslanding2.js"
import "_texts/presentation/prefooters/prefooterlarge.js"
import "views/e-commerce/Chat.js"
import cardchatdiscussion
import cardchatpeople
import Chat
import footersmall
import headerimagetitlesmallcenterchat
import navbarlinkslanding2
import prefooterlarge

const props = `// no props for this, as this is an view component`;
const description = "";
const preview = `import React from "react";

// @notus-pro/react
import "@notus-pro/react/CardChatDiscussion"
import "@notus-pro/react/CardChatPeople"
import "@notus-pro/react/FooterSmall"
import "@notus-pro/react/HeaderImageTitleSmallCenter"
import "@notus-pro/react/NavbarLinks"
import "@notus-pro/react/PreFooterLarge"
import CardChatDiscussion
import CardChatPeople
import FooterSmall
import HeaderImageTitleSmallCenter
import NavbarLinks
import PreFooterLarge

// texts as props
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};
const headerimagetitlesmallcenterchat = ${JSON.stringify(
  headerimagetitlesmallcenterchat
)};
const cardchatpeople = ${JSON.stringify(cardchatpeople)};
const cardchatdiscussion = ${JSON.stringify(cardchatdiscussion)};
const prefooterlarge = ${JSON.stringify(prefooterlarge)};
const footersmall = ${JSON.stringify(footersmall)};

export default function Chat() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenterchat} />
      <section className="relative bg-blueGray-100 py-12 z-2">
        <div className="container mx-auto px-4 -mt-64">
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
`;

const docsObjects = {
  component: Chat,
  componentName: "Chat",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "relative w-full ct-docs-disable-nav-fixed",
  },
};
export default docsObjects;
