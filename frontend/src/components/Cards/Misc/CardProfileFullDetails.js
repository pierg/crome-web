import React from "react";
import PropTypes from "prop-types";

// components
import Button from "../../../components/Elements/Button.js";
import ImagesOverlap from "../../../components/Images/ImagesOverlap.js";

export default function CardProfileFullDetails({
  image,
  details,
  stats,
  team,
  button,
}) {
  return (
    <>
      <div className="text-left overflow-hidden shadow-lg rounded-lg relative flex flex-col md:flex-row min-w-0 break-words bg-white w-full mb-6">
        <img alt="..." className="w-full md:w-1/2" src={image} />
        <div className="w-full mt-4 flex flex-col items-center md:w-1/2 md:mt-0">
          <div className="p-10 flex-auto w-full">
            {details.map((prop, key) => (
              <div key={key} className="py-4">
                <div className="text-left p-0">
                  <span className="text-blueGray-400 uppercase text-sm font-bold">
                    {prop.subtitle}
                  </span>
                  <span className="font-bold block text-2xl">{prop.title}</span>
                </div>
              </div>
            ))}
            <div className="py-2 flex border-t border-blueGray-200">
              {stats.map((prop, key) => (
                <div key={key} className="text-center mr-4 pr-4 py-4">
                  <span className="font-bold block uppercase text-lg">
                    {prop.title}
                  </span>
                  <span className="text-blueGray-500">{prop.subtitle}</span>
                </div>
              ))}
            </div>
            <div className="py-4">
              <span className="font-bold block uppercase mb-2">
                {team.title}
              </span>
              <div className="pl-4">
                <ImagesOverlap {...team.imagesOverlap} />
              </div>
            </div>
            <div className="w-full bg-transparent rounded-b px-4 pt-6 border-t border-blueGray-200 text-center mt-4">
              <Button {...button} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardProfileFullDetails.defaultProps = {
  details: [],
  stats: [],
  team: {},
  button: {},
};

CardProfileFullDetails.propTypes = {
  image: PropTypes.string,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
  team: PropTypes.shape({
    title: PropTypes.string,
    // props to pass to the ImagesOverlap component
    imagesOverlap: PropTypes.object,
  }),
  // props to pass to the Button component
  button: PropTypes.object,
};
