/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <h4 className="text-xl leading-normal font-bold">
                Let's keep in touch!
              </h4>
              <h5 className="leading-normal mt-1 mb-2 text-blueGray-500">
                Find us on any of these platforms, we respond within 1-2
                business days.
              </h5>
              <div className="mt-6">
                <a href="https://www.twitter.com/creativetim" target="_blank">
                  <i className="fab fa-twitter  bg-white text-twitter-regular shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
                <a href="https://www.facebook.com/creativetim" target="_blank">
                  <i className="fab fa-facebook-square bg-white text-facebook-regular shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
                <a href="https://www.dribbble.com/creativetim" target="_blank">
                  <i className="fab fa-dribbble bg-white text-dribbble-regular shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
                <a
                  href="https://www.github.com/creativetimofficial"
                  target="_blank"
                >
                  <i className="fab fa-github bg-white text-github-regular shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span className="block uppercase text-xs font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://creative-tim.com/blog"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial/tailwind-starter-kit"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free"
                        target="_blank"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span className="block uppercase text-xs font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://www.creative-tim.com/license"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://creative-tim.com/terms"
                        target="_blank"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://creative-tim.com/privacy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us"
                        target="_blank"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-blueGray-500 hover:text-blueGray-600 font-semibold"
                  target="_blank"
                >
                  Creative Tim
                </a>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
