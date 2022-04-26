import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import prettier from "prettier";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// components
import Badge from "components/Elements/Badge.js";

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
  "lightBlue-indigo": "from-lightBlue-900 to-indigo-900 bg-indigo-900 bg-indigo-900",
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
  const Component = component;
  return (
    <>
      {/* Card Start */}
      <div className="border border-solid border-blueGray-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
        {componentName}
        <p className="mt-0 mb-5 leading-relaxed text-blueGray-500 px-4">
          {description}
        </p>
        <div className="md:pr-5 px-3">
          {dependencies ? (
            <div className="flex flex-wrap items-center mb-4">
              <p className="text-lg leading-relaxed text-blueGray-500 mr-2 my-2">
                Dependencies:{" "}
              </p>
              {dependencies.map((prop, key) => (
                <Link
                  key={key}
                  to={prop.link}
                  className="text-lightBlue-500 font-medium mr-1 my-2"
                >
                  <Badge round color="blueGray">
                    {prop.name}
                  </Badge>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        {/* CardHeader Start */}
        <div className="border-b border-blueGray-200">
          <button
            onClick={() => setOpenTab("preview")}
            className={
              "outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-white text-xs py-2 px-3 text-center border-r border-t rounded-tr " +
              (openTab === "preview"
                ? "text-blueGray-600 border-blueGray-200"
                : "text-blueGray-300 border-transparent")
            }
          >
            Preview
          </button>
          {process.env.REACT_APP_HIDDEN ? (
            <a
              href="http://creative-tim.com/product/notus-pro-react"
              className="outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-white text-xs py-2 px-3 text-center border-r border-l border-t rounded-t text-blueGray-300 border-transparent"
            >
              Get Code
            </a>
          ) : (
            <>
              <button
                onClick={() => setOpenTab("code")}
                className={
                  "outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-white text-xs py-2 px-3 text-center border-r border-l border-t rounded-t " +
                  (openTab === "code"
                    ? "text-blueGray-600 border-blueGray-200"
                    : "text-blueGray-300 border-transparent")
                }
              >
                Code
              </button>
              <button
                onClick={() => setOpenTab("props")}
                className={
                  "outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase font-bold text-white text-xs py-2 px-3 text-center  border-r border-l border-t rounded-t " +
                  (openTab === "props"
                    ? "text-blueGray-600 border-blueGray-200"
                    : "text-blueGray-300 border-transparent")
                }
              >
                Props
              </button>
            </>
          )}
        </div>
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
                (codeSnippetProps && codeSnippetProps.wrapperClasses) || "w-full"
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
          {process.env.REACT_APP_HIDDEN ? null : (
            <>
              <div className={"relative " + (openTab === "code" ? "block" : "hidden")}>
                <div className="docs-code-preview">
                  <button
                    className="text-blueGray-400 font-normal px-2 rounded outline-none group focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1 focus:text-blueGray-200"
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        prettier.format(
                          codeSnippetProps && codeSnippetProps.cardchartjs
                            ? preview.replace('"<<props-here>>"', color)
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
                        )
                      )
                    }
                  >
                    <span className="group-focus:block hidden">Copied</span>
                    <span className="group-focus:hidden block">Copy</span>
                  </button>
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
              <div className={"relative " + (openTab === "props" ? "block" : "hidden")}>
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
            </>
          )}
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
