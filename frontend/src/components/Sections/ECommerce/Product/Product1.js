import "prop-types"
import "react"
import PropTypes
import React

// components
import "../../../../components/Content/Ratings.js"
import "../../../../components/Elements/Button.js"
import "../../../../components/Elements/Incrementer.js"
import "../../../../components/Elements/Input.js"
import "../../../../components/Elements/Select.js"
import "../../../../components/Headings/Heading2.js"
import "../../../../components/MediaPlayers/MediaPlayerImageLeftRightButtons.js"
import Button
import Heading2
import Incrementer
import Input
import MediaPlayerImageLeftRightButtons
import Ratings
import Select

export default function Product1({
  heading2,
  name,
  price,
  description,
  mediaplayer,
  incrementer,
  addToCart,
  inputs,
  ratings,
}) {
  return (
    <>
      <section className="relative">
        <div className="container mx-auto px-4">
          {heading2 && <Heading2 {...heading2} />}
          <div className="flex flex-wrap -mx-4">
            <div className="mx-auto px-4 relative w-full lg:w-6/12 w-full md:w-full">
              <MediaPlayerImageLeftRightButtons {...mediaplayer} />
            </div>
            <div className="mr-auto px-4 relative w-full lg:w-6/12 w-full md:w-full">
              <h2 className="text-3xl font-bold leading-tight mt-0 mb-0">{name}</h2>
              <div className="pt-2">
                <Ratings {...ratings} />
              </div>
              <h2 className="text-3xl font-normal mt-2 mb-2">{price}</h2>
              <p className="text-blueGray-500">{description}</p>
              <div className="mt-12 mb-6 flex flex-wrap -mx-4">
                {inputs.map((prop, key) => {
                  if (prop.input) {
                    return (
                      <div key={key} className="px-4 relative w-full lg:w-6/12">
                        <label className="inline-block mb-2">{prop.label}</label>
                        <Input {...prop.input} />
                      </div>
                    );
                  } else if (prop.select) {
                    return (
                      <div key={key} className="px-4 relative w-full lg:w-6/12">
                        <label className="inline-block mb-2">{prop.label}</label>
                        <Select {...prop.select} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
              <div className="mb-6 flex flex-wrap -mx-4">
                <div className="px-4 relative w-full lg:w-5/12">
                  <label className="inline-block mb-2">Quantity</label>
                  <Incrementer {...incrementer} />
                </div>
              </div>
              <Button {...addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Product1.defaultProps = {
  mediaplayer: {},
  incrementer: {},
  addToCart: {},
  inputs: [],
  ratings: {},
  heading2: null,
};
Product1.propTypes = {
  // prop to pass to the Heading2 component
  heading2: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  // props to pass to the MediaPlayerImageLeftRightButtons component
  mediaplayer: PropTypes.object,
  // props to pass to the Incrementer component
  incrementer: PropTypes.object,
  // props to pass to the Button component
  addToCart: PropTypes.object,
  // props to pass to the Ratings component
  ratings: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        label: PropTypes.string,
        // props to pass to the Input component
        input: PropTypes.object,
      }),
      PropTypes.shape({
        label: PropTypes.string,
        // props to pass to the Select component
        select: PropTypes.object,
      }),
    ])
  ),
};
