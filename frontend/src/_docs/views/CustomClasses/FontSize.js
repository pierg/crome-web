import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function FontSize() {
  return (
    <>
      <CustomClassesList
        title="Font Size"
        items={[
          {
            class: "text-10",

            properties: `font-size: 10rem;`,
          },

          {
            class: "text-12",

            properties: `font-size: 12rem;`,
          },

          {
            class: "text-55",

            properties: `font-size: 55rem;`,
          },

          {
            class: "text-1625",

            properties: `font-size: 1.625rem;`,
          },
        ]}
      />
    </>
  );
}
