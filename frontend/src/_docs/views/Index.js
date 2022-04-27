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
    text: "Comming soon...",
    link: "#pablo",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
    text: "Comming soon...",
    link: "#pablo",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    text: "Comming soon...",
    link: "#pablo",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg",
    text: "React",
    link: "https://www.creative-tim.com/product/notus-pro-react",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg",
    text: "Comming soon...",
    link: "#pablo",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg",
    text: "Comming soon...",
    link: "#pablo",
  },
];

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
      <div className="md:h-screen bg-gradient-to-b from-lightBlue-500 via-indigo-600 to-purple-700 w-full text-white overflow-hidden">
        <div className="flex flex-wrap items-center h-full">
          <div className="w-full lg:w-5/12 px-4 md:px-10 lg:px-20">
            <div className="flex items-center mb-2">
              <img
                className="bg-blueGray-100 h-8 w-8 rounded-full border-2 border-solid border-blueGray-500 shadow-md"
                src={logo}
                alt="..."
              />
              <h4 className="text-3xl font-normal leading-normal mt-0 mb-0 relative text-white">
                Notus PRO React
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded bg-blueGray-800 text-blueGray-200 uppercase last:mr-0 mr-1 ml-1 absolute">
                  PRO
                </span>
              </h4>
            </div>
            <h6 className="text-xl font-normal leading-normal mt-0 mb-6 text-blueGray-200">
              Completly new product built using our past experience in web
              templates. Take the examples and components we made for you and
              start playing with them.
            </h6>
            {badges.map((prop, key) => (
              <div key={key} className="my-1 mr-1 inline-block">
                <Badge round color="light">
                  {prop}
                </Badge>
              </div>
            ))}
            <hr className="my-6 border-blueGray-400" />
            <Button
              color="dark"
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
            <div className="flex mt-6">
              {frameworks.map((prop, key) => (
                <Frameworks key={key} {...prop} />
              ))}
            </div>
          </div>
          <div className="hidden w-full h-full lg:w-7/12 lg:block">
            <img
              className="w-full animate-index-image"
              src={leftImage}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
