import React from "react";
import PropTypes from "prop-types";

// components
import Badge from "../../components/Elements/Badge.js";

export default function Heading3Badge({
  badge,
  title,
  description,
  color,
  alignment,
  whiteContent,
}) {
  const alignmentsRow = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const alignmentsText = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <>
      <div className={"mb-12 flex flex-wrap -mx-4 " + alignmentsRow[alignment]}>
        <div
          className={
            "px-4 relative w-full lg:w-8/12 " + alignmentsText[alignment]
          }
        >
          {badge && <Badge {...badge} />}
          {title && (
            <h3
              className={
                "text-3xl font-bold mt-3 mb-1 " +
                (whiteContent ? "text-white" : "text-blueGray-700")
              }
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className={
                "mt-2 mb-4 text-xl leading-relaxed " +
                (whiteContent ? "text-white opacity-75" : "text-blueGray-500")
              }
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

Heading3Badge.defaultProps = {
  color: "blueGray",
  alignment: "left",
  whiteContent: false,
};

Heading3Badge.propTypes = {
  // use this to make the title and description
  // change colors from blueGray-800 and blueGray-500
  // to white and blueGray-100
  whiteContent: PropTypes.bool,
  // props to pass to the Badge component
  badge: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
};
