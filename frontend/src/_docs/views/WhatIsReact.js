/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const example = `import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);`;

export default function WhatIsReact() {
  return (
    <>
      <h3 className="text-2xl font-medium mb-2 mt-10">Declarative</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Declarative views make your code more predictable and easier to debug.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">Component-Based</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Since component logic is written in JavaScript instead of templates, you
        can easily pass rich data through your app and keep state out of the
        DOM.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">
        Learn Once, Write Anywhere
      </h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">A Simple Component</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        React components implement a{" "}
        <code className="text-sm font-mono bg-blueGray-200">render()</code>{" "}
        method that takes input data and returns what to display. This example
        uses an XML-like syntax called JSX. Input data that is passed into the
        component can be accessed by{" "}
        <code className="text-sm font-mono bg-blueGray-200">render()</code> via{" "}
        <code className="text-sm font-mono bg-blueGray-200">this.props</code>.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Hello Taylor
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
      <h3 className="text-2xl font-medium mb-2 mt-10">Tutorials</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Check out more on the official{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://reactjs.org/?ref=creativetim"
          target="_blank"
        >
          React website
        </a>
        .
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Also, you can check out the official{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://reactjs.org/tutorial/tutorial.html?ref=creativetim"
          target="_blank"
        >
          React Tutorials
        </a>
        .
      </p>
    </>
  );
}
