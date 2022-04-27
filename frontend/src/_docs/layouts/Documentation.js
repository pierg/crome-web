/* eslint-disable react/jsx-no-target-blank*/
import React from "react";
import { Link, Switch, Route, Redirect, useLocation } from "react-router-dom";
import classnames from "classnames";
import CodeSnippet from "_docs/components/CodeSnippet.js";

import NavbarComponents from "_docs/components/NavbarComponents2.js";
import Footer from "_docs/components/Footer.js";

import routes from "_docs/routes/documentation/index.js";
import componentsRoutes from "_docs/routes/components/index.js";

export default function Documentation() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  return (
    <>
      <div className="bg-white">
        <NavbarComponents />
        <div className="min-h-screen border-b-2 border-blueGray-100">
          <div className="flex flex-wrap">
            <div className="px-4 md:w-4/12 xl:w-2/12 max-w-md pt-20 bg-blueGray-50 border-r-2 border-blueGray-100 min-h-screen overflow-auto">
              <a
                className="flex items-center mt-2"
                href="https://www.creative-tim.com/"
                target="_blank"
              >
                <img
                  src={require("assets/img/robot-logo.png").default}
                  className="max-w-40-px mr-2"
                  alt="..."
                />
                <span className="font-semibold">Creative Tim</span>
              </a>
              <hr className="my-6 border-t-2 border-blueGray-100"></hr>
              <ul className="list-none pr-4">
                <li className="py-1 px-2 font-semibold text-base text-blueGray-800">
                  Getting Started
                </li>
                {routes.map((prop, key) => (
                  <li
                    key={key}
                    className={
                      "py-1 px-2 font-medium text-sm " +
                      (location.pathname === "/documentation" + prop.route
                        ? "text-blueGray-800"
                        : "text-blueGray-500")
                    }
                  >
                    <Link to={"/documentation" + prop.route}>{prop.name}</Link>
                  </li>
                ))}
                {componentsRoutes.map((prop, key) => {
                  return (
                    <React.Fragment key={key}>
                      <li className="mt-2 py-1 px-2 font-semibold text-base text-blueGray-800">
                        {prop.title}
                      </li>
                      {prop.sections.map((sectionsProp, sectionsKey) => {
                        return sectionsProp.components.map(
                          (componentsProp, componentsKey) => {
                            return (
                              <li
                                key={componentsKey}
                                className={
                                  "py-1 px-2 font-medium text-sm " +
                                  (location.pathname ===
                                  "/documentation" + componentsProp.link
                                    ? "text-blueGray-800"
                                    : "text-blueGray-500")
                                }
                              >
                                <Link
                                  to={"/documentation" + componentsProp.link}
                                >
                                  {componentsProp.title}
                                </Link>
                              </li>
                            );
                          }
                        );
                      })}
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            <div className="px-4 w-full md:w-9/12 xl:w-9/12 py-24 md:pl-16">
              <Switch>
                {routes.map((prop, key) => (
                  <Route
                    key={key}
                    path={"/documentation" + prop.route}
                    exact
                    render={() => (
                      <>
                        <h2 className="text-3xl font-medium mb-2">
                          {prop.name}
                        </h2>
                        <p className="text-xl leading-extra-relaxed">
                          {prop.description}
                        </p>
                        <hr className="my-10 border-t-2 border-blueGray-100"></hr>
                        <prop.component />
                      </>
                    )}
                  />
                ))}
                {componentsRoutes.map((prop, key) => {
                  return prop.sections.map((sectionProp, sectionKey) => {
                    return sectionProp.components.map(
                      (componentProp, componentKey) => {
                        return (
                          <Route
                            key={key}
                            path={"/documentation" + componentProp.link}
                            exact
                            render={() => (
                              <>
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
                                      {prop.title}
                                      <i className="fas fa-angle-right mx-2"></i>
                                      {sectionProp.title}
                                    </h2>
                                    <h1 className="text-3xl font-semibold">
                                      {componentProp.title}
                                    </h1>
                                  </div>
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
                              </>
                            )}
                          />
                        );
                      }
                    );
                  });
                })}
                <Redirect from="/documentation" to="/documentation/overview" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
