/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Alert from "components/Elements/Alert.js";

export default function Plugins() {
  return (
    <>
      <h3 className="text-2xl font-medium mb-2 mt-10">Google Maps</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Our Map components uses the Google Maps API and it comes with a custom
        interface that matches the theme’s colors. Keep reading our Maps
        examples and learn how to use this plugin.
      </p>
      <h4 className="text-xl font-medium mb-2 mt-10">Usage</h4>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        In order to use this plugin on your page you will need to include the
        following script inside your{" "}
        <code className="text-sm font-mono bg-blueGray-200">
          public/index.html
        </code>{" "}
        page, right before the end of the{" "}
        <code className="text-sm font-mono bg-blueGray-200">{`</head>`}</code>{" "}
        tag:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={shadesOfPurple}
        customStyle={{
          fontSize: "0.825em",
          padding: "14px",
          borderRadius: "4px",
        }}
      >
        {`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"></script>`}
      </SyntaxHighlighter>
      <h4 className="text-xl font-medium mb-2 mt-10">Get your API key</h4>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        In order to get your Google Maps API key navigate to the following page:{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://developers.google.com/maps/documentation/javascript/get-api-key?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          Google Maps
        </a>
        . After you’ve got your api key, you will need to replace in the above
        script, the{" "}
        <code className="text-sm font-mono bg-blueGray-200">
          YOUR_API_KEY_HERE
        </code>{" "}
        with that key.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Read more about Google Maps on their own website:{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://developers.google.com/maps/documentation/javascript/overview?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          here
        </a>
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">PopperJS</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        In order to use this plugin you will have to install it:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={shadesOfPurple}
        customStyle={{
          fontSize: "0.825em",
          padding: "14px",
          borderRadius: "4px",
        }}
      >
        {`npm i -E @popperjs/core@2.5.4`}
      </SyntaxHighlighter>
      <p className="leading-extra-relaxed font-light text-base my-5">
        We've used this plugin for multiple components as for making dynamic
        render of menus and info boxes (tooltips). These components are as
        follow:
      </p>
      <ul className="my-3 list-disc pl-8">
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Dropdowns/DropdownButton.js
          </code>
        </li>
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Dropdowns/DropdownNavbar.js
          </code>
        </li>
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Dropdowns/DropdownUser.js
          </code>
        </li>
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Elements/Select.js
          </code>
        </li>
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Images/ImageTooltip.js
          </code>
        </li>
      </ul>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        So, if you will use any of the above components, be sure to keep
        popperjs inside your project as well.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Read more about popperjs on their own website:{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://popper.js.org/?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          here
        </a>
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">ChartJS</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        In order to use this plugin you will have to install it:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={shadesOfPurple}
        customStyle={{
          fontSize: "0.825em",
          padding: "14px",
          borderRadius: "4px",
        }}
      >
        {`npm i -E chart.js@2.9.4`}
      </SyntaxHighlighter>
      <p className="leading-extra-relaxed font-light text-base my-5">
        We've used this plugin for only one component:
      </p>
      <ul className="my-3 list-disc pl-8">
        <li className="py-1">
          <code className="text-sm font-mono bg-blueGray-200">
            src/components/Cards/Admin/CardChartJS.js
          </code>
        </li>
      </ul>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        So, if you will use any of the above components, be sure to keep
        chart.js inside your project as well.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Read more about ChartJS on their own website:{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://www.chartjs.org/?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          here
        </a>
      </p>
      <Alert color="lightBlue">
        NOTICE: We will not offer support for any of the above plugins. We only
        made the code that wrapps them - i.e., we only made the layout for them.
        If you wish to customize any of the above plugins, or if you have any
        issues with them, please refer to their own communities.
      </Alert>
    </>
  );
}
