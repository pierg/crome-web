/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import image from "assets/img/overview.svg";

export default function Overview() {
  return (
    <>
      <div className="text-center mb-5">
        <img
          alt="..."
          src={image}
          className="shadow rounded-2xl max-w-full h-auto block align-middle"
        />
      </div>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        We at Creative Tim have always wanted to deliver great tools to all the
        web developers. We want to see better websites and web apps on the
        internet.
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="px-4 w-full md:w-1/3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white inline-flex w-12 h-12 justify-center items-center mb-4 rounded-full">
            <i className="fab fa-html5"></i>
          </div>
          <h6 className="text-base font-bold mb-2 text-left">
            Developer first
          </h6>
          <p className="leading-extra-relaxed font-light text-sm">
            Notus PRO React is a "Developer First" product, with a lot of
            variables for colors, fonts, sizes and other elements.
          </p>
        </div>
        <div className="px-4 w-full md:w-1/3">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white inline-flex w-12 h-12 justify-center items-center mb-4 rounded-full">
            <i className="fas fa-chart-line"></i>
          </div>
          <h6 className="text-base font-bold mb-2 text-left">
            High quality before everything
          </h6>
          <p className="leading-extra-relaxed font-light text-sm">
            We are following the latest code standards provided by the guys from
            Tailwind CSS, so you will love working with this web app.
          </p>
        </div>
        <div className="px-4 w-full md:w-1/3">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white inline-flex w-12 h-12 justify-center items-center mb-4 rounded-full">
            <i className="fas fa-chart-line"></i>
          </div>
          <h6 className="text-base font-bold mb-2 text-left">
            Community helpers
          </h6>
          <p className="leading-extra-relaxed font-light text-sm">
            Since all our products are built on top of Open Source also{" "}
            <a
              className="text-indigo-600"
              href="https://www.creative-tim.com/product/notus-react?ref=npr-overview"
              target="_blank"
            >
              Notus React
            </a>{" "}
            is released under{" "}
            <a
              className="text-indigo-600"
              href="https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=creativetim"
              target="_blank"
            >
              MIT License
            </a>
            .
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-medium mb-2 mt-10">Resources and credits</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        This product is fully coded and built on top of Open Source, more
        details here:
      </p>
      <ul className="mt-8 mb-3 list-disc pl-8">
        <li className="py-1">
          <a
            className="font-semibold text-indigo-600"
            href="https://reactjs.org/?ref=creativetim"
            target="_blank"
          >
            ReactJS
          </a>{" "}
          - A JavaScript library for building user interfaces
        </li>
        <li className="py-1">
          <a
            className="font-semibold text-indigo-600"
            href="https://tailwindcss.com/?ref=creativetim"
            target="_blank"
          >
            Tailwind CSS
          </a>{" "}
          - A utility-first CSS framework for rapidly building custom designs.
        </li>
        <li className="py-1">
          <a
            className="font-semibold text-indigo-600"
            href="https://fontawesome.com/?ref=creativetim"
            target="_blank"
          >
            Fontawesome
          </a>{" "}
          - Get vector icons and social logos on your website with Font Awesome,
          the web’s most popular icon set and toolkit.
        </li>
        <li className="py-1">
          <a
            className="font-semibold text-indigo-600"
            href="https://popper.js.org/?ref=creativetim"
            target="_blank"
          >
            PopperJS
          </a>{" "}
          - TOOLTIP &amp; POPOVER POSITIONING ENGINE
        </li>
        <li className="py-1">
          <a
            className="font-semibold text-indigo-600"
            href="https://www.chartjs.org/?ref=creativetim"
            target="_blank"
          >
            ChartJS
          </a>{" "}
          - Simple yet flexible JavaScript charting for designers &amp;
          developers
        </li>
      </ul>
      <h3 className="text-2xl font-medium mb-2 mt-10">Learn more</h3>
      <p className="leading-extra-relaxed font-light text-base mb-5">
        Stay up to date on the development journey and connect with us on:
      </p>
      <ul className="mt-8 mb-3 list-disc pl-8">
        <li className="py-1">
          Follow{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://twitter.com/creativetim?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            Creative Tim on Twitter
          </a>
          .
        </li>
        <li className="py-1">
          Follow{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://www.creative-tim.com/blog?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            The Official Creative Tim Blog
          </a>
          .
        </li>
        <li className="py-1">
          Follow{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://www.instagram.com/creativetimofficial/?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            Creative Tim on Instagram
          </a>
          .
        </li>
        <li className="py-1">
          Follow{" "}
          <a
            className="font-semibold text-indigo-600"
            href="https://www.facebook.com/CreativeTim/?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            Creative Tim on Facebook
          </a>
          .
        </li>
      </ul>
    </>
  );
}
