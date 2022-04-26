import React from "react";

import CustomClassesList from "_docs/components/CustomClassesList.js";

export default function Keyframes() {
  return (
    <>
      <CustomClassesList
        title="Keyframes"
        items={[
          {
            class: "@-webkit-keyframes indexImage",
            properties: `0% {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n100% {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}`,
          },
          {
            class: "@-webkit-keyframes indexImage",
            properties: `0% {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n100% {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}`,
          },
        ]}
      />
    </>
  );
}
