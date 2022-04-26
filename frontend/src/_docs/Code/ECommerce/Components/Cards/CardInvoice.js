import CardInvoice from "components/Cards/ECommerce/CardInvoice.js";
import passProps from "_texts/e-commerce/cards/cardinvoice.js";
const props = `CardInvoice.defaultProps = {
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
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardInvoice from "@notus-pro/react/CardInvoice";

const props = ${JSON.stringify(passProps)}

export default function Example() {
  return (
    <>
      <CardInvoice {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardInvoice,
  componentName: "CardInvoice",
  description,
  props,
  preview,
  passProps,
};
export default docsObjects;
