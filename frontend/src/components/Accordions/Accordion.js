import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const AccordionItem = ({
  title,
  color,
  description,
  defaultOpened,
  setOpen,
}) => {
  const [collapseOpen, setCollapseOpen] = React.useState(defaultOpened);
  const [rotate, setRotate] = React.useState(defaultOpened);
  const [collapseStyle, setCollapseStyle] = React.useState(undefined);
  const [animation, setAnimation] = React.useState(false);
  const collapseRef = React.useRef(null);
  const openAnimation = () => {
    setOpen();
    if (!collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(0);
    }
    setCollapseOpen(true);
    setTimeout(function () {
      setCollapseStyle(collapseRef.current.scrollHeight);
    }, 10);
    setTimeout(function () {
      setAnimation(false);
    }, 310);
  };
  const closeAnimation = () => {
    let timeOutTime = 0;
    if (collapseOpen && collapseStyle === undefined) {
      setCollapseStyle(collapseRef.current.scrollHeight);
      timeOutTime = 10;
    }
    setTimeout(function () {
      setCollapseStyle(0);
    }, timeOutTime);
    setTimeout(function () {
      setAnimation(false);
      setCollapseOpen(false);
    }, 310);
  };
  const startAnitmation = (e) => {
    e.preventDefault();
    if (!animation) {
      setAnimation(true);
      setRotate(!rotate);
      if (collapseOpen) {
        closeAnimation();
      } else {
        openAnimation();
      }
    }
  };
  React.useEffect(() => {
    if (!defaultOpened) {
      setCollapseStyle(collapseRef.current.scrollHeight);
      setRotate(false);
      setTimeout(function () {
        setCollapseStyle(0);
      }, 10);
      setTimeout(function () {
        setAnimation(false);
        setCollapseOpen(false);
      }, 310);
    }
  }, [defaultOpened]);
  const colors = {
    blueGray: "text-blueGray-700 hover:text-blueGray-900",
    red: "text-red-500 hover:text-red-700",
    orange: "text-orange-500 hover:text-orange-700",
    amber: "text-amber-500 hover:text-amber-700",
    emerald: "text-emerald-500 hover:text-emerald-700",
    teal: "text-teal-500 hover:text-teal-700",
    lightBlue: "text-lightBlue-500 hover:text-lightBlue-700",
    indigo: "text-indigo-500 hover:text-indigo-700",
    purple: "text-purple-500 hover:text-purple-700",
    pink: "text-pink-500 hover:text-pink-700",
  };

  return (
    <>
      <div className="bg-transparent first:rounded-t px-4 py-3">
        <a href="#openCollapse" onClick={startAnitmation}>
          <h5
            className={
              colors[color] +
              " mb-0 font-semibold duration-300 transition-all ease-in-out"
            }
          >
            {title}
            <i
              className={classnames(
                "text-sm mr-2 float-right fas fa-chevron-down duration-300 transition-all ease-in-out transform",
                { "rotate-180": rotate }
              )}
            ></i>
          </h5>
        </a>
      </div>
      <div
        className={classnames("duration-300 transition-all ease-in-out", {
          block: collapseOpen,
          hidden: !collapseOpen,
        })}
        style={{
          height: collapseStyle,
        }}
        ref={collapseRef}
      >
        <div className="text-blueGray-500 px-4 py-5 flex-auto leading-relaxed">
          {typeof description === "string" && (
            <p className="last:mb-2">{description}</p>
          )}
          {Array.isArray(description) &&
            description.map((descriptionProp, descriptionKey) => (
              <p key={descriptionKey} className="last:mb-2">
                {descriptionProp}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

AccordionItem.defaultProps = {
  defaultOpened: false,
  setOpen: () => {},
};

export default function Accordion({ items, color, defaultOpened }) {
  const [open, setOpen] = React.useState(defaultOpened);
  let callBackAction = (key) => {
    if (!Array.isArray(defaultOpened)) {
      setOpen(key);
    }
  };
  return (
    <>
      <div>
        {items.map((prop, key) => (
          <div
            key={key}
            className="overflow-hidden relative flex flex-col min-w-0 break-words bg-white w-full mb-5 border-b border-blueGray-200"
          >
            <AccordionItem
              title={prop.title}
              description={prop.description}
              color={color}
              setOpen={() => callBackAction(key)}
              defaultOpened={
                key === open || (Array.isArray(open) && open.includes(key))
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

Accordion.defaultProps = {
  items: [],
  defaultOpened: -1,
  multiple: false,
};

Accordion.propTypes = {
  // NOTE: if you pass an array for the defaultOpened prop
  // // // then the user will be able to open multiple collapses
  // // // For example, if you want to have only the first
  // // // collapse opened, but the user can open multiple
  // // // then you can pass defaultOpened={[0]}
  // // // otherwise, you can pass defaultOpened={0}
  defaultOpened: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
    })
  ),
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
};
