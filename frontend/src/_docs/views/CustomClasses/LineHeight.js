import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function LineHeight() {
  return (
    <>
      <CustomClassesList
        title="Line Height"
        items={[
          {
            class: "leading-extra-relaxed",

            properties: `line-height: 1.7;`,
          },
        ]}
      />
    </>
  );
}
