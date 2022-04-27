/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import Button from "../../../../components/Elements/Button.js";

export default function Pricing8({ heading2badge, table, color }) {
  const linkColors = {
    blueGray: "text-blueGray-500",
    red: "text-red-500",
    orange: "text-orange-500",
    amber: "text-amber-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    lightBlue: "text-lightBlue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
  };
  const bgColors = {
    blueGray: "bg-blueGray-500",
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    lightBlue: "bg-lightBlue-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
  };
  return (
    <>
      <div className="mb-12">
        <div className="container mx-auto px-4">
          {heading2badge && <Heading2Badge {...heading2badge} />}
          <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full">
              <div className="block w-full overflow-x-auto">
                <table className="w-full mb-4 text-blueGray-800 border-collapse">
                  <thead className="text-blueGray-700">
                    <tr className="border-b">
                      {table.head.map(
                        (prop, key) =>
                          (prop.image && (
                            <th key={key} className="align-bottom p-3 border-t">
                              <img
                                alt="..."
                                src={prop.image}
                                className="w-170-px"
                              />
                            </th>
                          )) ||
                          (prop.title && prop.button && prop.link && (
                            <th
                              key={key}
                              className="text-center align-bottom p-3 border-t"
                            >
                              <h5 className="mb-3 text-xl leading-tight">
                                {prop.title}
                              </h5>

                              <Button {...prop.button} />
                              <br />
                              {prop.link.to && (
                                <Link
                                  {...prop.link}
                                  className={
                                    linkColors[color] + " font-normal text-sm"
                                  }
                                />
                              )}
                              {prop.link.to === undefined && (
                                <a
                                  {...prop.link}
                                  className={
                                    linkColors[color] + " font-normal text-sm"
                                  }
                                />
                              )}
                            </th>
                          ))
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-blueGray-500">
                    {table.body.map((prop, key) =>
                      prop && prop.line ? (
                        <tr
                          key={key}
                          className={bgColors[color] + " text-white px-4"}
                        >
                          <td
                            className="py-2 px-3 font-bold"
                            colSpan={table.head.length}
                          >
                            {prop.line}
                          </td>
                        </tr>
                      ) : (
                        <tr key={key} className="px-4">
                          {(prop || []).map(
                            (colProp, colKey) =>
                              (typeof colProp === "string" && (
                                <td
                                  key={colKey}
                                  className={
                                    (colKey !== 0
                                      ? "text-center "
                                      : "px-3 text-left ") +
                                    "py-4 border-t text-sm"
                                  }
                                >
                                  {colProp}
                                </td>
                              )) ||
                              (colProp.icon && colProp.color && (
                                <td
                                  key={colKey}
                                  className="text-center py-4 border-t"
                                >
                                  <i
                                    className={
                                      linkColors[colProp.color] +
                                      " text-lg " +
                                      colProp.icon
                                    }
                                  ></i>
                                </td>
                              )) ||
                              (colProp.link && colProp.link.to && (
                                <td
                                  key={colKey}
                                  className={
                                    (colKey !== 0
                                      ? "text-center "
                                      : "px-3 text-left ") +
                                    "py-4 border-t text-sm"
                                  }
                                >
                                  <Link
                                    {...colProp.link}
                                    className={linkColors[color]}
                                  />
                                </td>
                              )) ||
                              (colProp.link && colProp.link.to === undefined && (
                                <td
                                  key={colKey}
                                  className={
                                    (colKey !== 0
                                      ? "text-center "
                                      : "px-3 text-left ") + "py-4 border-t"
                                  }
                                >
                                  <a
                                    {...colProp.link}
                                    className={linkColors[color]}
                                  />
                                </td>
                              ))
                          )}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Pricing8.defaultProps = {
  table: {
    head: [],
    body: [],
  },
  color: "blueGray",
  heading2badge: null,
};
Pricing8.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // this color will be applied on all
  // links and on the section background
  color: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  // NOTE: the head and the body's arrays should
  // // // have the same ammount of elements, otherwise
  // // // the output will not be the one expected
  table: PropTypes.shape({
    head: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          image: PropTypes.string,
        }),
        PropTypes.shape({
          title: PropTypes.string,
          // props to pass to the Button component
          button: PropTypes.object,
          // properties to pass to the link object
          // if you pass a prop named to, the link will be
          // generated using Link from react-router-dom
          link: PropTypes.object,
        }),
      ])
    ),
    body: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          // this will generate a single line with
          // the mentioned string, and the mentioned color
          // this acts like a section line
          line: PropTypes.string,
        }),
        PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
              // properties to pass to the link object
              // if you pass a prop named to, the link will be
              // generated using Link from react-router-dom
              link: PropTypes.object,
            }),
            PropTypes.shape({
              icon: PropTypes.string,
              color: PropTypes.oneOf([
                "blueGray",
                "red",
                "orange",
                "amber",
                "emerald",
                "teal",
                "lightBlue",
                "indigo",
                "purple",
                "pink",
              ]),
            }),
          ])
        ),
      ])
    ),
  }),
};
