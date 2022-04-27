import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function MediaPlayerImageLeftRightButtons({
  items,
  defaultOpened,
}) {
  const [open, setOpen] = React.useState(defaultOpened);
  const [oldInTransition, setOldInTransition] = React.useState(false);
  const [newInTransition, setNewInTransition] = React.useState(false);
  const toggleNew = (e, newOpen) => {
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
  };
  return (
    <>
      <div className="relative">
        <div className="relative w-full overflow-hidden">
          {items.map((prop, key) => {
            return (
              <div
                className={classnames(
                  "w-full p-12 transform duration-500 transition-all ease-in-out mx-auto",
                  {
                    hidden: key !== open,
                    block: key === open,
                    "opacity-0 scale-95": key === open && oldInTransition,
                    "opacity-100 scale-100": key === open && newInTransition,
                  }
                )}
                key={key}
              >
                <img alt="..." src={prop} className="w-full h-auto mx-auto" />
              </div>
            );
          })}
        </div>
        <a
          href="#pablo"
          className="absolute z-1 top-0 bottom-0 flex items-center justify-center w-1/6 text-white text-center opacity-75 hover:opacity-100 transition-opacity duration-150 ease-linear left-0"
          onClick={(e) =>
            toggleNew(e, open - 1 < 0 ? items.length - 1 : open - 1)
          }
        >
          <i className="text-sm bg-orange-500 rounded-full fas fa-chevron-left flex items-center justify-center w-8 h-8"></i>
          <span className="sr-only">Previous</span>
        </a>

        <a
          href="#pablo"
          className="absolute z-1 top-0 bottom-0 flex items-center justify-center w-1/6 text-white text-center opacity-75 hover:opacity-100 transition-opacity duration-150 ease-linear right-0"
          onClick={(e) =>
            toggleNew(e, open + 1 > items.length - 1 ? 0 : open + 1)
          }
        >
          <i className="text-sm bg-orange-500 rounded-full fas fa-chevron-right flex items-center justify-center w-8 h-8"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

MediaPlayerImageLeftRightButtons.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerImageLeftRightButtons.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(PropTypes.string),
};
