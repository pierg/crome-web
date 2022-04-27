import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

export default function LetterSpacing() {
  return (
    <>
      <CustomClassesList
        title="Letter Spacing"
        items={[
          {
            class: "tracking-875",

            properties: `letter-spacing: 0.875rem;`,
          },
        ]}
      />
    </>
  );
}
