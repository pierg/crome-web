import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function MinHeight() {
  return (
    <>
      <CustomClassesList
        title="Min Height"
        items={[
          {
            class: "min-h-6",

            properties: `min-height: 1.5rem;`,
          },

          {
            class: "min-h-screen-60",

            properties: `min-height: 60vh;`,
          },

          {
            class: "min-h-screen-75",

            properties: `min-height: 75vh;`,
          },

          {
            class: "min-h-330-px",

            properties: `min-height: 330px;`,
          },

          {
            class: "min-h-400-px",

            properties: `min-height: 400px;`,
          },

          {
            class: "min-h-480-px",

            properties: `min-height: 480px;`,
          },

          {
            class: "min-h-500-px",

            properties: `min-height: 500px;`,
          },

          {
            class: "min-h-700-px",

            properties: `min-height: 700px;`,
          },
        ]}
      />
    </>
  );
}
