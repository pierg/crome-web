const textProps = {
  image: require("assets/img/ct-logo-text-black.png").default,
  address: "St. Independence Embankment, 050105 Bucharest, Romania",
  phone: "tel: +4 (074) 1090873",
  invoice: {
    text: "Invoice no",
    id: "#0453119",
  },
  billing: {
    title: "Billed to:",
    name: "James Thompson",
    address: "Bld Mihail Kogalniceanu, 7652 Bucharest, Romania",
  },
  invoiceDate: {
    text: "Invoice date:",
    date: "06/03/2021",
  },
  dueDate: {
    text: "Due date:",
    date: "11/03/2021",
  },
  footerTitle: "Thank you!",
  footerDescriprion: "If you encounter any issues can contact us",
  contact: [
    {
      type: "email:",
      info: "support@creative-tim.com",
    },
  ],
  totalCount: {
    text: "Total",
    info: "$750",
  },
  tableHead: ["Item", "Qty", "Rate", "Amount"],
  tableBody: [
    ["Premium Support", "1", "$9.00", "$9.00"],
    ["Notus PRO React", "2", "$150.00", "$300.00"],
    ["Parts for service", "1", "$89.00", "$89.00"],
  ],
};
export default textProps;
