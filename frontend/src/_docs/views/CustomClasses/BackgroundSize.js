import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function BackgroundSize() {
  return (
    <>
      <CustomClassesList
        title="Background Size"
        items={[
          { class: "bg-full", properties: "background-size: 100%;" },
          {
            class: "bg-20-full-auto",
            properties: "background-size: 20% auto;",
          },
        ]}
      />
    </>
  );
}
