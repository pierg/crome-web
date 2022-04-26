const textProps = {
  title: "Account Settings",
  button: {
    children: "Save change",
    size: "sm",
    color: "lightBlue",
  },
  forms: [
    {
      title: "Profile Details",
      inputs: [
        {
          label: "Username",
          width: 6,
          input: {
            placeholder: "Username",
            type: "text",
            defaultValue: "lucky.jesse",
          },
        },
        {
          label: "Email Address",
          width: 6,
          input: {
            placeholder: "Email",
            type: "email",
            defaultValue: "jesse@example.com",
          },
        },
        {
          label: "First Name",
          width: 6,
          input: {
            placeholder: "First Name",
            type: "text",
            defaultValue: "Lucky",
          },
        },
        {
          label: "Last Name",
          width: 6,
          input: {
            placeholder: "Last Name",
            type: "text",
            defaultValue: "Jesse",
          },
        },
      ],
    },
    {
      title: "Contact Information",
      inputs: [
        {
          label: "Address",
          width: 12,
          input: {
            placeholder: "Address",
            type: "text",
            defaultValue: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
          },
        },
        {
          label: "City",
          width: 4,
          input: {
            placeholder: "City",
            type: "text",
            defaultValue: "New York",
          },
        },
        {
          label: "Country",
          width: 4,
          input: {
            placeholder: "Country",
            type: "text",
            defaultValue: "United States",
          },
        },
        {
          label: "Postal Code",
          width: 4,
          input: {
            placeholder: "Postal Code",
            type: "text",
            defaultValue: "44444444",
          },
        },
      ],
    },
    {
      title: "About me",
      inputs: [
        {
          label: "About me",
          width: 12,
          input: {
            placeholder: "About me",
            type: "textarea",
            defaultValue: "A beautiful Dashboard for React & Tailwind CSS.",
            rows: 4,
          },
        },
      ],
    },
  ],
};
export default textProps;
