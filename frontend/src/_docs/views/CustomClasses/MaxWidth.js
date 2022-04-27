import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function MaxWidth() {
  return (
    <>
      <CustomClassesList
        title="Max Width"
        items={[
          { class: "max-w-40-px", properties: "max-width: 40px;" },
          { class: "max-w-64-px", properties: "max-width: 64px;" },
          { class: "max-w-100-px", properties: "max-width: 100px;" },
          { class: "max-w-120-px", properties: "max-width: 120px;" },
          { class: "max-w-150-px", properties: "max-width: 150px;" },
          { class: "max-w-250-px", properties: "max-width: 250px;" },
          { class: "max-w-360-px", properties: "max-width: 360px;" },
        ]}
      />
    </>
  );
}
