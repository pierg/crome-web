// pages
import Dashboards from "_docs/Code/Admin/Pages/Dashboards/index.js";
import Maps from "_docs/Code/Admin/Pages/Maps/index.js";
import Settings from "_docs/Code/Admin/Pages/Settings/index.js";
import Tables from "_docs/Code/Admin/Pages/Tables/index.js";
import Layouts from "_docs/Code/Admin/Pages/Layouts/index.js";
// sections
// components
import Cards from "_docs/Code/Admin/Components/Cards/index.js";
import Footers from "_docs/Code/Admin/Components/Footers/index.js";
import Headers from "_docs/Code/Admin/Components/Headers/index.js";
import Navbars from "_docs/Code/Admin/Components/Navbars/index.js";
import Sidebars from "_docs/Code/Admin/Components/Sidebars/index.js";

const routesObject = {
  id: "admin-id",
  title: "Admin",
  description:
    "In short, the admin panel is where the content is created and the website is managed. This is the key to how a content management system (CMS) works.",
  sections: [
    {
      id: "admin-id-components",
      title: "Components",
      components: [
        {
          link: "/components/admin/components/cards",
          image: require("assets/img/components/admin/components/admin-components-cards.jpg")
            .default,
          title: "Cards",
          components: Cards,
        },
        {
          link: "/components/admin/components/footers",
          image: require("assets/img/components/admin/components/admin-components-footers.jpg")
            .default,
          title: "Footers",
          components: Footers,
        },
        {
          link: "/components/admin/components/headers",
          image: require("assets/img/components/admin/components/admin-components-headers.jpg")
            .default,
          title: "Headers",
          components: Headers,
        },
        {
          link: "/components/admin/components/navbars",
          image: require("assets/img/components/admin/components/admin-components-navbar.jpg")
            .default,
          title: "Navbars",
          components: Navbars,
        },
        {
          link: "/components/admin/components/sidebars",
          image: require("assets/img/components/admin/components/admin-components-sidebar.jpg")
            .default,
          title: "Sidebars",
          components: Sidebars,
        },
      ],
    },
    {
      id: "admin-id-pages",
      title: "Pages",
      components: [
        {
          link: "/components/admin/pages/dashboards",
          image: require("assets/img/components/admin/pages/admin-pages-dashboard.jpg")
            .default,
          title: "Dashboards",
          components: Dashboards,
        },
        {
          link: "/components/admin/pages/maps",
          image: require("assets/img/components/admin/pages/admin-pages-maps.jpg")
            .default,
          title: "Maps",
          components: Maps,
        },
        {
          link: "/components/admin/pages/settings",
          image: require("assets/img/components/admin/pages/admin-pages-settings.jpg")
            .default,
          title: "Settings",
          components: Settings,
        },
        {
          link: "/components/admin/pages/tables",
          image: require("assets/img/components/admin/pages/admin-pages-tables.jpg")
            .default,
          title: "Tables",
          components: Tables,
        },
        {
          link: "/components/admin/pages/layouts",
          image: require("assets/img/components/admin/pages/admin-pages-layout.jpg")
            .default,
          title: "Layouts",
          components: Layouts,
        },
      ],
    },
  ],
};
export default routesObject;
