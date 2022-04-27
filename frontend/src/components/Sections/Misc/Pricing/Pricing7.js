import React from "react";
import PropTypes from "prop-types";

// components
import Heading3Badge from "../../../../components/Headings/Heading3Badge.js";
import Button from "../../../../components/Elements/Button.js";

export default function Pricing7({ heading3badge, table }) {
  const colors = {
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
  return (
    <>
      <div className="mb-12">
        <div className="container mx-auto px-4">
          {heading3badge && <Heading3Badge {...heading3badge} />}
          <div className="items-center flex flex-wrap -mx-4">
            <div className="px-4 relative w-full">
              <div className="block w-full overflow-x-auto">
                <table className="w-full mb-4 border-collapse">
                  <thead className="text-blueGray-700">
                    <tr className="border-b">
                      {table.head.map(
                        (prop, key) =>
                          (typeof prop === "string" && (
                            <th
                              key={key}
                              className={
                                (key === 0 ? "text-left" : "text-center") +
                                " py-2 align-bottom p-3 border-0"
                              }
                            >
                              <h5 className="text-2xl font-normal leading-normal mt-0 mb-2">
                                {prop}
                              </h5>
                            </th>
                          )) || (
                            <th
                              key={key}
                              className="text-center py-4 p-3 border-0"
                            >
                              <p className="text-blueGray-500 mb-0">
                                {prop.subtitle}
                              </p>
                              <h4 className="text-3xl leading-tight mt-0 mb-6">
                                {prop.title}
                              </h4>
                              <Button {...prop.button} />
                            </th>
                          )
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-blueGray-500">
                    {table.body.map((prop, key) => (
                      <tr key={key}>
                        {(prop || []).map(
                          (colProp, colKey) =>
                            (typeof colProp === "string" && (
                              <td
                                key={colKey}
                                className={
                                  (colKey !== 0
                                    ? "text-center "
                                    : "px-3 text-left ") + "py-4"
                                }
                              >
                                {colProp}
                              </td>
                            )) || (
                              <td key={colKey} className="text-center py-4">
                                <i
                                  className={
                                    colors[colProp.color] +
                                    " text-lg " +
                                    colProp.icon
                                  }
                                ></i>
                              </td>
                            )
                        )}
                      </tr>
                    ))}
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

Pricing7.defaultProps = {
  table: {
    head: [],
    body: [],
  },
  heading3badge: null,
};
Pricing7.propTypes = {
  // prop to pass to the Heading3Badge component
  heading3badge: PropTypes.object,
  table: PropTypes.shape({
    head: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string,
          subtitle: PropTypes.string,
          // props to pass to the Button component
          button: PropTypes.object,
        }),
      ])
    ),
    body: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
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
      )
    ),
  }),
};
