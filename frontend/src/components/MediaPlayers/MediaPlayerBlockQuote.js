import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// components
import Button from "../../components/Elements/Button.js";

export default function MediaPlayerBlockQuote({ items, defaultOpened }) {
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
  const colors = {
    blueGray: "text-blueGray-500 bg-blueGray-500",
    red: "text-red-500 bg-red-500",
    orange: "text-orange-500 bg-orange-500",
    amber: "text-amber-500 bg-amber-500",
    emerald: "text-emerald-500 bg-emerald-500",
    teal: "text-teal-500 bg-teal-500",
    lightBlue: "text-lightBlue-500 bg-lightBlue-500",
    indigo: "text-indigo-500 bg-indigo-500",
    purple: "text-purple-500 bg-purple-500",
    pink: "text-pink-500 bg-pink-500",
  };
  return (
    <>
      <div className="mt-12 relative">
        <div className="relative w-full overflow-hidden px-4">
          {items.map((prop, key) => {
            return (
              <div
                className={classnames(
                  "p-6 transform duration-300 transition-all ease-in-out mx-auto relative w-full",
                  {
                    hidden: key !== open,
                    block: key === open,
                    "opacity-0 scale-95": key === open && oldInTransition,
                    "opacity-100 scale-100": key === open && newInTransition,
                  }
                )}
                key={key}
              >
                <div
                  className={
                    colors[prop.color] +
                    " absolute top-0 left-0 z-4 p-8 max-w-360-px mx-auto rounded-lg"
                  }
                >
                  <div className="mb-6 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                    <i className={"text-lg " + prop.icon}></i>
                  </div>
                  <p className="my-6 text-white leading-relaxed">
                    {prop.description}
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="..."
                      src={prop.user.image}
                      className="rounded-full mr-4 max-w-40-px"
                    />
                    <h6 className="text-xl font-normal leading-normal mb-2 text-white mt-2">
                      {prop.user.name}
                    </h6>
                  </div>
                </div>
                <div className="pt-12 px-12">
                  <div className="w-full relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-50 bg-cover h-500-px group">
                    <div
                      className="h-full w-full absolute z-1 rounded-lg"
                      style={{
                        backgroundImage: "url('" + prop.image + "')",
                      }}
                    ></div>
                    <div className="h-full w-full absolute z-2 bg-black opacity-50 rounded-lg"></div>
                    <div className="absolute bottom-0 right-0 mb-10 mr-10 z-3 bg-transparent">
                      <Button {...prop.button} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

MediaPlayerBlockQuote.defaultProps = {
  defaultOpened: 0,
  items: [],
};

MediaPlayerBlockQuote.propTypes = {
  // 0 represents the first element
  // also, you should note that
  // the number should not be lower then 0
  // or higher than the number of items - 1
  defaultOpened: PropTypes.number,
  // an array of string representing valid image sources
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string,
      // props to pass to the Button component
      button: PropTypes.object,
      user: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      }),
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
