import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import Button from "../../components/Elements/Button.js";

export default function MediaPlayerTeamInfo({ items, defaultOpened }) {
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
      <div className="mt-12 relative">
        <div className="relative w-full overflow-hidden">
          <div>
            {items.map((prop, key) => {
              return (
                <div
                  className={classnames(
                    "p-6 transform duration-300 transition-all ease-in-out mx-auto",
                    {
                      hidden: key !== open,
                      block: key === open,
                      "opacity-0 scale-95": key === open && oldInTransition,
                      "opacity-100 scale-100": key === open && newInTransition,
                    }
                  )}
                  key={key}
                >
                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                      <div className="px-4 relative w-full md:w-6/12 flex items-center mx-auto">
                        <div className="p-2">
                          <h2 className="text-4xl font-bold leading-tight mt-0 mb-2">
                            {prop.title}
                          </h2>
                          <p className="mt-4 mb-12 text-blueGray-500 text-lg leading-relaxed">
                            {prop.description}
                          </p>
                          <Button {...prop.button} color={prop.color}></Button>
                        </div>
                      </div>

                      <div className="px-12 py-12 relative w-full md:w-5/12">
                        <div className="p-6">
                          <img
                            className="w-full rounded-lg shadow-xl"
                            src={prop.image}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mb-12">
            <a
              href="#pablo"
              className="text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear w-12 text-xl"
              onClick={(e) =>
                toggleNew(e, open - 1 < 0 ? items.length - 1 : open - 1)
              }
            >
              <i className="text-lightBlue-500 fas fa-chevron-left"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              href="#pablo"
              className="text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear w-12 text-xl"
              onClick={(e) =>
                toggleNew(e, open + 1 > items.length - 1 ? 0 : open + 1)
              }
            >
              <i className="text-lightBlue-500 fas fa-chevron-right"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

MediaPlayerTeamInfo.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerTeamInfo.propTypes = {
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
      // props to pass to the Button element
      // NOTE: the color is default set by the color prop
      button: PropTypes.object,
      color: PropTypes.oneOf([
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
    })
  ),
};
