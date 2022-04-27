import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../components/Elements/Badge.js"
import Badge

export default function Heading2Badge({
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
      <div className={"flex flex-wrap -mx-4 " + alignmentsRow[alignment]}>
        <div className={"px-4 relative w-full " + alignmentsText[alignment]}>
          {badge && <Badge {...badge} />}
          {title && (
            <h2
              className={
                "text-4xl font-bold mt-3 mb-1 " +
                (whiteContent ? "text-white" : "text-blueGray-700")
              }
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={
                "mt-2 mb-4 text-xl leading-relaxed " +
                (whiteContent ? "text-white" : "text-blueGray-400")
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

Heading2Badge.defaultProps = {
  color: "blueGray",
  alignment: "center",
  whiteContent: false,
};

Heading2Badge.propTypes = {
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
