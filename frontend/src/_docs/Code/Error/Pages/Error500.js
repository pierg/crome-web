import Error500 from "views/error/Error500.js";
import error1error500 from "_texts/error/error1error500.js";
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
const props = `// no props for this, as this is an view component`;
const description =
  " (Note: This component has a fixed navbar, but due to the sheer complexity of the documentation layout, it only stays on top.)";

const preview = `import React from "react";

// @notus-pro/react
import Error1 from "@notus-pro/react/Error1";
import NavbarLinks from "@notus-pro/react/NavbarLinks";

// texts as props
const error1error500 = ${JSON.stringify(error1error500)};
const navbarlinkslanding2 = ${JSON.stringify(navbarlinkslanding2)};

export default function Error500() {
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <Error1 {...error1error500} />
    </>
  );
}
`;

const docsObjects = {
  component: Error500,
  componentName: "Error500",
  description,
  props,
  preview,
  codeSnippetProps: {
    wrapperClasses: "w-full ct-docs-disable-nav-fixed",
  },
};
export default docsObjects;
