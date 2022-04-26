import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function BorderRadius() {
  return (
    <>
      <CustomClassesList
        title="Border Radius"
        items={[
          {
            class: "rounded-inherit",
            properties: `border-radius: inherit;`,
          },
        ]}
      />
    </>
  );
}
