import React from "react";
import { Link, Switch, Route, Redirect, useLocation } from "react-router-dom";
import classnames from "classnames";

import NavbarComponents from "_docs/components/NavbarComponents2.js";
import Header from "_docs/components/HeaderVideoTitle.js";
import CodeSnippet from "_docs/components/CodeSnippet.js";
import Footer from "_docs/components/Footer.js";

// views for components route
import ComponentsView from "_docs/views/Components.js";
import routes from "_docs/routes/components/index.js";

export default function Components() {
  const { hash, pathname } = useLocation();
  React.useEffect(() => {
    if (hash && document.getElementById(hash.replace("#", ""))) {
      document.getElementById(hash.replace("#", "")).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }, [hash]);
  React.useEffect(() => {
    if (hash && !document.getElementById(hash.replace("#", ""))) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname, hash]);
  return (
    <>
      <div className="bg-white docs-components-wrapper">
        <NavbarComponents />
        <Switch>
          <Route path="/components/" exact component={ComponentsView} />
          {routes.map((prop, key) => {
            return prop.sections.map((sectionProp, sectionKey) => {
              return sectionProp.components.map(
                (componentProp, componentKey) => {
                  return (
                    <Route
                      key={key}
                      path={componentProp.link}
                      exact
                      render={() => (
                        <div className="bg-white min-h-screen">
                          <Header />
                          <div
                            className={classnames("mx-auto px-4", {
                              container:
                                sectionProp.title !== "Pages" &&
                                componentProp.link !==
                                  "/components/error/pages",
                            })}
                          >
                            <div className="flex justify-center my-8 flex-col">
                              <h2 className="text-lg font-medium text-blueGray-600 mb-2">
                                <Link
                                  to={"/components#" + prop.id}
                                  className="mr-2"
                                >
                                  {prop.title}
                                </Link>
                                <i className="fas fa-angle-right mr-2"></i>
                                <Link to={"/components#" + sectionProp.id}>
                                  {sectionProp.title}
                                </Link>
                              </h2>
                              <h1 className="text-3xl font-semibold">
                                {componentProp.title}
                              </h1>
                            </div>
                            <ul className="fixed left-auto right-0 pr-4 z-2">
                              {componentProp.components.map(
                                (exampleProp, exampleKey) => {
                                  return (
                                    <li key={exampleKey} className="">
                                      <a
                                        className="transition-all duration-300 text-xs rounded-full px-2 py-1 group hover:bg-indigo-400 font-extrabold flex flex-row items-center justify-end"
                                        href={
                                          "#" +
                                          prop.id +
                                          "-" +
                                          sectionProp.id +
                                          "-" +
                                          (exampleProp.componentName
                                            ? exampleProp.componentName.toLowerCase()
                                            : "example" + exampleKey)
                                        }
                                        onClick={(e) => {
                                          e.preventDefault();
                                          document
                                            .getElementById(
                                              prop.id +
                                                "-" +
                                                sectionProp.id +
                                                "-" +
                                                (exampleProp.componentName
                                                  ? exampleProp.componentName.toLowerCase()
                                                  : "example" + exampleKey)
                                            )
                                            .scrollIntoView();
                                        }}
                                      >
                                        <span className="text-white mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                          {exampleProp.componentName ||
                                            "Example " + (exampleKey + 1)}
                                        </span>
                                        <span className="transition-all duration-300 group-hover:bg-white bg-indigo-700 block w-2 h-2 rounded-full"></span>
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                            {componentProp.components.map(
                              (exampleProp, exampleKey) => {
                                return (
                                  <div
                                    key={exampleKey + "example"}
                                    className="mb-16"
                                  >
                                    <CodeSnippet
                                      {...exampleProp}
                                      componentName={
                                        <h2
                                          className="text-xl font-bold ct-component-name-title"
                                          id={
                                            prop.id +
                                            "-" +
                                            sectionProp.id +
                                            "-" +
                                            (exampleProp.componentName
                                              ? exampleProp.componentName.toLowerCase()
                                              : "example" + exampleKey)
                                          }
                                        >
                                          {exampleProp.componentName ||
                                            "Example " + (exampleKey + 1)}
                                        </h2>
                                      }
                                    />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}
                    />
                  );
                }
              );
            });
          })}
          <Redirect from="/components" to="/components/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
