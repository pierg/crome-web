// pages
import "_docs/Code/ECommerce/Pages/Chat/index.js"
import "_docs/Code/ECommerce/Pages/Checkout/index.js"
import "_docs/Code/ECommerce/Pages/ECommerce/index.js"
import "_docs/Code/ECommerce/Pages/Invoice/index.js"
import "_docs/Code/ECommerce/Pages/Pricing/index.js"
import "_docs/Code/ECommerce/Pages/Product/index.js"
import "_docs/Code/ECommerce/Pages/Profile/index.js"
import Chat
import Checkout
import ECommerce
import Invoice
import Pricing
import Product
import Profile

// sections
import "_docs/Code/ECommerce/Sections/Blogs/index.js"
import "_docs/Code/ECommerce/Sections/Heroes/index.js"
import "_docs/Code/ECommerce/Sections/Pricing/index.js"
import "_docs/Code/ECommerce/Sections/Product/index.js"
import "_docs/Code/ECommerce/Sections/Project/index.js"
import "_docs/Code/ECommerce/Sections/Testimonials/index.js"
import Blogs
import Heroes
import PricingSections
import ProductSection
import Project
import Testimonials

// components
import "_docs/Code/ECommerce/Components/Cards/index.js"
import "_docs/Code/ECommerce/Components/Headers/index.js"
import "_docs/Code/ECommerce/Components/MediaPlayers/index.js"
import Cards
import Headers
import MediaPlayers

const routesObject = {
  id: "e-commerce-id",
  title: "E-commerce",
  description:
    "E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet.",
  sections: [
    {
      id: "e-commerce-id-components",
      title: "Components",
      components: [
        {
          link: "/components/e-commerce/components/cards",
          image:
            require("assets/img/components/ecommerce/components/ecommerce-components-cards.jpg")
              .default,
          title: "Cards",
          components: Cards,
        },
        {
          link: "/components/e-commerce/components/headers",
          image:
            require("assets/img/components/ecommerce/components/ecommerce-components-headers.jpg")
              .default,
          title: "Headers",
          components: Headers,
        },
        {
          link: "/components/e-commerce/components/media-players",
          image:
            require("assets/img/components/ecommerce/components/ecommerce-components-mediaplayers.jpg")
              .default,
          title: "Media Players",
          components: MediaPlayers,
        },
      ],
    },
    {
      id: "e-commerce-id-sections",
      title: "Sections",
      components: [
        {
          link: "/components/e-commerce/sections/blogs",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-blogs.jpg")
              .default,
          title: "Blogs",
          components: Blogs,
        },
        {
          link: "/components/e-commerce/sections/hero",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-hero.jpg")
              .default,
          title: "Hero",
          components: Heroes,
        },
        {
          link: "/components/e-commerce/sections/pricing",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-pricing.jpg")
              .default,
          title: "Pricing",
          components: PricingSections,
        },
        {
          link: "/components/e-commerce/sections/product",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-product.jpg")
              .default,
          title: "Product",
          components: ProductSection,
        },
        {
          link: "/components/e-commerce/sections/projects",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-projects.jpg")
              .default,
          title: "Projects",
          components: Project,
        },
        {
          link: "/components/e-commerce/sections/testimonials",
          image:
            require("assets/img/components/ecommerce/sections/ecommerce-sections-testimonials.jpg")
              .default,
          title: "Testimonials",
          components: Testimonials,
        },
      ],
    },
    {
      id: "e-commerce-id-pages",
      title: "Pages",
      components: [
        {
          link: "/components/e-commerce/pages/chat",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-chat.jpg")
              .default,
          title: "Chat",
          components: Chat,
        },
        {
          link: "/components/e-commerce/pages/checkout",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-checkout.jpg")
              .default,
          title: "Checkout",
          components: Checkout,
        },
        {
          link: "/components/e-commerce/pages/e-commerce",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-ecommerce.jpg")
              .default,
          title: "E-Commerce",
          components: ECommerce,
        },
        {
          link: "/components/e-commerce/pages/invoice",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-invoice.jpg")
              .default,
          title: "Invoice",
          components: Invoice,
        },
        {
          link: "/components/e-commerce/pages/pricing",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-pricing.jpg")
              .default,
          title: "Pricing",
          components: Pricing,
        },
        {
          link: "/components/e-commerce/pages/product",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-product.jpg")
              .default,
          title: "Product",
          components: Product,
        },
        {
          link: "/components/e-commerce/pages/profile",
          image:
            require("assets/img/components/ecommerce/pages/ecommerce-pages-profile.jpg")
              .default,
          title: "Profile",
          components: Profile,
        },
      ],
    },
  ],
};
export default routesObject;
