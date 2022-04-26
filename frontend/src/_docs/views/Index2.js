import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import logo from "assets/img/logo.png";
import leftImage from "assets/img/index-left.png";

import Button from "components/Elements/Button.js";

export default function Index() {
  const [angularTooltipShow, setAngularTooltipShow] = React.useState(false);
  const [jsTooltipShow, setJSTooltipShow] = React.useState(false);
  const [nextjsTooltipShow, setNextjsTooltipShow] = React.useState(false);
  const [reactTooltipShow, setReactTooltipShow] = React.useState(false);
  const [svelteTooltipShow, setSvelteTooltipShow] = React.useState(false);
  const [vueTooltipShow, setVueTooltipShow] = React.useState(false);
  const angularBtnRef = React.createRef();
  const jsBtnRef = React.createRef();
  const nextjsBtnRef = React.createRef();
  const reactBtnRef = React.createRef();
  const svelteBtnRef = React.createRef();
  const vueBtnRef = React.createRef();
  const angularTooltipRef = React.createRef();
  const jsTooltipRef = React.createRef();
  const nextjsTooltipRef = React.createRef();
  const reactTooltipRef = React.createRef();
  const svelteTooltipRef = React.createRef();
  const vueTooltipRef = React.createRef();
  const openTooltip = (btnRef, popoverRef, setPopoverShow) => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top",
    });
    setPopoverShow(true);
  };
  const closeTooltip = (setPopoverShow) => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="md:h-screen bg-gradient-to-b from-lightBlue-500 via-purple-600 to-indigo-700 w-full overflow-hidden text-center">
        <div className="flex flex-wrap items-center h-full">
          <div
            className="absolute z-1 inset-0"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.99) 34%, rgba(0,212,255,1) 46%, rgba(0,212,255,0.5) 87%)",
            }}
          ></div>
          <div className="w-full lg:w-5/12 px-4 md:px-10 lg:px-20 z-1 mx-auto">
            <div className="flex items-center mb-2 justify-center">
              <img
                className="bg-blueGray-100 h-8 w-8 rounded-full border-2 border-solid border-blueGray-500 shadow-md"
                src={logo}
                alt="..."
              />
              <h4 className="text-3xl font-normal leading-normal mt-0 mb-0 relative ">
                Notus PRO React
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded bg-blueGray-800 text-blueGray-200 uppercase last:mr-0 mr-1 ml-1 absolute">
                  PRO
                </span>
              </h4>
            </div>
            <h6 className="text-xl font-normal leading-normal mt-0 mb-6 text-blueGray-600">
              Completly new product built using our past experience in web
              templates. Take the examples and components we made for you and
              start playing with them.
            </h6>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              premium
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              UI Kit
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              admin
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              dashboard
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              presentation
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              blog
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              pricing
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
              components
            </span>
            <hr className="my-6 border-blueGray-400" />
            <button
              className="text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 text-sm px-6 py-3 shadow hover:shadow-lg rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold mr-2"
              type="button"
            >
              Get it now!
            </button>
            <Link to="/components">
              <button
                className="text-blueGray-800 bg-blueGray-200 border-blueGray-200 active:bg-blueGray-300 active:border-blueGray-300 text-sm px-6 py-3 shadow hover:shadow-lg rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold mr-2"
                type="button"
              >
                Check Components
              </button>
            </Link>
            <Button color="dark" outline>
              Download FREE
            </Button>
            <div className="flex mt-6 justify-center">
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                onMouseEnter={() =>
                  openTooltip(
                    angularBtnRef,
                    angularTooltipRef,
                    setAngularTooltipShow
                  )
                }
                onMouseLeave={() => closeTooltip(setAngularTooltipShow)}
                ref={angularBtnRef}
              />
              <div
                className={
                  (angularTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={angularTooltipRef}
              >
                <div>
                  <div className="text-white p-3">Angular</div>
                </div>
              </div>
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                onMouseEnter={() =>
                  openTooltip(jsBtnRef, jsTooltipRef, setJSTooltipShow)
                }
                onMouseLeave={() => closeTooltip(setJSTooltipShow)}
                ref={jsBtnRef}
              />
              <div
                className={
                  (jsTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={jsTooltipRef}
              >
                <div>
                  <div className="text-white p-3">JavaScript & HTML</div>
                </div>
              </div>
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                onMouseEnter={() =>
                  openTooltip(
                    nextjsBtnRef,
                    nextjsTooltipRef,
                    setNextjsTooltipShow
                  )
                }
                onMouseLeave={() => closeTooltip(setNextjsTooltipShow)}
                ref={nextjsBtnRef}
              />
              <div
                className={
                  (nextjsTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={nextjsTooltipRef}
              >
                <div>
                  <div className="text-white p-3">NextJS</div>
                </div>
              </div>
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                onMouseEnter={() =>
                  openTooltip(reactBtnRef, reactTooltipRef, setReactTooltipShow)
                }
                onMouseLeave={() => closeTooltip(setReactTooltipShow)}
                ref={reactBtnRef}
              />
              <div
                className={
                  (reactTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={reactTooltipRef}
              >
                <div>
                  <div className="text-white p-3">React</div>
                </div>
              </div>
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                onMouseEnter={() =>
                  openTooltip(
                    svelteBtnRef,
                    svelteTooltipRef,
                    setSvelteTooltipShow
                  )
                }
                onMouseLeave={() => closeTooltip(setSvelteTooltipShow)}
                ref={svelteBtnRef}
              />
              <div
                className={
                  (svelteTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={svelteTooltipRef}
              >
                <div>
                  <div className="text-white p-3">Svelte</div>
                </div>
              </div>
              <img
                alt="..."
                className="shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                onMouseEnter={() =>
                  openTooltip(vueBtnRef, vueTooltipRef, setVueTooltipShow)
                }
                onMouseLeave={() => closeTooltip(setVueTooltipShow)}
                ref={vueBtnRef}
              />
              <div
                className={
                  (vueTooltipShow ? "" : "hidden ") +
                  "bg-blueGray-800 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded"
                }
                ref={vueTooltipRef}
              >
                <div>
                  <div className="text-white p-3">Vue.js</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden w-full h-full absolute inset-0 lg:block"
            style={{
              backgroundImage: "url('" + leftImage + "')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
