/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardTableDetails({ title, description, table, link }) {
  return (
    <>
      <div className="bg-white text-center shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
        <div className="bg-transparent first:rounded-t px-5 py-3 border-b border-blueGray-300">
          <h4 className="pt-2 text-2xl font-bold mt-0 mb-2 text-lightBlue-500">
            {title}
          </h4>
        </div>
        <div className="lg:px-12 px-4 py-5 flex-auto">
          <div className="leading-relaxed text-blueGray-500">{description}</div>
          <table className="mt-6 w-full mb-4 text-blueGray-700 border-collapse border border-solid border-blueGray-200">
            <tbody>
              {table.map((row, key) => (
                <tr key={key}>
                  {row.map((col, colKey) => (
                    <td
                      key={colKey}
                      className="text-center p-3 border-t border"
                    >
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-transparent mt-4 py-6 bg-transparent rounded-b px-4 py-3 border-t border-blueGray-300">
          {link && link.to ? (
            <Link className="text-lightBlue-500" {...link} />
          ) : (
            <a className="text-lightBlue-500" {...link} />
          )}
        </div>
      </div>
    </>
  );
}

CardTableDetails.defaultProps = {
  table: [],
  link: {},
};

CardTableDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // example: [["one","two"],["three","four","five"]]
  // will be generated as a table with two rows,
  // the first row with two columns -         one | two
  // the second row with three columns - three | four | five
  table: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  // properties to pass to the link object
  // if you pass a prop named to, the link will be
  // generated using Link from react-router-dom
  link: PropTypes.object,
};
