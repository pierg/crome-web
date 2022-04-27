import "_docs/views/CustomClasses.js"
import "_docs/views/Icons.js"
import "_docs/views/Installation.js"
import "_docs/views/License.js"
import "_docs/views/Overview.js"
import "_docs/views/Plugins.js"
import "_docs/views/TypeScriptSupport.js"
import "_docs/views/WhatIsReact.js"
import "_docs/views/WhatIsTailwindCSS.js"
import CustomClasses
import Icons
import Installation
import License
import Overview
import Plugins
import TypeScriptSupport
import WhatIsReact
import WhatIsTailwindCSS

const routesArray = [
  {
    component: Overview,
    name: "Overview",
    route: "/overview",
    description: "Premium Tailwind CSS UI Kit and Admin.",
  },
  {
    component: License,
    name: "License",
    route: "/license",
    description:
      "Learn more about the licenses Creative Tim offers and purchase the one that covers the needs of your project.",
  },
  {
    component: Installation,
    name: "Installation",
    route: "/installation",
    description:
      "To start using this product you will need to install and import some files in your current project.",
  },
  {
    component: CustomClasses,
    name: "Custom Classes",
    route: "/custom-classes",
    description: "New classes, added to the Tailwind CSS ones.",
  },
  {
    component: Icons,
    name: "Icons",
    route: "/icons",
    description: "Free open source icons for your website.",
  },
  {
    component: Plugins,
    name: "Plugins",
    route: "/plugins",
    description: "Learn more about the used plugins in this product.",
  },
  {
    component: TypeScriptSupport,
    name: "TypeScript Support",
    route: "/typescript-support",
    description: "At the moment, Notus PRO React does not support TypeScript.",
  },
  {
    component: WhatIsReact,
    name: "What Is React",
    route: "/what-is-react",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    component: WhatIsTailwindCSS,
    name: "What Is Tailwind CSS",
    route: "/what-is-tailwind-css",
    description: "A utility-first CSS framework for rapidly building custom designs.",
  },
];

export default routesArray;
