import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Screens() {
  return (
    <>
      <CustomClassesList
        title="Screens"
        items={[
          {
            class: "max-sm",

            properties: `@media (max-width: 639px) { ... }`,
          },

          {
            class: "max-md",

            properties: `@media (max-width: 767px) { ... }`,
          },

          {
            class: "max-lg",

            properties: `@media (max-width: 1023px) { ... }`,
          },

          {
            class: "max-xl",

            properties: `@media (max-width: 1279px) { ... }`,
          },
        ]}
      />
    </>
  );
}
