/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

const colors = {
  angular: "bg-red-600",
  javascript: "bg-amber-500",
  nextjs: "bg-blueGray-800",
  react: "bg-lightBlue-500",
  svelte: "bg-red-500",
  vuejs: "bg-emerald-500",
};

const texts = {
  angular: "Angular",
  javascript: "JavaScript",
  nextjs: "NextJS",
  react: "React",
  svelte: "Svelte",
  vuejs: "VueJS",
};

export default function Frameworks({ image, text, link, color }) {
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
      <a
        href={link}
        target="_blank"
        className={
          colors[color] +
          " flex items-center justify-center flex-col text-center w-24 h-24 rounded mr-2 mt-2 text-white text-xs font-bold"
        }
      >
        <img
          alt="..."
          className={
            "shadow-md rounded-full max-w-full w-10 p-2 mb-2 bg-white " +
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
        {texts[color]}
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
