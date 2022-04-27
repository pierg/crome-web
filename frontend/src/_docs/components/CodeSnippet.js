import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import prettier from "prettier";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// components

const babel = require("prettier/parser-babel");

const colors = {
  facebook: "bg-facebook-regular",
  twitter: "bg-twitter-regular",
  instagram: "bg-instagram-regular",
  github: "bg-github-regular",
  pinterest: "bg-pinterest-regular",
  youtube: "bg-youtube-regular",
  vimeo: "bg-vimeo-regular",
  slack: "bg-slack-regular",
  dribbble: "bg-dribbble-regular",
  reddit: "bg-reddit-regular",
  tumblr: "bg-tumblr-regular",
  linkedin: "bg-linkedin-regular",
  white: "bg-blueGray-200",
  transparent: "bg-blueGray-100",
  light: "bg-blueGray-300",
  dark: "bg-blueGray-900",
  blueGray: "bg-blueGray-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  teal: "bg-teal-500",
  lightBlue: "bg-lightBlue-500",
  indigo: "bg-indigo-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  "purple-indigo": "from-purple-900 to-indigo-900 bg-indigo-900 bg-indigo-900",
  "orange-red": "from-orange-900 to-red-900 bg-red-900 bg-red-900",
  "amber-orange": "from-amber-900 to-orange-900 bg-orange-900 bg-orange-900",
  "emerald-teal": "from-emerald-900 to-teal-900 bg-teal-900 bg-teal-900",
  "lightBlue-indigo":
    "from-lightBlue-900 to-indigo-900 bg-indigo-900 bg-indigo-900",
  "pink-purple": "from-pink-900 to-purple-900 bg-purple-900 bg-purple-900",
};

