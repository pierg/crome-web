import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Translate() {
  return (
    <>
      <CustomClassesList
        title="Translate"
        items={[
          {
            class: "-translate-x-1/5",

            properties: `--tw-translate-x: -20%;`,
          },

          {
            class: "translate-x-1/5",

            properties: `--tw-translate-x: 20%;`,
          },
        ]}
      />
    </>
  );
}
