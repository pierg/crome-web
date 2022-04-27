/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Alert from "components/Elements/Alert.js";

const importExample = `import "@fortawesome/fontawesome-free/css/all.min.css";`;

const example = `import React from "react";

class Example extends React.Component {
  render() {
    return (
      <i className="fas fa-heart"></i>
    );
  }
}
`;

const install = `npm i -E @fortawesome/fontawesome-free@5.15.1`;

export default function Icons() {
  return (
    <>
      <h3 className="text-2xl font-medium mb-2 mt-10">Font Awesome 5</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        This product comes with Font Awesome which means 3000+ more vector icons
        made for you to use.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">Intallation</h3>
      <SyntaxHighlighter
        language="jsx"
        style={shadesOfPurple}
        customStyle={{
          fontSize: "0.825em",
          padding: "14px",
          borderRadius: "4px",
        }}
      >
        {install}
      </SyntaxHighlighter>
      <h3 className="text-2xl font-medium mb-2 mt-10">Usage</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        In order to use these icons on your project you will need to import them
        inside your mounting point, in our case it is the{" "}
        <code className="text-sm font-mono bg-blueGray-200">src/index.js</code>{" "}
        file:
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
        {importExample}
      </SyntaxHighlighter>
      <div className="w-full mt-5">
        <Alert color="orange">
          NOTE: there are some components, such as the navbar, or the dropdowns
          that make use of the <b>fontawesome</b> icons, so you will need to
          keep the above import and install inside your project as well if you
          do not want to have issues with our components.
        </Alert>
      </div>
      <h3 className="text-2xl font-medium mb-2 mt-10">Initialization</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Start placing icons in your React components. We recommend using a
        consistent HTML element, like{" "}
        <code className="text-sm font-mono bg-blueGray-200">&lt;i&gt;</code>.
        Find the right icon and learn how to reference it in your markup.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        You need to know two bits of information to reference an icon:
      </p>
      <ol className="my-3 list-decimal pl-8">
        <li className="py-1">
          its name, prefixed with{" "}
          <code className="text-sm font-mono bg-blueGray-200">
            fa{`{type}`} fa-
          </code>{" "}
          and
        </li>
        <li className="py-1">
          the style you want to use’s corresponding prefix.
        </li>
      </ol>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        NOTE:{" "}
        <code className="text-sm font-mono bg-blueGray-200">{`{type}`}</code>{" "}
        can be one of <strong>s</strong> (
        <code className="text-sm font-mono bg-blueGray-200">solid</code>),{" "}
        <strong>r</strong> (
        <code className="text-sm font-mono bg-blueGray-200">regular</code>),{" "}
        <strong>l</strong> (
        <code className="text-sm font-mono bg-blueGray-200">light</code>),{" "}
        <strong>d</strong> (
        <code className="text-sm font-mono bg-blueGray-200">duotone</code>), or{" "}
        <strong>b</strong> (
        <code className="text-sm font-mono bg-blueGray-200">brands</code>).
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
        {example}
      </SyntaxHighlighter>
      <h3 className="text-2xl font-medium mb-2 mt-10">Icons</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Get the icon you need on the official website:
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        <a
          className="font-medium text-indigo-600"
          href="https://fontawesome.com/?ref=creativetim"
          target="_blank"
          rel="nofollow"
        >
          Quick start here
        </a>
      </p>
    </>
  );
}
