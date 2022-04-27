import imageupload from "_texts/misc/forms/imageupload.js";
import progress from "_texts/misc/content/progress.js";

const textProps = {
  imageUpload: { ...imageupload },
  userName: "Sandra Bailey",
  progress: {
    ...progress,
  },
  saveButton: {
    color: "dark",
    children: "Save Change",
  },
  cancelButton: {
    color: "red",
    children: "Cancel",
    outline: true,
  },
  defaultOpened: 0,
  tabsColor: "pink",
  tabs: [
    {
      tabName: "General",
      tabContent: [
        {
          title: "General Information",
          inputs: [
            {
              label: "First Name",
              input: {
                defaultValue: "Charlie",
                placeholder: "First Name",
              },
            },
            {
              label: "Last Name",
              input: {
                defaultValue: "Bailey",
                placeholder: "Last Name",
              },
            },
            {
              label: "I'm",
              select: {
                items: ["Female", "Male"],
                placeholder: "Gender",
              },
            },
            {
              label: "Birth Date",
              select: {
                items: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                placeholder: "Month",
              },
            },
            {
              select: {
                items: [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30",
                  "31",
                ],
                placeholder: "Day",
              },
            },
            {
              label: "",
              select: {
                items: [
                  "1990",
                  "1991",
                  "1992",
                  "1993",
                  "1994",
                  "1995",
                  "1996",
                  "1997",
                  "1998",
                  "1999",
                  "2000",
                  "2001",
                  "2002",
                  "2003",
                  "2004",
                  "2005",
                  "2006",
                  "2007",
                  "2008",
                  "2009",
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                ],
                placeholder: "Year",
              },
            },
            {
              label: "Email",
              input: {
                defaultValue: "charlie.bailey@example.com",
                placeholder: "Email",
              },
            },
            {
              label: "Confirm Email",
              input: {
                defaultValue: "charlie.bailey@example.com",
                placeholder: "Confirm Email",
              },
            },
            {
              label: "Your Location",
              input: {
                defaultValue: "Sydney, A",
                placeholder: "Your Location",
              },
            },
            {
              label: "Phone Number",
              input: {
                defaultValue: "+4 (074) 1090873",
                placeholder: "Phone Number",
              },
            },
            {
              label: "Language",
              select: {
                items: ["English", "French", "Spanish", "Deutsche", "Russian"],
                placeholder: "Language",
              },
            },
          ],
        },
      ],
    },
    {
      tabName: "Billing",
      tabContent: [
        {
          title: "Billing Method",
          table: {
            head: ["Card Type", "Card Number", "Payment Method", "Action"],
            body: [
              [
                {
                  image: require("assets/img/visas.png").default,
                },
                "•••• •••• •••• 8372",
                {
                  radio: {
                    name: "billing-method",
                    defaultChecked: true,
                  },
                },
                {
                  button: {
                    color: "red",
                    size: "sm",
                    children: "delete",
                  },
                },
              ],
              [
                {
                  image: require("assets/img/mastercard.png").default,
                },
                "•••• •••• •••• 1225",
                {
                  radio: {
                    name: "billing-method",
                  },
                },
                {
                  button: {
                    color: "red",
                    size: "sm",
                    children: "delete",
                  },
                },
              ],
            ],
          },
        },
      ],
    },
    {
      tabName: "Security",
      tabContent: [
        {
          title: "Security Questions",
          inputs: [
            {
              label: "Security Question",
              select: {
                placeholder: "Security Question",
                items: ["Question 1", "Question 2", "Question 3"],
              },
            },
            {
              label: "Your Answer",
              input: {
                placeholder: "Enter your answer",
                type: "text",
              },
            },
          ],
        },
        {
          title: "Security Settings",
          list: [
            {
              text: "Notify me via email when logging in",
              checkbox: {},
            },
            {
              text: "Send SMS confirmation for all online payments",
              checkbox: {
                defaultChecked: true,
              },
            },
            {
              text: "Check which devices accessed your account",
              checkbox: {},
            },
            {
              text:
                "Find My Device, make sure your device can be found if it gets lost",
              checkbox: {
                defaultChecked: true,
              },
            },
            {
              text: "Lock your device with a PIN, pattern, or password",
              checkbox: {
                defaultChecked: true,
              },
            },
            {
              text:
                "Manage what apps have access to app-usage data on your device",
              checkbox: {},
            },
          ],
        },
      ],
    },
    {
      tabName: "Notifications",
      tabContent: [
        {
          alert: {
            children:
              "We will never distribute your email address to third parties. Read about email communication in our privacy policy.",
          },
        },
        {
          title: "Notification Preferences",
          list: [
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Someone mentions me",
              },
            },
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Someone follows me",
              },
            },
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Someone shares my activty",
              },
            },
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Someone messages me",
              },
            },
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Someone adds me to a project",
              },
            },
            {
              label: "",
              inverted: "true",
              checkbox: {
                label: "Sales and promotions",
              },
            },
          ],
        },
        {
          title: "Notification Frequency",
          list: [
            {
              label: "",
              inverted: "true",
              radio: {
                label: "Daily",
                name: "notification-frequency",
              },
            },
            {
              label: "",
              inverted: "true",
              radio: {
                label: "Weekly",
                name: "notification-frequency",
              },
            },
            {
              label: "",
              inverted: "true",
              radio: {
                label: "Monthly",
                name: "notification-frequency",
              },
            },
            {
              label: "",
              inverted: "true",
              radio: {
                label: "Never",
                name: "notification-frequency",
              },
            },
          ],
        },
      ],
    },
  ],
};
export default textProps;
