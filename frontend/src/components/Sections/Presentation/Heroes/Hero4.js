import React from "react";
import PropTypes from "prop-types";

// components
import Heading2Badge from "../../../../components/Headings/Heading2Badge.js";
import CardInfoImage from "../../../../components/Cards/Presentation/CardInfoImage.js";
import CardInfoFullColor from "../../../../components/Cards/Presentation/CardInfoFullColor.js";

export default function Hero4({
  heading2badge,
  leftCardProps,
  rightCardInfoIconProps,
  rightCardBlogImageProps,
  rightCardContactUsTitleProps,
  rightCardInfoImageProps,
}) {
  return (
    <>
      <div className="py-12">
        {heading2badge && <Heading2Badge {...heading2badge} />}
        <div className="items-center flex flex-wrap -mx-4">
          <div className="ml-auto text-left mt-6 px-4 relative w-full lg:w-4/12">
            <CardInfoImage {...leftCardProps} />
          </div>
          <div className="mr-auto px-4 relative w-full lg:w-7/12">
            <div className="flex flex-wrap -mx-4">
              <div className="px-4 relative w-full md:w-6/12">
                <CardInfoFullColor {...rightCardInfoIconProps} />
              </div>
              <div className="px-4 relative w-full md:w-6/12">
                <CardInfoFullColor {...rightCardBlogImageProps} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="px-4 relative w-full md:w-6/12">
                <CardInfoFullColor {...rightCardContactUsTitleProps} />
              </div>
              <div className="px-4 relative w-full md:w-6/12">
                <CardInfoFullColor {...rightCardInfoImageProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Hero4.defaultProps = {
  heading2badge: null,
  leftCardProps: {},
  rightCardInfoIconProps: {},
  rightCardBlogImageProps: {},
  rightCardContactUsTitleProps: {},
  rightCardInfoImageProps: {},
};
Hero4.propTypes = {
  // prop to pass to the Heading2Badge component
  heading2badge: PropTypes.object,
  // Please check CardInfoImage props for more info
  leftCardProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardInfoIconProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardBlogImageProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardContactUsTitleProps: PropTypes.object,
  // Please check CardInfoFullColor props for more info
  rightCardInfoImageProps: PropTypes.object,
};
