import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function MaxHeight() {
  return (
    <>
      <CustomClassesList
        title="Max Height"
        items={[
          { class: "max-h-440-px", properties: "max-height: 440px;" },
          { class: "max-h-700-px", properties: "max-height: 700px;" },
          { class: "max-h-999-px", properties: "max-height: 999px;" },
          { class: "max-h-screen-70", properties: "max-height: 70vh;" },
        ]}
      />
    </>
  );
}
