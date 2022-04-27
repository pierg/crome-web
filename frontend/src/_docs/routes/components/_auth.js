// pages
import Layouts from "_docs/Code/Auth/Pages/Layouts/index.js";
import Login from "_docs/Code/Auth/Pages/Login/index.js";
import Register from "_docs/Code/Auth/Pages/Register/index.js";
import Reset from "_docs/Code/Auth/Pages/Reset/index.js";
// sections
// components
import Cards from "_docs/Code/Auth/Components/Cards/index.js";
import Footers from "_docs/Code/Auth/Components/Footers/index.js";
import Headers from "_docs/Code/Auth/Components/Headers/index.js";

const routesObject = {
  id: "authentication-id",
  title: "Authentication",
  description:
    "Authentication is the act of proving an assertion, such as the identity of a computer system user.",
  sections: [
    {
      id: "authentication-id-components",
      title: "Components",
      components: [
        {
          link: "/components/auth/components/cards",
          image: require("assets/img/components/authentication/components/authentication-components-cards.jpg")
            .default,
          title: "Cards",
          components: Cards,
        },
        {
          link: "/components/auth/components/footers",
          image: require("assets/img/components/authentication/components/authentication-components-footers.jpg")
            .default,
          title: "Footers",
          components: Footers,
        },
        {
          link: "/components/auth/components/headers",
          image: require("assets/img/components/authentication/components/authentication-components-headers.jpg")
            .default,
          title: "Headers",
          components: Headers,
        },
      ],
    },
    {
      id: "authentication-id-pages",
      title: "Pages",
      components: [
        {
          link: "/components/auth/pages/layouts",
          image: require("assets/img/components/authentication/pages/authentication-pages-layouts.jpg")
            .default,
          title: "Layouts",
          components: Layouts,
        },
        {
          link: "/components/auth/pages/login",
          image: require("assets/img/components/authentication/pages/authentication-pages-login.jpg")
            .default,
          title: "Login",
          components: Login,
        },
        {
          link: "/components/auth/pages/register",
          image: require("assets/img/components/authentication/pages/authentication-pages-register.jpg")
            .default,
          title: "Register",
          components: Register,
        },
        {
          link: "/components/auth/pages/reset",
          image: require("assets/img/components/authentication/pages/authentication-pages-reset.jpg")
            .default,
          title: "Reset",
          components: Reset,
        },
      ],
    },
  ],
};
export default routesObject;
