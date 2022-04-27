import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function MinWidth() {
  return (
    <>
      <CustomClassesList
        title="Min Width"
        items={[
          { class: "min-w-48", properties: "min-width: 12rem;" },
          { class: "min-w-140-px", properties: "min-width: 140px;" },
        ]}
      />
    </>
  );
}
