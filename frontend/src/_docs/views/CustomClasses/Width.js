import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Width() {
  return (
    <>
      <CustomClassesList
        title="Width"
        items={[
          { class: "w-double", properties: "width: 200%;" },
          { class: "w-100-px", properties: "width: 100px;" },
          { class: "w-170-px", properties: "width: 170px;" },
          { class: "w-450-px", properties: "width: 450px;" },
          { class: "w-650-px", properties: "width: 650px;" },
          { class: "w-768-px", properties: "width: 768px;" },
          { class: "w-850-px", properties: "width: 850px;" },
          { class: "w-full-500", properties: "width: 500%;" },
        ]}
      />
    </>
  );
}
