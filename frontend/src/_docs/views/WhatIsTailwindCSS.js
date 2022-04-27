/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const example = `import React from "react";

class Example extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-500 uppercase font-bold text-xs">
                    Traffic
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-800">
                    350,897
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                    <i className="far fa-chart-bar"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">
                  Since last month
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
`;

export default function WhatIsTailwindCSS() {
  return (
    <>
      <h3 className="text-2xl font-medium mb-2 mt-10">Intro</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Tailwind CSS is a highly customizable, low-level CSS framework that
        gives you all of the building blocks you need to build bespoke designs
        without any annoying opinionated styles you have to fight to override.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">
        Responsive to the core
      </h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Every Tailwind utility also comes with responsive variants, making it
        extremely easy to build responsive interfaces without resorting to
        custom CSS.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Tailwind uses an intuitive {`{screen}`}: prefix that makes it easy to
        notice responsive classes in your markup while keeping the original
        class name recognizable and intact.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">Component-friendly</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        While you can do a lot with just utility classes, as a project grows it
        can be useful to codify common patterns into higher level abstractions.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Tailwind provides tools for extracting component classes from repeated
        utility patterns, making it easy to update multiple instances of a
        component from one place.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">
        Designed to be customized
      </h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        If it makes sense to be customizable, Tailwind lets you customize it.
        This includes colors, border sizes, font weights, spacing utilities,
        breakpoints, shadows, and tons more.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Tailwind is written in PostCSS and configured in JavaScript, which means
        you have the full power of a real programming language at your
        fingertips.
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Tailwind is more than a CSS framework, it’s an engine for creating
        design systems.
      </p>
      <h3 className="text-2xl font-medium mb-2 mt-10">
        A simple Tailwind CSS Component
      </h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Here is a small stats card sample code:
      </p>
      <div className="flex flex-wrap my-4">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-500 uppercase font-bold text-xs">
                    Traffic
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-800">
                    350,897
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                    <i className="far fa-chart-bar"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-500 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
          href="https://tailwindcss.com/?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          Tailwind CSS website
        </a>
        .
      </p>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Also, you can check out the official{" "}
        <a
          className="font-medium text-indigo-600"
          href="https://tailwindcss.com/docs/installation?ref=creativetim"
          rel="nofollow"
          target="_blank"
        >
          Tailwind CSS Tutorials
        </a>
        .
      </p>
    </>
  );
}
