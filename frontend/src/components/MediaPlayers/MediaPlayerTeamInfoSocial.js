import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "../../components/Elements/Button.js";

export default function MediaPlayerTeamInfoSocial({ items }) {
  const [open, setOpen] = React.useState(0);
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
    <div className="flex flex-wrap -mx-4">
      <div className="relative">
        <div className="relative w-full overflow-hidden">
          {items.map((prop, key) => {
            return (
              <div
                key={key}
                className={classnames(
                  "relative float-left w-full transform duration-500 transition-all ease-in-out",
                  {
                    hidden: key !== open,
                    block: key === open,
                    "opacity-0 scale-95": key === open && oldInTransition,
                    "opacity-100 scale-100": key === open && newInTransition,
                  }
                )}
              >
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-4">
                    <div className="px-12 py-12 px-4 relative w-full md:w-5/12 ml-auto">
                      <div className="p-6">
                        <img
                          className="w-full rounded-lg shadow-xl transform"
                          src={prop.image}
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-12 px-4 relative w-full md:w-5/12 mr-auto flex align-center items-center">
                      <div className="p-4 pt-6 md:p-0">
                        <h2 className="text-2xl font-bold mt-0 mb-2">
                          {prop.title}
                        </h2>
                        <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                          {prop.description}
                        </p>
                        <ul className="mt-6 list-none">
                          {prop.list &&
                            prop.list.map((listProp, listKey) => {
                              return (
                                <li className="py-2" key={listKey}>
                                  <div className="flex items-center">
                                    <span
                                      className={
                                        "inline-flex text-center rounded-full mr-3 items-center justify-center text-sm w-8 h-8 text-" +
                                        listProp.color +
                                        "-500 bg-" +
                                        listProp.color +
                                        "-200"
                                      }
                                    >
                                      <i className={listProp.icon} />
                                    </span>
                                    <h6 className="text-md text-blueGray-500">
                                      {listProp.text}
                                    </h6>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                        <div className="py-6 pl-12 text-left">
                          {prop.socials &&
                            prop.socials.map((socialsProp, socialsKey) => {
                              return (
                                <Button
                                  key={socialsKey}
                                  href={socialsProp.link}
                                  color={socialsProp.icon}
                                >
                                  <i className={"fab fa-" + socialsProp.icon} />
                                </Button>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full -mt-12">
        <a
          href="#pablo"
          className="absolute z-1 top-0 bottom-0 flex items-center justify-center w-1/6 text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear left-0"
          style={{ left: "90%", width: "5%" }}
          onClick={(e) =>
            toggleNew(e, open - 1 < 0 ? items.length - 1 : open - 1)
          }
        >
          <i className="text-lightBlue-500 fas fa-chevron-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          href="#pablo"
          className="absolute z-1 top-0 bottom-0 flex items-center justify-center w-1/6 text-white text-center opacity-50 hover:opacity-100 transition-opacity duration-150 ease-linear right-0"
          style={{ width: "5%" }}
          onClick={(e) =>
            toggleNew(e, open + 1 > items.length - 1 ? 0 : open + 1)
          }
        >
          <i className="text-lightBlue-500 fas fa-chevron-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

MediaPlayerTeamInfoSocial.defaultProps = {
  items: [],
};

MediaPlayerTeamInfoSocial.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      socials: PropTypes.arrayOf(
        // this will generate an anchor with target blank to the given link
        PropTypes.shape({
          icon: PropTypes.oneOf([
            "facebook",
            "twitter",
            "instagram",
            "dribbble",
            "github",
          ]),
          link: PropTypes.string,
        })
      ),
      list: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          text: PropTypes.string,
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
    })
  ),
};
