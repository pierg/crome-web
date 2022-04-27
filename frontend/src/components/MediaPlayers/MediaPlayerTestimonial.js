import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import Button from "../../components/Elements/Button.js";

export default function MediaPlayerTestimonial({ items, defaultOpened }) {
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
      <div className="px-4 relative w-full">
        <div className="mt-12">
          <div>
            {items.map((prop, key) => {
              return (
                <div
                  className={classnames(
                    "border rounded-lg p-6 transform duration-300 transition-all ease-in-out mx-auto",
                    {
                      hidden: key !== open,
                      block: key === open,
                      "opacity-0 scale-95": key === open && oldInTransition,
                      "opacity-100 scale-100": key === open && newInTransition,
                    }
                  )}
                  key={key}
                >
                  <div className="text-left">
                    <p className="leading-relaxed text-blueGray-500 mb-4">
                      "{prop.description}"
                    </p>
                    <div className="flex items-start">
                      <img
                        src={prop.image}
                        className="rounded-full shadow-lg mt-3 mr-2 w-10 h-10"
                        alt="..."
                      />
                      <div className="flex-1">
                        <div className="justify-between items-center">
                          <h4 className="font-semibold leading-tight mt-6">
                            {prop.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center my-12">
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
      </div>
    </>
  );
}

MediaPlayerTestimonial.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerTestimonial.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
