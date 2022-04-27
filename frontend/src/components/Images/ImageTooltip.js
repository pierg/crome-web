import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

export default function ImageTooltip({ image, text }) {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "top",
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <img
        ref={btnRef}
        alt="..."
        className="rounded-full w-full"
        src={image}
        onMouseEnter={openLeftTooltip}
        onMouseLeave={closeLeftTooltip}
      />
      <div className={tooltipShow ? "block" : "hidden "} ref={tooltipRef}>
        <div className="border-0 mb-3 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded">
          <div className="py-1 px-2 text-center rounded text-white bg-black">
            {text}
          </div>
        </div>
      </div>
    </>
  );
}

ImageTooltip.defaultProps = {};
ImageTooltip.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};
