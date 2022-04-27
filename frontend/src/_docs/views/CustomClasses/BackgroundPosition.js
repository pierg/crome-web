import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function BackgroundPosition() {
  return (
    <>
      <CustomClassesList
        title="Background Position"
        items={[
          {
            class: "bg-50-center",
            properties: "background-position: 50% center;",
          },
          { class: "bg-50-top", properties: "background-position: 50% top;" },
          { class: "bg-50", properties: "background-position: 50%;" },
          {
            class: "bg-center-top",
            properties: "background-position: center top;",
          },
          { class: "bg-100", properties: "background-position: 100%;" },
        ]}
      />
    </>
  );
}
