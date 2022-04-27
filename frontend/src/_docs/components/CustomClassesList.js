import React from "react";
import classnames from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function CustomClassesList({ title, items, content }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [collapseStyle, setCollapseStyle] = React.useState(undefined);
  const [animation, setAnimation] = React.useState(false);
  const collapseRef = React.useRef(null);
  const openAnimation = () => {
    if (!collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(0);
    }
    setCollapseOpen(true);
    setTimeout(function () {
      setCollapseStyle(collapseRef.current.scrollHeight);
    }, 10);
    setTimeout(function () {
      setAnimation(false);
    }, 310);
  };
  const closeAnimation = () => {
    let timeOutTime = 0;
    if (collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(collapseRef.current.scrollHeight);
      timeOutTime = 10;
    }
    setTimeout(function () {
      setCollapseStyle(0);
    }, timeOutTime);
    setTimeout(function () {
      setAnimation(false);
      setCollapseOpen(false);
    }, 310);
  };
  const startAnitmation = (e) => {
    e.preventDefault();
    if (!animation) {
      setAnimation(true);
      setRotate(!rotate);
      if (collapseOpen) {
        closeAnimation();
      } else {
        openAnimation();
      }
    }
  };
  return (
    <>
      <div className="overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full mb-5 border-b border-blueGray-200">
        <div className="bg-transparent first:rounded-t px-4 py-3">
          <a href="#openCollapse" onClick={startAnitmation}>
            <h3 className="text-pink-500 hover:text-pink-700 mb-0 font-semibold duration-300 transition-all ease-in-out">
              {title}
              <i
                className={classnames(
                  "text-sm mr-2 float-right fas fa-chevron-down duration-300 transition-all ease-in-out transform",
                  { "rotate-180": rotate }
                )}
              ></i>
            </h3>
          </a>
        </div>
        <div
          className={classnames("duration-300 transition-all ease-in-out", {
            block: collapseOpen,
            hidden: !collapseOpen,
          })}
          style={{
            height: collapseStyle,
          }}
          ref={collapseRef}
        >
          <div className="text-blueGray-500 px-4 py-5 flex-auto leading-relaxed">
            {content}
            {items && (
              <ul className="mt-8 mb-3 list-disc pl-8">
                {items.map((prop, key) => (
                  <li className="py-1" key={key}>
                    <code className="text-pink-500">{prop.class}</code> with the
                    following style properties
                    <SyntaxHighlighter
                      language="jsx"
                      style={shadesOfPurple}
                      customStyle={{
                        fontSize: "0.825em",
                        padding: "14px",
                        borderRadius: "4px",
                      }}
                    >
                      {prop.properties}
                    </SyntaxHighlighter>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
