import "_docs/components/CustomClassesList.js"
import "react"
import CustomClassesList
import React

const properties = `-webkit-animation: indexImage 20s linear infinite;
        animation: indexImage 20s linear infinite;`;

export default function Animation() {
  return (
    <>
      <CustomClassesList
        title="Animation"
        items={[{ class: "animate-index-image", properties: properties }]}
      />
    </>
  );
}
