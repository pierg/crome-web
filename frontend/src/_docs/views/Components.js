import React from "react";
import { Link } from "react-router-dom";

import Header9 from "_docs/components/Header9Presentation.js";

import Hero2Presentation from "_docs/components/Hero2Presentation.js";
import Pricing4Presentation from "_docs/components/Pricing4Presentation.js";

import header9 from "_texts/e-commerce/headers/header9presentation.js";

import hero2presentation from "_texts/presentation/heroes/hero2presentation.js";
import pricing4presentation from "_texts/misc/pricing/pricing4presentation.js";
import componnetsArrayJson from "_docs/routes/components/index.js";

export default function Components() {
  return (
    <>
      <Header9 {...header9} />

      <Hero2Presentation {...hero2presentation} />

      <div className="relative bg-blueGray-50">
        <div className="container mx-auto px-4 pt-20">
          {componnetsArrayJson.map((prop, key) => {
            return (
              <section key={key}>
                <h2
                  className="px-4 text-3xl font-bold leading-tight mt-8 mb-2"
                  id={prop.id}
                >
                  {prop.title}
                </h2>
                <p className="px-4 w-full lg:w-7/12 text-lg text-blueGray-500 leading-relaxed mt-2 mb-4">
                  {prop.description}
                </p>
                {prop.sections.map((sectionProp, sectionKey) => {
                  return (
                    <div key={sectionKey}>
                      <hr className="my-6 border-blueGray-200" />
                      <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/4">
                          <h2
                            id={sectionProp.id}
                            className="text-lg font-normal text-blueGray-600 mb-2 sticky top-0"
                          >
                            <span className="mr-2 opacity-75">
                              {prop.title}
                            </span>
                            <i className="fas fa-angle-right mr-2 opacity-75"></i>
                            <span className="font-semibold">
                              {sectionProp.title}
                            </span>
                          </h2>
                        </div>
                        <div className="w-full px-4 md:w-3/4">
                          <div className="flex flex-wrap">
                            {sectionProp.components.map(
                              (componentProp, componentKey) => {
                                return (
                                  <div
                                    className="w-full px-4 md:w-1/4"
                                    key={componentKey}
                                  >
                                    <Link to={componentProp.link}>
                                      <img
                                        className="w-full rounded-lg shadow-md mb-3 transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
                                        src={componentProp.image}
                                        alt="..."
                                      />
                                      <h2 className="ml-2 text-base font-medium leading-normal mt-0 mb-0 text-blueGray-700">
                                        {componentProp.title}
                                      </h2>
                                      <p className=" ml-2 text-base font-normal leading-tight mt-0 mb-8 text-blueGray-500">
                                        {componentProp.components.length}
                                        {parseInt(
                                          componentProp.components.length
                                        ) === 1
                                          ? " component/example"
                                          : " components/examples"}
                                      </p>
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </div>

      <div className="bg-blueGray-50">
        <div className="container mx-auto px-4 pb-32 pt-32">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Notus PRO React comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                src={require("assets/img/docs-presentation.jpg").default}
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Pricing4Presentation {...pricing4presentation} />
    </>
  );
}
