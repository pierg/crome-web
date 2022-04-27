import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

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
