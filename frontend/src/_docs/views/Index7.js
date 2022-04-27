import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/img/logo.png";
import leftImage from "assets/img/index-left.png";

import Frameworks from "_docs/components/Frameworks.js";
import Badge from "components/Elements/Badge.js";
import Button from "components/Elements/Button.js";

const frameworks = [
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg",
    text: "Angular",
    link: "#pablo",
    color: "hover:bg-red-700",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
    text: "JavaScript",
    link: "#pablo",
    color: "hover:bg-amber-500",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    text: "NextJS",
    link: "#pablo",
    color: "hover:bg-blueGray-800",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg",
    text: "React",
    link: "https://www.creative-tim.com/product/notus-pro-react",
    color: "hover:bg-lightBlue-500",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg",
    text: "Svelte",
    link: "#pablo",
    color: "hover:bg-red-600",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg",
    text: "VueJS",
    link: "#pablo",
    color: "hover:bg-emerald-500",
  },
];

const colors = {
  Angular: "red",
  JavaScript: "amber",
  NextJS: "dark",
  React: "lightBlue",
  Svelte: "red",
  VueJS: "emerald",
};

const badges = [
  "premium",
  "ui kit",
  "admin",
  "dashboard",
  "presentation",
  "e-commerce",
  "blog",
  "pricing",
  "components",
];

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 md:h-screen md:w-5/12 md:px-10 lg:px-20 bg-gradient-to-b from-blueGray-800 to-blueGray-900 bg-blueGray-800 flex items-center">
          <div className="w-full">
            <div className="flex flex-col justify-start mb-2">
              <h1 className="text-6xl font-bold leading-normal mt-0 mb-0 relative text-white">
                Notus PRO React
              </h1>
              <p className="text-4xl font-bold text-pink-400">
                UI Kit and Admin for Tailwind CSS.
              </p>
            </div>
            <p className="text-xl font-normal leading-normal mt-0 mb-6 text-blueGray-100">
              Completly new product built using our past experience in web
              templates. Take the examples and components we made for you and
              start playing with them.
            </p>
            <Button
              color="white"
              href="https://www.creative-tim.com/product/notus-pro-react"
              target="_blank"
            >
              Get it now!
            </Button>

            <Link to="/components" className="mr-2">
              <Button color="light">Check Components</Button>
            </Link>
            <Button
              color="light"
              outline
              href="https://www.creative-tim.com/product/notus-pro-react"
              target="_blank"
            >
              Download free
            </Button>
          </div>
        </div>
        <div className="w-full h-full md:w-7/12 md:block md:h-screen flex items-center">
          <div className="flex flex-wrap h-full">
            {frameworks.map((prop, key) => (
              <div
                className={
                  prop.color +
                  " w-full md:w-1/3 p-4 flex items-center justify-center"
                }
              >
                <div class={"text-center p-8"}>
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                    src={prop.image}
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    {prop.text} {prop.link === "#pablo" && " - soon"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
