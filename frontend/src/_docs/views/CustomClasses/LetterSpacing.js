import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function LetterSpacing() {
  return (
    <>
      <CustomClassesList
        title="Letter Spacing"
        items={[
          {
            class: "tracking-875",

            properties: `letter-spacing: 0.875rem;`,
          },
        ]}
      />
    </>
  );
}
