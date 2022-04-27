import React from "react";

import Frameworks from "_docs/components/Frameworks1.js";
import Button from "components/Elements/Button.js";

const frameworks = [
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg",
    text: "Comming soon...",
    link: "#pablo",
    color: "angular",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png",
    text: "Comming soon...",
    link: "#pablo",
    color: "javascript",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
    text: "Comming soon...",
    link: "#pablo",
    color: "nextjs",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg",
    text: "React",
    link: "https://www.creative-tim.com/product/notus-pro-react",
    color: "react",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg",
    text: "Comming soon...",
    link: "#pablo",
    color: "svelte",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg",
    text: "Comming soon...",
    link: "#pablo",
    color: "vuejs",
  },
];

export default function Index() {
  return (
    <>
      <div className="lg:py-0 lg:h-screen py-16 w-full overflow-hidden">
        <div className="flex flex-wrap items-center h-full">
          <div className="w-full lg:w-6/12 px-4 md:px-10 lg:px-20">
            <div className="flex flex-col justify-start mb-2">
              <h1 className="text-6xl font-bold leading-normal mt-0 mb-0 relative">
                Notus PRO React
              </h1>
              <p className="text-4xl font-bold text-pink-500">
                UI Kit and Admin for Tailwind CSS.
              </p>
            </div>
            <p className="text-xl font-normal leading-normal mt-0 mb-6 text-blueGray-600">
              Completly new product built using our past experience in web
              templates. Take the examples and components we made for you and
              start playing with them.
            </p>
            <Button
              color="dark"
              size="sm"
              href="https://www.creative-tim.com/product/notus-pro-react"
              target="_blank"
            >
              Get it now!
            </Button>
            <Button
              color="light"
              size="sm"
              href="https://www.creative-tim.com/product/notus-pro-react"
              target="_blank"
            >
              Download free
            </Button>
            <div className="flex flex-wrap mt-6">
              {frameworks.map((prop, key) => (
                <Frameworks key={key} {...prop} />
              ))}
            </div>
          </div>
          <div className="hidden w-full h-full lg:w-6/12 lg:block"></div>
        </div>
      </div>
    </>
  );
}
