const textProps = {
  images: [
    {
      image: require("assets/img/pages/gucci.png").default,
      title: "Shorts",
      subtitle: "Small",
      price: "$290",
    },
    {
      image: require("assets/img/pages/jacket.png").default,
      title: "Jacket",
      subtitle: "Medium",
      price: "$1.000",
    },
  ],
  discount: {
    text: "Discount",
    input: {
      placeholder: "Discount code",
      type: "text",
    },
    button: {
      children: "Apply",
      color: "pink",
    },
  },
  details: [
    [
      {
        text: "Subtotal",
        info: "$1.290",
      },
      {
        text: "Shipping",
        info: "$200",
      },
    ],
    [
      {
        text: "Total",
        info: "$1.490",
      },
    ],
  ],
};
export default textProps;
