import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Inset() {
  return (
    <>
      <CustomClassesList
        title="Inset"
        items={[
          {
            class: "-top-94-px",

            properties: `top: -94px;`,
          },

          {
            class: "-top-64-px",

            properties: `top: -64px;`,
          },

          {
            class: "-right-24-px",

            properties: `right: -24px;`,
          },

          {
            class: "top-280-px",

            properties: `top: 280px;`,
          },

          {
            class: "top-320-px",

            properties: `top: 320px;`,
          },

          {
            class: "-left-1/25",

            properties: `left: -4%;`,
          },

          {
            class: "left-1/100",

            properties: `left: 1%;`,
          },

          {
            class: "right-1/50",

            properties: `right: 2%;`,
          },

          {
            class: "right-1/25",

            properties: `right: 4%;`,
          },

          {
            class: "right-1/20",

            properties: `right: 5%;`,
          },

          {
            class: "right-7/100",

            properties: `right: 7%;`,
          },

          {
            class: "left-1/10",

            properties: `left: 10%;`,
          },

          {
            class: "top-7/20",

            properties: `top: 35%;`,
          },

          {
            class: "right-9/25",

            properties: `right: 36%;`,
          },

          {
            class: "top-19/50",

            properties: `top: 38%;`,
          },

          {
            class: "top-11/25",

            properties: `top: 44%;`,
          },
        ]}
      />
    </>
  );
}
