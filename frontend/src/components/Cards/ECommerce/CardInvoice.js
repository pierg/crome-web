import React from "react";
import PropTypes from "prop-types";

export default function CardInvoice({
  image,
  address,
  phone,
  invoice,
  billing,
  invoiceDate,
  dueDate,
  footerTitle,
  footerDescriprion,
  contact,
  totalCount,
  tableHead,
  tableBody,
}) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg">
        <div className="px-5 pt-6 pb-4 border-b border-blueGray-200">
          <div className="justify-between flex flex-wrap -mx-4">
            <div className="text-left px-4 relative w-full md:w-4/12">
              <div className="text-left">
                <img
                  alt="..."
                  src={image}
                  className="w-full mb-2"
                  style={{ maxWidth: "150px" }}
                />
                <h6 className="block capitalize text-blueGray-700 mt-6">
                  {address}
                </h6>
                <h6 className="text-blueGray-700">{phone}</h6>
              </div>
            </div>

            <div className="text-left px-4 relative w-full lg:w-3/12 w-full md:w-5/12">
              <div className="flex justify-center py-6 lg:pt-6 pt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-bold leading-normal mt-0 mb-2">
                    {billing.title}
                  </h3>
                  <h6 className="block mt-2 mb-0 text-xl">{billing.name}</h6>
                  <p className="text-blueGray-500">{billing.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:justify-between flex flex-wrap -mx-4">
            <div className="text-left px-4 relative w-full md:w-4/12">
              <h4 className="text-2xl font-semibold leading-normal mb-2 mt-12 text-left">
                {invoice.text}
              </h4>
              <h3 className="text-2xl font-normal leading-normal mt-1 mb-2 font-light">
                {invoice.id}
              </h3>
            </div>

            <div className="text-left px-4 relative w-full lg:w-3/12 w-full md:w-5/12">
              <div className="flex justify-center py-6 lg:pt-4">
                <div className="mt-12">
                  <p className="float-left mb-0">{invoiceDate.text}</p>
                  <p className="ml-4 float-right mb-0">{invoiceDate.date}</p>
                  <br />
                  <p className="float-left">{dueDate.text}</p>
                  <p className="ml-4 float-right">{dueDate.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 flex-auto">
          <table className="text-right w-full mb-4 text-blueGray-800 border-collapse">
            <thead className="bg-blueGray-800">
              <tr className="text-right text-white uppercase font-light">
                {tableHead.map((prop, key) => (
                  <th key={key} className="p-3 border-t" scope="col">
                    {prop}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableBody.map((prop, key) => (
                <tr key={key}>
                  {prop.map((col, colKey) => (
                    <td key={colKey} className="py-4 p-3 border-t">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="mt-4">
                <th className="border-b-0 p-3 border-t">
                  <p className="text-lg font-semibold pt-2">
                    {totalCount.text}
                  </p>
                </th>

                <th
                  className="border-b-0 p-3 border-t"
                  colSpan={tableHead.length - 1 < 1 ? 1 : tableHead.length - 1}
                >
                  <p className="text-right text-lg font-semibold pt-2">
                    {totalCount.info}
                  </p>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-blueGray-200">
          <div className="text-right ml-auto px-4 relative w-full md:w-5/12">
            <h5 className="text-2xl font-semibold leading-normal mt-0 mb-2">
              {footerTitle}
            </h5>
            <p className="">{footerDescriprion}</p>
            {contact.map((prop, key) => (
              <h6 key={key} className="flex items-center justify-end mb-4">
                <span className="mr-2">{prop.type}</span>
                <span className="text-blueGray-500">{prop.info}</span>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

CardInvoice.defaultProps = {
  invoice: {},
  billing: {},
  invoiceDate: {},
  dueDate: {},
  contact: [],
  tableHead: [],
  tableBody: [],
  totalCount: {},
};

CardInvoice.propTypes = {
  image: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  invoice: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  }),
  billing: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string,
  }),
  invoiceDate: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
  }),
  dueDate: PropTypes.shape({
    text: PropTypes.string,
    date: PropTypes.string,
  }),
  footerTitle: PropTypes.string,
  footerDescriprion: PropTypes.string,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      info: PropTypes.string,
    })
  ),
  totalCount: PropTypes.shape({
    text: PropTypes.string,
    info: PropTypes.string,
  }),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // example: [["one","two"],["three","four","five"]]
  // will be generated as a table with two rows,
  // the first row with two columns -         one | two
  // the second row with three columns - three | four | five
  tableBody: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
