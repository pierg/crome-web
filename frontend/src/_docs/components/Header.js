import React from "react";

import logo from "assets/img/logo.png";

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

export default function Header() {
  return (
    <>
      <div className="bg-gradient-to-b from-lightBlue-500 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto pb-20 pt-40">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 md:w-1/2">
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
            </div>
            <div className="w-full px-4 md:w-1/2">
              <Button
                color="dark"
                fullWidth
                href="https://www.creative-tim.com/product/notus-pro-react"
                target="_blank"
              >
                Get it now!
              </Button>
              <div className="h-2"></div>
              <Button
                color="light"
                fullWidth
                href="https://www.creative-tim.com/product/notus-pro-react"
                target="_blank"
              >
                Download free
              </Button>
            </div>
            <div className="w-full px-4">
              <hr className="my-6 border-blueGray-400" />
              <div className="flex mt-6 justify-center">
                {" "}
                {frameworks.map((prop, key) => (
                  <Frameworks key={key} {...prop} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
