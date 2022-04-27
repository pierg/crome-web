import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function Opacity() {
  return (
    <>
      <CustomClassesList
        title="Opacity"
        items={[
          {
            class: "opacity-4",

            properties: `opacity: 0.04;`,
          },

          {
            class: "opacity-15",

            properties: `opacity: 0.15;`,
          },

          {
            class: "opacity-65",

            properties: `opacity: 0.65;`,
          },

          {
            class: "opacity-85",

            properties: `opacity: 0.85;`,
          },
        ]}
      />
    </>
  );
}
