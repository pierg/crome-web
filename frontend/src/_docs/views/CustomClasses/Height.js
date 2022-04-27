import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Height() {
  return (
    <>
      <CustomClassesList
        title="Height"
        items={[
          {
            class: "h-screen-50",

            properties: `height: 50vh;`,
          },

          {
            class: "h-70-px",

            properties: `height: 70px;`,
          },

          {
            class: "h-95-px",

            properties: `height: 95px;`,
          },

          {
            class: "h-140-px",

            properties: `height: 140px;`,
          },

          {
            class: "h-300-px",

            properties: `height: 300px;`,
          },

          {
            class: "h-330-px",

            properties: `height: 330px;`,
          },

          {
            class: "h-350-px",

            properties: `height: 350px;`,
          },

          {
            class: "h-400-px",

            properties: `height: 400px;`,
          },

          {
            class: "h-430-px",

            properties: `height: 430px;`,
          },

          {
            class: "h-500-px",

            properties: `height: 500px;`,
          },

          {
            class: "h-530-px",

            properties: `height: 530px;`,
          },

          {
            class: "h-550-px",

            properties: `height: 550px;`,
          },

          {
            class: "h-600-px",

            properties: `height: 600px;`,
          },
        ]}
      />
    </>
  );
}
