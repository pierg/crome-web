import "_texts/misc/dropdowns/dropdownuser.js"
import dropdownuser

const textProps = {
  brand: {
    href: "#pablo",
    children: "Settings Page",
  },
  input: {
    placeholder: "Search here",
    border: "borderless",
    type: "text",
  },
  dropdown: { ...dropdownuser },
};
export default textProps;
