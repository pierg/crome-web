import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function BorderRadius() {
  return (
    <>
      <CustomClassesList
        title="Border Radius"
        items={[
          {
            class: "rounded-inherit",
            properties: `border-radius: inherit;`,
          },
        ]}
      />
    </>
  );
}
