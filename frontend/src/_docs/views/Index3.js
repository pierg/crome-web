import React from "react";
import { Link } from "react-router-dom";

// import logo from "assets/img/logo.png";
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
  const [openImage, setOpenImage] = React.useState(false);
  return (
    <>
      {openImage && (
        <div className="absolute w-full h-full p-10 z-9999">
          <div className="w-full h-full shadow rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform scale-100 hover:scale-95 group">
            <div className="top-0 left-0 w-full h-full absolute bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-75 z-1 flex items-center justify-center"></div>
            <div className="top-0 left-0 w-full h-full absolute bg-transparent opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 z-2 flex items-center justify-center">
              <Button color="dark">Check all components</Button>
              <Button color="dark">Close player</Button>
            </div>
            <div
              className="w-full-500 h-full-500 bg-20-full-auto bg-left-top animate-index-image"
              style={{
                backgroundImage: "url(" + leftImage + ")",
              }}
            ></div>
          </div>
        </div>
      )}
      <div className="md:h-screen w-full text-blueGray-800 overflow-hidden">
        <div className="relative w-full h-screen-50 flex flex-col items-center justify-center">
          <div className="absolute top-0 w-full h-full">
            <span className="absolute bg-lightBlue-600 opacity-90 w-32 h-32 rounded-full -left-1/25 bottom-auto"></span>
            <span className="absolute bg-lightBlue-600 opacity-90 w-32 h-32 rounded-full right-1/25 top-10"></span>
            <span className="absolute bg-lightBlue-600 opacity-70 w-32 h-32 rounded-full top-280-px right-1/20"></span>
            <span className="absolute bg-lightBlue-600 opacity-85 w-32 h-32 rounded-full top-320-px right-7/100"></span>
            <span className="absolute bg-lightBlue-600 opacity-75 w-32 h-32 rounded-full top-19/50 left-1/100 right-auto"></span>
            <span className="absolute bg-lightBlue-600 opacity-65 w-48 h-48 rounded-full top-11/25 left-1/10 right-auto"></span>
            <span className="absolute bg-lightBlue-600 opacity-60 w-32 h-32 rounded-full bottom-1/2 right-9/25"></span>
            <span className="absolute bg-lightBlue-600 opacity-90 w-32 h-32 rounded-full botom-70-px right-1/50"></span>
          </div>
          <div className="w-full lg:w-8/12 text-center">
            <h4 className="text-6xl font-extrabold font-sans leading-normal mt-0 mb-0 relative text-lightBlue-700">
              Notus PRO React
            </h4>
          </div>
        </div>
        <div className="relative w-full h-screen-50 flex items-center justify-center bg-gradient-to-r from-lightBlue-800 to-lightBlue-900 bg-lightBlue-900 text-white">
          <div className="absolute w-32 h-32 bg-white -top-64-px rounded-full flex items-center justify-center">
            <div
              className="w-24 h-24 bg-gradient-to-r from-lightBlue-800 to-lightBlue-900 bg-lightBlue-900 rounded-full shadow-lg text-white flex items-center justify-center cursor-pointer"
              onClick={() => setOpenImage(true)}
            >
              <i className="fas fa-play text-4xl"></i>
            </div>
          </div>
          <div className="w-full lg:w-6/12 rounded p-10">
            <h6 className="text-xl font-normal leading-normal mt-0 mb-6">
              Completly new product built using our past experience in web
              templates. Take the examples and components we made for you and
              start playing with them.
            </h6>
            <div>
              {badges.map((prop, key) => (
                <div key={key} className="my-1 mr-1 inline-block">
                  <Badge round color="dark">
                    {prop}
                  </Badge>
                </div>
              ))}
            </div>
            <hr className="my-6 border-blueGray-400" />
            <div>
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
                href="https://www.creative-tim.com/product/notus-react"
                target="_blank"
              >
                Download free
              </Button>
            </div>
            <div className="flex mt-6">
              {frameworks.map((prop, key) => (
                <Frameworks key={key} {...prop} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
