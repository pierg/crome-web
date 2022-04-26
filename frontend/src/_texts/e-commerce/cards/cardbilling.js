const textProps = {
  title: "Billing address",
  inputs: [
    {
      width: 6,
      label: "First name*",
      input: {
        type: "text",
        placeholder: "E.g. Smith",
      },
    },
    {
      width: 6,
      label: "Last name*",
      input: {
        type: "text",
        placeholder: "E.g. John",
      },
    },
    {
      width: 6,
      label: "Email address*",
      input: {
        type: "email",
        placeholder: "E.g. email@email.email",
      },
    },
    {
      width: 6,
      label: "Phone*",
      input: {
        type: "text",
        placeholder: "E.g. +1 (5417) 543 010",
      },
    },
    {
      width: 8,
      label: "Street address*",
      input: {
        type: "text",
        placeholder: "E.g. 420 Long Beach, CA",
      },
    },
    {
      width: 4,
      label: "Postcode/Zip*",
      input: {
        type: "text",
        placeholder: "E.g. 340112",
      },
    },
    {
      width: 4,
      label: "Apt, suite, etc.",
      input: {
        type: "text",
        placeholder: "E.g. YC7B 3UT",
      },
    },
    {
      width: 4,
      label: "City*",
      input: {
        type: "text",
        placeholder: "E.g. London",
      },
    },
    {
      width: 4,
      label: "Country*",
      select: {
        placeholder: "Select Country",
        items: [
          "Czech Republic",
          "Denmark",
          "Dominican Republic",
          "Iraq",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Madagascar",
          "Malta",
          "Norway",
          "Poland",
          "Portugal",
          "Romania",
          "Russian Federation",
          "Saint Lucia",
          "Samoa",
          "San Marino",
          "Saudi Arabia",
          "Select country",
          "Spain",
          "Swaziland",
          "Sweden",
          "Turkey",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "Viet Nam",
        ],
      },
    },
  ],
  paymentTitle: "Payment method",
  defaultPaymentOpened: 0,
  paymentOptions: [
    {
      tabName: "Credit Card",
      inputs: [
        {
          width: 12,
          label: "Card Number",
          input: {
            type: "tel",
            inputMode: "numeric",
            pattern: "[0-9s]{13,19}",
            maxLength: "19",
            placeholder: "E.g. 1234 1234 1234 1234",
          },
        },
        {
          width: 7,
          label: "Card holder",
          input: {
            type: "text",
            placeholder: "E.g. SMITH JOHN",
          },
        },
        {
          width: 3,
          label: "Expiration",
          input: {
            type: "text",
            placeholder: "E.g. 01/24",
          },
        },
        {
          width: 2,
          label: "CVC",
          input: {
            type: "text",
            placeholder: "E.g. 123",
          },
        },
      ],
    },
    {
      tabName: "PayPal",
      inputs: [
        {
          width: 12,
          label: "Email",
          input: {
            type: "email",
            placeholder: "E.g. email@email.email",
          },
        },
      ],
    },
  ],
  paymentTabColor: "pink",
  returnButton: {
    color: "light",
    children: "Return to cart",
  },
  orderButton: {
    color: "pink",
    children: "Order now",
  },
};
export default textProps;
