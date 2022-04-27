import React from "react";
import { Link } from "react-router-dom";

import DropdownNavbar from "_docs/components/DropdownNavbar.js";
import DropdownHoverNavbar from "_docs/components/DropdownHoverCSSNavbar.js";

import routes from "_docs/routes/components/index.js";

export default function NavbarComponents() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full bg-blueGray-900 flex flex-wrap items-center justify-between px-2 py-3 z-9999">
        <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between max-h-screen-70 overflow-y-auto">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/components"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Notus PRO React
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded lg:shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto lg:items-center">
              <li>
                <Link
                  to="/documentation/overview"
                  className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <DropdownNavbar
                  text="Components"
                  navColor="dark"
                  items={routes.map((prop, key) => {
                    return {
                      key: key,
                      to: prop.path || "/components#" + prop.id,
                      children: prop.title,
                    };
                  })}
                />
              </li>
              <li>
                <DropdownHoverNavbar
                  text="Example Pages"
                  navColor="dark"
                  items={[
                    {
                      title: "E-Commerce",
                      items: [
                        { to: "/chat", children: "Chat" },
                        { to: "/checkout", children: "Checkout" },
                        { to: "/e-commerce", children: "E-Commerce" },
                        { to: "/invoice", children: "Invoice" },
                        { to: "/pricing", children: "Pricing" },
                        { to: "/product", children: "Product" },
                        { to: "/profile-1", children: "Profile 1" },
                        { to: "/settings-1", children: "Settings 1" },
                      ],
                    },
                    {
                      title: "Authentication",
                      items: [
                        { to: "/login-1", children: "Login 1" },
                        { to: "/login-2", children: "Login 2" },
                        { to: "/register-1", children: "Register 1" },
                        { to: "/register-2", children: "Register 2" },
                        { to: "/reset", children: "Reset" },
                      ],
                    },
                    {
                      title: "Presentation",
                      items: [
                        { to: "/landing-1", children: "Landing 1" },
                        { to: "/landing-2", children: "Landing 2" },
                        { to: "/about-us", children: "About Us" },
                        { to: "/contact-us", children: "Contact Us" },
                      ],
                    },
                    {
                      title: "Admin",
                      items: [
                        { to: "/dashboard", children: "Dashboard" },
                        { to: "/maps", children: "Maps" },
                        { to: "/settings-2", children: "Settings 2" },
                        { to: "/tables", children: "Tables" },
                      ],
                    },
                    {
                      title: "Error",
                      items: [
                        { to: "/error-404", children: "Error 404" },
                        { to: "/error-500", children: "Error 500" },
                      ],
                    },
                    {
                      title: "Blog",
                      items: [
                        { to: "/blog-post", children: "Blog Post" },
                        { to: "/blog-posts", children: "Blog Posts" },
                      ],
                    },
                  ]}
                />
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                >
                  <i className="text-blueGray-500 lg:text-white fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                >
                  <i className="text-blueGray-500 lg:text-white fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                >
                  <i className="text-blueGray-500  lg:text-white fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/product/notus-react"
                  className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold mr-2"
                >
                  Check FREE
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/product/notus-pro-react"
                  className="text-xs px-4 py-2 shadow hover:shadow-md text-blueGray-800 bg-blueGray-100 border-blueGray-100 active:bg-blueGray-300 active:border-blueGray-300 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
                >
                  Buy PRO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
