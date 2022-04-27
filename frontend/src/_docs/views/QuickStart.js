/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Alert from "components/Elements/Alert.js";

const singleInstall = `npm i -E @notus-pro/react@1.0.1
npm i -E @fortawesome/fontawesome-free@5.15.3
npm i -E @popperjs/core@2.9.2
npm i -E @tailwindcss/forms@0.3.2
npm i -E chart.js@3.1.0
npm i -E classnames@2.3.1
npm i -E prop-types@15.7.2
npm i -E react@17.0.2
npm i -E react-router@5.2.0
npm i -E react-router-dom@5.2.0
npm i -E tailwindcss@2.1.1`;

export default function QuickStart() {
  return (
    <>
      <ul className="mt-8 mb-3 list-decimal pl-8">
        <li className="py-1">
          Install NodeJS <strong>LTS</strong> version from{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://nodejs.org/en/"
            rel="nofollow"
            target="_blank"
          >
            NodeJS Official Page
          </a>
        </li>
        <li className="py-1">
          Go to{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://www.creative-tim.com/"
            rel="nofollow"
            target="_blank"
          >
            Creative Tim website
          </a>{" "}
          and login into your account
        </li>
        <li className="py-1">
          Go to{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://www.creative-tim.com/product/notus-pro-react"
            rel="nofollow"
            target="_blank"
          >
            Notus PRO React
          </a>{" "}
          page and purchase the product
        </li>
        <li className="py-1">
          You will have to wait a few minutes for the purchase to go through
        </li>
        <li className="py-1">
          While you wait, you can create and start your <b>React</b> project
        </li>
        <li className="py-1">
          At Creative Tim, we've mostly used{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://create-react-app.dev/"
            rel="nofollow"
            target="_blank"
          >
            create-react-app
          </a>
          , it is quite an useful <b>React</b> boilerplate
        </li>
        <li className="py-1">
          You can also create and start a <b>NextJS</b> project, since Notus PRO
          React is built to work in NextJS as well
        </li>
        <li className="py-1">
          At Creative Tim, we've mostly used{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://nextjs.org/docs"
            rel="nofollow"
            target="_blank"
          >
            create-next-app
          </a>
          , it is quite an useful <b>NextJS</b> boilerplate
        </li>
        <li className="py-1">
          After the payment has gone through (you will know this when you
          recieve an email from us), you can now install Notus PRO React as
          follows.
          <SyntaxHighlighter
            language="jsx"
            style={shadesOfPurple}
            customStyle={{
              fontSize: "0.825em",
              padding: "14px",
              borderRadius: "4px",
            }}
          >
            {`npm i -E @notus-pro/react@1.0.1 @fortawesome/fontawesome-free@5.15.3 @popperjs/core@2.9.2 @tailwindcss/forms@0.3.2 chart.js@3.1.0 classnames@2.3.1 prop-types@15.7.2 react@17.0.2 react-router@5.2.0 react-router-dom@5.2.0 tailwindcss@2.1.1`}
          </SyntaxHighlighter>
        </li>
        <li className="py-1">
          Or, you can install them one by one:
          <SyntaxHighlighter
            language="jsx"
            style={shadesOfPurple}
            customStyle={{
              fontSize: "0.825em",
              padding: "14px",
              borderRadius: "4px",
            }}
          >
            {singleInstall}
          </SyntaxHighlighter>
        </li>
        <li className="py-1">
          Be sure to use the exact same versions in your project, otherwise,
          errors, warnings and bugs might develop.
        </li>
        <li className="py-1">
          Next, you need to add the Tailwind CSS styles:
          <ul className="list-disc pl-8">
            <li className="py-1">
              You can add our compiled styles directly with this import:
              <SyntaxHighlighter
                language="jsx"
                style={shadesOfPurple}
                customStyle={{
                  fontSize: "0.825em",
                  padding: "14px",
                  borderRadius: "4px",
                }}
              >
                {`import "@notus-pro/react/tailwind.min.css";`}
              </SyntaxHighlighter>
            </li>
            <li className="py-1">
              Or, if you wish to use a style tag inside a{" "}
              <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
                .html
              </code>{" "}
              file:
              <SyntaxHighlighter
                language="jsx"
                style={shadesOfPurple}
                customStyle={{
                  fontSize: "0.825em",
                  padding: "14px",
                  borderRadius: "4px",
                }}
              >
                {`<link rel="stylesheet" href="https://unpkg.com/@notus-pro/react@1.0.1/tailwind.min.css">`}
              </SyntaxHighlighter>
            </li>
          </ul>
        </li>
        <li className="py-1">
          You can now import components from the package like:
          <SyntaxHighlighter
            language="jsx"
            style={shadesOfPurple}
            customStyle={{
              fontSize: "0.825em",
              padding: "14px",
              borderRadius: "4px",
            }}
          >
            {`import ComponentName from "@notus-pro/react/ComponentName";`}
          </SyntaxHighlighter>
        </li>
        <li className="py-1">
          Or import it like:
          <SyntaxHighlighter
            language="jsx"
            style={shadesOfPurple}
            customStyle={{
              fontSize: "0.825em",
              padding: "14px",
              borderRadius: "4px",
            }}
          >
            {`import { ComponentName } from "@notus-pro/react";`}
          </SyntaxHighlighter>
        </li>
        <li className="py-1">
          <Alert color="red">
            NOTE: we have not used{" "}
            <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
              yarn
            </code>{" "}
            in our development, but only{" "}
            <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
              npm
            </code>
            , so, to avoid any issues provoked by{" "}
            <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
              yarn
            </code>
            , we suggest you do the same. If, however you decide to use{" "}
            <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
              yarn
            </code>
            , and at some point you have any issues, please try again (all of
            the above) using{" "}
            <code className="text-sm font-mono bg-blueGray-200 text-blueGray-800">
              npm
            </code>
            .
          </Alert>
        </li>
      </ul>
    </>
  );
}
