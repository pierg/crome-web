import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../../components/Elements/Button.js";

export default function MediaPlayerImageOnly({ items, defaultOpened, size }) {
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
  let imgClasses = {
    sm: "w-450-px",
    lg: "w-850-px",
    regular: "w-650-px",
  };
  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
        {items.map((prop, key) => {
          return (
            <div
              className={classnames(
                "w-full transform duration-500 transition-all ease-in-out mx-auto",
                {
                  hidden: key !== open,
                  block: key === open,
                  "opacity-0 scale-95": key === open && oldInTransition,
                  "opacity-100 scale-100": key === open && newInTransition,
                }
              )}
              key={key}
            >
              <img
                alt="..."
                src={prop}
                className={
                  "h-auto mx-auto rounded-lg shadow-xl " + imgClasses[size]
                }
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-6">
        <Button
          color="white"
          onClick={(e) =>
            toggleNew(e, open - 1 < 0 ? items.length - 1 : open - 1)
          }
        >
          <i className="fas fa-chevron-left"></i>
        </Button>
        <Button
          color="white"
          onClick={(e) =>
            toggleNew(e, open + 1 > items.length - 1 ? 0 : open + 1)
          }
        >
          <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}

MediaPlayerImageOnly.defaultProps = {
  defaultOpened: 0,
  items: [],
  size: "regular",
};

MediaPlayerImageOnly.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(["sm", "regular", "lg"]),
};
