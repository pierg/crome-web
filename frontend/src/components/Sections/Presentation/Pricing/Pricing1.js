/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

// components
import CardPricing from "../../../../components/Cards/Presentation/CardPricing.js";
import Button from "../../../../components/Elements/Button.js";

export default function Pricing1({
  title,
  firstButtonText,
  secondButtonText,
  defaultOpen,
  description,
  cardinfoiconProps,
  cardblogimageProps,
  cardcontactustitleProps,
  cardinfoimageProps,
}) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="py-12 bg-blueGray-100">
        <div className="flex flex-wrap -mx-4">
          <div className="flex justify-center flex-col px-4 relative w-full md:w-4/12 ml-auto">
            <h2 className="text-3xl font-bold mt-0">{title}</h2>
            <p className="mt-2 mb-10 text-lg leading-relaxed text-blueGray-400">
              {description}
            </p>
            <div>
              <Button
                color={openTab === 1 ? "pink" : "white"}
                onClick={() => setOpenTab(1)}
              >
                {firstButtonText}
              </Button>
              <Button
                color={openTab === 2 ? "pink" : "white"}
                onClick={() => setOpenTab(2)}
              >
                {secondButtonText}
              </Button>
            </div>
          </div>

          <div className="mx-auto px-4 relative w-full md:w-7/12 w-full lg:w-7/12">
            <div className="block">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="flex flex-wrap -mx-4">
                  <div className="px-4 relative w-full md:w-6/12">
                    <CardPricing {...cardinfoiconProps} />
                  </div>

                  <div className="px-4 relative w-full md:w-6/12">
                    <CardPricing {...cardblogimageProps} />
                  </div>
                </div>
              </div>

              <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="flex flex-wrap -mx-4">
                  <div className="px-4 relative w-full md:w-6/12">
                    <CardPricing {...cardcontactustitleProps} />
                  </div>

                  <div className="px-4 relative w-full md:w-6/12">
                    <CardPricing {...cardinfoimageProps} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Pricing1.defaultProps = {
  defaultOpen: 1,
};
Pricing1.propTypes = {
  title: PropTypes.string,
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string,
  defaultOpen: PropTypes.oneOf([1, 2]),
  description: PropTypes.string,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardinfoiconProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardblogimageProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardcontactustitleProps: PropTypes.object,
  // is represented by the props that you can pass
  // to our CardPricing components
  cardinfoimageProps: PropTypes.object,
};