export default function CodeSnippet({
  component,
  preview,
  props,
  description,
  passProps,
  codeSnippetProps,
  dependencies,
  componentName,
}) {
  const [openTab, setOpenTab] = React.useState("preview");
  const [color, setColor] = React.useState(
    (codeSnippetProps && codeSnippetProps.defaultColor) || ""
  );
  const [copied, setCopied] = React.useState("Copy");
  const Component = component;
  return (
    <>
      <div className="flex flex-wrap flex-row items-center justify-between my-4">
        <div>
          {componentName}
          {description ? (
            <p className="mt-0 mb-5 leading-relaxed text-blueGray-500">
              {description}
            </p>
          ) : null}
          {dependencies ? (
            <div className="">
              <div className="flex flex-wrap items-center mb-4">
                <p className="text-lg leading-relaxed text-blueGray-500 mr-2 my-2">
                  Dependencies:{" "}
                </p>
                {dependencies.map((prop, key) => (
                  <React.Fragment key={key}>
                    <Link
                      to={prop.link}
                      className="text-lightBlue-500 font-medium my-2"
                    >
                      {prop.name}
                    </Link>
                    {key === dependencies.length - 1 ? null : (
                      <span className="mr-2">,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="inline-flex flex-wrap flex-row items-center">
          <div className="bg-blueGray-100 border border-blueGray-100 rounded-lg">
            <button
              onClick={() => setOpenTab("preview")}
              className={
                "inline-flex items-center justify-center outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-xs py-2 px-3 text-center rounded-lg border " +
                (openTab === "preview"
                  ? "bg-white text-blueGray-600 border-blueGray-400"
                  : "text-blueGray-500 border-transparent")
              }
            >
              <i
                className={
                  "fas fa-eye mr-2 " +
                  (openTab === "preview" ? "text-lightBlue-600" : "")
                }
              ></i>
              Preview
            </button>
            <button
              onClick={() => setOpenTab("code")}
              className={
                "inline-flex items-center justify-center outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-xs py-2 px-3 text-center rounded-lg border " +
                (openTab === "code"
                  ? "bg-white text-blueGray-600 border-blueGray-400"
                  : "text-blueGray-500 border-transparent")
              }
            >
              <i
                className={
                  "fas fa-code mr-2 " +
                  (openTab === "code" ? "text-lightBlue-600" : "")
                }
              ></i>
              Code
            </button>
            <button
              onClick={() => setOpenTab("props")}
              className={
                "inline-flex items-center justify-center outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-xs py-2 px-3 text-center rounded-lg border " +
                (openTab === "props"
                  ? "bg-white text-blueGray-600 border-blueGray-400"
                  : "text-blueGray-500 border-transparent")
              }
            >
              <i
                className={
                  "fas fa-sitemap mr-2 " +
                  (openTab === "props" ? "text-lightBlue-600" : "")
                }
              ></i>
              Props
            </button>
          </div>
          <div className="relative">
            <span
              className={
                "-top-8 -left-4 absolute text-white rounded-lg py-1 px-2 bg-blueGray-800 transition-all duration-200 ease-in-out transform scale-0 opacity-0 " +
                (copied === "Copied" ? "opacity-100 scale-100" : "")
              }
            >
              Copied
            </span>
            <button
              className="group inline-flex items-center justify-center outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-xs py-2 px-3 text-center rounded-lg bg-white text-blueGray-600 focus:text-lightBlue-600"
              onClick={() => {
                setCopied("Copied");
                setTimeout(function () {
                  setCopied("Copy");
                }, 1000);
                navigator.clipboard.writeText(
                  prettier.format(
                    codeSnippetProps && codeSnippetProps.cardchartjs
                      ? preview.replace('"<<props-here>>"', color)
                      : preview.replace(
                          '"<<props-here>>"',
                          JSON.stringify({
                            ...passProps,
                            [codeSnippetProps[
                              "colorSwitchePropToChange"
                            ]]: color,
                          })
                        ),
                    {
                      semi: false,
                      parser: "babel",
                      plugins: [babel],
                    }
                  )
                );
              }}
            >
              <i className="far fa-clone transition-all duration-200 ease-in-out transform group-focus:rotate-6"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Card Start */}
      <div className="border border-solid border-blueGray-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
        {/* CardHeader Stop */}
        {/* Color Switcher Start */}
        {codeSnippetProps && codeSnippetProps.defaultColor && (
          <div
            id="colors"
            className="flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto z-9998"
            style={{ width: "100%", bottom: "-14px" }}
          >
            <div className="flex flew-wrap justify-center items-center bg-white px-2">
              {codeSnippetProps.colorsSwitcher.map((prop, key) => {
                return (
                  <span
                    key={key}
                    className={
                      "cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 border border-solid border-blueGray-100 " +
                      colors[prop] +
                      (color === prop ? " shadow-md" : " bg-opacity-25")
                    }
                    onClick={() => {
                      setColor(prop);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
        {/* Color Switcher Stop */}
        {/* CardBody Start */}
        <div className="px-4 py-5 flex-auto ct-docs-frame">
          <div
            className={
              "relative " +
              (openTab === "preview"
                ? "flex flex-wrap justify-center " +
                  ((codeSnippetProps && codeSnippetProps.previewClasses) || "")
                : "hidden")
            }
            style={{ ...codeSnippetProps.previewStyles }}
          >
            <div
              className={
                (codeSnippetProps && codeSnippetProps.wrapperClasses) ||
                "w-full"
              }
            >
              {color !== "" &&
                ((codeSnippetProps && codeSnippetProps.childrenIsColor && (
                  <Component {...passProps} color={color} children={color} />
                )) ||
                  (codeSnippetProps && codeSnippetProps.titleIsColor && (
                    <Component
                      {...passProps}
                      {...{
                        [codeSnippetProps["colorSwitchePropToChange"]]: color,
                      }}
                      title={color}
                    />
                  )) || (
                    <Component
                      {...passProps}
                      {...{
                        [codeSnippetProps["colorSwitchePropToChange"]]: color,
                      }}
                    />
                  ))}
              {color === "" && <Component {...passProps} />}
            </div>
          </div>
          <div
            className={"relative " + (openTab === "code" ? "block" : "hidden")}
          >
            <div className="docs-code-preview">
              <SyntaxHighlighter
                language="jsx"
                style={shadesOfPurple}
                customStyle={{
                  fontSize: "0.825em",
                  padding: "14px",
                  borderRadius: "4px",
                }}
              >
                {prettier.format(
                  codeSnippetProps && codeSnippetProps.cardchartjs
                    ? preview.replace("'<<props-here>>'", color)
                    : preview.replace(
                        '"<<props-here>>"',
                        JSON.stringify({
                          ...passProps,
                          [codeSnippetProps["colorSwitchePropToChange"]]: color,
                        })
                      ),
                  {
                    semi: false,
                    parser: "babel",
                    plugins: [babel],
                  }
                )}
              </SyntaxHighlighter>
            </div>
          </div>
          <div
            className={"relative " + (openTab === "props" ? "block" : "hidden")}
          >
            <SyntaxHighlighter
              language="jsx"
              style={shadesOfPurple}
              customStyle={{
                fontSize: "0.825em",
                padding: "14px",
                borderRadius: "4px",
              }}
            >
              {props}
            </SyntaxHighlighter>
          </div>
        </div>
        {/* CardBody Stop */}
      </div>
      {/* Card Stop */}
    </>
  );
}
CodeSnippet.defaultProps = {
  passProps: {},
  codeSnippetProps: {
    previewStyles: {},
  },
};
CodeSnippet.propTypes = {
  // component: PropTypes.node.isRequired,
  preview: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  passProps: PropTypes.object,
  codeSnippetProps: PropTypes.shape({
    wrapperClasses: PropTypes.string,
    previewClasses: PropTypes.string,
    previewStyles: PropTypes.object,
  }),
  dependencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
