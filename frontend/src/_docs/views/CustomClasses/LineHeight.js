import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function LineHeight() {
  return (
    <>
      <CustomClassesList
        title="Line Height"
        items={[
          {
            class: "leading-extra-relaxed",

            properties: `line-height: 1.7;`,
          },
        ]}
      />
    </>
  );
}
