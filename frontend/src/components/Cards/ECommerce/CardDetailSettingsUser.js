import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import ImageUpload from "../../../components/Elements/ImageUpload.js";
import Progress from "../../../components/Elements/Progress.js";
import Input from "../../../components/Elements/Input.js";
import Select from "../../../components/Elements/Select.js";
import Checkbox from "../../../components/Elements/Checkbox.js";
import Radio from "../../../components/Elements/Radio.js";
import Alert from "../../../components/Elements/Alert.js";
import Button from "../../../components/Elements/Button.js";

export default function CardDetailSettingsUser({
  imageUpload,
  userName,
  progress,
  saveButton,
  cancelButton,
  defaultOpened,
  tabs,
  tabsColor,
  onTabsChange,
}) {
  const [open, setOpen] = React.useState(defaultOpened);
  const [oldInTransition, setOldInTransition] = React.useState(false);
  const [newInTransition, setNewInTransition] = React.useState(false);
  const toggleNew = (e, newOpen, text) => {
    e.preventDefault();
    if (!newInTransition && !oldInTransition) {
      setOldInTransition(true);
      setTimeout(function () {
        setOpen(newOpen);
      }, 500);
      setTimeout(function () {
        setOldInTransition(false);
        setNewInTransition(true);
      }, 600);
      setTimeout(function () {
        setNewInTransition(false);
      }, 1100);
    }
    onTabsChange(newOpen, text);
  };
  const widths = {
    1: "lg:w-1/12",
    2: "lg:w-2/12",
    3: "lg:w-3/12",
    4: "lg:w-4/12",
    5: "lg:w-5/12",
    6: "lg:w-6/12",
    7: "lg:w-7/12",
    8: "lg:w-8/12",
    9: "lg:w-9/12",
    10: "lg:w-10/12",
    11: "lg:w-11/12",
    12: "lg:w-12/12",
  };
  const anchorActiveColors = {
    blueGray: "text-blueGray-500 hover:text-blueGray-700",
    red: "text-red-500 hover:text-red-700",
    orange: "text-orange-500 hover:text-orange-700",
    amber: "text-amber-500 hover:text-amber-700",
    emerald: "text-emerald-500 hover:text-emerald-700",
    teal: "text-teal-500 hover:text-teal-700",
    lightBlue: "text-lightBlue-500 hover:text-lightBlue-700",
    indigo: "text-indigo-500 hover:text-indigo-700",
    purple: "text-purple-500 hover:text-purple-700",
    pink: "text-pink-500 hover:text-pink-700",
  };
  const anchorNonActiveColors = {
    blueGray: "text-blueGray-400 hover:text-blueGray-700",
    red: "text-blueGray-400 hover:text-red-700",
    orange: "text-blueGray-400 hover:text-orange-700",
    amber: "text-blueGray-400 hover:text-amber-700",
    emerald: "text-blueGray-400 hover:text-emerald-700",
    teal: "text-blueGray-400 hover:text-teal-700",
    lightBlue: "text-blueGray-400 hover:text-lightBlue-700",
    indigo: "text-blueGray-400 hover:text-indigo-700",
    purple: "text-blueGray-400 hover:text-purple-700",
    pink: "text-blueGray-400 hover:text-pink-700",
  };
  return (
    <>
      <div className="bg-white mb-0 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
        <div className="w-full px-4 mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 relative w-full md:w-3/12">
              <div className="relative py-12">
                <section className="text-center block">
                  <ImageUpload {...imageUpload} />
                  <h3 className="text-3xl font-semibold mt-2 mb-4">
                    {userName}
                  </h3>
                </section>

                <section className="block">
                  <ul className="flex-col flex flex-wrap list-none pl-0 mb-0">
                    {tabs.map((prop, key) => (
                      <li
                        key={key}
                        className="last:border-0 border-b border-solid py-1"
                      >
                        <a
                          className={classnames(
                            "text-blueGray-700 text-xs uppercase py-3 pl-2 font-bold block duration-300 transition-all ease-in-out",
                            {
                              [anchorNonActiveColors[tabsColor]]: key !== open,
                              [anchorActiveColors[tabsColor]]: key === open,
                            }
                          )}
                          onClick={(e) => toggleNew(e, key, prop.tabName)}
                          href="#pablo"
                        >
                          {prop.tabName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <div className="mt-4">
                  <Progress {...progress} />
                </div>
              </div>
            </div>

            <div className="ml-auto px-4 relative w-full md:w-8/12">
              <div className="relative py-12">
                {tabs.map((prop, key) => {
                  return (
                    <div
                      key={key}
                      className={classnames(
                        "my-8 duration-500 transition-all ease-in-out",
                        {
                          hidden: key !== open,
                          block: key === open,
                          "opacity-0": key === open && oldInTransition,
                          "opacity-100": key === open && newInTransition,
                        }
                      )}
                    >
                      {prop.tabContent &&
                        prop.tabContent.map((contentProp, contentKey) => {
                          if (contentProp.table) {
                            return (
                              <div key={contentKey} className="mb-6">
                                <header className="block relative">
                                  <h2 className="text-2xl font-semibold mt-0 mb-2">
                                    {contentProp.title}
                                  </h2>
                                </header>
                                <hr className="w-full mt-2 mb-8 h-0 border-blueGray-400" />
                                <table className="w-full mb-4 text-blueGray-800 border-collapse items-center">
                                  <thead className="items-center">
                                    <tr className="text-left">
                                      {contentProp.table.head.map(
                                        (tHeadProp, tHeadKey) => {
                                          return (
                                            <th
                                              key={tHeadKey}
                                              className="align-middle uppercase font-bold text-sm p-3 border-t text-blueGray-500"
                                            >
                                              <small>{tHeadProp}</small>
                                            </th>
                                          );
                                        }
                                      )}
                                    </tr>
                                  </thead>
                                  <tbody className="">
                                    {contentProp.table.body.map(
                                      (tBodyProp, tBodyKey) => {
                                        return (
                                          <tr key={tBodyKey}>
                                            {tBodyProp.map(
                                              (colProp, colKey) => {
                                                if (colProp.image) {
                                                  return (
                                                    <td
                                                      key={colKey}
                                                      className="align-middle uppercase font-bold text-sm p-3 border-t text-blueGray-500"
                                                    >
                                                      <img
                                                        alt="..."
                                                        className="bg-white inline-flex justify-center items-center w-12"
                                                        src={colProp.image}
                                                      />
                                                    </td>
                                                  );
                                                } else if (colProp.radio) {
                                                  return (
                                                    <td
                                                      key={colKey}
                                                      className="align-middle uppercase font-normal p-3 border-t"
                                                    >
                                                      <Radio
                                                        {...colProp.radio}
                                                      />
                                                    </td>
                                                  );
                                                } else if (colProp.button) {
                                                  return (
                                                    <td
                                                      key={colKey}
                                                      className="align-middle uppercase font-normal p-3 border-t"
                                                    >
                                                      <Button
                                                        key={colKey}
                                                        {...colProp.button}
                                                      />
                                                    </td>
                                                  );
                                                } else {
                                                  return (
                                                    <td
                                                      key={colKey}
                                                      className="align-middle uppercase font-normal p-3 border-t"
                                                    >
                                                      {colProp}
                                                    </td>
                                                  );
                                                }
                                              }
                                            )}
                                          </tr>
                                        );
                                      }
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            );
                          } else if (contentProp.inputs) {
                            return (
                              <div key={contentKey} className="mb-6">
                                <header className="block relative">
                                  <h2 className="text-2xl font-semibold mt-0 mb-2">
                                    {contentProp.title}
                                  </h2>
                                </header>
                                <hr className="w-full mt-2 mb-8 h-0 border-blueGray-400" />
                                {contentProp.inputs &&
                                  contentProp.inputs.map(
                                    (inputProp, inputKey) => {
                                      let label = inputProp.label;
                                      let element;
                                      if (inputProp.input) {
                                        element = (
                                          <Input {...inputProp.input} />
                                        );
                                      } else {
                                        element = (
                                          <Select {...inputProp.select} />
                                        );
                                      }
                                      return (
                                        <div
                                          key={inputKey}
                                          className="flex flex-wrap -mx-4"
                                        >
                                          <div className="self-center px-4 relative w-full md:w-3/12 text-right">
                                            <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2 ml-1">
                                              {label}
                                            </label>
                                          </div>

                                          <div className="self-center px-4 relative w-full md:w-9/12">
                                            <div className="flex flex-wrap -mx-4">
                                              <div
                                                className={
                                                  "px-4 relative w-full " +
                                                  widths[inputProp.width]
                                                }
                                              >
                                                {element}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                              </div>
                            );
                          } else if (contentProp.list) {
                            return (
                              <div key={contentKey} className="mb-6">
                                <header className="block relative">
                                  <h2 className="text-2xl font-semibold mt-0 mb-2">
                                    {contentProp.title}
                                  </h2>
                                </header>
                                <hr className="w-full mt-2 mb-8 h-0 border-blueGray-400" />
                                {contentProp.list &&
                                  contentProp.list.map((listProp, listKey) => {
                                    let text = <span>{listProp.text}</span>;
                                    let element;
                                    if (listProp.checkbox) {
                                      element = (
                                        <Checkbox {...listProp.checkbox} />
                                      );
                                    } else {
                                      element = <Radio {...listProp.radio} />;
                                    }
                                    return (
                                      <div
                                        key={listKey}
                                        className="flex items-center justify-between mb-3 pt-0 relative"
                                      >
                                        {listProp.inverted ? (
                                          <>
                                            {element}
                                            {text}
                                          </>
                                        ) : (
                                          <>
                                            {text}
                                            {element}
                                          </>
                                        )}
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          } else {
                            return (
                              <Alert key={contentKey} {...contentProp.alert} />
                            );
                          }
                        })}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-12 justify-center flex flex-wrap w-full">
              <Button {...cancelButton} />
              <Button {...saveButton} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const inputsObject = {
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
};
