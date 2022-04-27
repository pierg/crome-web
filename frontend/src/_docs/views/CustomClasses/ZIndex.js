import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function ZIndex() {
  return (
    <>
      <CustomClassesList
        title="Z-Index"
        items={[
          {
            class: "z-1",

            properties: `z-index: 1;`,
          },

          {
            class: "z-2",

            properties: `z-index: 2;`,
          },

          {
            class: "z-3",

            properties: `z-index: 3;`,
          },

          {
            class: "z-4",

            properties: `z-index: 4;`,
          },

          {
            class: "z-5",

            properties: `z-index: 5;`,
          },

          {
            class: "z-9998",

            properties: `z-index: 9998;`,
          },

          {
            class: "z-9999",

            properties: `z-index: 9999;`,
          },
        ]}
      />
    </>
  );
}
