import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

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
