import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Spacing() {
  return (
    <>
      <CustomClassesList
        title="Spacing"
        items={[
          { class: "mb-50-px", properties: "margin-bottom: 50px;" },
          { class: "-mt-220-px", properties: "margin-top: -220px;" },
        ]}
      />
    </>
  );
}
