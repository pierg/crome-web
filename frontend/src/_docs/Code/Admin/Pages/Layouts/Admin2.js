import Admin2 from "components/Layouts/Admin/Admin2.js";
import sidebar from "_texts/admin/sidebar/sidebar.js";
import navbarsearchusersettings2 from "_texts/admin/navbars/navbarsearchusersettings2.js";
import headeruser from "_texts/admin/headers/headeruser.js";
import footeradmin from "_texts/admin/footers/footeradmin.js";
const passProps = {
  sidebar: sidebar,
  navbar: navbarsearchusersettings2,
  header: headeruser,
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
    name: "HeaderUser",
    link:
      "/components/admin/components/headers#admin-id-admin-id-components-headeruser",
  },
  {
    name: "FooterAdmin",
    link: "/components/admin/components/footers",
  },
];
const props = `Admin2.defaultProps = {
  sidebar: {},
  navbar: {},
  header: {},
  footer: {},
};

Admin2.propTypes = {
  // props to pass to the Sidebar component
  sidebar: PropTypes.object,
  // props to pass to the NavbarSearchUser component
  navbar: PropTypes.object,
  // props to pass to the HeaderUser component
  header: PropTypes.object,
  // props to pass to the FooterAdmin component
  footer: PropTypes.object,
};`;
const description = "";
const preview = `import React from "react"

// @notus-pro/react
import Admin2 from "@notus-pro/react/Admin2.js";

// props
const sidebar = ${JSON.stringify(sidebar)};
const navbarsearchusersettings2 = ${JSON.stringify(navbarsearchusersettings2)};
const headeruser = ${JSON.stringify(headeruser)};
const footeradmin = ${JSON.stringify(footeradmin)};

export default function Example(){
  return (
    <Admin2
      sidebar={sidebar}
      navbar={navbarsearchusersettings2}
      header={headeruser}
      footer={footeradmin}
    />
  );
}`;

const docsObjects = {
  component: Admin2,
  componentName: "Admin2",
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
