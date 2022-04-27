import "prop-types"
import "react"
import PropTypes
import React

export default function CustomCardMini({
  statTitle,
  statIconName,
  statIconColor,
  state,
}) {
  let color = state ? "text-blueGray-700" : "text-blueGray-300";
  let iconColor = state ? statIconColor : "bg-blueGray-200";

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xxl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 flex justify-center items-center max-w-full flex-grow flex-1">
              <span className={"font-bold text-xl uppercase " + color}>
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  iconColor
                }
              >
                <i className={statIconName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CustomCardMini.defaultProps = {
  statArrow: "up",
};

CustomCardMini.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
