import Admin1 from "components/Layouts/Admin/Admin1.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headerstatcards from "_texts/admin/headers/headerstatcards.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const passProps = {
  sidebar: sidebar,
  navbar: navbarsearchusersettings2,
  header: headerstatcards,
  footer: footeradmin,
};
const dependencies = [
  {
    name: "Sidebar",
    link: "/components/admin/components/sidebars",
  },
  {
    name: "NavbarSearchUser",
    link: "/components/admin/components/navbars",
  },
  {
    name: "HeaderStatCards",
    link: "/components/admin/components/headers",
  },
  {
    name: "FooterAdmin",
    link: "/components/admin/components/footers",
  },
];
const props = `Admin1.defaultProps = {
  sidebar: {},
  navbar: {},
  header: {},
  footer: {},
};

Admin1.propTypes = {
  // props to pass to the Sidebar component
  sidebar: PropTypes.object,
  // props to pass to the NavbarSearchUser component
  navbar: PropTypes.object,
  // props to pass to the HeaderStatCards component
  header: PropTypes.object,
  // props to pass to the FooterAdmin component
  footer: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react"

// @notus-pro/react
import Admin1 from "@notus-pro/react/Admin1.js";

// props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headerstatcards = ${JSON.stringify(headerstatcards)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Example(){
  return (
    <Admin1
      sidebar={sidebar}
      navbar={navbarsearchusersettings2}
      header={headerstatcards}
      footer={footeradmin}
    />
  );
}`;

const docsObjects = {
  component: Admin1,
  componentName: "Admin1",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    wrapperClasses:
      "w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden",
  },
};
export default docsObjects;
