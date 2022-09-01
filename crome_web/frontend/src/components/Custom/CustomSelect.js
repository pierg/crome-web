import React from "react";
import PropTypes from "prop-types";
import "react-tippy/dist/tippy.css";
import Dropdown from "react-multilevel-dropdown";
import { UncontrolledTooltip } from "reactstrap";
import { Tooltip } from "react-tippy";

export default function CustomSelect({
  placeholder,
  defaultValue,
  patterns,
  changeSelector,
  name,
}) {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const isSafari =
    /constructor/i.test(window["HTMLElement"]) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(!window["safari"] || typeof window["safari"] !== "undefined");
  const DropdownTitle = () => {
    return (
      <>
        <div className="relative w-100">
          {defaultValue === "" ? placeholder : defaultValue}
          <i className="fa-solid fa-square-caret-down absolute right-0"></i>
        </div>
      </>
    );
  };

  const showDropDownFunction = () => {
    setShowDropDown(false);
  };
  const hideDropDownFunction = async (e, name, prop) => {
    e.target.name = name;
    changeSelector(e, prop);
    setShowDropDown(true);
    await new Promise((r) => setTimeout(r, 500));
    document.getElementById("dropdown").click();
  };

  const DropdownCustom = () => {
    let surveillance = [];
    let reaction = [];
    let others = [];
    let dropdownItem;

    patterns.map((prop, key) => {
      if (isSafari) {
        dropdownItem = (
          <div key={key}>
            <UncontrolledTooltip placement="right" target={"surveillance_" + key}>
              {prop.description}
            </UncontrolledTooltip>

            <Dropdown.Item
              id={"surveillance_" + key}
              onClick={(e) => hideDropDownFunction(e, name, prop.name)}
            >
              {prop.name}
            </Dropdown.Item>
          </div>
        );
      } else {
        dropdownItem = (
          <Tooltip html={prop.description} position="right" arrow="true" key={key}>
            <Dropdown.Item onClick={(e) => hideDropDownFunction(e, name, prop.name)}>
              {prop.name}
            </Dropdown.Item>
          </Tooltip>
        );
      }

      if (prop.arguments.length === 1 && prop.arguments[0].name === "locations") {
        surveillance.push(dropdownItem);
      } else if (
        prop.arguments.length === 2 &&
        prop.arguments[0].name === "trigger" &&
        prop.arguments[1].name === "reaction"
      ) {
        reaction.push(dropdownItem);
      } else {
        others.push(dropdownItem);
      }
      return "";
    });

    return (
      <Dropdown
        id="dropdown"
        title={<DropdownTitle />}
        menuClassName={showDropDown ? "hidden bg-gray-500" : "bg-gray-500"}
        position="right"
        wrapperClassName="w-100"
        buttonClassName="w-100 text-left"
        onClick={showDropDownFunction}
      >
        <Dropdown.Item className="focus:outline-none">
          <div className="relative w-100">
            Surveillance
            <i className="fa-solid fa-caret-right absolute right-0 bottom-0"></i>
          </div>
          <Dropdown.Submenu
            style={{ width: "110%" }}
            className="bg-gray-500"
            position={"right"}
          >
            {surveillance}
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item className="focus:outline-none">
          <div className="relative w-100">
            Reaction
            <i className="fa-solid fa-caret-right absolute right-0 bottom-0"></i>
          </div>
          <Dropdown.Submenu
            style={{ width: "110%" }}
            className="bg-gray-500"
            position={"right"}
          >
            {reaction}
          </Dropdown.Submenu>
        </Dropdown.Item>
        <Dropdown.Item className="focus:outline-none">
          <div className="relative w-100">
            Others
            <i className="fa-solid fa-caret-right absolute right-0 bottom-0"></i>
          </div>
          <Dropdown.Submenu
            style={{ width: "110%" }}
            className="bg-gray-500"
            position={"right"}
          >
            {others}
          </Dropdown.Submenu>
        </Dropdown.Item>
      </Dropdown>
    );
  };

  return (
    <>
      <div className="mb-2 mt-2 ml-2 pt-0 relative">
        <DropdownCustom />
      </div>
    </>
  );
}

CustomSelect.defaultProps = {
  border: "border",
  size: "regular",
  closeOnSelect: true,
  defaultValue: "",
};

CustomSelect.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  border: PropTypes.oneOf(["border", "borderless"]),
  closeOnSelect: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "regular"]),
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  leftIcon: PropTypes.string,
  // NOTE: you sould only pass icon classes
  // // // if you also pass tailwindcss classes
  // // // the output may not be a desired one
  rightIcon: PropTypes.string,
};
