import CardDetailSettingsUser from "components/Cards/ECommerce/CardDetailSettingsUser.js";
import passProps4 from "_texts/e-commerce/cards/carddetailsettingsuser.js";
const passProps = {
  ...passProps4,
  defaultOpened: 3,
};
const dependencies = [
  {
    name: "Input",
    link: "/components/misc/components/inputs",
  },
  {
    name: "Select",
    link: "/components/misc/components/forms#misc-id-misc-id-components-select",
  },
  {
    name: "Checkbox",
    link:
      "/components/misc/components/forms#misc-id-misc-id-components-checkbox",
  },
  {
    name: "Radio",
    link: "/components/misc/components/forms#misc-id-misc-id-components-radio",
  },
  {
    name: "Image Upload",
    link:
      "/components/misc/components/forms#misc-id-misc-id-components-imageupload",
  },
  {
    name: "Progress",
    link:
      "/components/misc/components/forms#misc-id-misc-id-components-progress",
  },
  {
    name: "Button",
    link: "/components/misc/components/buttons",
  },
];
const props = `const inputsObject = {
  // NOTE: this width only applies on large devices
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  // if you wish, you can send somthing like
  // <span className="mr-2">Label Name</span><span className="text-red-500">*</span>
  // NOTE: the label tag will be auto generated
  label: PropTypes.node,
};

const inputsShape = PropTypes.shape({
  ...inputsObject,
  // props to pass to the Input component
  input: PropTypes.object,
});

const selectsShape = PropTypes.shape({
  ...inputsObject,
  // props to pass to the Select component
  select: PropTypes.object,
});

const inputsTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([inputsShape, selectsShape])
);

const listsObject = {
  text: PropTypes.string,
  // if you want the text to appear last or not
  inverted: PropTypes.bool,
};

const listsCheckboxShape = PropTypes.shape({
  ...listsObject,
  // props to pass to the Checkbox component
  checkbox: PropTypes.object,
});

const listsRadioShape = PropTypes.shape({
  ...listsObject,
  // props to pass to the Radio component
  radio: PropTypes.object,
});

const listsTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([listsCheckboxShape, listsRadioShape])
);

CardDetailSettingsUser.defaultProps = {
  imageUpload: {},
  progress: {},
  defaultOpened: 0,
  onTabsChange: () => {},
  tabsColor: "blueGray",
  tabs: [],
  saveButton: {},
  cancelButton: {},
};

CardDetailSettingsUser.propTypes = {
  // props to pass to the ImageUpload component
  imageUpload: PropTypes.object,
  userName: PropTypes.string,
  // props to pass to the Progress component
  progress: PropTypes.object,
  // props to pass to the Button component
  saveButton: PropTypes.object,
  // props to pass to the Button component
  cancelButton: PropTypes.object,
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of tabs - 1
  defaultOpened: PropTypes.number,
  // this function has two parameters,
  // index number of the tab that was pressed
  // and the tabName of that tab
  // example: onTabsChange={(index,name) => console.log(index,name)}
  onTabsChange: PropTypes.func,
  tabsColor: PropTypes.oneOf([
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string,
      tabContent: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            title: PropTypes.string,
            inputs: inputsTypes,
          }),
          PropTypes.shape({
            // props that you can pass to the Alert component
            alert: PropTypes.object,
          }),
          PropTypes.shape({
            title: PropTypes.string,
            list: listsTypes,
          }),
          PropTypes.shape({
            title: PropTypes.string,
            table: PropTypes.shape({
              head: PropTypes.arrayOf(PropTypes.string),
              body: PropTypes.arrayOf(
                PropTypes.arrayOf(
                  PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({ image: PropTypes.string }),
                    // props to pass to the Radio component
                    PropTypes.shape({ radio: PropTypes.object }),
                    // props to pass to the Button component
                    PropTypes.shape({ button: PropTypes.object }),
                  ])
                )
              ),
            }),
          }),
        ])
      ),
    })
  ),
};`;
const description = "";

const preview = `import React from "react";

// @notus-pro/react
import CardDetailSettingsUser from "@notus-pro/react/CardDetailSettingsUser";

const props = "<<props-here>>";

export default function Example() {
  return (
    <>
      <CardDetailSettingsUser {...props} />
    </>
  );
}`;

const docsObjects = {
  component: CardDetailSettingsUser,
  componentName: "CardDetailSettingsUser",
  description,
  props,
  preview,
  passProps,
  dependencies,
  codeSnippetProps: {
    colorSwitchePropToChange: "tabsColor",
    colorsSwitcher: [
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
    ],
    defaultColor: "pink",
  },
};
export default docsObjects;
