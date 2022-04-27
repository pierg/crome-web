/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

export default function Frameworks({ image, text, link }) {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const angularBtnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openTooltip = (btnRef, popoverRef, setPopoverShow) => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top",
    });
    setPopoverShow(true);
  };
  const closeTooltip = (setPopoverShow) => {
    setPopoverShow(false);
  };
  return (
    <>
      <a href={link} target="_blank">
        <img
          alt="..."
          className={
            "shadow-md rounded-full max-w-full w-12 p-2 bg-white mr-2 " +
            (link === "#pablo" && "opacity-50")
          }
          src={image}
          onMouseEnter={() =>
            openTooltip(angularBtnRef, tooltipRef, setTooltipShow)
          }
          onMouseLeave={() => closeTooltip(setTooltipShow)}
          ref={angularBtnRef}
        />
        <div className={tooltipShow ? "" : "hidden "} ref={tooltipRef}>
          <div className="p-2">
            <div className="text-white p-3 bg-blueGray-800 border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded">
              {text}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

Frameworks.defaultProps = {
  text: "Comming soon...",
  link: "#pablo",
};

Frameworks.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
