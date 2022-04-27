import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../components/InfoAreas/Misc/InfoAreaIconTitle.js"
import "../../../components/MediaPlayers/MediaPlayerImageOnly.js"
import InfoAreaIconTitle
import MediaPlayerImageOnly

export default function HeaderLeftTitleRightImagePlayer({
  color,
  title,
  infoAreas,
  mediaplayer,
}) {
  const colors = {
    blueGray: "bg-blueGray-800",
    red: "bg-red-800",
    orange: "bg-orange-800",
    amber: "bg-amber-800",
    emerald: "bg-emerald-800",
    teal: "bg-teal-800",
    lightBlue: "bg-lightBlue-800",
    indigo: "bg-indigo-800",
    purple: "bg-purple-800",
    pink: "bg-pink-800",
  };
  return (
    <>
      <div className={colors[color]}>
        <div className="p-0 flex items-center overflow-hidden relative min-h-screen max-h-999-px">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="px-4 relative w-full w-full md:w-6/12">
                <h4 className="text-3xl font-bold mt-0 mb-12 pl-4 text-white">
                  {title}
                </h4>
                {infoAreas.map((prop, key) => (
                  <InfoAreaIconTitle key={key} {...prop} />
                ))}
              </div>
              <div className="px-4 relative w-full w-full md:w-6/12">
                <MediaPlayerImageOnly {...mediaplayer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

HeaderLeftTitleRightImagePlayer.defaultProps = {
  infoAreas: [],
  mediaplayer: {},
  color: "blueGray",
};

HeaderLeftTitleRightImagePlayer.propTypes = {
  title: PropTypes.string,
  // array of props that can be passed to the InfoAreaIconTitle component
  infoAreas: PropTypes.arrayOf(PropTypes.object),
  // props to pass to the MediaPlayerImageOnly component
  mediaplayer: PropTypes.object,
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
