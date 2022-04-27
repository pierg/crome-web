import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

const staticImportantProperties = `@media (max-width: 1023px) {
  position: static !important;
}`;
const transformNoneImportantProperties = `@media (max-width: 1023px) {
  -webkit-transform: none !important;
          transform: none !important;
}`;

export default function Plugins() {
  return (
    <>
      <CustomClassesList
        title="Plugins"
        content={
          <p className="leading-extra-relaxed font-light text-base mb-5">
            We{"'"}ve used the{" "}
            <span className="font-bold">tailwindcss{"/"}plugin</span>{" "}
            {"function"} to add 4 new classes:
          </p>
        }
        items={[
          {
            class: "static-important",
            properties: staticImportantProperties,
          },
          {
            class: "transform-none-important",
            properties: transformNoneImportantProperties,
          },
        ]}
      />
    </>
  );
}
